export async function getVibrantColors(imageUrl: string, maxColors: number = 5): Promise<string[]> {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.src = imageUrl;

        img.onload = () => {
            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');

            if (!context) {
                return reject(new Error("Unable to obtain canvas context"));
            }

            const scale = 0.1;
            canvas.width = img.width * scale;
            canvas.height = img.height * scale;
            context.drawImage(img, 0, 0, canvas.width, canvas.height);

            try {
                const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
                const colorMap: Map<string, { count: number; brightness: number }> = new Map();

                let isGrayscale = true;

                for (let i = 0; i < imageData.data.length; i += 4) {
                    const [r, g, b] = imageData.data.slice(i, i + 3);

                    if ((r === 0 && g === 0 && b === 0) || (r > 200 && g > 200 && b > 200) || (Math.abs(r - g) <= 10 && Math.abs(r - b) <= 10 && Math.abs(g - b) <= 10)) continue;

                    isGrayscale = false;

                    const hexColor = `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()}`;
                    const brightness = 0.299 * r + 0.587 * g + 0.114 * b;

                    const colorData = colorMap.get(hexColor);
                    if (colorData) {
                        colorData.count++;
                    } else {
                        colorMap.set(hexColor, { count: 1, brightness });
                    }
                }

                if (isGrayscale) {
                    return reject(new Error("Image is fully grayscale"));
                }

                const vibrantColors = Array.from(colorMap.entries())
                    .sort((a, b) => b[1].brightness - a[1].brightness || b[1].count - a[1].count)
                    .slice(0, maxColors)
                    .map(color => color[0]);
                resolve(vibrantColors);
            } catch {
                reject(new Error("Canvas was tainted by cross-origin data"));
            }
        };

        img.onerror = () => {
            reject(new Error("Image loading failed"));
        };
    });
}
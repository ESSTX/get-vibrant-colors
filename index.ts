export async function getVibrantColors(imageUrl: string, maxColors: number = 5, sampleScale: number = 0.1, saturationLevel: number = 50, colorFormat: 'rgb' | 'hex' = 'hex', skipDarkColors: boolean = false, skipEveryNPixel: number = 0): Promise<string[]> {
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

            canvas.width = img.width * sampleScale;
            canvas.height = img.height * sampleScale;
            context.drawImage(img, 0, 0, canvas.width, canvas.height);

            try {
                const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
                const colorMap: Map<string, { count: number; brightness: number; saturation: number }> = new Map();

                let isGrayscale = true;
                let darkColorCount = 0;
                const darkColorThreshold = 30;

                for (let i = 0; i < imageData.data.length; i += 4 * (skipEveryNPixel + 1)) {
                    const r = imageData.data[i];
                    const g = imageData.data[i + 1];
                    const b = imageData.data[i + 2];

                    if ((r === 0 && g === 0 && b === 0) || (r > 200 && g > 200 && b > 200) || (Math.abs(r - g) <= 10 && Math.abs(r - b) <= 10 && Math.abs(g - b) <= 10)) continue;

                    isGrayscale = false;

                    const hexColor = `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()}`;
                    const brightness = 0.299 * r + 0.587 * g + 0.114 * b;
                    const max = Math.max(r, g, b);
                    const min = Math.min(r, g, b);
                    const saturation = (max === 0) ? 0 : ((max - min) / max) * 100;

                    if (saturation < saturationLevel) continue;
                    if (skipDarkColors && brightness < 60) continue;

                    if (brightness < darkColorThreshold) darkColorCount++;

                    if (colorMap.has(hexColor)) {
                        colorMap.get(hexColor)!.count++;
                    } else {
                        colorMap.set(hexColor, { count: 1, brightness, saturation });
                    }
                }

                if (isGrayscale) {
                    return reject(new Error("Image is fully grayscale"));
                }

                if (darkColorCount > 100) {
                    skipEveryNPixel += 10;
                }

                const vibrantColors = Array.from(colorMap.entries())
                    .sort((a, b) => b[1].brightness - a[1].brightness || b[1].count - a[1].count);

                const uniqueColors: string[] = [];
                const colorDistanceThreshold = 100;
                const seenColors = new Set<string>();

                for (const [color] of vibrantColors) {
                    if (uniqueColors.length >= maxColors) break;

                    if (seenColors.has(color)) continue;

                    const [r1, g1, b1] = hexToRgb(color);
                    let isUnique = true;

                    for (const uniqueColor of uniqueColors) {
                        const [r2, g2, b2] = hexToRgb(uniqueColor);
                        const distance = Math.sqrt(Math.pow(r1 - r2, 2) + Math.pow(g1 - g2, 2) + Math.pow(b1 - b2, 2));
                        if (distance < colorDistanceThreshold) {
                            isUnique = false;
                            break;
                        }
                    }

                    if (isUnique) {
                        uniqueColors.push(formatColor(color, colorFormat));
                        seenColors.add(color);
                    }
                }

                resolve(uniqueColors);
            } catch {
                reject(new Error("Canvas was tainted by cross-origin data"));
            }
        };

        img.onerror = () => {
            reject(new Error("Image loading failed"));
        };
    });
}

function hexToRgb(hex: string): [number, number, number] {
    const bigint = parseInt(hex.slice(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return [r, g, b];
}

function formatColor(color: string, format: 'rgb' | 'hex' | 'hsl'): string {
    if (format === 'hex') {
        return color;
    } else if (format === 'rgb') {
        const [r, g, b] = hexToRgb(color);
        return `rgb(${r}, ${g}, ${b})`;
    }
    return color;
}
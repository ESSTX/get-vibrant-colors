export async function getVibrantColors(imageUrl: string, maxColors: number = 5, sampleScale: number = 0.1, saturationThreshold: number = 60, colorFormat: 'rgb' | 'hex' = 'hex', excludeDarkColors: boolean = false, skipTiles: number = 0, gridSize: number = 6): Promise<{ colors: string[], time: number }> {
    const startTime = performance.now();
    return new Promise((resolve, reject) => {
        const image = new Image();
        image.crossOrigin = 'anonymous';
        image.src = imageUrl;

        image.onload = () => {
            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');

            if (!context) {
                return reject(new Error("Unable to obtain canvas context"));
            }

            canvas.width = image.width * sampleScale;
            canvas.height = image.height * sampleScale;
            context.drawImage(image, 0, 0, canvas.width, canvas.height);

            try {
                const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
                const colorFrequencyMap: Map<string, { count: number; brightness: number; saturation: number }> = new Map();

                let isGrayscale = true;
                let darkColorCount = 0;
                const darkColorThreshold = 30;

                const tileWidth = canvas.width / gridSize;
                const tileHeight = canvas.height / gridSize;

                for (let y = 0; y < gridSize; y++) {
                    for (let x = 0; x < gridSize; x++) {
                        if (skipTiles > 0 && ((x + y) % (skipTiles + 1) === 0)) continue;

                        const centerX = Math.floor(x * tileWidth + tileWidth / 2);
                        const centerY = Math.floor(y * tileHeight + tileHeight / 2);
                        const index = (centerY * canvas.width + centerX) * 4;

                        const red = imageData.data[index];
                        const green = imageData.data[index + 1];
                        const blue = imageData.data[index + 2];

                        if (isInvalidColor(red, green, blue)) continue;

                        isGrayscale = false;

                        const hexColor = rgbToHex(red, green, blue);
                        const brightness = calculateBrightness(red, green, blue);
                        const saturation = calculateSaturation(red, green, blue);

                        if (saturation < saturationThreshold || (excludeDarkColors && brightness < 60)) continue;

                        if (brightness < darkColorThreshold) darkColorCount++;

                        if (colorFrequencyMap.has(hexColor)) {
                            colorFrequencyMap.get(hexColor)!.count++;
                        } else {
                            colorFrequencyMap.set(hexColor, { count: 1, brightness, saturation });
                        }
                    }
                }

                if (isGrayscale) {
                    return reject(new Error("Image is fully grayscale"));
                }

                if (darkColorCount > 100) {
                    skipTiles += 1;
                }

                const sortedColors = Array.from(colorFrequencyMap.entries())
                    .sort((a, b) => b[1].brightness - a[1].brightness || b[1].count - a[1].count);

                const uniqueColors = getUniqueColors(sortedColors, maxColors, colorFormat);

                const endTime = performance.now();
                const time = endTime - startTime;

                resolve({ colors: uniqueColors, time });
            } catch {
                reject(new Error("Canvas was tainted by cross-origin data"));
            }
        };

        image.onerror = () => {
            reject(new Error("Image loading failed"));
        };
    });
}

function isInvalidColor(red: number, green: number, blue: number): boolean {
    return (red === 0 && green === 0 && blue === 0) || (red > 200 && green > 200 && blue > 200) || (Math.abs(red - green) <= 10 && Math.abs(red - blue) <= 10 && Math.abs(green - blue) <= 10);
}

function rgbToHex(red: number, green: number, blue: number): string {
    return `#${((1 << 24) + (red << 16) + (green << 8) + blue).toString(16).slice(1).toUpperCase()}`;
}

function calculateBrightness(red: number, green: number, blue: number): number {
    return 0.299 * red + 0.587 * green + 0.114 * blue;
}

function calculateSaturation(red: number, green: number, blue: number): number {
    const max = Math.max(red, green, blue);
    const min = Math.min(red, green, blue);
    return (max === 0) ? 0 : ((max - min) / max) * 100;
}

function getUniqueColors(sortedColors: [string, { count: number; brightness: number; saturation: number }][], maxColors: number, colorFormat: 'rgb' | 'hex'): string[] {
    const uniqueColors: string[] = [];
    const colorDistanceThreshold = 100;
    const seenColors = new Set<string>();

    for (const [color] of sortedColors) {
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

    return uniqueColors;
}

function hexToRgb(hex: string): [number, number, number] {
    const bigint = parseInt(hex.slice(1), 16);
    const red = (bigint >> 16) & 255;
    const green = (bigint >> 8) & 255;
    const blue = bigint & 255;
    return [red, green, blue];
}

function formatColor(color: string, format: 'rgb' | 'hex' | 'hsl'): string {
    if (format === 'hex') {
        return color;
    } else if (format === 'rgb') {
        const [red, green, blue] = hexToRgb(color);
        return `rgb(${red}, ${green}, ${blue})`;
    }
    return color;
}
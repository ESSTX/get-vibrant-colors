# get-vibrant-colors

Extracts vibrant colors from an image.

## Parameters

- `imageUrl` (string): The URL of the image to process.
- `maxColors` (number, optional, default=5): The maximum number of vibrant colors to extract.
- `sampleScale` (number, optional, default=0.1): The scale factor to downsample the image for faster processing.
- `saturationThreshold` (number, optional, default=60): The minimum saturation level for a color to be considered vibrant.
- `colorFormat` ('rgb' | 'hex', optional, default='hex'): The format of the output colors, either 'rgb' or 'hex'.
- `excludeDarkColors` (boolean, optional, default=false): Whether to exclude dark colors from the results.
- `skipTiles` (number, optional, default=0): The number of tiles to skip during processing to speed up the extraction.
- `gridSize` (number, optional, default=6): The number of tiles along one dimension of the grid used for processing.

## Returns

- `Promise<{ colors: string[], time: number }>`: A promise that resolves with an object containing the extracted colors and the time taken for processing.

## Example

```typescript
import { getVibrantColors } from './vibrant';

const imageUrl = '';
const maxColors = 5;
const sampleScale = 0.1;
const saturationThreshold = 60;
const colorFormat = 'hex';
const excludeDarkColors = true;
const skipTiles = 0;
const gridSize = 6;

getVibrantColors(imageUrl, maxColors, sampleScale, saturationThreshold, colorFormat, excludeDarkColors, skipTiles, gridSize)
    .then(result => {
        console.log('colors:', result.colors);
        console.log('Time taken:', result.time, 'ms');
    })
    .catch(error => {
        console.error('Error extracting colors:', error);
    });```

import sharp from 'sharp';
import { glob } from 'glob';
import { dirname } from 'path';
import { mkdir } from 'fs/promises';

async function optimizeImages() {
  const images = await glob('docs/public/**/*.{png,jpg,jpeg}');
  
  for (const image of images) {
    const outputPath = image.replace(/\.(png|jpg|jpeg)$/, '.webp');
    await mkdir(dirname(outputPath), { recursive: true });
    
    await sharp(image)
      .webp({ quality: 80 })
      .toFile(outputPath);
      
    console.log(`Optimized: ${image} -> ${outputPath}`);
  }
}

optimizeImages().catch(console.error);
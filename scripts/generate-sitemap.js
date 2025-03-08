import { SitemapStream, streamToPromise } from 'sitemap';
import { Readable } from 'stream';
import { writeFileSync } from 'fs';
import { glob } from 'glob';
import { resolve } from 'path';

async function generateSitemap() {
  const baseUrl = 'https://nutriscan.app';
  
  // Get all markdown files
  const files = await glob('docs/**/*.md', { ignore: 'docs/.vitepress/**' });
  
  // Create sitemap stream
  const stream = new SitemapStream({ hostname: baseUrl });
  
  // Add each page to the sitemap
  const links = files.map(file => {
    const path = file
      .replace('docs/', '')
      .replace('.md', '')
      .replace('index', '');
      
    return {
      url: path || '/',
      changefreq: 'weekly',
      priority: path === '' ? 1.0 : 0.7
    };
  });
  
  // Generate sitemap XML
  const sitemap = await streamToPromise(Readable.from(links).pipe(stream));
  
  // Write sitemap to public directory
  writeFileSync('docs/public/sitemap.xml', sitemap);
  console.log('Sitemap generated successfully!');
}

generateSitemap().catch(console.error);
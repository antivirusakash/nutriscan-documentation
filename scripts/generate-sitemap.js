import { SitemapStream, streamToPromise } from 'sitemap';
import { Readable } from 'stream';
import { writeFileSync } from 'fs';
import { glob } from 'glob';
import { resolve } from 'path';

async function generateSitemap() {
  try {
    console.log('Starting sitemap generation...');
    
    // Always use the production URL for sitemap generation
    const baseUrl = 'https://guide.nutriscan.app';
    
    console.log(`Using base URL: ${baseUrl}`);
    
    // Get all markdown files
    console.log('Finding markdown files...');
    const files = await glob('docs/**/*.md', { ignore: 'docs/.vitepress/**' });
    console.log(`Found ${files.length} markdown files`);
    
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
        priority: path === '' ? 1.0 : 0.7,
        // Add lastmod if needed using git
        // lastmod: new Date()
      };
    });
    
    console.log(`Processing ${links.length} site URLs`);
    
    // Generate sitemap XML
    const sitemap = await streamToPromise(Readable.from(links).pipe(stream));
    
    // Write sitemap to public directory
    const outputPath = 'docs/public/sitemap.xml';
    writeFileSync(outputPath, sitemap);
    console.log(`Sitemap generated successfully at ${outputPath}!`);
    
    return { success: true };
  } catch (error) {
    console.error('Error generating sitemap:', error);
    // Don't fail the build process because of sitemap generation issues
    return { success: false, error };
  }
}

// Run the sitemap generator
generateSitemap()
  .then(result => {
    if (!result.success) {
      console.log('Warning: Sitemap generation had issues, but build will continue.');
      // Exit with success code even if there were issues
      process.exit(0);
    }
  })
  .catch(error => {
    console.error('Fatal error in sitemap generation:', error);
    // Exit with success code to not block the build
    process.exit(0);
  });
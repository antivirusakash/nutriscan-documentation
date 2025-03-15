import { readFileSync, existsSync } from 'fs';
import { glob } from 'glob';
import { resolve } from 'path';

/**
 * Verifies that all necessary SEO elements are in place after build
 */
async function verifySEO() {
  console.log('🔍 Starting SEO verification...');
  const issues = [];
  const buildDir = 'docs/.vitepress/dist';

  // Check if the build directory exists
  if (!existsSync(buildDir)) {
    console.error(`❌ Build directory "${buildDir}" does not exist!`);
    return { success: false, issues: [`Build directory missing: ${buildDir}`] };
  }

  // Check for sitemap
  const sitemapPath = 'docs/public/sitemap.xml';
  if (!existsSync(sitemapPath)) {
    issues.push(`Sitemap not found: ${sitemapPath}`);
    console.error(`❌ Sitemap not found at ${sitemapPath}`);
  } else {
    console.log(`✅ Sitemap found at ${sitemapPath}`);
  }

  // Check for robots.txt
  const robotsPath = 'docs/public/robots.txt';
  if (!existsSync(robotsPath)) {
    issues.push(`robots.txt not found: ${robotsPath}`);
    console.error(`❌ robots.txt not found at ${robotsPath}`);
  } else {
    console.log(`✅ robots.txt found at ${robotsPath}`);
    
    // Check if robots.txt has the correct sitemap URL
    const robotsContent = readFileSync(robotsPath, 'utf-8');
    if (!robotsContent.includes('https://nutriscan.app/sitemap.xml')) {
      issues.push('robots.txt does not have the correct sitemap URL');
      console.error('❌ robots.txt does not have the correct sitemap URL');
    } else {
      console.log('✅ robots.txt has the correct sitemap URL');
    }
  }

  // Check for favicon
  const faviconPath = 'docs/public/images/nutriscan-logo.webp';
  if (!existsSync(faviconPath)) {
    issues.push(`Favicon not found: ${faviconPath}`);
    console.error(`❌ Favicon not found at ${faviconPath}`);
  } else {
    console.log(`✅ Favicon found at ${faviconPath}`);
  }

  // Try to check a sample HTML file for meta tags
  try {
    const htmlFiles = await glob(`${buildDir}/**/*.html`);
    if (htmlFiles.length > 0) {
      const sampleFile = htmlFiles[0];
      const content = readFileSync(sampleFile, 'utf-8');
      
      // Check for essential SEO meta tags
      const checks = [
        { name: 'description', pattern: /<meta[^>]*name="description"[^>]*>/ },
        { name: 'robots', pattern: /<meta[^>]*name="robots"[^>]*>/ },
        { name: 'og:title', pattern: /<meta[^>]*property="og:title"[^>]*>/ },
        { name: 'canonical', pattern: /<link[^>]*rel="canonical"[^>]*>/ },
        { name: 'JSON-LD', pattern: /<script[^>]*type="application\/ld\+json"[^>]*>/ }
      ];
      
      for (const check of checks) {
        if (check.pattern.test(content)) {
          console.log(`✅ ${check.name} meta tag found in sample HTML file`);
        } else {
          issues.push(`${check.name} meta tag not found in sample HTML file`);
          console.error(`❌ ${check.name} meta tag not found in sample HTML file`);
        }
      }
    } else {
      issues.push('No HTML files found in build directory');
      console.error('❌ No HTML files found in build directory');
    }
  } catch (error) {
    issues.push(`Error checking HTML files: ${error.message}`);
    console.error('❌ Error checking HTML files:', error);
  }

  // Summary
  if (issues.length === 0) {
    console.log('✅ All SEO elements are in place!');
    return { success: true };
  } else {
    console.error(`❌ Found ${issues.length} SEO issues.`);
    return { success: false, issues };
  }
}

// Run the verification
verifySEO()
  .then(result => {
    if (!result.success) {
      console.log('Warning: SEO verification found issues, but build will continue.');
      // Optional: You could choose to exit with error code if you want to fail the build
      // process.exit(1);
    }
  })
  .catch(error => {
    console.error('Error during SEO verification:', error);
  }); 
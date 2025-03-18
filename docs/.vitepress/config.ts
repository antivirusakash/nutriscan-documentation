import { defineConfig } from 'vitepress';

// Base URL for the site (empty for local development, your domain for production)
const baseUrl = process.env.NODE_ENV === 'production' 
  ? 'https://nutriscan.app' 
  : '';

// Google Search Console verification ID (replace with your actual verification ID when you have one)
const gscVerification = ''; // Add your Google Search Console verification code here

// Prepare head tags
const headTags: any[] = [
  ['link', { rel: 'icon', href: '/images/nutriscan-logo.webp' }],
  ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
  ['meta', { name: 'robots', content: 'index, follow' }],
  ['meta', { name: 'author', content: 'NutriScan App' }],
  ['meta', { name: 'keywords', content: 'nutrition app, meal tracking, diet planner, AI nutritionist, food scanner, healthy lifestyle, personalized diet, calorie tracking' }],
];

// Add Google Search Console verification if available
if (gscVerification) {
  headTags.push(['meta', { name: 'google-site-verification', content: gscVerification }]);
}

// Add structured data
headTags.push(
  ['script', { type: 'application/ld+json' }, 
  `{
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "NutriScan App",
    "url": "${baseUrl}/",
    "description": "Follow our NutriScan App to learn how to scan meals, view your meal timeline, set up a diet plan, subscribe, and chat with Monika.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "${baseUrl}/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }`]
);

// Add Open Graph / Facebook tags
headTags.push(
  ['meta', { property: 'og:title', content: 'NutriScan App' }],
  ['meta', { property: 'og:description', content: 'Follow our NutriScan App to learn how to scan meals, view your meal timeline, set up a diet plan, subscribe, and chat with Monika. Get easy steps for a healthier life with NutriScan.' }],
  ['meta', { property: 'og:type', content: 'website' }],
  ['meta', { property: 'og:url', content: `${baseUrl}/` }],
  ['meta', { property: 'og:image', content: `${baseUrl}/images/social/og-image.jpg` }],
  ['meta', { property: 'og:image:alt', content: 'NutriScan App Documentation' }],
  ['meta', { property: 'og:image:width', content: '1200' }],
  ['meta', { property: 'og:image:height', content: '630' }]
);

// Add Twitter tags
headTags.push(
  ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
  ['meta', { name: 'twitter:title', content: 'NutriScan App' }],
  ['meta', { name: 'twitter:description', content: 'Follow our NutriScan App to learn how to scan meals, view your meal timeline, set up a diet plan, subscribe, and chat with Monika. Get easy steps for a healthier life with NutriScan.' }],
  ['meta', { name: 'twitter:image', content: `${baseUrl}/images/social/og-image.jpg` }],
  ['meta', { name: 'twitter:image:alt', content: 'NutriScan App Documentation' }]
);

export default defineConfig({
  lang: 'en-US',
  title: 'Track & Diet Plan',
  description: 'Follow our NutriScan App to learn how to scan meals, view your meal timeline, set up a diet plan, subscribe, and chat with Monika. Get easy steps for a healthier life with NutriScan.',
  lastUpdated: false,
  cleanUrls: true,
  ignoreDeadLinks: true,
  cacheDir: '.vitepress/cache',
  outDir: '.vitepress/dist',
  
  appearance: 'dark',

  // Add canonical URLs and other SEO enhancements
  transformPageData(pageData) {
    // Skip 404 page
    if (pageData.relativePath === '404.md') return;
    
    // Generate canonical URL
    const canonicalUrl = `${baseUrl}/${pageData.relativePath.replace(/\.md$/, '.html')}`;
    
    // Initialize frontmatter head if not already present
    pageData.frontmatter.head ??= [];
    
    // Add canonical URL link tag
    pageData.frontmatter.head.push(['link', { rel: 'canonical', href: canonicalUrl }]);
  },

  head: headTags,

  themeConfig: {
    logo: '/images/nutriscan-logo.webp',
    siteTitle: 'NutriScan App',
    
    nav: [
      { text: 'Overview', link: '/overview' },
      { text: 'Getting Started', link: '/getting-started' },
      { text: 'Core Features', link: '/guide/' },
      { text: 'Help & Support', link: '/support' }
    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Overview', link: '/overview' },
          { text: 'Getting Started', link: '/getting-started' }
        ]
      },
      {
        text: 'Core Features',
        items: [
          { text: 'Meal Scan', link: '/guide/meal-scan' },
          { text: 'Meal Timeline', link: '/guide/meal-timeline' },
          { text: 'Insights', link: '/guide/insights' },
          { text: 'Diet Plan', link: '/guide/diet-plan' },
          { text: 'Subscription', link: '/guide/subscription' },
          { text: 'Monika', link: '/guide/monika' },
          { text: 'NutriBites', link: '/guide/nutribites' },
          { text: 'NutriScore', link: '/guide/nutriscore' }
        ]
      },
      {
        text: 'Help & Support',
        items: [
          { text: 'Support', link: '/support' },
          { text: 'Common Q&A', link: '/guide/common_Q&A' },
          { text: 'App Comparison', link: '/guide/comparison' },
          { text: 'Troubleshooting', link: '/troubleshooting' },
          { text: 'FAQ', link: '/faq' },
          { text: 'Privacy & Policy', link: '/privacy-policy' }
        ]
      }
    ],

    footer: {
      copyright: 'Copyright © 2025 NutriScan App'
    },

    search: {
      provider: 'local'
    },

    socialLinks: [
      { icon: 'instagram', link: 'https://www.instagram.com/nutriscan.app' },
      { icon: 'twitter', link: 'https://twitter.com/nutriscanapp' }
    ]
  },

  vite: {
    server: {
      watch: {
        usePolling: false
      }
    },
    optimizeDeps: {
      include: [
        '@vue/devtools-api',
        '@vueuse/core'
      ]
    }
  }
});
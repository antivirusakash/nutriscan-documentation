import { defineConfig } from 'vitepress';

// Base URL for the site (empty for local development, your domain for production)
const baseUrl = process.env.NODE_ENV === 'production' 
  ? 'https://guide.nutriscan.app' 
  : '';

export default defineConfig({
  lang: 'en-US',
  title: 'User Guide - NutriScan App',
  description: 'Follow our NutriScan App User Guide to learn how to scan meals, view your meal timeline, set up a diet plan, subscribe, and chat with Monika. Get easy steps for a healthier life with NutriScan.',
  lastUpdated: true,
  cleanUrls: true,
  ignoreDeadLinks: true,
  cacheDir: '.vitepress/cache',
  outDir: '.vitepress/dist',
  
  appearance: 'dark',

  head: [
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
    ['meta', { name: 'robots', content: 'index, follow' }],
    ['meta', { name: 'author', content: 'NutriScan App' }],
    ['meta', { name: 'keywords', content: 'nutrition app, meal tracking, diet planner, AI nutritionist, food scanner, healthy lifestyle, personalized diet, calorie tracking' }],
    
    // Open Graph / Facebook
    ['meta', { property: 'og:title', content: 'NutriScan App User Guide - Scan, Track & Plan Your Diet' }],
    ['meta', { property: 'og:description', content: 'Discover how to scan meals, track nutrition, and set up a personalized diet plan with NutriScan. AI-powered food tracking for a healthier life.' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:url', content: `${baseUrl}/` }],
    ['meta', { property: 'og:image', content: `${baseUrl}/images/social/og-image.jpg` }],
    ['meta', { property: 'og:image:alt', content: 'NutriScan App Documentation' }],
    ['meta', { property: 'og:image:width', content: '1200' }],
    ['meta', { property: 'og:image:height', content: '630' }],
    
    // Twitter
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: 'NutriScan App User Guide - Scan, Track & Plan Your Diet' }],
    ['meta', { name: 'twitter:description', content: 'Learn how to track meals, analyze nutrition, and create a personalized diet plan with the NutriScan App.' }],
    ['meta', { name: 'twitter:image', content: `${baseUrl}/images/social/og-image.jpg` }],
    ['meta', { name: 'twitter:image:alt', content: 'NutriScan App Documentation' }]
  ],

  themeConfig: {
    logo: '/images/nutriscan-logo.webp',
    siteTitle: 'Guide - NutriScan App',
    
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
          { text: 'Troubleshooting', link: '/troubleshooting' },
          { text: 'FAQ', link: '/faq' },
          { text: 'Privacy & Security', link: '/privacy' }
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
    }
  }
});
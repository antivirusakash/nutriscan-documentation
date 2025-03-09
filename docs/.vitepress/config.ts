import { defineConfig } from 'vitepress';

export default defineConfig({
  lang: 'en-US',
  title: 'NutriScan App - AI-Powered Nutrition Assistant & Diet Planning',
  description: 'Track meals, get instant nutritional insights, and receive personalized diet plans with NutriScan App. AI-powered nutrition tracking made simple.',
  lastUpdated: false,
  cleanUrls: true,
  ignoreDeadLinks: true,
  cacheDir: '.vitepress/cache',
  outDir: '.vitepress/dist',
  
  appearance: 'dark',

  head: [
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
    ['meta', { name: 'robots', content: 'index, follow' }],
    ['meta', { name: 'author', content: 'NutriScan App' }],
    ['meta', { name: 'keywords', content: 'nutrition app, diet planning, meal tracking, AI nutritionist, healthy eating, meal scanner, personalized diet, food tracking' }],
    ['meta', { property: 'og:title', content: 'NutriScan App - AI-Powered Nutrition Assistant & Diet Planning' }],
    ['meta', { property: 'og:description', content: 'Track meals, get instant nutritional insights, and receive personalized diet plans with NutriScan App. AI-powered nutrition tracking made simple.' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: 'NutriScan App - AI-Powered Nutrition Assistant & Diet Planning' }],
    ['meta', { name: 'twitter:description', content: 'Track meals, get instant nutritional insights, and receive personalized diet plans with NutriScan App.' }]
  ],

  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'NutriScan App Docs',
    
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
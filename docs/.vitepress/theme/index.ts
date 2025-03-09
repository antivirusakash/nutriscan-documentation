// Import the default theme from VitePress
import DefaultTheme from 'vitepress/theme';
import Redirect from './components/Redirect.vue';

// Import our custom CSS
import './custom.css';

// Export the default theme with our customizations
export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // Register global components
    app.component('Redirect', Redirect);
  }
}; 
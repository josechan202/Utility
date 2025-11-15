// Application Configuration
// This file contains environment-specific settings

const AppConfig = {
    // Environment (auto-detected)
    environment: window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
        ? 'development'
        : 'production',

    // Feature Flags
    features: {
        analytics: true,  // Enable/disable analytics
        errorReporting: true,  // Enable/disable error reporting
        debugMode: false  // Enable debug logging (set to true for development)
    },

    // Analytics Configuration (optional)
    analytics: {
        // Example: Google Analytics
        // gaTrackingId: 'G-XXXXXXXXXX',

        // Example: Plausible Analytics
        // plausibleDomain: 'your-app.vercel.app',

        // Example: Umami Analytics
        // umamiWebsiteId: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
        // umamiScriptUrl: 'https://analytics.umami.is/script.js'
    },

    // Error Monitoring (optional)
    errorMonitoring: {
        // Example: Sentry
        // sentryDsn: 'https://xxxxxx@sentry.io/xxxxxx',

        // Example: Custom endpoint
        // endpoint: '/api/log-error',
        enabled: false
    },

    // API Configuration (if needed in future)
    api: {
        baseUrl: window.location.origin,
        timeout: 30000  // 30 seconds
    },

    // UI Configuration
    ui: {
        defaultInputFormat: 'json',
        defaultOutputFormat: 'xml',
        maxInputSize: 10 * 1024 * 1024,  // 10MB
        enableKeyboardShortcuts: true
    },

    // Performance
    performance: {
        enableServiceWorker: false,  // Set to true for PWA
        enableCaching: true
    },

    // Get current environment
    isDevelopment() {
        return this.environment === 'development';
    },

    isProduction() {
        return this.environment === 'production';
    },

    // Log debug messages (only in development)
    debug(...args) {
        if (this.isDevelopment() || this.features.debugMode) {
            console.log('[Debug]', ...args);
        }
    }
};

// Make config globally available
window.AppConfig = AppConfig;

// Log environment on load
if (AppConfig.isDevelopment()) {
    console.log('Running in DEVELOPMENT mode');
    console.log('Config:', AppConfig);
}

/**
 * Configuration file for Valyuta Kurslari Moliyaviy Xatar Boshqaruvi
 */

const CONFIG = {
    // API configuration
    API_KEY: '7a33f609293613879b70c903',
    API_BASE_URL: 'https://v6.exchangerate-api.com/v6/7a33f609293613879b70c903/latest/',
    BASE_CURRENCY: 'USD',
    
    // Currencies to track
    CURRENCIES: [
        { code: 'USD', nameKey: 'currency_usd', flag: '🇺🇸' },
        { code: 'EUR', nameKey: 'currency_eur', flag: '🇪🇺' },
        { code: 'RUB', nameKey: 'currency_rub', flag: '🇷🇺' },
        { code: 'CNY', nameKey: 'currency_cny', flag: '🇨🇳' },
        { code: 'KZT', nameKey: 'currency_kzt', flag: '🇰🇿' }
    ],
    
    // Risk thresholds (percentage change)
    RISK_THRESHOLDS: {
        LOW: 1,    // 0-1% change: stable
        MEDIUM: 3  // 1-3% change: medium risk, >3% high risk
    },
    
    // Risk indicators
    RISK_INDICATORS: {
        LOW: { emoji: '🟢', textKey: 'risk_low' },
        MEDIUM: { emoji: '🟡', textKey: 'risk_medium' },
        HIGH: { emoji: '🔴', textKey: 'risk_high' }
    },
    
    // Data refresh interval in milliseconds (5 minutes)
    REFRESH_INTERVAL: 5 * 60 * 1000,
    
    // Local storage keys
    STORAGE_KEYS: {
        CURRENT_RATES: 'valyutaXavf_currentRates',
        HISTORICAL_RATES: 'valyutaXavf_historicalRates',
        LAST_UPDATED: 'valyutaXavf_lastUpdated'
    }
};

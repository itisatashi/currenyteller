/**
 * Main JavaScript for the homepage of Valyuta Kurslari Moliyaviy Xatar Boshqaruvi
 */

// DOM elements
const currencyCardsContainer = document.getElementById('currencyCards');
const refreshButton = document.getElementById('refreshBtn');
const currencyCardTemplate = document.getElementById('currency-card-template');

// Initialize the homepage
async function initHomepage() {
    // Initialize language
    initLanguage();
    updatePageLanguage();
    
    // Set up language switcher
    setupLanguageSwitcher();
    
    // Load currency data
    await loadCurrencyData();
    
    // Set up refresh button
    if (refreshButton) {
        refreshButton.addEventListener('click', loadCurrencyData);
    }
    
    // Listen for language changes to update dynamic content
    document.addEventListener('languageChanged', () => {
        // Update view chart text in all cards
        document.querySelectorAll('[data-lang-key="view_chart"]').forEach(element => {
            element.textContent = getText('view_chart');
        });
    });
    
    // Set up auto-refresh
    setInterval(loadCurrencyData, CONFIG.REFRESH_INTERVAL);
}

// Set up language switcher
function setupLanguageSwitcher() {
    const languageSelect = document.getElementById('languageSelect');
    if (!languageSelect) return;
    
    // Set the current language in the dropdown
    languageSelect.value = getCurrentLanguage();
    
    // Add change event listener
    languageSelect.addEventListener('change', () => {
        const lang = languageSelect.value;
        setLanguage(lang);
        
        // Reload currency data to update text
        loadCurrencyData();
    });
}

// Load currency data from API
async function loadCurrencyData() {
    try {
        // Get yesterday's data (or create simulated data if not available)
        const yesterdayData = await getYesterdayData();
        
        // Get current data
        const currentData = await currencyAPI.getCurrentRates();
        
        if (!currentData) {
            throw new Error('Ma\'lumotlarni olishda xatolik');
        }
        
        // Render currency cards
        renderCurrencyCards(currentData, yesterdayData);
    } catch (error) {
        console.error('Error loading currency data:', error);
        showError(error.message);
    }
}

// Get yesterday's data (or simulate it)
async function getYesterdayData() {
    const historicalData = await currencyAPI.getHistoricalRates();
    if (!historicalData) return null;
    
    const dates = Object.keys(historicalData).sort();
    if (dates.length > 1) {
        return historicalData[dates[dates.length - 2]]; // Yesterday's data
    }
    
    return null;
}

// Render currency cards
function renderCurrencyCards(currentData, yesterdayData) {
    if (!currencyCardsContainer || !currencyCardTemplate) return;
    
    // Clear existing cards
    currencyCardsContainer.innerHTML = '';
    
    // Create a card for each currency
    CONFIG.CURRENCIES.forEach(currency => {
        // Get current rate
        const currentRate = currencyAPI.getExchangeRate(currentData, currency.code);
        if (!currentRate) return;
        
        // Get yesterday's rate
        let yesterdayRate = null;
        let rateChange = 0;
        
        if (yesterdayData) {
            yesterdayRate = currencyAPI.getExchangeRate(yesterdayData, currency.code);
            if (yesterdayRate) {
                rateChange = currencyAPI.calculateRateChange(yesterdayRate, currentRate);
            }
        }
        
        // Create card from template
        const card = currencyCardTemplate.content.cloneNode(true);
        
        // Set currency name and flag
        const currencyName = getText(currency.nameKey);
        card.querySelector('.currency-name').textContent = `${currency.code} - ${currencyName}`;
        card.querySelector('.currency-flag').textContent = currency.flag;
        
        // Set current rate
        card.querySelector('.current-rate').textContent = `1 ${currency.code} = ${formatCurrency(currentRate)} UZS`;
        
        // Set rate change
        const rateChangeElement = card.querySelector('.rate-change');
        if (rateChange !== 0) {
            const isUp = rateChange > 0;
            rateChangeElement.textContent = `${isUp ? '↗️' : '↘️'} ${Math.abs(rateChange).toFixed(2)}%`;
            rateChangeElement.classList.add(isUp ? 'up' : 'down');
        } else {
            rateChangeElement.textContent = getText('no_change');
        }
        
        // Set risk indicator
        const riskLevel = determineRiskLevel(rateChange);
        const riskIndicator = getRiskIndicator(riskLevel);
        const riskText = getText(riskIndicator.textKey);
        card.querySelector('.risk-indicator').textContent = `${riskIndicator.emoji} ${riskText}`;
        
        // Add link to chart page with currency parameter
        const chartLink = card.querySelector('.card-footer a');
        chartLink.href = `grafik.html?currency=${currency.code}`;
        
        // Ensure the chart button text is translated
        const chartButtonText = chartLink.querySelector('[data-lang-key="view_chart"]');
        if (chartButtonText) {
            chartButtonText.textContent = getText('view_chart');
        }
        
        // Add card to container
        currencyCardsContainer.appendChild(card);
    });
}

// Initialize the page when DOM is loaded
document.addEventListener('DOMContentLoaded', initHomepage);

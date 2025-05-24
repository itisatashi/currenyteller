/**
 * Recommendations JavaScript for Valyuta Kurslari Moliyaviy Xatar Boshqaruvi
 */

// DOM elements
const recommendationsContainer = document.getElementById('recommendationsContainer');
const recommendationCardTemplate = document.getElementById('recommendation-card-template');
const userTypeButtons = document.querySelectorAll('.user-type-btn');

// Current data
let currentCurrencyData = null;
let yesterdayCurrencyData = null;
let selectedUserType = 'importers';

// Initialize the recommendations page
async function initRecommendationsPage() {
    // Initialize language
    initLanguage();
    updatePageLanguage();
    
    // Set up language switcher
    setupLanguageSwitcher();
    
    // Load currency data
    await loadRecommendationsData();
    
    // Set up user type buttons
    userTypeButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button
            userTypeButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Update displayed recommendations
            selectedUserType = button.dataset.type;
            displayRecommendations();
        });
    });
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
        
        // Reload recommendations to update text
        displayRecommendations();
    });
}

// Update user type button state
function updateUserTypeButtonState() {
    userTypeButtons.forEach(button => {
        if (button.dataset.type === selectedUserType) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}

// Load recommendations data
async function loadRecommendationsData() {
    try {
        showLoading();
        hideError();
        
        // Get current data
        currentCurrencyData = await currencyAPI.getCurrentRates();
        
        // Get yesterday's data
        yesterdayCurrencyData = await currencyAPI.getYesterdayRates();
        
        if (!currentCurrencyData || !yesterdayCurrencyData) {
            throw new Error(getText('no_data'));
        }
        
        // Display recommendations
        displayRecommendations();
    } catch (error) {
        console.error('Error loading recommendations data:', error);
        showError(error.message);
    } finally {
        hideLoading();
    }
}

// Display recommendations
function displayRecommendations() {
    if (!recommendationsContainer || !recommendationCardTemplate) return;
    
    // Clear existing recommendations
    recommendationsContainer.innerHTML = '';
    
    // Check if we have data
    if (!currentCurrencyData || !yesterdayCurrencyData) {
        recommendationsContainer.innerHTML = `<p class="error">${getText('no_data')}</p>`;
        return;
    }
    
    // Create a recommendation card for each currency
    CONFIG.CURRENCIES.forEach(currency => {
        // Get current rate
        const currentRate = currencyAPI.getExchangeRate(currentCurrencyData, currency.code);
        if (!currentRate) return;
        
        // Get yesterday's rate
        const yesterdayRate = currencyAPI.getExchangeRate(yesterdayCurrencyData, currency.code);
        if (!yesterdayRate) return;
        
        // Calculate rate change
        const rateChange = currencyAPI.calculateRateChange(yesterdayRate, currentRate);
        
        // Get recommendation data
        const recommendationData = getRecommendationData(currency.code, rateChange, selectedUserType);
        
        // Create card from template
        const card = recommendationCardTemplate.content.cloneNode(true);
        
        // Set currency name and flag
        const currencyName = getText(currency.nameKey);
        card.querySelector('.currency-name').textContent = `${currency.code} - ${currencyName}`;
        card.querySelector('.currency-flag').textContent = currency.flag;
        
        // Set risk indicator
        const riskLevel = determineRiskLevel(rateChange);
        const riskIndicator = getRiskIndicator(riskLevel);
        const riskText = getText(riskIndicator.textKey);
        card.querySelector('.risk-indicator').textContent = `${riskIndicator.emoji} ${riskText}`;
        
        // Set recommendation text
        card.querySelector('.recommendation-text').textContent = recommendationData.text;
        
        // Set action text if available
        if (recommendationData.action) {
            const actionElement = card.querySelector('.recommendation-action');
            const actionTextElement = actionElement.querySelector('.action-text');
            if (actionTextElement) {
                actionTextElement.textContent = recommendationData.action;
                actionElement.classList.remove('hidden');
            }
        }
        
        // Add card to container
        recommendationsContainer.appendChild(card);
    });
}

// Get recommendation data
function getRecommendationData(currencyCode, change, userType) {
    const isUp = change > 0;
    const absChange = Math.abs(change).toFixed(1);
    const riskLevel = determineRiskLevel(change);
    
    // Get the current language
    const currentLang = getCurrentLanguage();
    const currencyInfo = CONFIG.CURRENCIES.find(c => c.code === currencyCode);
    const currencyName = getText(currencyInfo.nameKey);
    
    // Determine the recommendation key based on user type, direction, and risk level
    let textKey = '';
    let actionKey = '';
    
    // Generate recommendation text based on user type and currency movement
    if (userType === 'importers') {
        if (isUp) {
            if (riskLevel === 'HIGH') {
                textKey = 'imp_high_up';
                actionKey = 'act_imp_delay';
            } else if (riskLevel === 'MEDIUM') {
                textKey = 'imp_medium_up';
                actionKey = 'act_imp_caution';
            } else {
                textKey = 'imp_stable';
                actionKey = 'act_imp_plan';
            }
        } else {
            if (riskLevel === 'HIGH') {
                textKey = 'imp_high_down';
                actionKey = 'act_imp_accelerate';
            } else if (riskLevel === 'MEDIUM') {
                textKey = 'imp_medium_down';
                actionKey = 'act_imp_plan';
            } else {
                textKey = 'imp_stable';
                actionKey = 'act_imp_plan';
            }
        }
    } else if (userType === 'exporters') {
        if (isUp) {
            if (riskLevel === 'HIGH') {
                textKey = 'exp_high_up';
                actionKey = 'act_exp_accelerate';
            } else if (riskLevel === 'MEDIUM') {
                textKey = 'exp_medium_up';
                actionKey = 'act_exp_plan';
            } else {
                textKey = 'exp_stable';
                actionKey = 'act_exp_plan';
            }
        } else {
            if (riskLevel === 'HIGH') {
                textKey = 'exp_high_down';
                actionKey = 'act_exp_delay';
            } else if (riskLevel === 'MEDIUM') {
                textKey = 'exp_medium_down';
                actionKey = 'act_exp_caution';
            } else {
                textKey = 'exp_stable';
                actionKey = 'act_exp_plan';
            }
        }
    } else if (userType === 'investors') {
        if (isUp) {
            if (riskLevel === 'HIGH') {
                textKey = 'inv_high_up';
                actionKey = 'act_inv_to_uzs';
            } else if (riskLevel === 'MEDIUM') {
                textKey = 'inv_medium_up';
                actionKey = 'act_inv_diversify';
            } else {
                textKey = 'inv_stable';
                actionKey = 'act_inv_hold';
            }
        } else {
            if (riskLevel === 'HIGH') {
                textKey = 'inv_high_down';
                actionKey = 'act_inv_from_uzs';
            } else if (riskLevel === 'MEDIUM') {
                textKey = 'inv_medium_down';
                actionKey = 'act_inv_diversify';
            } else {
                textKey = 'inv_stable';
                actionKey = 'act_inv_hold';
            }
        }
    }
    
    // Get the text from the language file with parameters
    const text = getText(textKey, { currency: currencyCode, change: absChange, currencyName: currencyName });
    const action = actionKey ? getText(actionKey, { currency: currencyCode }) : '';
    
    return {
        text,
        action
    };
}

// Initialize the page when DOM is loaded
document.addEventListener('DOMContentLoaded', initRecommendationsPage);

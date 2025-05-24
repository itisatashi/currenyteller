/**
 * Utility functions for Valyuta Kurslari Moliyaviy Xatar Boshqaruvi
 */

// Format currency value with commas
function formatCurrency(value) {
    return value.toLocaleString('uz-UZ');
}

// Format date to Uzbek format
function formatDate(date) {
    return date.toLocaleDateString('uz-UZ', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

// Format time to Uzbek format
function formatTime(date) {
    return date.toLocaleTimeString('uz-UZ', {
        hour: '2-digit',
        minute: '2-digit'
    });
}

// Update live time in header
function updateLiveTime() {
    const liveTimeTextElement = document.getElementById('liveTimeText');
    if (liveTimeTextElement) {
        const now = new Date();
        liveTimeTextElement.textContent = `${formatDate(now)} | ${formatTime(now)}`;
    }
}

// Calculate percentage change between two values
function calculatePercentageChange(oldValue, newValue) {
    return ((newValue - oldValue) / oldValue) * 100;
}

// Determine risk level based on percentage change
function determineRiskLevel(percentageChange) {
    const absChange = Math.abs(percentageChange);
    
    if (absChange < CONFIG.RISK_THRESHOLDS.LOW) {
        return 'LOW';
    } else if (absChange < CONFIG.RISK_THRESHOLDS.MEDIUM) {
        return 'MEDIUM';
    } else {
        return 'HIGH';
    }
}

// Get risk indicator based on risk level
function getRiskIndicator(riskLevel) {
    return CONFIG.RISK_INDICATORS[riskLevel];
}

// Save data to local storage
function saveToLocalStorage(key, data) {
    try {
        localStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
        console.error('Error saving to local storage:', error);
    }
}

// Get data from local storage
function getFromLocalStorage(key) {
    try {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : null;
    } catch (error) {
        console.error('Error getting from local storage:', error);
        return null;
    }
}

// Show loading indicator
function showLoading() {
    const loadingIndicator = document.getElementById('loadingIndicator');
    if (loadingIndicator) {
        loadingIndicator.style.display = 'block';
    }
}

// Hide loading indicator
function hideLoading() {
    const loadingIndicator = document.getElementById('loadingIndicator');
    if (loadingIndicator) {
        loadingIndicator.style.display = 'none';
    }
}

// Show error message
function showError(message) {
    const errorElement = document.getElementById('errorMessage');
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }
}

// Hide error message
function hideError() {
    const errorElement = document.getElementById('errorMessage');
    if (errorElement) {
        errorElement.style.display = 'none';
    }
}

// Update last updated time
function updateLastUpdatedTime() {
    const updateTimeElement = document.getElementById('updateTime');
    if (updateTimeElement) {
        const lastUpdated = getFromLocalStorage(CONFIG.STORAGE_KEYS.LAST_UPDATED);
        if (lastUpdated) {
            updateTimeElement.textContent = new Date(lastUpdated).toLocaleString('uz-UZ');
        } else {
            updateTimeElement.textContent = 'Ma\'lumot yo\'q';
        }
    }
}

// Initialize live time
function initLiveTime() {
    updateLiveTime();
    setInterval(updateLiveTime, 60000); // Update every minute
}

// Initialize page
function initPage() {
    initLiveTime();
    updateLastUpdatedTime();
}

// Call initPage when DOM is loaded
document.addEventListener('DOMContentLoaded', initPage);

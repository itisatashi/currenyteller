/**
 * Landing Page JavaScript for Valyuta Kurslari Moliyaviy Xatar Boshqaruvi
 */

// Local storage keys
const AUTH_KEYS = {
    CURRENT_USER: 'valyutaXavf_currentUser',
    USERS: 'valyutaXavf_users'
};

// Initialize landing page
function initLandingPage() {
    // Initialize language
    initLanguage();
    updatePageLanguage();
    
    // Set up language switcher
    setupLanguageSwitcher();
    
    // Check if user is already logged in
    checkAuthStatus();
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
    });
}

// Check authentication status
function checkAuthStatus() {
    const currentUser = getFromLocalStorage(AUTH_KEYS.CURRENT_USER);
    
    if (currentUser) {
        // User is logged in, redirect to dashboard
        window.location.href = 'index.html';
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initLandingPage);
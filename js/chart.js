/**
 * Chart JavaScript for Valyuta Kurslari Moliyaviy Xatar Boshqaruvi
 */

// DOM elements
const chartCanvas = document.getElementById('rateChart');
const chartAnalysisElement = document.getElementById('chartAnalysis');
const currencyButtons = document.querySelectorAll('.currency-btn');

// Chart instance
let rateChart = null;

// Current selected currency
let selectedCurrency = 'USD';

// Initialize the chart page
async function initChartPage() {
    // Initialize language
    initLanguage();
    updatePageLanguage();
    
    // Set up language switcher
    setupLanguageSwitcher();
    
    // Get currency from URL if present
    const urlParams = new URLSearchParams(window.location.search);
    const currencyParam = urlParams.get('currency');
    
    if (currencyParam && CONFIG.CURRENCIES.some(c => c.code === currencyParam)) {
        selectedCurrency = currencyParam;
    }
    
    // Highlight the selected currency button
    updateCurrencyButtonState();
    
    // Set up currency selector buttons
    currencyButtons.forEach(button => {
        button.addEventListener('click', () => {
            selectedCurrency = button.dataset.currency;
            updateCurrencyButtonState();
            loadChartData();
        });
    });
    
    // Load chart data
    await loadChartData();
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
        
        // Reload chart data to update text
        loadChartData();
    });
}

// Update currency button state
function updateCurrencyButtonState() {
    currencyButtons.forEach(button => {
        if (button.dataset.currency === selectedCurrency) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}

// Load chart data from API
async function loadChartData() {
    try {
        showLoading();
        hideError();
        
        // Get historical data
        const historicalData = await currencyAPI.getHistoricalRates();
        
        if (!historicalData) {
            throw new Error(getText('no_data'));
        }
        
        // Prepare data for chart
        const chartData = prepareChartData(historicalData);
        
        // Render chart
        renderChart(chartData);
        
        // Update analysis
        updateChartAnalysis(chartData);
    } catch (error) {
        console.error('Error loading chart data:', error);
        showError(error.message);
    } finally {
        hideLoading();
    }
}

// Prepare data for chart
function prepareChartData(historicalData) {
    const dates = Object.keys(historicalData).sort();
    const rates = [];
    
    dates.forEach(date => {
        const data = historicalData[date];
        const rate = currencyAPI.getExchangeRate(data, selectedCurrency);
        
        if (rate) {
            rates.push(rate);
        }
    });
    
    return {
        labels: dates.map(date => {
            const [year, month, day] = date.split('-');
            return `${day}/${month}`;
        }),
        rates: rates
    };
}

// Render chart
function renderChart(chartData) {
    if (!chartCanvas) return;
    
    // Destroy existing chart if it exists
    if (rateChart) {
        rateChart.destroy();
    }
    
    // Get currency info
    const currencyInfo = CONFIG.CURRENCIES.find(c => c.code === selectedCurrency);
    const currencyName = getText(currencyInfo.nameKey);
    
    // Get gradient for chart background
    const ctx = chartCanvas.getContext('2d');
    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, 'rgba(63, 81, 181, 0.4)');
    gradient.addColorStop(1, 'rgba(63, 81, 181, 0.0)');
    
    // Get color based on currency
    let primaryColor, secondaryColor;
    switch(selectedCurrency) {
        case 'USD':
            primaryColor = 'rgba(63, 81, 181, 1)';
            secondaryColor = 'rgba(63, 81, 181, 0.7)';
            break;
        case 'EUR':
            primaryColor = 'rgba(76, 175, 80, 1)';
            secondaryColor = 'rgba(76, 175, 80, 0.7)';
            break;
        case 'RUB':
            primaryColor = 'rgba(244, 67, 54, 1)';
            secondaryColor = 'rgba(244, 67, 54, 0.7)';
            break;
        case 'CNY':
            primaryColor = 'rgba(255, 152, 0, 1)';
            secondaryColor = 'rgba(255, 152, 0, 0.7)';
            break;
        case 'KZT':
            primaryColor = 'rgba(156, 39, 176, 1)';
            secondaryColor = 'rgba(156, 39, 176, 0.7)';
            break;
        default:
            primaryColor = 'rgba(63, 81, 181, 1)';
            secondaryColor = 'rgba(63, 81, 181, 0.7)';
    }
    
    // Create new chart
    rateChart = new Chart(chartCanvas, {
        type: 'line',
        data: {
            labels: chartData.labels,
            datasets: [{
                label: `1 ${selectedCurrency} = ${formatCurrency(chartData.rates[chartData.rates.length - 1])} UZS (${currencyName})`,
                data: chartData.rates,
                backgroundColor: gradient,
                borderColor: primaryColor,
                borderWidth: 3,
                pointBackgroundColor: secondaryColor,
                pointBorderColor: primaryColor,
                pointRadius: 6,
                pointHoverRadius: 8,
                tension: 0.4,
                fill: true
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: false,
                    title: {
                        display: true,
                        text: 'UZS',
                        font: {
                            size: 14,
                            weight: 'bold'
                        }
                    },
                    ticks: {
                        callback: function(value) {
                            return formatCurrency(value);
                        }
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: getText('date'),
                        font: {
                            size: 14,
                            weight: 'bold'
                        }
                    }
                }
            },
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `1 ${selectedCurrency} = ${formatCurrency(context.raw)} UZS`;
                        }
                    }
                },
                legend: {
                    labels: {
                        font: {
                            size: 14
                        }
                    }
                }
            },
            interaction: {
                intersect: false,
                mode: 'index'
            },
            animations: {
                tension: {
                    duration: 1000,
                    easing: 'linear'
                }
            }
        }
    });
}

// Update chart analysis
function updateChartAnalysis(chartData) {
    if (!chartAnalysisElement) return;
    
    const rates = chartData.rates;
    if (rates.length < 2) {
        chartAnalysisElement.textContent = getText('no_data');
        return;
    }
    
    // Calculate weekly change
    const firstRate = rates[0];
    const lastRate = rates[rates.length - 1];
    const weeklyChange = calculatePercentageChange(firstRate, lastRate);
    const absChange = Math.abs(weeklyChange).toFixed(2);
    
    // Get currency info
    const currencyInfo = CONFIG.CURRENCIES.find(c => c.code === selectedCurrency);
    const currencyName = getText(currencyInfo.nameKey);
    
    // Determine risk level
    const riskLevel = determineRiskLevel(weeklyChange);
    const riskIndicator = getRiskIndicator(riskLevel);
    const riskText = getText(riskIndicator.textKey);
    
    // Generate trend text based on language
    let trendKey = '';
    
    if (weeklyChange > 0) {
        if (riskLevel === 'HIGH') {
            trendKey = 'exp_high_up';
        } else if (riskLevel === 'MEDIUM') {
            trendKey = 'exp_medium_up';
        } else {
            trendKey = 'exp_stable';
        }
    } else if (weeklyChange < 0) {
        if (riskLevel === 'HIGH') {
            trendKey = 'exp_high_down';
        } else if (riskLevel === 'MEDIUM') {
            trendKey = 'exp_medium_down';
        } else {
            trendKey = 'exp_stable';
        }
    } else {
        trendKey = 'exp_stable';
    }
    
    const trendText = getText(trendKey, { change: absChange, currency: selectedCurrency, currencyName: currencyName });
    
    // Update analysis text
    chartAnalysisElement.innerHTML = `
        <p>${trendText}</p>
        <p>${getText('risk_level')}: ${riskIndicator.emoji} ${riskText}</p>
    `;
}

// Calculate percentage change between two values
function calculatePercentageChange(oldValue, newValue) {
    return ((newValue - oldValue) / oldValue) * 100;
}

// Initialize the page when DOM is loaded
document.addEventListener('DOMContentLoaded', initChartPage);

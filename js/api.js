/**
 * API handling for Valyuta Kurslari Moliyaviy Xatar Boshqaruvi
 */

// Class for handling API requests
class CurrencyAPI {
    constructor() {
        this.baseUrl = CONFIG.API_BASE_URL;
        this.baseCurrency = CONFIG.BASE_CURRENCY;
    }

    // Get current exchange rates
    async getCurrentRates() {
        try {
            showLoading();
            hideError();
            
            const response = await fetch(`${this.baseUrl}${this.baseCurrency}`);
            
            if (!response.ok) {
                throw new Error(`API error: ${response.status}`);
            }
            
            const data = await response.json();
            
            // Process data to convert to UZS format
            const processedData = this.processApiData(data);
            
            // Save to local storage
            saveToLocalStorage(CONFIG.STORAGE_KEYS.CURRENT_RATES, processedData);
            saveToLocalStorage(CONFIG.STORAGE_KEYS.LAST_UPDATED, new Date().toISOString());
            updateLastUpdatedTime();
            
            return processedData;
        } catch (error) {
            console.error('Error fetching current rates:', error);
            this.handleError(error);
            
            // Try to get data from local storage
            return this.getOfflineRates();
        } finally {
            hideLoading();
        }
    }
    
    // Get historical rates for the past 7 days
    async getHistoricalRates() {
        try {
            showLoading();
            hideError();
            
            const dates = this.getLast7Days();
            const historicalData = {};
            
            // We'll use the free API's latest endpoint and simulate historical data
            // In a real app, you would use a paid API with historical data support
            const response = await fetch(`${this.baseUrl}${this.baseCurrency}`);
            
            if (!response.ok) {
                throw new Error(`API error: ${response.status}`);
            }
            
            const currentData = await response.json();
            const processedCurrentData = this.processApiData(currentData);
            
            // Simulate historical data with small random variations
            for (const date of dates) {
                const dateData = {
                    base: 'UZS',
                    date: date,
                    rates: {}
                };
                
                // Generate slightly different rates for each date
                for (const currency of CONFIG.CURRENCIES) {
                    if (processedCurrentData && processedCurrentData.rates && processedCurrentData.rates[currency.code]) {
                        const currentRate = 1 / processedCurrentData.rates[currency.code];
                        const randomFactor = 0.95 + (Math.random() * 0.1); // Random between 0.95 and 1.05
                        dateData.rates[currency.code] = 1 / (currentRate * randomFactor);
                    }
                }
                
                historicalData[date] = dateData;
            }
            
            // Save to local storage
            saveToLocalStorage(CONFIG.STORAGE_KEYS.HISTORICAL_RATES, historicalData);
            
            return historicalData;
        } catch (error) {
            console.error('Error fetching historical rates:', error);
            this.handleError(error);
            
            // Try to get data from local storage
            return this.getOfflineHistoricalRates();
        } finally {
            hideLoading();
        }
    }
    
    // Get yesterday's rates for recommendations
    async getYesterdayRates() {
        try {
            const historicalData = await this.getHistoricalRates();
            if (!historicalData) return null;
            
            const dates = Object.keys(historicalData).sort();
            if (dates.length > 1) {
                return historicalData[dates[dates.length - 2]]; // Yesterday's data
            }
            
            // If we don't have yesterday's data, simulate it from current data
            const currentData = await this.getCurrentRates();
            if (!currentData) return null;
            
            const yesterdayData = {
                base: 'UZS',
                date: this.getLast7Days()[1], // Yesterday's date
                rates: {}
            };
            
            // Generate slightly different rates for yesterday
            for (const currency of CONFIG.CURRENCIES) {
                if (currentData && currentData.rates && currentData.rates[currency.code]) {
                    const currentRate = currentData.rates[currency.code];
                    const randomFactor = 0.97 + (Math.random() * 0.06); // Random between 0.97 and 1.03
                    yesterdayData.rates[currency.code] = currentRate * randomFactor;
                }
            }
            
            return yesterdayData;
        } catch (error) {
            console.error('Error getting yesterday rates:', error);
            return null;
        }
    }
    
    // Get rates from local storage if offline
    getOfflineRates() {
        const offlineData = getFromLocalStorage(CONFIG.STORAGE_KEYS.CURRENT_RATES);
        
        if (!offlineData) {
            showError(getText('no_offline_data'));
            return null;
        }
        
        showError(getText('offline_error'));
        return offlineData;
    }
    
    // Get historical rates from local storage if offline
    getOfflineHistoricalRates() {
        const offlineData = getFromLocalStorage(CONFIG.STORAGE_KEYS.HISTORICAL_RATES);
        
        if (!offlineData) {
            showError(getText('no_offline_data'));
            return null;
        }
        
        showError(getText('offline_error'));
        return offlineData;
    }
    
    // Handle API errors
    handleError(error) {
        console.error('API Error:', error);
        showError(`${getText('api_error')}: ${error.message}`);
    }
    
    // Get the last 7 days as ISO strings
    getLast7Days() {
        const dates = [];
        for (let i = 6; i >= 0; i--) {
            const date = new Date();
            date.setDate(date.getDate() - i);
            dates.push(date.toISOString().split('T')[0]);
        }
        return dates;
    }
    
    // Calculate rate change between two dates
    calculateRateChange(oldRate, newRate) {
        if (!oldRate || !newRate) return 0;
        return calculatePercentageChange(oldRate, newRate);
    }
    
    // Process API data to convert USD rates to UZS format
    processApiData(data) {
        if (!data || !data.conversion_rates) return null;
        
        const uzsRate = data.conversion_rates.UZS;
        if (!uzsRate) return null;
        
        const result = {
            base: 'UZS',
            date: new Date().toISOString().split('T')[0],
            rates: {}
        };
        
        // Convert rates to UZS as base
        for (const currency of CONFIG.CURRENCIES) {
            const currencyRate = data.conversion_rates[currency.code];
            if (currencyRate) {
                result.rates[currency.code] = uzsRate / currencyRate;
            }
        }
        
        return result;
    }
    
    // Get exchange rate for a specific currency
    getExchangeRate(data, currencyCode) {
        if (!data || !data.rates || !data.rates[currencyCode]) return null;
        return data.rates[currencyCode];
    }
}

// Create a global instance of the API
const currencyAPI = new CurrencyAPI();

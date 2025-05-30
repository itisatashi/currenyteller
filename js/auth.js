/**
 * Authentication JavaScript for Valyuta Kurslari Moliyaviy Xatar Boshqaruvi
 */

// DOM elements for login form
const loginForm = document.getElementById('loginForm');
let loginEmail, loginPassword, loginEmailError, loginPasswordError, togglePasswordBtn;

// DOM elements for register form
const registerForm = document.getElementById('registerForm');
let fullName, registerEmail, registerPassword, confirmPassword, userType;
let fullNameError, registerEmailError, registerPasswordError, confirmPasswordError, userTypeError;
let toggleRegisterPasswordBtn, toggleConfirmPasswordBtn;

// DOM elements for user profile
const userProfile = document.getElementById('userProfile');
const profileButton = document.getElementById('profileButton');
const profileDropdown = document.getElementById('profileDropdown');
const profileName = document.getElementById('profileName');
const logoutButton = document.getElementById('logoutButton');

// Local storage keys
const AUTH_KEYS = {
    CURRENT_USER: 'valyutaXavf_currentUser',
    USERS: 'valyutaXavf_users'
};

// Initialize authentication
function initAuth() {
    // Initialize language
    initLanguage();
    updatePageLanguage();
    
    // Initialize DOM elements
    initDOMElements();
    
    // Set up language switcher
    setupLanguageSwitcher();
    
    // Set up password toggle functionality
    setupPasswordToggles();
    
    // Set up form validation and submission
    setupForms();
    
    // Set up user profile
    setupUserProfile();
    
    // Check if user is already logged in
    checkAuthStatus();
}

// Initialize DOM elements
function initDOMElements() {
    // Login form elements
    if (loginForm) {
        loginEmail = document.getElementById('email');
        loginPassword = document.getElementById('password');
        loginEmailError = document.getElementById('emailError');
        loginPasswordError = document.getElementById('passwordError');
        togglePasswordBtn = document.getElementById('togglePassword');
    }
    
    // Register form elements
    if (registerForm) {
        fullName = document.getElementById('fullName');
        registerEmail = document.getElementById('email');
        registerPassword = document.getElementById('password');
        confirmPassword = document.getElementById('confirmPassword');
        userType = document.getElementById('userType');
        fullNameError = document.getElementById('fullNameError');
        registerEmailError = document.getElementById('emailError');
        registerPasswordError = document.getElementById('passwordError');
        confirmPasswordError = document.getElementById('confirmPasswordError');
        userTypeError = document.getElementById('userTypeError');
        toggleRegisterPasswordBtn = document.getElementById('togglePassword');
        toggleConfirmPasswordBtn = document.getElementById('toggleConfirmPassword');
    }
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

// Set up password toggle functionality
function setupPasswordToggles() {
    // Login form password toggle
    if (togglePasswordBtn) {
        togglePasswordBtn.addEventListener('click', () => {
            togglePasswordVisibility(loginPassword, togglePasswordBtn);
        });
    }
    
    // Register form password toggles
    if (toggleRegisterPasswordBtn) {
        toggleRegisterPasswordBtn.addEventListener('click', () => {
            togglePasswordVisibility(registerPassword, toggleRegisterPasswordBtn);
        });
    }
    
    if (toggleConfirmPasswordBtn) {
        toggleConfirmPasswordBtn.addEventListener('click', () => {
            togglePasswordVisibility(confirmPassword, toggleConfirmPasswordBtn);
        });
    }
}

// Toggle password visibility
function togglePasswordVisibility(passwordInput, toggleButton) {
    if (!passwordInput || !toggleButton) return;
    
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    
    // Toggle icon
    const icon = toggleButton.querySelector('i');
    if (icon) {
        icon.classList.toggle('fa-eye');
        icon.classList.toggle('fa-eye-slash');
    }
}

// Set up form validation and submission
function setupForms() {
    // Login form
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Reset error messages
            resetErrors();
            
            // Validate form
            if (validateLoginForm()) {
                // Attempt login
                login();
            }
        });
    }
    
    // Register form
    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Reset error messages
            resetErrors();
            
            // Validate form
            if (validateRegisterForm()) {
                // Attempt registration
                register();
            }
        });
    }
}

// Reset error messages
function resetErrors() {
    // Login form errors
    if (loginEmailError) loginEmailError.textContent = '';
    if (loginPasswordError) loginPasswordError.textContent = '';
    
    // Register form errors
    if (fullNameError) fullNameError.textContent = '';
    if (registerEmailError) registerEmailError.textContent = '';
    if (registerPasswordError) registerPasswordError.textContent = '';
    if (confirmPasswordError) confirmPasswordError.textContent = '';
    if (userTypeError) userTypeError.textContent = '';
}

// Validate login form
function validateLoginForm() {
    let isValid = true;
    
    // Validate email
    if (!loginEmail.value.trim()) {
        loginEmailError.textContent = getText('error_email_required');
        isValid = false;
    } else if (!isValidEmail(loginEmail.value)) {
        loginEmailError.textContent = getText('error_email_invalid');
        isValid = false;
    }
    
    // Validate password
    if (!loginPassword.value) {
        loginPasswordError.textContent = getText('error_password_required');
        isValid = false;
    }
    
    return isValid;
}

// Validate register form
function validateRegisterForm() {
    let isValid = true;
    
    // Validate full name
    if (!fullName.value.trim()) {
        fullNameError.textContent = getText('error_name_required');
        isValid = false;
    }
    
    // Validate email
    if (!registerEmail.value.trim()) {
        registerEmailError.textContent = getText('error_email_required');
        isValid = false;
    } else if (!isValidEmail(registerEmail.value)) {
        registerEmailError.textContent = getText('error_email_invalid');
        isValid = false;
    }
    
    // Validate password
    if (!registerPassword.value) {
        registerPasswordError.textContent = getText('error_password_required');
        isValid = false;
    } else if (registerPassword.value.length < 8) {
        registerPasswordError.textContent = getText('error_password_length');
        isValid = false;
    }
    
    // Validate confirm password
    if (!confirmPassword.value) {
        confirmPasswordError.textContent = getText('error_confirm_password_required');
        isValid = false;
    } else if (confirmPassword.value !== registerPassword.value) {
        confirmPasswordError.textContent = getText('error_passwords_not_match');
        isValid = false;
    }
    
    // Validate user type
    if (!userType.value) {
        userTypeError.textContent = getText('error_user_type_required');
        isValid = false;
    }
    
    return isValid;
}

// Check if email is valid
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Login function
function login() {
    // Get users from local storage
    const users = getFromLocalStorage(AUTH_KEYS.USERS) || [];
    
    // Find user with matching email
    const user = users.find(u => u.email === loginEmail.value.trim());
    
    if (!user) {
        // User not found
        loginEmailError.textContent = getText('error_user_not_found');
        return;
    }
    
    // Check password
    if (user.password !== loginPassword.value) {
        // Incorrect password
        loginPasswordError.textContent = getText('error_incorrect_password');
        return;
    }
    
    // Remember me functionality
    const rememberMe = document.getElementById('rememberMe');
    const shouldRemember = rememberMe && rememberMe.checked;
    
    // Login successful
    const currentUser = {
        id: user.id,
        name: user.name,
        email: user.email,
        userType: user.userType,
        rememberMe: shouldRemember
    };
    
    // Save current user to local storage
    saveToLocalStorage(AUTH_KEYS.CURRENT_USER, currentUser);
    
    // Show success message
    showSuccessMessage(getText('login_success'));
    
    // Redirect to homepage after a short delay
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 1500);
}

// Register function
function register() {
    // Get users from local storage
    const users = getFromLocalStorage(AUTH_KEYS.USERS) || [];
    
    // Check if email already exists
    if (users.some(u => u.email === registerEmail.value.trim())) {
        registerEmailError.textContent = getText('error_email_exists');
        return;
    }
    
    // Create new user
    const newUser = {
        id: generateUserId(),
        name: fullName.value.trim(),
        email: registerEmail.value.trim(),
        password: registerPassword.value,
        userType: userType.value,
        createdAt: new Date().toISOString()
    };
    
    // Add new user to users array
    users.push(newUser);
    
    // Save updated users array to local storage
    saveToLocalStorage(AUTH_KEYS.USERS, users);
    
    // Show success message
    showSuccessMessage(getText('register_success'));
    
    // Redirect to login page after a short delay
    setTimeout(() => {
        window.location.href = 'login.html';
    }, 1500);
}

// Generate unique user ID
function generateUserId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
}

// Show success message
function showSuccessMessage(message) {
    // Create success message element
    const successMessage = document.createElement('div');
    successMessage.className = 'success-message';
    successMessage.innerHTML = `<i class="fas fa-check-circle"></i> ${message}`;
    
    // Add to form
    const form = loginForm || registerForm;
    if (form) {
        form.appendChild(successMessage);
    }
}

// Set up user profile
function setupUserProfile() {
    if (!userProfile || !profileButton || !profileDropdown || !logoutButton) return;
    
    // Toggle profile dropdown
    profileButton.addEventListener('click', () => {
        profileDropdown.classList.toggle('active');
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!userProfile.contains(e.target) && profileDropdown.classList.contains('active')) {
            profileDropdown.classList.remove('active');
        }
    });
    
    // Logout button
    logoutButton.addEventListener('click', (e) => {
        e.preventDefault();
        logout();
    });
}

// Logout function
function logout() {
    // Remove current user from local storage
    localStorage.removeItem(AUTH_KEYS.CURRENT_USER);
    
    // Redirect to landing page
    window.location.href = 'landing.html';
}

// Check authentication status
function checkAuthStatus() {
    const currentUser = getFromLocalStorage(AUTH_KEYS.CURRENT_USER);
    
    // Check if we're on landing page
    const isLandingPage = window.location.pathname.includes('landing.html');
    
    // If on landing page and user is already logged in, redirect to homepage
    if (currentUser && isLandingPage) {
        window.location.href = 'index.html';
        return;
    }
    
    // If on login/register page and user is already logged in, redirect to homepage
    if (currentUser && (window.location.pathname.includes('login.html') || window.location.pathname.includes('register.html'))) {
        window.location.href = 'index.html';
        return;
    }
    
    // If on main pages and user is not logged in, redirect to landing page
    if (!currentUser && !isLandingPage && !window.location.pathname.includes('login.html') && !window.location.pathname.includes('register.html')) {
        window.location.href = 'landing.html';
        return;
    }
    
    // Update user profile if logged in
    updateUserProfile(currentUser);
}

// Update user profile
function updateUserProfile(user) {
    if (!user || !userProfile || !profileName) return;
    
    // Show user profile
    userProfile.style.display = 'block';
    
    // Set user name
    profileName.textContent = user.name;
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initAuth);

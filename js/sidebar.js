// Mobile Sidebar Navigation
document.addEventListener('DOMContentLoaded', function() {
    // Elements
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mobileSidebar = document.getElementById('mobileSidebar');
    const sidebarClose = document.getElementById('sidebarClose');
    const sidebarOverlay = document.getElementById('sidebarOverlay');
    const sidebarLanguageSelect = document.getElementById('sidebarLanguageSelect');
    const mainLanguageSelect = document.getElementById('languageSelect');
    
    // Open sidebar
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            mobileSidebar.classList.add('active');
            sidebarOverlay.classList.add('active');
            document.body.classList.add('sidebar-open');
        });
    }
    
    // Close sidebar
    if (sidebarClose) {
        sidebarClose.addEventListener('click', closeSidebar);
    }
    
    // Close sidebar when clicking on overlay
    if (sidebarOverlay) {
        sidebarOverlay.addEventListener('click', closeSidebar);
    }
    
    // Close sidebar when clicking on a link (for mobile)
    const sidebarLinks = document.querySelectorAll('.sidebar-nav a');
    sidebarLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Small delay to allow the click to register before closing
            setTimeout(closeSidebar, 150);
        });
    });
    
    // Sync language selection between sidebar and header
    if (sidebarLanguageSelect && mainLanguageSelect) {
        // Set initial value
        sidebarLanguageSelect.value = mainLanguageSelect.value;
        
        // Sync sidebar language to main language
        sidebarLanguageSelect.addEventListener('change', function() {
            mainLanguageSelect.value = this.value;
            // Trigger the change event on the main language select
            const event = new Event('change');
            mainLanguageSelect.dispatchEvent(event);
        });
        
        // Sync main language to sidebar language
        mainLanguageSelect.addEventListener('change', function() {
            sidebarLanguageSelect.value = this.value;
        });
    }
    
    // Function to close sidebar
    function closeSidebar() {
        mobileSidebar.classList.remove('active');
        sidebarOverlay.classList.remove('active');
        document.body.classList.remove('sidebar-open');
    }
    
    // Set active link in sidebar based on current page
    function setActiveSidebarLink() {
        const currentPage = window.location.pathname.split('/').pop();
        const sidebarLinks = document.querySelectorAll('.sidebar-nav a');
        
        sidebarLinks.forEach(link => {
            const linkHref = link.getAttribute('href');
            if (linkHref === currentPage || 
                (currentPage === '' && linkHref === 'index.html')) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }
    
    // Call the function to set active link
    setActiveSidebarLink();
});

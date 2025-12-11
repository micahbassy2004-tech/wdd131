// Product array data
const products = [
    { id: "prod001", name: "SmartHome Thermostat Pro" },
    { id: "prod002", name: "UltraClean Air Purifier" },
    { id: "prod003", name: "PowerMax Cordless Drill" },
    { id: "prod004", name: "AquaFresh Water Filter System" },
    { id: "prod005", name: "EcoGrow Indoor Garden Kit" },
    { id: "prod006", name: "SoundScape Bluetooth Speaker" },
    { id: "prod007", name: "SwiftCharge Power Bank" },
    { id: "prod008", name: "FlexFit Yoga Mat" },
    { id: "prod009", name: "ChefMaster Knife Set" },
    { id: "prod010", name: "NightGuard Security Camera" }
];

// Function to populate product select options
function populateProductOptions() {
    const productSelect = document.getElementById('productName');
    
    // Clear any existing options (except the first placeholder)
    while (productSelect.options.length > 1) {
        productSelect.remove(1);
    }
    
    // Add product options from the array
    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });
}

// Set min date to today and max date to today for date input
function setDateLimits() {
    const dateInput = document.getElementById('installDate');
    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0];
    
    // Set max date to today (can't install in the future)
    dateInput.max = formattedDate;
    
    // Set a default value to 30 days ago for convenience
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(today.getDate() - 30);
    const formattedThirtyDaysAgo = thirtyDaysAgo.toISOString().split('T')[0];
    dateInput.value = formattedThirtyDaysAgo;
}

// Form validation function
function validateForm() {
    const form = document.getElementById('reviewForm');
    const requiredFields = form.querySelectorAll('[required]');
    let isValid = true;
    
    // Check each required field
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            isValid = false;
            // Add visual error state
            field.classList.add('error');
            
            // Add error message if not already present
            if (!field.nextElementSibling || !field.nextElementSibling.classList.contains('error-message')) {
                const errorMessage = document.createElement('div');
                errorMessage.className = 'error-message';
                errorMessage.textContent = 'This field is required';
                errorMessage.style.color = '#ef4444';
                errorMessage.style.fontSize = '0.875rem';
                errorMessage.style.marginTop = '0.25rem';
                field.parentNode.insertBefore(errorMessage, field.nextSibling);
            }
        } else {
            // Remove error state
            field.classList.remove('error');
            
            // Remove error message if present
            if (field.nextElementSibling && field.nextElementSibling.classList.contains('error-message')) {
                field.nextElementSibling.remove();
            }
        }
    });
    
    // Special validation for radio buttons
    const ratingRadios = document.querySelectorAll('input[name="rating"]');
    const ratingSelected = Array.from(ratingRadios).some(radio => radio.checked);
    
    if (!ratingSelected) {
        isValid = false;
        const ratingFieldset = document.querySelector('fieldset');
        if (ratingFieldset && (!ratingFieldset.nextElementSibling || !ratingFieldset.nextElementSibling.classList.contains('error-message'))) {
            const errorMessage = document.createElement('div');
            errorMessage.className = 'error-message';
            errorMessage.textContent = 'Please select a rating';
            errorMessage.style.color = '#ef4444';
            errorMessage.style.fontSize = '0.875rem';
            errorMessage.style.marginTop = '0.25rem';
            ratingFieldset.parentNode.insertBefore(errorMessage, ratingFieldset.nextSibling);
        }
    }
    
    return isValid;
}

// Initialize form when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Populate product options
    populateProductOptions();
    
    // Set date limits
    setDateLimits();
    
    // Add form validation on submit
    const form = document.getElementById('reviewForm');
    form.addEventListener('submit', function(event) {
        if (!validateForm()) {
            event.preventDefault(); // Prevent form submission if validation fails
        }
    });
    
    // Add real-time validation for required fields
    const requiredFields = form.querySelectorAll('[required]');
    requiredFields.forEach(field => {
        field.addEventListener('blur', function() {
            if (!this.value.trim()) {
                this.classList.add('error');
            } else {
                this.classList.remove('error');
                // Remove error message if present
                if (this.nextElementSibling && this.nextElementSibling.classList.contains('error-message')) {
                    this.nextElementSibling.remove();
                }
            }
        });
        
        field.addEventListener('input', function() {
            if (this.value.trim()) {
                this.classList.remove('error');
                // Remove error message if present
                if (this.nextElementSibling && this.nextElementSibling.classList.contains('error-message')) {
                    this.nextElementSibling.remove();
                }
            }
        });
    });
    
    // Real-time validation for rating radio buttons
    const ratingRadios = document.querySelectorAll('input[name="rating"]');
    ratingRadios.forEach(radio => {
        radio.addEventListener('change', function() {
            const ratingFieldset = document.querySelector('fieldset');
            if (ratingFieldset.nextElementSibling && ratingFieldset.nextElementSibling.classList.contains('error-message')) {
                ratingFieldset.nextElementSibling.remove();
            }
        });
    });
    
    // Enhance form usability with keyboard navigation
    form.addEventListener('keydown', function(event) {
        // Handle enter key on non-textarea fields
        if (event.key === 'Enter' && event.target.tagName !== 'TEXTAREA') {
            // Don't submit form unless it's the submit button
            if (event.target.type !== 'submit') {
                event.preventDefault();
                
                // Find the next focusable element
                const focusableElements = Array.from(form.querySelectorAll(
                    'input:not([type="hidden"]):not([disabled]), ' +
                    'select:not([disabled]), ' +
                    'textarea:not([disabled]), ' +
                    'button:not([disabled]), ' +
                    '[tabindex]:not([tabindex="-1"])'
                ));
                
                const currentIndex = focusableElements.indexOf(event.target);
                if (currentIndex !== -1 && currentIndex < focusableElements.length - 1) {
                    focusableElements[currentIndex + 1].focus();
                }
            }
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    // Update footer with current year and last modified date
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    document.getElementById('lastModified').textContent = document.lastModified;

    // Populate product select options (example)
    const productSelect = document.getElementById('productName');
    const products = ["Product A", "Product B", "Product C"];
    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.toLowerCase().replace(/\s+/g, '-');
        option.textContent = product;
        productSelect.appendChild(option);
    });
});

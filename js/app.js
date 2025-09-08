// Metal prices per pound (lb)
const metalPrices = {
    copper: 3.50,
    aluminum: 0.75,
    steel: 0.30,
    brass: 2.00,
    iron: 0.15
};

// DOM Elements
const metalTypeSelect = document.getElementById('metal-type');
const weightInput = document.getElementById('weight');
const calculateBtn = document.getElementById('calculate-btn');
const resultMetalType = document.getElementById('result-metal-type');
const resultWeight = document.getElementById('result-weight');
const resultPrice = document.getElementById('result-price');
const resultTotal = document.getElementById('result-total');
const priceUpdateDate = document.getElementById('price-update-date');

// Set current date for price update
const currentDate = new Date();
const options = { year: 'numeric', month: 'long', day: 'numeric' };
priceUpdateDate.textContent = currentDate.toLocaleDateString('en-US', options);

// Calculate button event listener
calculateBtn.addEventListener('click', calculateScrapValue);

// Weight input event listener for real-time calculation
weightInput.addEventListener('input', function() {
    // Only calculate if there's a valid weight
    if (this.value && this.value > 0) {
        calculateScrapValue();
    }
});

// Metal type change event listener
metalTypeSelect.addEventListener('change', calculateScrapValue);

/**
 * Calculate the total value of scrap based on weight and metal type
 */
function calculateScrapValue() {
    // Get values from inputs
    const metalType = metalTypeSelect.value;
    const weight = parseFloat(weightInput.value);
    
    // Validate input
    if (isNaN(weight) || weight <= 0) {
        showError('Please enter a valid weight greater than zero.');
        return;
    }
    
    // Get price for selected metal
    const pricePerPound = metalPrices[metalType];
    
    // Calculate total value
    const totalValue = weight * pricePerPound;
    
    // Update results
    updateResults(metalType, weight, pricePerPound, totalValue);
}

/**
 * Update the results section with calculation results
 */
function updateResults(metalType, weight, pricePerPound, totalValue) {
    // Format the metal type for display (capitalize first letter)
    const formattedMetalType = metalType.charAt(0).toUpperCase() + metalType.slice(1);
    
    // Update result elements
    resultMetalType.textContent = formattedMetalType;
    resultWeight.textContent = `${weight.toFixed(2)} lbs`;
    resultPrice.textContent = `$${pricePerPound.toFixed(2)}/lb`;
    resultTotal.textContent = `$${totalValue.toFixed(2)}`;
    
    // Add animation effect to show updated results
    const resultCard = document.querySelector('.result-card');
    resultCard.classList.add('updated');
    
    // Remove animation class after animation completes
    setTimeout(() => {
        resultCard.classList.remove('updated');
    }, 1000);
}

/**
 * Show error message to user
 */
function showError(message) {
    // Clear previous results
    resultMetalType.textContent = '-';
    resultWeight.textContent = '-';
    resultPrice.textContent = '-';
    resultTotal.textContent = '-';
    
    // Show error alert
    alert(message);
    
    // Focus on weight input
    weightInput.focus();
}

// Add CSS for the update animation
document.head.insertAdjacentHTML('beforeend', `
<style>
    @keyframes highlight {
        0% { background-color: #f9f9f9; }
        50% { background-color: #e3f2fd; }
        100% { background-color: #f9f9f9; }
    }
    
    .result-card.updated {
        animation: highlight 1s ease;
    }
</style>
`);

// Initialize the app
function init() {
    // Set default values
    metalTypeSelect.value = 'copper';
    weightInput.value = '';
    
    // Focus on weight input
    weightInput.focus();
    
    // Add swipe gesture support for mobile
    addMobileGestures();
}

/**
 * Add mobile-specific gesture support
 */
function addMobileGestures() {
    // Simple detection for touch devices
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    if (isTouchDevice) {
        // Add classes for mobile-specific styling
        document.body.classList.add('touch-device');
        
        // Add swipe between input and results sections on small screens
        const calculator = document.querySelector('.calculator');
        const inputSection = document.querySelector('.input-section');
        const resultsSection = document.querySelector('.results-section');
        
        // Only add swipe functionality if we're on a small screen where the sections stack
        if (window.innerWidth <= 768) {
            let startX, startY;
            
            calculator.addEventListener('touchstart', function(e) {
                startX = e.touches[0].clientX;
                startY = e.touches[0].clientY;
            }, false);
            
            calculator.addEventListener('touchend', function(e) {
                if (!startX || !startY) return;
                
                const endX = e.changedTouches[0].clientX;
                const endY = e.changedTouches[0].clientY;
                
                const diffX = startX - endX;
                const diffY = startY - endY;
                
                // Only respond to horizontal swipes (not vertical scrolling)
                if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
                    if (diffX > 0) {
                        // Swipe left - show results
                        inputSection.style.display = 'none';
                        resultsSection.style.display = 'block';
                    } else {
                        // Swipe right - show input
                        inputSection.style.display = 'block';
                        resultsSection.style.display = 'none';
                    }
                }
                
                startX = null;
                startY = null;
            }, false);
        }
    }
}

// Initialize the app when DOM is fully loaded
document.addEventListener('DOMContentLoaded', init);
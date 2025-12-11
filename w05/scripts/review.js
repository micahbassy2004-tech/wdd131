// Function to update and display the review counter using localStorage
function updateReviewCounter() {
    // Get the current count from localStorage
    let reviewCount = localStorage.getItem('productReviewCount');
    
    // If it doesn't exist, initialize it to 0
    if (!reviewCount) {
        reviewCount = 0;
    } else {
        // Convert to number
        reviewCount = parseInt(reviewCount);
    }
    
    // Increment the count
    reviewCount++;
    
    // Save the updated count to localStorage
    localStorage.setItem('productReviewCount', reviewCount);
    
    // Display the count
    const countElement = document.getElementById('reviewCount');
    if (countElement) {
        countElement.textContent = reviewCount;
    }
    
    return reviewCount;
}

// Initialize when the page loads
document.addEventListener('DOMContentLoaded', function() {
    // Only update the counter if we came from the form submission
    // Check for URL parameters to confirm it's a form submission
    const urlParams = new URLSearchParams(window.location.search);
    
    // If there are form parameters, assume it's a form submission
    if (urlParams.toString()) {
        updateReviewCounter();
    } else {
        // If not from form submission, just display the current count
        const reviewCount = localStorage.getItem('productReviewCount') || 0;
        const countElement = document.getElementById('reviewCount');
        if (countElement) {
            countElement.textContent = reviewCount;
        }
    }
    
    // Add animation to the confirmation icon
    const confirmationIcon = document.querySelector('.confirmation-icon');
    if (confirmationIcon) {
        // Small animation on load
        confirmationIcon.style.transform = 'scale(0)';
        confirmationIcon.style.transition = 'transform 0.5s ease-out';
        
        // Trigger animation
        setTimeout(() => {
            confirmationIcon.style.transform = 'scale(1)';
        }, 100);
    }
    
    // Add functionality to clear review counter
    const clearCounterBtn = document.createElement('button');
    clearCounterBtn.textContent = 'Clear Counter';
    clearCounterBtn.className = 'btn secondary';
    clearCounterBtn.style.marginTop = '1rem';
    clearCounterBtn.onclick = function() {
        localStorage.removeItem('productReviewCount');
        document.getElementById('reviewCount').textContent = '0';
        alert('Review counter has been reset to 0.');
    };
    
    // Add the clear button to the review counter section
    const reviewCounterSection = document.querySelector('.review-counter');
    if (reviewCounterSection) {
        reviewCounterSection.appendChild(clearCounterBtn);
    }
});
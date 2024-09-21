// Page navigation setup
const pages = ['NumOfUsers', 'Usage', 'Phones', 'PhoneNumbers', 'DomVerification', 'CheckoutSignUp', 'CheckoutShipInfo', 'CheckoutTerms', 'CheckoutPay'];

let currentPageIndex = 0;
let userCount = 1; // Initial user count

loadPage(pages[currentPageIndex]);

// Function to load the specified page
function loadPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.style.display = 'none'; // Hide all pages
    });

    document.getElementById(pageId).style.display = 'block'; // Show current page

    updateNavButtons();
}

// Update the "Back" and "Continue" button states
function updateNavButtons() {
    const currentPage = document.getElementById(pages[currentPageIndex]);
    
    const backButton = currentPage.querySelector('#back-btn');
    if (backButton) {
        backButton.style.display = currentPageIndex === 0 ? 'none' : 'inline-block'; // Hide back button on first page
    }

    const continueButton = currentPage.querySelector('#continue-btn');
    if (continueButton) {
        continueButton.textContent = currentPageIndex === pages.length - 1 ? 'Finish' : 'Continue'; // Update button text for last page
    }
}

// Event listener for navigation buttons (continue and back)
document.getElementById('main-container').addEventListener('click', (event) => {
    if (event.target.classList.contains('nav-btn')) {
        if (event.target.id === 'continue-btn') {
            goNext(); // Go to the next page
        } else if (event.target.id === 'back-btn') {
            goBack(); // Go to the previous page
        }
    }
});

// Go to the next page
function goNext() {
    if (currentPageIndex < pages.length - 1) {
        currentPageIndex++;
        loadPage(pages[currentPageIndex]);
    }

    if (currentPageIndex === pages.length - 1) {
        document.getElementById('pay-now').disabled = false; // Enable pay-now button on the last page
    }
}

// Go to the previous page
function goBack() {
    if (currentPageIndex > 0) {
        currentPageIndex--;
        loadPage(pages[currentPageIndex]);

        if (currentPageIndex !== pages.length - 1) {
            document.getElementById('pay-now').disabled = true; // Disable pay-now button if not on the last page
        }
    }
}

// Event Listeners for Number of Users (plus and minus buttons)
document.getElementById('plus-btn').addEventListener('click', () => {
    userCount++;
    updateUserCount();
});

document.getElementById('minus-btn').addEventListener('click', () => {
    if (userCount > 1) {
        userCount--;
        updateUserCount();
    }
});

// Update the displayed user count
function updateUserCount() {
    document.getElementById('user-count').textContent = userCount;
}

// Event listener for the pooled minutes input on the Usage page
document.getElementById('main-container').addEventListener('input', (event) => {
    if (event.target.id === 'minutes-input') {
        updatePooledMinutes(event.target.value); // Update pooled minutes on input
    }
});

// Handle updating pooled minutes
function updatePooledMinutes(minutes) {
    console.log(`Pooled minutes updated to: ${minutes}`);
}

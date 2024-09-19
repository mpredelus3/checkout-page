// Array of page IDs in the order they should be displayed
const pages = ['NumOfUsers', 'Usage', 'Phones', 'PhoneNumbers', 'DomVerification', 'CheckoutSignUp', 'CheckoutShipInfo', 'CheckoutTerms', 'CheckoutPay'];


let currentPageIndex = 0;
loadPage(pages[currentPageIndex]);

// Function to load a specific page
function loadPage(pageId) {

    document.querySelectorAll('.page').forEach(page => {
        page.style.display = 'none';
    });

    document.getElementById(pageId).style.display = 'block';
 
    updateNavButtons();
}

// Function to update the "Back" and "Continue" button states
function updateNavButtons() {
    
    const currentPage = document.getElementById(pages[currentPageIndex]);
    const backButton = currentPage.querySelector('#back-btn');
    if (backButton) {
        backButton.style.display = currentPageIndex === 0 ? 'none' : 'inline-block';
    }
    const continueButton = currentPage.querySelector('#continue-btn');
    if (continueButton) {
        continueButton.textContent = currentPageIndex === pages.length - 1 ? 'Finish' : 'Continue';
    }
}

// Event delegation to handle "Back" and "Continue" button clicks
document.getElementById('content-area').addEventListener('click', (event) => {
    if (event.target.classList.contains('nav-btn')) {
        if (event.target.id === 'continue-btn') {
            goNext();
        } else if (event.target.id === 'back-btn') {
            goBack();
        }
    }
});

// Function to go to the next page
function goNext() {
    if (currentPageIndex < pages.length - 1) {
        currentPageIndex++;
        loadPage(pages[currentPageIndex]);
    }

    
    if (currentPageIndex === pages.length - 1) {
        document.getElementById('pay-now').disabled = false;
    }
}

// Function to go back to the previous page
function goBack() {
    if (currentPageIndex > 0) {
        currentPageIndex--;
        loadPage(pages[currentPageIndex]);

        // Disable 'Pay Now' button if not on the last page
        if (currentPageIndex !== pages.length - 1) {
            document.getElementById('pay-now').disabled = true;
        }
    }
}

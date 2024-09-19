// Store the IDs of the pages to be loaded
const pages = ['NumOfUsers', 'Usage', 'Phones', 'PhoneNumbers', 'DomVerification', 'CheckoutSignUp', 'CheckoutShipInfo', 'CheckoutTerms', 'CheckoutPay'];

// Track the current page index
let currentPageIndex = 0;

// Get the content area element
const contentArea = document.getElementById('content-area');

// Initialize the first page
loadPage(pages[currentPageIndex]);

// Function to load a page into the content area
function loadPage(pageId) {
    contentArea.innerHTML = `
        <div id="${pageId}">
            <h2>${pageId} Page</h2>
            <button id="back-btn" ${currentPageIndex === 0 ? 'disabled' : ''}>Back</button>
            <button id="continue-btn">${currentPageIndex === pages.length - 1 ? 'Finish' : 'Continue'}</button>
        </div>
    `;

    // Add event listeners for buttons
    document.getElementById('back-btn').addEventListener('click', goBack);
    document.getElementById('continue-btn').addEventListener('click', goNext);
}

// Function to go to the next page
function goNext() {
    if (currentPageIndex < pages.length - 1) {
        currentPageIndex++;
        loadPage(pages[currentPageIndex]);
    }

    // Enable 'Pay Now' button on the last page
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
        document.getElementById('pay-now').disabled = true;
    }
}

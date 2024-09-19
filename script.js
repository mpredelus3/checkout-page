const pages = ['NumOfUsers', 'Usage', 'Phones', 'PhoneNumbers', 'DomVerification', 'CheckoutSignUp', 'CheckoutShipInfo', 'CheckoutTerms', 'CheckoutPay'];

let currentPageIndex = 0;
let userCount = 1; // Initial user count

loadPage(pages[currentPageIndex]);

function loadPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.style.display = 'none';
    });

    document.getElementById(pageId).style.display = 'block';

    updateNavButtons();
}

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

document.getElementById('content-area').addEventListener('click', (event) => {
    if (event.target.classList.contains('nav-btn')) {
        if (event.target.id === 'continue-btn') {
            goNext();
        } else if (event.target.id === 'back-btn') {
            goBack();
        }
    }
});

function goNext() {
    if (currentPageIndex < pages.length - 1) {
        currentPageIndex++;
        loadPage(pages[currentPageIndex]);
    }

    if (currentPageIndex === pages.length - 1) {
        document.getElementById('pay-now').disabled = false;
    }
}

function goBack() {
    if (currentPageIndex > 0) {
        currentPageIndex--;
        loadPage(pages[currentPageIndex]);

        if (currentPageIndex !== pages.length - 1) {
            document.getElementById('pay-now').disabled = true;
        }
    }
}

// Event Listeners for Number of Users
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

function updateUserCount() {
    document.getElementById('user-count').textContent = userCount;
}

// Event listener for the pooled minutes input on the Usage page
document.getElementById('content-area').addEventListener('input', (event) => {
    if (event.target.id === 'minutes-input') {
        updatePooledMinutes(event.target.value);
    }
});

function updatePooledMinutes(minutes) {
    console.log(`Pooled minutes updated to: ${minutes}`);
}

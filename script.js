// Add Event Listeners to Dropdown Buttons
document.getElementById('shoWorksBanner').addEventListener('click', function(event) {
    // Toggle the 'open' class on the dropdown
    this.classList.toggle('open');

    window.scrollBy({
        top: 250, // Number of pixels to scroll down
        behavior: 'smooth' // Smooth scroll effect
    });
});

document.getElementById('contestHandbookBanner').addEventListener('click', function(event) {
    // Toggle the 'open' class on the dropdown
    this.classList.toggle('open');

    if (window.scrollY > 0) {
        window.scrollBy({
            top: 690, // Number of pixels to scroll down
            behavior: 'smooth' // Smooth scroll effect
        });
    }
});

// Prevent clicks inside dropdown content from closing the dropdown
document.querySelectorAll('.dropdown-content').forEach(function(dropdown) {
    dropdown.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevent click from propagating and closing the dropdown
    });
});

// Add Event Listeners to Dropdown Buttons
document.getElementById('shoWorksBanner').addEventListener('click', function() {
    this.classList.toggle('open');
    window.scrollBy({
        top: 250, // Number of pixels to scroll down
        behavior: 'smooth' // Smooth scroll effect
    });
});

document.getElementById('contestHandbookBanner').addEventListener('click', function() {
    this.classList.toggle('open');
    if (window.scrollY > 0) {
        window.scrollBy({
            top: 690, // Number of pixels to scroll down
            behavior: 'smooth' // Smooth scroll effect
        });
    }
});

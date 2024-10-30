document.addEventListener("DOMContentLoaded", function() {
    // Add hover effect to the logo
    const logo = document.querySelector('.logo img');
    logo.addEventListener('mouseenter', function() {
        logo.style.transform = 'scale(1.1)';
        logo.style.transition = 'transform 0.3s ease';
    });

    logo.addEventListener('mouseleave', function() {
        logo.style.transform = 'scale(1)';
    });

    // Animate the search bar input field on focus
    const searchInput = document.querySelector('main input');
    searchInput.addEventListener('focus', function() {
        searchInput.style.width = '90%';
        searchInput.style.transition = 'width 0.5s ease';
    });

    searchInput.addEventListener('blur', function() {
        searchInput.style.width = '60%';
    });

    // Footer animation on scroll
    const footer = document.querySelector('footer');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            footer.style.backgroundColor = '#ff5a60';
            footer.style.transition = 'background-color 0.5s ease';
        } else {
            footer.style.backgroundColor = '#ff4d4d';
        }
    });
});
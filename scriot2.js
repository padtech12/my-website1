document.addEventListener("DOMContentLoaded", function() {
    const emailLink = document.querySelector('.email-link');

    emailLink.addEventListener('click', function(event) {
        event.preventDefault();
        const email = emailLink.getAttribute('href').replace('mailto:', '');
        alert('Opening email client...');
        window.location.href = 'mailto:' + email;
    });
});
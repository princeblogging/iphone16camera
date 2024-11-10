// This script is for any additional interactivity, like opening links in new tabs
document.querySelectorAll('.blog-link').forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        window.open(link.href, '_blank'); // Open link in a new tab
    });
});

document.getElementById('search-input').addEventListener('input', filterImages);
document.getElementById('filter').addEventListener('change', filterImages);

function filterImages() {
    const keyword = document.getElementById('search-input').value.toLowerCase();
    const filter = document.getElementById('filter').value;
    const images = document.querySelectorAll('.grid-item');

    images.forEach(image => {
        const tags = image.getAttribute('data-tags').toLowerCase().split(', ');
        const title = image.querySelector('h3').textContent.toLowerCase();
        const description = image.querySelector('p').textContent.toLowerCase();

        const matchesFilter = filter === 'all' || tags.includes(filter);
        const matchesKeyword = keyword === '' || tags.some(tag => tag.includes(keyword)) || title.includes(keyword) || description.includes(keyword);

        if (matchesFilter && matchesKeyword) {
            image.style.display = 'flex';
        } else {
            image.style.display = 'none';
        }
    });
}

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.style.display = navLinks.style.display === 'block' ? 'none' : 'block';
}

document.addEventListener("DOMContentLoaded", function() {
    // Select all links on the page
    const allLinks = document.querySelectorAll("a");

    // Loop through each link
    allLinks.forEach(link => {
        // Check if the link is within the specified sections
        if (
            !link.closest(".explore-more") &&
            !link.closest(".nav-link") &&
            !link.closest(".image-grid") &&
            !link.closest(".dropdown-content")
        ) {
            // If not, set it to open in a new window
            link.setAttribute("target", "_blank");
        } else {
            // Otherwise, ensure it opens in the same window/tab
            link.setAttribute("target", "_self");
        }
    });
});



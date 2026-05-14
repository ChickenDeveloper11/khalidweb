document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.nav-links');
    const currentPath = window.location.pathname.split("/").pop();

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add("active");
        } else {
            link.classList
        }
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        } else {
            entry.target.classList.remove('active');
        }
    });
}, {
    threshold: 0.1
});

const hiddenElements = document.querySelectorAll('.reveal');
hiddenElements.forEach((el) => observer.observe(el));

function moveCard(direction) {
    const wrappper = document.querySelector('.carousel-wrapper');
    const cardWidth = wrappper.offsetWidth;

    wrappper.scrollLeft += direction * cardWidth;
}
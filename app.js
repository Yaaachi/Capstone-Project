const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.links');
    const navLinks = document.querySelectorAll('.links li');

    burger.addEventListener('click', () => {
        // Toggle menu nav
        nav.classList.toggle('nav-active');
        // Burger animation
        burger.classList.toggle('toggle');

        // Animate links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });
    });
}

// Toggle menu nav
navSlide();

// Slide show of gallery
const images = [
    'images/Super Market.jpg',
    'images/indiana.jpg',
    'images/nileRiver.jpg"',
    'images/Sail.jpg',
    'images/bags.jpg"',
    'images/ManDrum.jpg',
    'images/dance.jpg',
    'images/indiana.jpg',
    'images/girldrum.jpg',
    'images/vergies.jpg',
    
    // more image paths
];

let currentIndex = 0;

function showImage(index) {
    const slideImage = document.getElementById('current-slide');
    currentIndex = index;
    slideImage.src = images[currentIndex];
}

function changeSlide(step) {
    currentIndex += step;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    } else if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    showImage(currentIndex);
}

// Initialize the slideshow with the first image
showImage(currentIndex);

// Booking
document.addEventListener("DOMContentLoaded", function() {
    const bookingType = document.getElementById("bookingType");
    const eventType = document.getElementById("eventType");
    const bookingForm = document.getElementById("bookingForm");
    const acknowledgmentMessage = document.getElementById("acknowledgmentMessage");
    const alertHeading = acknowledgmentMessage.querySelector('h4');
    const alertMessage = acknowledgmentMessage.querySelector('p');

    bookingType.addEventListener("change", function() {
        if (this.value === "event") {
            eventType.style.display = "block";
            eventType.required = true;
        } else {
            eventType.style.display = "none";
            eventType.required = false;
        }
    });

    bookingForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const seats = parseInt(document.getElementById("seats").value);
        const date = document.getElementById("date").value;
        const time = document.getElementById("time").value;
        const bookingType = document.getElementById("bookingType").value;
        const eventType = document.getElementById("eventType").value;

        const mailtoLink = `mailto:s226221156@mandela.ac.za`;        
        window.location.href = mailtoLink;
    });
});
$(document).ready(function() {
    $('#bookingForm').on('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        $('#acknowledgmentMessage').show();
    });

    $('#exit-btn').on('click', function() {
        $('#acknowledgmentMessage').hide(); 
    });
});


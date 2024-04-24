document.addEventListener("DOMContentLoaded", function () {
    const paymentMethodSelect = document.getElementById("payment-method");
    const onlinePaymentOptions = document.getElementById("online-payment-options");

    paymentMethodSelect.addEventListener("change", function () {
        if (paymentMethodSelect.value === "online-payment") {
            onlinePaymentOptions.style.display = "block";
        } else {
            onlinePaymentOptions.style.display = "none"; // Corrected line
        }
    });
});
   // Add smooth scrolling to anchor links
   $('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if (target.length) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000); // You can adjust the duration (in milliseconds) to control the scroll speed
    }
});
// Function to check if an element is in the viewport
function isInViewport(element) {
var rect = element.getBoundingClientRect();
return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
);
}

// Function to handle animations
function animateSections() {
const sections = document.querySelectorAll('.my-5');

sections.forEach((section) => {
    if (isInViewport(section)) {
        section.style.opacity = 1;
        section.style.transform = 'translateY(0)';
    }
});
}

// Add an event listener for scroll
window.addEventListener('scroll', animateSections);

// Initial call to animate sections when the page loads
animateSections();
$(document).ready(function() {
    // Toggle the navigation when the toggle icon is clicked
    $('.navbar-toggler').click(function() {
        $('#navbarNav').toggleClass('show');
    });
});
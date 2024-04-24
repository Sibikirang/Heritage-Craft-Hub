// Function to handle the redirection to the menu page
function returnToMenu() {
    // Redirect to the menu page. Update the URL as needed.
    window.location.href = "/templates/menu.html";
}

function confirmOrder() {
// Retrieve the selected item details from sessionStorage
const storedItem = JSON.parse(sessionStorage.getItem('selectedItem'));

// Send order details to the server
$.post("process_order.php", {
    itemTitle: storedItem.title,
    itemDescription: storedItem.description,
    itemPrice: storedItem.price,
    itemRating: storedItem.rating
}, function (data, status) {
    // Handle the server's response
    alert("Data: " + data + "\nStatus: " + status);
});

// Show a popup message for successful order
window.alert('Order confirmed! Thank you for choosing us. Your order will be delivered shortly.');
}
    // Retrieve the selected item details from sessionStorage and display on the confirmation page as a bill
    const storedItem = JSON.parse(sessionStorage.getItem('selectedItem'));
    if (storedItem) {
        document.getElementById('item-image').src = storedItem.image;
        document.getElementById('item-title').textContent = storedItem.title;
        document.getElementById('item-description').textContent = storedItem.description;
        document.getElementById('item-price').textContent = `Price: ${storedItem.price}`;
    } else {
        // If no item is selected, handle this scenario accordingly
        console.log('No item selected.');
    }
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
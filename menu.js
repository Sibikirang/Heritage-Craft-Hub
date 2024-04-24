  // Initialize an empty object to hold the selected item
  let selectedItem = {};

  // Example onclick function for 'Order Now' button of each item
  document.querySelectorAll('.btn-primary').forEach(button => {
      button.addEventListener('click', function(event) {
          // Get details of the selected item
          const card = button.closest('.card');
          selectedItem = {
              title: card.querySelector('.card-title').innerText,
              description: card.querySelector('.card-text').innerText,
              price: card.querySelector('.text-primary').innerText,
              rating: card.querySelectorAll('.card-text')[1].innerText,
              image: card.querySelector('.card-img-top').src
          };
          // Store the selected item details in sessionStorage (to pass to the next page)
          sessionStorage.setItem('selectedItem', JSON.stringify(selectedItem));
          // Redirect to the order details page
          window.location.href = ''; // Replace 'order-details.html' with your actual page
      });
  });
   // Function to filter food items by rating
function filterByRating(minimumRating) {
    const allCards = document.querySelectorAll('.card');
    
    allCards.forEach(card => {
        const ratingElement = card.querySelector('.card-text:last-of-type');
        const rating = parseFloat(ratingElement.textContent.split(':')[1]);
        
        if (rating >= minimumRating || minimumRating === 0) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Event listener for the rating filter dropdown
document.getElementById('rating-filter').addEventListener('change', function() {
    const selectedRating = parseFloat(this.value);
    filterByRating(selectedRating);
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
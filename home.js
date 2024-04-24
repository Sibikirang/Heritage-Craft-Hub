$(document).ready(function(){
    $('#contactForm').submit(function(e){
        e.preventDefault();
        var formData = $(this).serialize();
        
        $.ajax({
            type: 'POST',
            url: $(this).attr('action'),
            data: formData,
            success: function(response) {
                // Check the response from the PHP script
                if (response.trim() === 'Message sent successfully!') {
                    // Display success message as a popup
                    alert("Message sent successfully!");
                    // You can use more stylish modal/popup libraries here
                } else {
                    // If there's an error, you can handle it accordingly
                    alert("An error occurred: " + response);
                }
            }
        });
    });
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
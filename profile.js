function saveProfile() {
    const nameInput = document.getElementById('name-input').value;
    const emailInput = document.getElementById('email-input').value;
    const phoneInput = document.getElementById('phone-input').value;
    const addressInput = document.getElementById('address-input').value;

    // Assuming you have the profile image data in a variable called 'profileImageData'
    const profileImageData = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQE...";

    // Send data to the PHP script using AJAX
    $.ajax({
        type: "POST",
        url: "save_profile.php",
        data: {
            name: nameInput,
            email: emailInput,
            phone: phoneInput,
            address: addressInput,
            profileImagePath: profileImageData
        },
        success: function(response) {
            alert(response); // Display the response from the server
        },
        error: function(error) {
            console.error("Error saving profile:", error);
        }
    });
}

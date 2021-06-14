// Contact form
// Inspired by Mr Matt Rudge

console.log("Contact Form Loaded");

function sendMail(contactForm) {
    emailjs.send("Gmail", "z-o-gallery", {
            "from_name": contactForm.name.value,
            "from_email": contactForm.emailaddress.value,
            "message": contactForm.getintouch.value
        })
        .then(
            function (response) {
                console.log("SUCCESS", response);
            },
            function (error) {
                console.log("FAILED", error);
            }
        );

    return false;
}

// https://stackoverflow.com/questions/37525339/change-submit-button-text-after-form-submit
$(document).ready(function () {
    $("#submit-button").click(function (event) {
        $('#submit-button').val('Sending message...');
        $('#contact-form').submit();
    });
    $('form').submit(function (event) {
        setTimeout(function () {
            $('#submit-button').val('Send');
            $('#contact-form')[0].reset();
        }, 2000);
        setTimeout(function () {
            alert("Your message has been sent! Thank You");
        }, 3000);
    });
});
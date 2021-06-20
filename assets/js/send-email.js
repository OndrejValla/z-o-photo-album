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

// Greeting based on the time of the day.
// https://www.w3schools.com/js/tryit.asp?filename=tryjs_elseif
function ourGreeting() {
    var comunication;
    var time = new Date().getHours();
    if (time < 12) {
        comunication = "Have a great day!";
    } else if (time < 18) {
        comunication = "Have a great afternoon!";
    } else {
        comunication = "Have a lovely evening!";
    }
    document.getElementById("interaction-h3").innerHTML = "Thank You for your message.";
    document.getElementById("interaction-h4").innerHTML = comunication;
    document.getElementById("interaction-p").innerHTML = "<br> Kind Regards <br> Zuzana and Ondrej";
}
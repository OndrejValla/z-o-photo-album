function bodyLoaded() {
    console.log('Body has loaded!');
}




$("#zuzana-button").on("click", function () {
    $("body").removeClass('body-blue');
    $("body").addClass('body-pink');
    $(".intro-p").html("<p>Pink is Zuzana's favourite colour.</p>");
    $(".intro-p").addClass('intro-p-pink');
    $("#intro-text-box").removeClass('intro-text-blue');
    $("#intro-text-box").addClass('intro-text-pink');
    $(".gallery-window").removeClass('gallery-window-blue');
    $(".gallery-window").addClass('gallery-window-pink');
})


$("#ondrej-button").on("click", function () {
    $("body").removeClass('body-pink');
    $("body").addClass('body-blue');
    $(".intro-p").html("<p>Blue is Ondrej's favourite colour.</p>");
    $(".intro-p").addClass('intro-p-blue');
    $("#intro-text-box").removeClass('intro-text-pink');
    $("#intro-text-box").addClass('intro-text-blue');
    $(".gallery-window").removeClass('gallery-window-pink');
    $(".gallery-window").addClass('gallery-window-blue');
});


$("#dubai-button").on("click", function () {
    $(".dubai-window").toggle('medium');
});

$("#cuba-button").on("click", function () {
    $(".cuba-window").toggle('medium');
});

$("#singapore-button").on("click", function () {
    $(".singapore-window").toggle('medium');
});

$("#java-button").on("click", function () {
    $(".java-window").toggle('medium');
});

$("#miami-button").on("click", function () {
    $(".miami-window").toggle('medium');
});

$("#disney-button").on("click", function () {
    $(".disney-window").toggle('medium');
});




//notes from lessons

$(document).ready(function () {
    $("h2").removeClass("underline");
    $("ul").addClass("border"); //this class needs to exist in css file
});





// Flip cards function
const card = document.querySelectorAll('.card-body');

card.forEach((card) => {
    card.addEventListener("click", () => {
        card.classList.toggle("is-flipped");
    });
});
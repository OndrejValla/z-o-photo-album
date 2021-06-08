function bodyLoaded() {
    console.log('Body has loaded!');
}

$(".fa-heart").mouseenter(function () {
    $(".fa-heart").css("color", "red")
});

$(".fa-heart").mouseleave(function () {
    $(".fa-heart").css("color", "black")
});

// Zuzana-style and Ondrej-style buttons
$("#zuzana-button").on("click", function () {
    $("body").removeClass('body-blue').addClass('body-pink');
    $(".intro-p").html("<p>Pink is Zuzana's favourite colour.</p>");
    $(".intro-p").addClass('intro-p-pink');
    $("#intro-text-box").removeClass('intro-text-blue').addClass('intro-text-pink');
    $(".gallery-window-row").removeClass('gallery-window-row-blue').addClass('gallery-window-row-pink');
});


$("#ondrej-button").on("click", function () {
    $("body").removeClass('body-pink').addClass('body-blue');
    $(".intro-p").html("<p>Blue is Ondrej's favourite colour.</p>");
    $(".intro-p").addClass('intro-p-blue');
    $("#intro-text-box").removeClass('intro-text-pink').addClass('intro-text-blue');
    $(".gallery-window-row").removeClass('gallery-window-row-pink').addClass('gallery-window-row-blue');
});

// Gallery page destinations buttons
$("#dubai-button").on("click", function () {
    $(".dubai-window").show('medium');
    $(".cuba-window").hide('fast');
    $(".singapore-window").hide('fast');
    $(".java-window").hide('fast');
    $(".miami-window").hide('fast');
    $(".disney-window").hide('fast');
});

$("#cuba-button").on("click", function () {
    $(".cuba-window").show('medium');
    $(".dubai-window").hide('fast');
    $(".singapore-window").hide('fast');
    $(".java-window").hide('fast');
    $(".miami-window").hide('fast');
    $(".disney-window").hide('fast');
});

$("#singapore-button").on("click", function () {
    $(".singapore-window").show('medium');
    $(".dubai-window").hide('fast');
    $(".cuba-window").hide('fast');
    $(".java-window").hide('fast');
    $(".miami-window").hide('fast');
    $(".disney-window").hide('fast');
});

$("#java-button").on("click", function () {
    $(".java-window").show('medium');
    $(".dubai-window").hide('fast');
    $(".cuba-window").hide('fast');
    $(".singapore-window").hide('fast');
    $(".miami-window").hide('fast');
    $(".disney-window").hide('fast');
});

$("#miami-button").on("click", function () {
    $(".miami-window").show('medium');
    $(".dubai-window").hide('fast');
    $(".cuba-window").hide('fast');
    $(".singapore-window").hide('fast');
    $(".java-window").hide('fast');
    $(".disney-window").hide('fast');
});

$("#disney-button").on("click", function () {
    $(".disney-window").show('medium');
    $(".dubai-window").hide('fast');
    $(".cuba-window").hide('fast');
    $(".singapore-window").hide('fast');
    $(".java-window").hide('fast');
    $(".miami-window").hide('fast');
});






// Flip cards function
const card = document.querySelectorAll('.card-body');

card.forEach((card) => {
    card.addEventListener("click", () => {
        card.classList.toggle("is-flipped");
    });
});
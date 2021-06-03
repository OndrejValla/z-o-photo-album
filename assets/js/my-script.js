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
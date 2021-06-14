function bodyLoaded() {
    console.log('Body has loaded!');
}


// Zuzana Ondrej Logo
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
    $(".gallery-message-h3").css("color", "whitesmoke");
});

// Gallery page destinations buttons
$(".gallery-window-row").ready(function () {
    //$(".dubai-window").hide('fast');
    $(".cuba-window").hide('fast');
    $(".singapore-window").hide('fast');
    $(".java-window").hide('fast');
    $(".miami-window").hide('fast');
    $(".disney-window").hide('fast');
});

$(".dubai-button").on("click", function () {
    $(".dubai-window").show('medium');
    $(".cuba-window").hide('fast');
    $(".singapore-window").hide('fast');
    $(".java-window").hide('fast');
    $(".miami-window").hide('fast');
    $(".disney-window").hide('fast');
    $(".gallery-message-h3").hide('fast');
});

$(".cuba-button").on("click", function () {
    $(".cuba-window").show('medium');
    $(".dubai-window").hide('fast');
    $(".singapore-window").hide('fast');
    $(".java-window").hide('fast');
    $(".miami-window").hide('fast');
    $(".disney-window").hide('fast');
    $(".gallery-message-h3").hide('fast');
});

$(".singapore-button").on("click", function () {
    $(".singapore-window").show('medium');
    $(".dubai-window").hide('fast');
    $(".cuba-window").hide('fast');
    $(".java-window").hide('fast');
    $(".miami-window").hide('fast');
    $(".disney-window").hide('fast');
    $(".gallery-message-h3").hide('fast');
});

$(".java-button").on("click", function () {
    $(".java-window").show('medium');
    $(".dubai-window").hide('fast');
    $(".cuba-window").hide('fast');
    $(".singapore-window").hide('fast');
    $(".miami-window").hide('fast');
    $(".disney-window").hide('fast');
    $(".gallery-message-h3").hide('fast');
});

$(".miami-button").on("click", function () {
    $(".miami-window").show('medium');
    $(".dubai-window").hide('fast');
    $(".cuba-window").hide('fast');
    $(".singapore-window").hide('fast');
    $(".java-window").hide('fast');
    $(".disney-window").hide('fast');
    $(".gallery-message-h3").hide('fast');
});

$(".disney-button").on("click", function () {
    $(".disney-window").show('medium');
    $(".dubai-window").hide('fast');
    $(".cuba-window").hide('fast');
    $(".singapore-window").hide('fast');
    $(".java-window").hide('fast');
    $(".miami-window").hide('fast');
    $(".gallery-message-h3").hide('fast');
});






// Flip cards function Inspired by Youtube and Web search
const card = document.querySelectorAll('.card-body');

card.forEach((card) => {
    card.addEventListener("click", () => {
        card.classList.toggle("is-flipped");
    });
});

// Google Maps API followed instructions of Google Maps Tutorials
function initMap() {
    var map = new google.maps.Map(document.getElementById("map-window"), {
        zoom: 1,
        center: {
            lat: 27.463730054771254,
            lng: 20.3533478093073
        }
    });

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var markers = locations.map((location, i) => {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    new MarkerClusterer(map, markers, {
        imagePath: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
    });
}

var locations = [{
        lat: 25.19367032562668,
        lng: 55.27234906051312
    },
    {
        lat: 23.188698773504868,
        lng: -81.17732827834554
    },
    {
        lat: 1.303255854524248,
        lng: 103.83279923972277
    },
    {
        lat: -7.819180600764947,
        lng: 110.37204796688415
    },
    {
        lat: 25.778265146658438,
        lng: -80.21997333565376
    },
    {
        lat: 48.86873130712801,
        lng: 2.781827944463382
    }
];


let one = document.getElementById("dubai-card");
let two = document.getElementById("cuba-card");
var cards = [one, two, ];
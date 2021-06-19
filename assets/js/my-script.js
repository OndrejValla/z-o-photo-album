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
    $(".footer-sections").removeClass('footer-sections-blue').addClass('footer-sections-pink');
});


$("#ondrej-button").on("click", function () {
    $("body").removeClass('body-pink').addClass('body-blue');
    $(".intro-p").html("<p>Blue is Ondrej's favourite colour.</p>");
    $(".intro-p").addClass('intro-p-blue');
    $("#intro-text-box").removeClass('intro-text-pink').addClass('intro-text-blue');
    $(".gallery-window-row").removeClass('gallery-window-row-pink').addClass('gallery-window-row-blue');
    $(".gallery-message-h3").css("color", "whitesmoke");
    $(".footer-sections").removeClass('footer-sections-pink').addClass('footer-sections-blue');
    $(".footer-socials").removeClass('footer-socials').addClass('footer-socials-blue');
});

// Gallery page destinations buttons
$(".gallery-window-row").ready(function () {
    $(".all-destinations-window").show('fast');
    $(".dubai-window").hide('fast');
    $(".cuba-window").hide('fast');
    $(".singapore-window").hide('fast');
    $(".java-window").hide('fast');
    $(".miami-window").hide('fast');
    $(".disney-window").hide('fast');
});

$(".dubai-button").on("click", function () {
    $(".dubai-window").show('medium');
    $(".all-destinations-window").hide('fast');
    $(".cuba-window").hide('fast');
    $(".singapore-window").hide('fast');
    $(".java-window").hide('fast');
    $(".miami-window").hide('fast');
    $(".disney-window").hide('fast');
    $(".gallery-message-h3").hide('fast');
});

$(".cuba-button").on("click", function () {
    $(".cuba-window").show('medium');
    $(".all-destinations-window").hide('fast');
    $(".dubai-window").hide('fast');
    $(".singapore-window").hide('fast');
    $(".java-window").hide('fast');
    $(".miami-window").hide('fast');
    $(".disney-window").hide('fast');
    $(".gallery-message-h3").hide('fast');
});

$(".singapore-button").on("click", function () {
    $(".singapore-window").show('medium');
    $(".all-destinations-window").hide('fast');
    $(".dubai-window").hide('fast');
    $(".cuba-window").hide('fast');
    $(".java-window").hide('fast');
    $(".miami-window").hide('fast');
    $(".disney-window").hide('fast');
    $(".gallery-message-h3").hide('fast');
});

$(".java-button").on("click", function () {
    $(".java-window").show('medium');
    $(".all-destinations-window").hide('fast');
    $(".dubai-window").hide('fast');
    $(".cuba-window").hide('fast');
    $(".singapore-window").hide('fast');
    $(".miami-window").hide('fast');
    $(".disney-window").hide('fast');
    $(".gallery-message-h3").hide('fast');
});

$(".miami-button").on("click", function () {
    $(".miami-window").show('medium');
    $(".all-destinations-window").hide('fast');
    $(".dubai-window").hide('fast');
    $(".cuba-window").hide('fast');
    $(".singapore-window").hide('fast');
    $(".java-window").hide('fast');
    $(".disney-window").hide('fast');
    $(".gallery-message-h3").hide('fast');
});

$(".disney-button").on("click", function () {
    $(".disney-window").show('medium');
    $(".all-destinations-window").hide('fast');
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


//random.html

$(".star-yellow").mouseenter(function () {
    $(".star-yellow").css("color", "gold")
});

$(".star-yellow").mouseleave(function () {
    $(".star-yellow").css("color", "goldenrod")
});

$(".star-white").click(function () {
    $(".star-white").css("color", "white")
});

// display random image
// https://www.w3resource.com/javascript-exercises/javascript-dom-exercise-11.php
function display_random_image() {
    var theImages = [{
        src: "assets/images/random/random-1.jpg",
        width: "393",
        height: "547"
    }, {
        src: "assets/images/random/random-2.jpg",
        width: "407",
        height: "555"
    }, {
        src: "assets/images/random/random-3.jpg",
        width: "730",
        height: "559"
    }, {
        src: "assets/images/random/random-4.jpg",
        width: "288",
        height: "512"
    }, {
        src: "assets/images/random/random-6.JPG",
        width: "324",
        height: "576"
    }, {
        src: "assets/images/random/random-9.JPG",
        width: "432",
        height: "576"
    }, {
        src: "assets/images/random/random-10.JPG",
        width: "564",
        height: "564"
    }, {
        src: "assets/images/random/random-13.JPG",
        width: "384",
        height: "512"
    }, {
        src: "assets/images/random/random-17.jpg",
        width: "384",
        height: "512"
    }, {
        src: "assets/images/random/random-18.jpg",
        width: "384",
        height: "512"
    }, {
        src: "assets/images/random/random-19.jpg",
        width: "396",
        height: "528"
    }, {
        src: "assets/images/random/random-20.jpg",
        width: "384",
        height: "512"
    }];

    var preBuffer = [];
    for (var i = 0, j = theImages.length; i < j; i++) {
        preBuffer[i] = new Image();
        preBuffer[i].src = theImages[i].src;
        preBuffer[i].width = theImages[i].width;
        preBuffer[i].height = theImages[i].height;
    }

    // create random image number
    function getRandomInt(min, max) {
        //  return Math.floor(Math.random() * (max - min + 1)) + min;

        imn = Math.floor(Math.random() * (max - min + 1)) + min;
        return preBuffer[imn];
    }

    // 0 is first image,   preBuffer.length - 1) is  last image

    var newImage = getRandomInt(0, preBuffer.length - 1);

    // remove the previous images
    var images = document.getElementsByTagName('img');
    var l = images.length;
    for (var p = 0; p < l; p++) {
        images[0].parentNode.removeChild(images[0]);
    }
    // display the image  
    document.getElementById("randomdiv").appendChild(newImage);
}
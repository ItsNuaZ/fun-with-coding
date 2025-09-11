$(document).ready(function() {
    function getRandom(min, max) {
        return Math.random() * (max - min) + min;
    }

    function randomizeRGB() {
        let r = getRandom(0, 255);
        let g = getRandom(0, 255);
        let b = getRandom(0, 255);

        return `rgb(${r}, ${g}, ${b})`;
    }

    $(".button").click(function() {
        $("body").css("background", randomizeRGB());
    });
});
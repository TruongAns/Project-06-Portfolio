$(document).ready(function () {
    $(".nav__img").click(function (e) {
        e.preventDefault();
        $(window).scrollTop(0);
    });

    $(".testimonal__list").flickity({
        // options
        // cellAlign: "center",
        contain: true,
        wrapAround: true,
        groupCells: 1,
        autoPlay: 1500,
        prevNextButtons: false,
        pauseAutoPlayOnHover: false,
    });
});

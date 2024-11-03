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

    $(".faq__item .answer").slideUp();

    showFirstFaq();
    $(".faq__item .question").click(function (e) {
        $(this).next().slideToggle();
        $(this).children(".icon").toggleClass("fa-plus");
        // $(this).children(".icon").toggleClass("fa-minus");
        $(this).toggleClass("active");
        // this.next().slideToggle();
    });

    function showFirstFaq() {
        $(".faq__item .answer").first().slideDown();
        $(".faq__item .question").first().children(".icon").toggleClass("fa-plus");
        $(".faq__item .question").first().toggleClass("active");
    }
});

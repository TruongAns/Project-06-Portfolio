$(document).ready(function () {
    $(".nav__img").click(function (e) {
        e.preventDefault();
        $(window).scrollTop(0);
    });

    initFaq();
    initTestimonal();
    intitAbout();
    initMobileNav();
    reponsiveMobile();
    check();
    AOS.init({
        duration: 1000,
        once: false,
        mirror: true,
    });
});

function initFaq() {
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
}

function initTestimonal() {
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
}

function intitAbout() {
    const player = new Plyr("#about-video");
}

function initMobileNav() {
    $(".nav__mobile").click(function (e) {
        console.log("ok");
        $(this).toggleClass("active");
    });

    let innerHTML = $(".nav__list").html();
    $(".nav__mobile__list").html(innerHTML);
}

let flickityInstance;
function initService(width) {
    if (width < 767.98) {
        flickityInstance = $(".service-wrap").flickity({
            // options
            // cellAlign: "center",
            contain: true,
            wrapAround: true,
            groupCells: 1,
            autoPlay: 1500,
            prevNextButtons: false,
            pauseAutoPlayOnHover: false,
        });
    } else {
        if (flickityInstance) {
            flickityInstance.flickity("destroy");
            flickityInstance = null; // Đặt lại phiên bản
        }
    }
}
let flickityInstanceGalerry;
function initGalerry(width) {
    if (width < 767.98) {
        flickityInstanceGalerry = $(".gallery__list").flickity({
            // options
            // cellAlign: "center",
            contain: true,
            wrapAround: true,
            groupCells: 1,
            autoPlay: 1500,
            prevNextButtons: false,
            pauseAutoPlayOnHover: false,
        });
    } else {
        if (flickityInstanceGalerry) {
            flickityInstanceGalerry.flickity("destroy");
            flickityInstanceGalerry = null; // Đặt lại phiên bản
        }
    }
}

function reponsiveMobile() {
    $(window)
        .resize(function () {
            let width = $(window).width();
            initService(width);
            initGalerry(width);
        })
        .trigger("resize");
}

function check() {
    let all = $("body *");
    $.each(all, function (index, element) {
        // console.log();

        let $element = $(element);
        if ($element.width() > 568) {
            console.log(all[index]);
        }
    });
}

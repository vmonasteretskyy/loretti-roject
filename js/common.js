$(document).ready(function () {

    // main slider


    var $status = $('.mainslider-section .pagingInfo');
    var $slickElement = $('.mainslider');

    $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        if (slick.slideCount < 10) {
            var i = (currentSlide ? currentSlide : 0) + 1;
            $status.text('/ 0' + i);
        } else {
            var i = (currentSlide ? currentSlide : 0) + 1;
            $status.text('/' + i);
        }

    });

    $slickElement.slick({
        dots: false,
        infinite: true,
        speed: 500,
        prevArrow: '<button type="button" class="slick-prev">Prev</button>',
        nextArrow: '<button type="button" class="slick-next">Next</button>'
    });


    // Slider - About

    // main slider
    var $statusab = $('.about-section .pagingInfo');
    var $slickElementab = $('.aboutslider');

    $slickElementab.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        if (slick.slideCount < 10) {
            var i = (currentSlide ? currentSlide : 0) + 1;
            $statusab.text('/ 0' + i);
        } else {
            var i = (currentSlide ? currentSlide : 0) + 1;
            $statusab.text('/' + i);
        }

    });

    $slickElementab.slick({
        dots: false,
        infinite: true,
        speed: 500,
        prevArrow: '<button type="button" class="slick-prev">Prev</button>',
        nextArrow: '<button type="button" class="slick-next">Next</button>'
    });

    // About mouse transform
    if ($(window).width() > 1024) {
        var mouse = { x: 0, y: 0 };
        window.addEventListener('mousemove', function (e) {
            mouse.x = e.x;
            mouse.y = e.y;
            $(".mouse-pointer").css({ "left": mouse.x, "top": mouse.y });
        });


        $(".about__slide a").hover(function () {
            $(".mouse-pointer").addClass("link-hover");
        }, function () {
            $(".mouse-pointer").removeClass("link-hover");
        });

    }



    // SELECTS
    $(".month, .year").select2({
        minimumResultsForSearch: -1
    });

    // menu
    var newDiv = document.createElement('div');
    newDiv.setAttribute('class', 'menubg');
    $('header').append(newDiv);

    $('.burgermenu-btn').click(function () {
        $('.header__rightm').addClass('openmenu');
        $('.menubg').addClass('open')
    });


    $('.menubg, .closemenu-btn').click(function () {
        $('.header__rightm').removeClass('openmenu');
        $('.menubg').removeClass('open')
    });


});
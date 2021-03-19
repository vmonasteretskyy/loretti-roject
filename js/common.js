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
        nextArrow: '<button type="button" class="slick-next">Next</button>',
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnFocus: false,
        pauseOnHover: false,
        speed: 400
    });


    // Slider - About

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
        nextArrow: '<button type="button" class="slick-next">Next</button>',
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnFocus: false,
        pauseOnHover: false,
        speed: 1200
    });

    // About mouse transform
    if ($(window).width() > 1024) {
        var mouse = {
            x: 0,
            y: 0
        };
        window.addEventListener('mousemove', function (e) {
            mouse.x = e.x;
            mouse.y = e.y;
            $(".mouse-pointer").css({
                "left": mouse.x,
                "top": mouse.y
            });
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

    $(".sort__tag select").select2({
        minimumResultsForSearch: -1,
        containerCssClass: "error",
        dropdownCssClass: "catalog-dropdown",
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

    // FIlter - left sidebar
    $('.cattitle').click(function () {
        $(this).toggleClass('rotate-arrow');
        $(this).siblings('.submenu-cat').slideToggle();
    });

    // HIDE filters
    $('.hide-filters').click(function () {
        $(this).toggleClass('showf-text');
        $('.filters-col').toggle();
    });

    // catalog colums
    $('.sort-col2').click(function () {
        $('.sort__col span').removeClass('active');
        $(this).addClass('active');
        $('.catalog-imgblocks').addClass('two-col');
    });

    $('.sort-col3').click(function () {
        $('.sort__col span').removeClass('active');
        $(this).addClass('active');
        $('.catalog-imgblocks').removeClass('two-col');
    });

    // product

    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav',
        responsive: [{
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true
            }
        }]
    });
    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        centerMode: false,
        focusOnSelect: true,
        vertical: true,
        arrows: false,
        verticalSwiping: true
    });

    // prod icons
    $('.prod-icons .favorite').click(function () {
        $(this).toggleClass('active');
    });

    $('.descr-accordeon__sect .title').click(function () {
        $('.descr-accordeon__sect .descr').not($(this).parents('.descr-accordeon__sect').find('.descr')).slideUp();
        $(this).parents('.descr-accordeon__sect').find('.descr').slideToggle();

        $('.descr-accordeon__sect').not($(this).parents('.descr-accordeon__sect')).removeClass('open');
        $(this).parents('.descr-accordeon__sect').toggleClass('open');
    });

    // Product slider


    var $prodslCount = $('.alsolike-sliderwrap .pagingInfo');
    var $likeslider = $('.alsolike__slider');

    $likeslider.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        if (slick.slideCount < 10) {
            var i = (currentSlide ? currentSlide : 0) + 1;
            $prodslCount.text('/ 0' + i);
        } else {
            var i = (currentSlide ? currentSlide : 0) + 1;
            $prodslCount.text('/' + i);
        }

    });

    $likeslider.slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        infinite: true,
        prevArrow: '<button type="button" class="slick-prev">Prev</button>',
        nextArrow: '<button type="button" class="slick-next">Next</button>',
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnFocus: false,
        pauseOnHover: false,
        speed: 600,
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 421,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
        ]
    });

    // search
    $('.header__blackline-search span').click(function () {
        $('.search-wrapper').show();
    });

    $('.search-wrapper .close').click(function () {
        $('.search-wrapper').hide();
    });

    // size

    $('.size-tabbtns .in-btn').click(function () {
        $('.size-tabbtns span').removeClass('active');
        $(this).addClass('active');
        $('.sizepbody-tabcont').hide();
        $('.sizepbody-tabcont.sizepbody-in').show();
    });

    $('.size-tabbtns .cm-btn').click(function () {
        $('.size-tabbtns span').removeClass('active');
        $(this).addClass('active');
        $('.sizepbody-tabcont').hide();
        $('.sizepbody-tabcont.sizepbody-cm').show();
    })


    $('.sizeopen').click(function (event) {
        event.preventDefault();
        $('.size-popup__wrap').show();
    });
    $('.close-size').click(function () {
        $('.size-popup__wrap').hide();
    });
    $(document).click(function (event) {
        let $target = $(event.target);
        if (!$target.closest('.size-popup').length && !$target.closest('.sizeopen').length) {
            $('.size-popup__wrap').hide();
        }
    });

    // login
    $(".showpass").click(function () {
        var input = $('.pass input');
        if (input.attr("type") == "password") {
            input.attr("type", "text");
        } else {
            input.attr("type", "password");
        }
    });

    $('.contact-link').click(function () {
        $('.mc-log').hide();
        $('.mc-cont').show();
    });



    // log popups
    $('.lostpass-link').click(function () {
        $('.mc-gen').hide();
        $('.mc-forgotpass').show();
    });


    $('.contact-link').click(function () {
        $('.mc-gen').hide();
        $('.mc-cont').show();
    });

    $('.reglink').click(function () {
        $('.mc-gen').hide();
        $('.mc-reg').show();
    });

    $('.log-link').click(function () {
        $('.mc-gen').hide();
        $('.mc-log').show();
    });







    $(document).click(function (event) {
        let $target = $(event.target);
        if (!$target.closest('.login-modal-dialog.gdial').length) {
            $('.mc-gen').hide();
            $('.mc-log').show();
        }
    });
    $('.loginpopup .close').click(function () {
        $('.mc-gen').hide();
        $('.mc-log').show();
    });







});
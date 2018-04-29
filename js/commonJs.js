$(document).ready(function() {

// Fixed header
    $(window).on('scroll', function() {
        if ($(window).scrollTop() >= 50) {
            $('.main-header').addClass('fixed-header');
            $('.header-wrap').removeClass('header-wrap-border');
        }
        else {
            $('.main-header').removeClass('fixed-header');
            $('.header-wrap').addClass('header-wrap-border');
        }

        if ($(window).scrollTop() >= 2450) {
            $('.button-animated').addClass('animated tada')
        }

//Active menu backlight
        let position = $(this).scrollTop();

        $('section').each(function () {
            let top = $(this).offset().top - 75;
            let bottom = top + $(this).outerHeight();

            if (position >= top && position <= bottom) {
                $('nav a').removeClass('active');
                $('nav a[href="#' + $(this).attr('id') + '"]').addClass('active');
            }
        })
    });

    //Mobile nav-button
    $('.navigation-button').on('click', function() {
        $(this).toggleClass('navigation-button-open');
        $('.navigation').toggleClass('navigation-mobile').css('display', 'block');
        $('.nav:not(.navigation-mobile)').css('display', 'none')


    });

    // Slider
    $('.slick-carousel').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        arrows: false
    });

    // Плавная прокрутка по якорям
    $('a[href^="#"]').on('click', function() {
        let anhor = $(this).attr('href');
        $('html, body').animate({scrollTop: $(anhor).offset().top - 65}, 800);
        return false
    });

    //Popup
    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true
    })
});


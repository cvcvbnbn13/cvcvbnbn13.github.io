$(document).ready(function () {
    $('nav').removeClass("sticky-nav");
    $(window).scroll(function () {
        if ($(window).scrollTop() > 800) {
            $('nav').addClass("sticky-nav")
        }
        else {
            $('nav').removeClass("sticky-nav")
        }

    });



    $('.js-scroll-to-plans').click(function () {
        $('html,body').animate({scrollTop: $('.js-section-plans').offset().top},1000);
    });
    
    $('.js-scroll-to-start').click(function () {
        $('html,body').animate({scrollTop: $('.js-section-features').offset().top},1000);
    });

    $('.goToFea').click(function () {
        $('html,body').animate({ scrollTop: $('.js-section-features').offset().top }, 1000);
    });

    $('.goToStep').click(function () {
        $('html,body').animate({ scrollTop: $('.js-section-steps').offset().top }, 1000);
    });

    $('.goToCity').click(function () {
        $('html,body').animate({ scrollTop: $('.js-section-city').offset().top }, 1000);
    });



    // moblie nav
    $('.js-moblie-icon').click(function () {
        let nav = $('.js-main-nav');
        let menuIcon = $('.menuIcon');
        let closeIcon = $('.closeIcon');
        nav.slideToggle(150);

        // if(closeIcon.hasClass('close')){
        //     menuIcon.addClass('close');
        //     closeIcon.removeClass('close');
        // }else{
        //     menuIcon.removeClass('close');
        //     closeIcon.addClass('close');
        // }

        
        menuIcon.toggleClass('close');
        closeIcon.toggleClass('close');
        
    });






});
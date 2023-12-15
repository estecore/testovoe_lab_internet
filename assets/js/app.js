$(function() {
    var header = $('#header'),
        introH = $('#intro').innerHeight(),
        scrollOffset = $(window).scrollTop();


        /* fixed header */

    checkScroll(scrollOffset);

    $(window).on('scroll', function() {

        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);
    });

    function checkScroll(scrollOffset) {

        if ( scrollOffset >= introH ) {
            header.addClass('fixed');
        } else {
            header.removeClass('fixed');
        }
    }

    /* smooth scroll */

    $('[data-scroll]').on('click', function(event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top;

        $('#nav a').removeClass('active');
        $('#nav').removeClass('active');
        $('#nav__toggle').removeClass('active');
        $this.addClass('active');

        $('html, body').animate({
            scrollTop: blockOffset
        }, 500);
    });


    /* menu nav-toggle */

    $('#nav__toggle').on('click', function(event){
        event.preventDefault();

        $(this).toggleClass('active');
        $('#nav').toggleClass('active');
    });

    /* collapse */

    $('[data-collapse]').on('click', function(event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('collapse');

        $this.toggleClass('active')
    });

    /* slider */

    $(".multiple-items").slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      });
            

});
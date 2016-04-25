$(document).ready(function() {

    // Responsive toggle navigation
    $('.toggle-navigation').click(function() {
        $(this).toggleClass('on');
        $('.navigation').slideToggle();
        return false;
    });

    $('.footer .toggle-navigation').click(function() {
        $('html, body').animate( {scrollTop: $(document).height()}, 'slow' );
        return false;
    });

    $('.arrow__btn').click(function() {
        $('html, body').animate( {scrollTop: $('.header').height()+120 }, 'slow' );
        return false;
    });

    $('.top').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 'slow');
        return false;
    });

    $('.services__item').animated('zoomIn');

    // Waypoint and animation for card items @ advantages section
    $('.advantages').waypoint(function() {
        $('.card__item').each(function(index) {
            var animateCard = $(this);
            setInterval(function() {
                animateCard.removeClass('card__item_rotate-off').addClass('card__item_rotate-on');
            }, 200*index);
        });
    });

    // Waypoint and animation for deals items @ deals section
    $('.deals').waypoint(function() {
        $('.deals__item').each(function(index) {
            var animateDeals = $(this);
            setInterval(function() {
                animateDeals.addClass('deals__item_on');
            }, 200*index);
        });
    });

    // Waypoint and animation for team section
    $('.team').waypoint(function() {
        $('.team__member').each(function(index) {
            var animateDeals = $(this);
            setInterval(function() {
                animateDeals.addClass('team__member_on');
            }, 200*index);
        });
    }, {
        offset : '30%'
    });

    // Waypoint and animation for deals items @ application section
    $('.application').waypoint(function() {
        $('.deals__item').each(function(index) {
            var animateDeals = $(this);
            setInterval(function() {
                animateDeals.addClass('deals__item_on');
            }, 200*index);
        });
    });

    // Waypoint and animation for svg arrows
    var waypoint = new Waypoint({
        element: $('.offer'),
        handler: function(position) {
            if (position === 'down') {
                $('.offer__item').each(function(index) {
                    var animateArrow = $(this);
                    setTimeout(function() {
                        var myAnimation = new DrawFillSVG({
                            elementId: 'offer-svg-' + index
                        });
                        animateArrow.children('.offer__item-content').addClass('offer__item-content_on');
                    }, 500*index);
                });
            };
            this.destroy();
        },
        offset: '35%'
    });

    // SVG Fallback
    if(!Modernizr.svg) {
        $('img[src* = "svg"]').attr('src', function() {
            return $(this).attr('src').replace('.svg', '.png');
        });
    };

    // Form popup with magnificPopup
    $('.btn_section').click(function() {
        $("#callback .form__title").html($(this).text());
        $("#callback input[name=formname]").val($(this).text());
    }).magnificPopup({
        type:"inline",
        mainClass: 'mfp-form'
    });

    //AJAX sending forms
    $('.form').submit(function() {
        $.ajax({
            type: 'POST',
            url: 'mail.php',
            data: $(this).serialize()
        }).done(function() {
            alert('Спасибо за заявку!');
            setTimeout(function() {
                $.magnificPopup.close();
                $('.form').trigger('reset');
            }, 1000);
        });
        return false;
    });

    // Slider owlCarousel
    $('.slider').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        navText : "",
        autoplay: true,
        fluidSpeed : 600,
        autoplayHoverPause : true,
        smartSpeed: 1000,
        autoplayTimeout: 2000,
        responsive: {
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

    // Chrome Smooth Scroll
    try {
        $.browserSelector();
        if( $('html').hasClass('chrome') ) {
            $.smoothScroll();
        }
    } catch(err) {

    };

});

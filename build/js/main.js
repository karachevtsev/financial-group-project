$(document).ready(function() {

    $('.toggle-navigation').click(function() {
        $(this).toggleClass('on');
        $('.navigation').slideToggle();
        return false;
    });

    $('.footer .toggle-navigation').click(function() {
        $('html, body').animate({ scrollTop: $(document).height() }, 'slow');
        return false;
    });

    $('.advantages').waypoint(function() {
        $('.card__item').each(function(index) {
            var animateCard = $(this);
            setInterval(function() {
                animateCard.removeClass('card__item_rotate-off').addClass('card__item_rotate-on');
            }, 200*index);
        });
        // $('.card__item').removeClass('card__item_rotate-off').addClass('card__item_rotate-on');
        // console.log('it works')
    });

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

    $('.slider').owlCarousel({
        items : 1,
        nav : true,
        navText : "",
        loop : true,
        autoplay : true,
        autoplayHoverPause : true,
        fluidSpeed : 600,
        autoplaySpeed : 600,
        navSpeed : 600,
        dotsSpeed : 600,
        dragEndSpeed : 600
    });


    // $('.slider').owlCarousel({
    //     loop: true, //Зацикливаем слайдер
    //     margin: 10, //Отступ от картино если выводите больше 1
    //     nav: true, //Отключил навигацию
    //     navText : "",
    //     autoplay: true, //Автозапуск слайдера
    //     fluidSpeed : 600,
    //     autoplayHoverPause : true,
    //     smartSpeed: 1000, //Время движения слайда
    //     autoplayTimeout: 2000, //Время смены слайда
    //     responsive: { //Адаптация в зависимости от разрешения экрана
    //         0:{
    //             items:1
    //         },
    //         600:{
    //             items:1
    //         },
    //         1000:{
    //             items:1
    //         }
    //     }
    // });

});

$(document).ready(function() {

    $('.toggle-navigation').click(function() {
        $(this).toggleClass("on");
        $(".navigation").slideToggle();
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

});

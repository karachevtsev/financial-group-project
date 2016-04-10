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

});

$(document).ready(function() {
    $(".toggle-navigation").click(function() {
        $(this).toggleClass("on");
        $(".navigation").slideToggle();
        return false;
    });
});

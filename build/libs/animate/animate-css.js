//Animate CSS + WayPoints javaScript Plugin
//Example: $(".element").animated("zoomInUp");
(function($) {
	$.fn.animated = function(inEffect) {
		$(this).each(function() {
			var animateElement = $(this);
			animateElement.css('opacity', '0').addClass('animated').waypoint(function(position) {
				if (position === 'down') {
					animateElement.addClass(inEffect).css('opacity', '1');
				};
			}, {
				offset: '90%'
			});

		});
	};
})(jQuery);

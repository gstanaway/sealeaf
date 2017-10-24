//scroll to top function
$(document).ready(function() {
			// Show or hide the sticky footer button
			$(window).scroll(function() {
				if ($(this).scrollTop() > 200) {
					$('.go-top').fadeIn(250);
				} else {
					$('.go-top').fadeOut(300);
				}
			});
			
			// Animate the scroll to top
			$('.go-top').click(function(event) {
				event.preventDefault();
				
				$('html, body').animate({scrollTop: 0}, 300);
			});
		});
// add anchors
anchors.options = {
  placement: 'left',
  visible: 'hover',
};
anchors.add('h2, h3, h4');

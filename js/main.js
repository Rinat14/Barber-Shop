$(function () {
	// baguetteBox.run('.gallery', {
	// 	noScrollbars: true,
	// 	captions: function(element) {
	// 		return element.getElementsByTagName('img')[0].alt;
	// 	}
	// });

	$(window).scroll(function(){
		if ($(this).scrollTop() > 500) {
			$('.scroll-to-top').fadeIn();
		} else {
			$('.scroll-to-top').fadeOut();
		}
	});

	$('.scroll-to-top').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
});




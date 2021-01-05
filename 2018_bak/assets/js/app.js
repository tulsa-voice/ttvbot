;(function(app, $, window, document, undefined) {
	"use strict";

	console.log('test');

  $('a[href*="#"]:not([href="#"])').not('.link').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			console.log(target);
      if (target.length) {
        $('nav ul li').removeClass('active');
        $(this).closest('li').addClass('active');
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    } else {
			console.log('else');
		}
  });

})(window.app = window.app || {}, jQuery, window, document);

;(function(app, $, window, document, undefined) {
	"use strict";

	// Put Scripts Here

	$('a[href*="#"]:not([href="#"])').click(function() {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('nav ul li').removeClass('active');
				$(this).closest('li').addClass('active');
				$('html, body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
	});

	$('section').waypoint(function(direction) {
		if (direction === 'down') {
			var id_active_class = $('nav ul li').filter('.active').data('link');
			var id_class = this.element.id;
			// console.log(id_active_class);
			if (id_active_class === id_class){
				// console.log('matches');
			}
			$('nav ul li').removeClass('active');

			$('header nav li').filter('[data-link=' + id_class + ']').addClass('active');
		} else {
			// console.log(direction);
		}
		// console.log(this.element.id + ' hit');
	}, {
		offset: '25%'
	});

	$('section').waypoint(function(direction) {
		if (direction === 'up') {
			var id_active_class = $('nav ul li').filter('.active').data('link');
			// console.log(id_active_class);
			$('nav ul li').removeClass('active');
			var id_class = this.element.id;
			$('header nav li').filter('[data-link=' + id_class + ']').prev().addClass('active');
		} else {
			// console.log(direction);
		}
		// console.log(this.element.id + ' hit');
	}, {
		offset: '25%'
	});

	var options = {
		byRow: true,
		property: 'height',
		target: null,
		remove: false
	};

    var byRow = $('body').hasClass('test-rows');

	$(document).ready(function(){
		$('.js-result-grid-content').matchHeight(options);
		// $('.js-interview-box').matchHeight(options);
	});

    $('.result-grid').each(function() {
        $(this).children('.js-result-grid-content').matchHeight({
            byRow: byRow
        });
    });

    // $('.interview-grid').each(function() {
    //     $(this).children('.js-interview-box').matchHeight({
    //         byRow: byRow
    //     });
    // });


})(window.app = window.app || {}, jQuery, window, document);

var site = site || {};

(function($){
	$.extend($.easing,
	{
		def: 'easeInOutSine',
		swing: function (x, t, b, c, d) {
			return $.easing[$.easing.def](x, t, b, c, d);
		},
		easeInCubic: function (x, t, b, c, d) {
			return c * (t /= d) * t * t + b;
		},
		easeOutCubic: function (x, t, b, c, d) {
			return c * ((t = t / d - 1) * t * t + 1) + b;
		},
		easeInOutCubic: function (x, t, b, c, d) {
			if ((t /= d / 2) < 1){ return c / 2 * t * t * t + b; }
			return c / 2 * ((t -= 2) * t * t + 2) + b;
		},
		easeInSine: function (x, t, b, c, d) {
			return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
		},
		easeOutSine: function (x, t, b, c, d) {
			return c * Math.sin(t / d * (Math.PI / 2)) + b;
		},
		easeInOutSine: function (x, t, b, c, d) {
			return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
		},
		easeInOutQuart: function (x, t, b, c, d) {
			if ((t /= d / 2) < 1){ return c / 2*t*t*t*t + b; }
			return -c / 2 * ((t -= 2)*t*t*t - 2) + b;
		}
	});

})(jQuery);

/* CONSOLE.LOG ~ fail quietly, if unavailable
==================================================================================================== */
if (!(window.console)) {
	(function() {
		var noop = function() {};
		var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'markTimeline', 'table', 'time', 'timeEnd', 'timeStamp', 'trace', 'warn'];
		var length = methods.length;
		var console = window.console = {};
		while (length--) {
			console[methods[length]] = noop;
		}
	}());
}

/* DEBUG: show window size to help with responsive layout break points
==================================================================================================== */
site.displayWindowSize = (function (window, document, $) {
    $('body').append($('<div id="scrollbar_measure"></div>'));
    var root = document.compatMode === 'BackCompat' ? document.body : document.documentElement,
        isVerticalScrollbar = false,
        isHorizontalScrollbar = false,
        scrollbar_width = document.getElementById('scrollbar_measure').offsetWidth - document.getElementById('scrollbar_measure').clientWidth;
    $('#scrollbar_measure').remove();
     var displayWindowWidth = function (width) {
        isVerticalScrollbar = root.scrollHeight > root.clientHeight, isHorizontalScrollbar = root.scrollWidth > root.clientWidth;
        var window_width = parseInt(width, 10),
        scroll_width = (isVerticalScrollbar) ? scrollbar_width : 0;
        $('#win_size').text(window_width + scroll_width);
    };
    var module = function () {
            if (!$('body').is('.debug')) {
                return;
            }
            $('body').prepend('<div id="win_size" />');
            displayWindowWidth($(window).width());
            $(window).resize(function () {
                displayWindowWidth($(this).width());
            });
        };
    module.prototype = {
        constructor: module
    };
    return module;
})(window, document, jQuery);

/* CSS Browser Selector v0.4.0 (Nov 02, 2010)
Rafael Lima (http://rafael.adm.br)
http://rafael.adm.br/css_browser_selector
License: http://creativecommons.org/licenses/by/2.5/
Contributors: http://rafael.adm.br/css_browser_selector#contributors
==================================================================================================== */
function css_browser_selector(u) {
	var ua = u.toLowerCase(),
		is = function (t) {
			return ua.indexOf(t) > -1;
		},
		c = null,
		g = 'gecko',
		w = 'webkit',
		s = 'safari',
		o = 'opera',
		m = 'mobile',
		h = document.documentElement,
		b = [(!(/opera|webtv/i.test(ua)) && /msie\s(\d)/.test(ua)) ? ('ie ie' + RegExp.$1) : is('firefox/2') ? g + ' ff2' : is('firefox/3.5') ? g + ' ff3 ff3_5' : is('firefox/3.6') ? g + ' ff3 ff3_6' : is('firefox/3') ? g + ' ff3' : is('gecko/') ? g : is('opera') ? o + (/version\/(\d+)/.test(ua) ? ' ' + o + RegExp.$1 : (/opera(\s|\/)(\d+)/.test(ua) ? ' ' + o + RegExp.$2 : '')) : is('konqueror') ? 'konqueror' : is('blackberry') ? m + ' blackberry' : is('android') ? m + ' android' : is('chrome') ? w + ' chrome' : is('iron') ? w + ' iron' : is('applewebkit/') ? w + ' ' + s + (/version\/(\d+)/.test(ua) ? ' ' + s + RegExp.$1 : '') : is('mozilla/') ? g : '', is('j2me') ? m + ' j2me' : is('iphone') ? m + ' iphone' : is('ipod') ? m + ' ipod' : is('ipad') ? m + ' ipad' : is('mac') ? 'mac' : is('darwin') ? 'mac' : is('webtv') ? 'webtv' : is('win') ? 'win' + (is('windows nt 6.0') ? ' vista' : '') : is('freebsd') ? 'freebsd' : (is('x11') || is('linux')) ? 'linux' : '', 'js'];
		c = b.join(' ');
		h.className += ' ' + c;
	return c;
}
css_browser_selector(navigator.userAgent);

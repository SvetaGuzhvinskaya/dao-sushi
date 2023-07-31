'use strict';

(function() {
	var iterate = function iterate(items, callback) {
		items.forEach(function(item) {
			var key = void 0;
			var value = void 0;

			if (typeof item === 'string') {
				key = item;
				value = item;
			} else {
				key = item[0];
				value = item[1];
			}

			callback(key, value);
		});
	};

	var check = function check(category, items) {
		iterate(items, function(key, value) {
			if (bowser[key]) {
				$(document.documentElement).addClass('is-' + category + '-' + value);
			}
		});
	};

	check('engine', ['webkit', 'blink', 'gecko', ['msie', 'ie'],
		['msedge', 'edge']
	]);

	check('device', ['mobile', 'tablet']);

	check('browser', ['chrome', 'firefox', ['msie', 'ie'],
		['msedge', 'edge'], 'safari', 'android', 'ios', 'opera', ['samsungBrowser', 'samsung'], 'phantom', 'blackberry', 'webos', 'silk', 'bada', 'tizen', 'seamonkey', 'sailfish', 'ucbrowser', 'qupzilla', 'vivaldi', 'sleipnir', 'kMeleon'
	]);

	check('os', ['mac', 'windows', 'windowsphone', 'linux', 'chromeos', 'android', 'ios', 'iphone', 'ipad', 'ipod', 'blackberry', 'firefoxos', 'webos', 'bada', 'tizen', 'sailfish']);
})();

/* eslint-disable no-unused-vars */

var $window = $(window);
var $document = $(document);
var $html = $(document.documentElement);
var $body = $(document.body);

// scroll
new WOW().init();
// fixed header 
$window.scroll(function() {
	var $boxFix = $('.js-fix');
	if ($(window).scrollTop() >= 30) {
		$boxFix.addClass('fix');
	} else {
		$boxFix.removeClass('fix');
	}
});
// btn menu
var $btnMenu = $('.js-btn-menu');
$btnMenu.click(function() {
	$(this).toggleClass('is-open');
	$(this).parents('.js-page').toggleClass('is-open');
});
$document.on('click', function(e) {
	if (!$(e.target).closest($btnMenu).length) {
		$('.js-page').removeClass('is-open');
		$btnMenu.removeClass('is-open');
	}
	e.stopPropagation();
});
// btn phone
var $btnPhone = $('.js-btn-phone');
$btnPhone.click(function() {
	$(this).toggleClass('is-open');
	$(this).parents('.b-phones-mob').toggleClass('is-open');
});
// nav cat hover
var $hoverNavCat = $('.js-nav-cat');
$hoverNavCat.hover(function() {
	$(this).parents('.b-cat-nav').toggleClass('is-hover');
});
// form styler
var $jsFormStyle = $('.js-select, .js-input');
var $jsChecked = $('.js-checked');
var $jsCheckedInput = $('.jq-radio, jq-checkbox');
$jsFormStyle.styler();
$jsChecked.change(function() {
	if ($(this).children($jsCheckedInput).is('.checked')) {
		$(this).addClass('checked');
	} else {
		$(this).removeClass('checked');
	}
});
// slider
var $jsCatSlider = $('.js-cat-slider');
$jsCatSlider.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide) {
	var status = $(this).parents('.b-cat').find('.numbers-slides');
	var i = (currentSlide ? currentSlide : 0) + 1;
	var zeroI;
	var zeroS;
	status.html('<span class="current">' + i + '</span> / ' + slick.slideCount);
});
$jsCatSlider.slick({
	slidesToShow: 4,
	slidesToScroll: 1,
	autoplay: false,
	speed: 600,
	dots: false,
	arrows: false,
	infinite: true,
	responsive: [{
		breakpoint: 940,
		settings: {
			slidesToShow: 3
		}
	}, {
		breakpoint: 800,
		settings: {
			slidesToShow: 2
		}
	}, {
		breakpoint: 766,
		settings: {
			slidesToShow: 2,
			arrows: true
		}
	}, {
		breakpoint: 550,
		settings: {
			slidesToShow: 1,
			arrows: true
		}
	}]
});
$('.slick-prev').on('click', function() {
	$(this).parents('.b-cat').find('.js-cat-slider').slick('slickNext');
});
$('.slick-next').on('click', function() {
	$(this).parents('.b-cat').find('.js-cat-slider').slick('slickPrev');
});
var $jsFullSlider = $('.js-full-slider');
$jsFullSlider.slick({
	autoplay: false,
	speed: 600,
	dots: true,
	fade: true,
	arrows: false,
	infinite: true
	// responsive: [
	// {
	//   breakpoint: 767,
	//   settings: {
	//     slidesToShow: 2,
	//   }
	// }]
});
// modal
$('.js-modal').fancybox({
	toolbar: false,
	smallBtn: true,
	touch: false,
	autoFocus: false,
	arrows: false
});
// popover
$('[data-toggle="popover"]').popover({
	placement: 'bottom',
	html: 'true',
	content: function content() {
		return $($(this).data('contentwrapper')).html();
	},
	trigger: 'click'
});
$('body').on('click', '.js-close-pop', function() {
	var target = $(this).data('target');
	$(target).popover('toggle');
});
// tab
$('.js-tab').tabs();
// datepicker
var $jsDatepicker = $('.js-datepicker');
$jsDatepicker.datepicker({
	language: 'ru'
});
// scroll
var $scrollBox = $('.js-scroll, .js-sel-scroll .jq-selectbox__dropdown ul');
$scrollBox.scrollbar();
//mask
var $jsMaskPhone = $('.js-mask-phone');
$jsMaskPhone.inputmask('+38(999) 999-99-99');

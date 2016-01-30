$(function() {

	$('.fotorama').hide();
	$('section.gallery button').hide();

	// Gallery Show 
	$('.container div').on('click', function () {
		var category = $(this).attr('rel');
		
		$(this).parent('div').hide();
		$('#'+category).show();
		$('section.gallery button').show();
		setTimeout(function() {
			$('#'+category).fotorama();
		}, 1000);
	});

	// Gallery Back Button
	$('section.gallery button').on('click', function () {
		$(this).hide();
		$('.fotorama').hide();
		$('section.gallery .container').show();
	});

});
(function($) {

	"use scrict";

	var $body,
		$window,
		$list,
		$sections,
		$nav,
		settings = {
			duration: 700
		};

	function navActive(e) {
		var $this = $(this);

		$this.siblings().removeClass('active');
		$this.addClass('active');
	}

	function onNavLinkClick(e) {
		var $this = $(this),
			href = $this.attr('href'),
			$target = $(href);

		if ($target.length === 0)
			return;

		e.preventDefault();

		$body.animate({
			scrollTop: $target.offset().top
		}, settings.duration);
	}

	function winScroll(e) {
		var nav_height = $nav.outerHeight(),
			cur_pos = $(this).scrollTop();

		$sections.each(function() {
			var top = $(this).offset().top - nav_height,
				bottom = top + $(this).outerHeight();

			if (cur_pos >= top && cur_pos <= bottom) {
				$nav.find('li').removeClass('active');
				$nav.find('a[href="#' + $(this).attr('id') + '"]').parent().addClass('active');
			}
		});
	}

	function bindings() {
		// Navi Class
		$list.on('click', navActive);
		// Smooth scroll (smoothScroll)
		$('a[href^="#"]').on('click', onNavLinkClick);
		// Window scroll nav change
		$window.on('scroll', winScroll);
	}

	$(document).ready(function() {
		// Variable Def
		$body = $('html, body');
		$window = $(window);
		$sections = $('.home-sections section');
		$nav = $('header nav');
		$list = $('nav ul li');

		// Call Functions
		bindings();
	});

})(jQuery);
(function($) {

	var $circle = $('#circle');
	var $mobileNav = $('#mobile-nav-toggle');
	var $navToggler = $('#x, #y, #z');
	var $list = $('#menu li');
	var $link = $('#menu ul li a');

	function openNav() {
		$mobileNav.addClass('open');
		$('.mobile-wrapper').css('position', 'fixed');
		$navToggler.addClass('collapse');
		$('#y').hide();
		$circle.addClass('expand');
		$list.addClass('animate');

		setTimeout(function() {
			$('#x').addClass('rotate30');
			$('#z').addClass('rotate135');
		}, 200);

		setTimeout(function() {
			$('#x').addClass('rotate45');
			$('#z').addClass('rotate150');
		}, 300);
	}

	function closeNav() {
		$mobileNav.removeClass('open');
		$('.mobile-wrapper').css('position', 'absolute');
		$navToggler.removeClass('collapse');
		$('#y').show();
		$circle.removeClass('expand');
		$list.removeClass('animate');

		setTimeout(function() {
			$('#x').removeClass('rotate30');
			$('#z').removeClass('rotate135');
		}, 300);

		setTimeout(function() {
			$('#x').removeClass('rotate45');
			$('#z').removeClass('rotate150');
		}, 200);
	}

	function bindings() {
		// Mobile Nav Toggle
		$mobileNav.on('click', function() {
			if(!$(this).hasClass('open')) {
				openNav();
			} else {
				closeNav();
			}
		});

		// Mobile Nav Link Click
		$link.on('click', closeNav);
	}

	$(document).ready(function() {
		bindings();
	});

})(jQuery);
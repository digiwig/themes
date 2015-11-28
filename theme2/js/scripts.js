var supportsTouch = 'ontouchstart' in window || navigator.msMaxTouchPoints;

function exist(element) {
	if($(element).length > 0) {
		return true;
	}
}

// add fastclick if the touch is supported
$(document).ready(function() {
	if(supportsTouch) {
		$(function() {
			FastClick.attach(document.body);
		});
	}
});


// misc events
$(document).keydown(function(event) {
	console.log("Key: "+event.key+", Code:"+event.keyCode);
});

$(window).load(function(){

});

$(window).resize(function() {
			  
});

$(window).scroll(function() {
						  
});

/* Hide sticky nav on scroll down, reappear on scroll up */
var lastScrollTop = 0;
$(window).scroll(function(event){
   var st = $(this).scrollTop();
   var menus = $(".menu").length;
   if(menus === 0) {
	   if (st > lastScrollTop){
	       $("header").addClass("hide");
	   } else {
	      $("header").removeClass("hide");
	   }
	   lastScrollTop = st;
   }
});

/* Toggle sticky nav link active class on scroll */
var sections = $('section'), 
nav = $('header'), 
nav_height = nav.outerHeight();

$(window).on('scroll', function () {

	var cur_pos = $(this).scrollTop();

	sections.each(function() {

		var top = $(this).offset().top - nav_height,
		bottom = top + $(this).outerHeight();

		if (cur_pos >= top && cur_pos <= bottom) {
			nav.find('a').removeClass('active');
			sections.removeClass('active');

			$(this).addClass('active');
			nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
		}

	});
});

/* Scroll to section on sticky nav link click */
nav.find('a').on('click', function () {

	var $el = $(this), 
	id = $el.attr('href');

	$('html, body').animate({
		scrollTop: $(id).offset().top - nav_height
	}, 500, function() {
		$(".menu").removeClass("menu");
	});

	return false;
});
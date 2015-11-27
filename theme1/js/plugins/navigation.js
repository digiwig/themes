$(document).ready(function() {
		
	var evt = 'ontouchend' in document ? 'touchend' : 'click';
	var dragging = false;	

	menus = document.querySelectorAll("button,main,nav");					   
	button = document.querySelector("button");	
	button.addEventListener(evt, menu, false);
	button.addEventListener("touchmove", function(event){event.preventDefault();}, false);
	
	function menu(event) {
		event.preventDefault();
		$(menus).toggleClass("menu");
	}
	
});	
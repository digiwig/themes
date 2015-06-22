$(document).ready(function() {
	// START OF RESPONSIVE NAVIGATION
	
				$("nav > ul > li").each(function() {
					$(this).attr("id", $(this).children("span").children("a").text().replace(/ +/g, '-').toLowerCase());							 
				});
				$("nav ul li span").each(function() {
					if($(this).next().length !="0") {						  
						$(this).addClass("parent");
						var name = $(this).children("a").text();
						$(this).parent("li").addClass("top");			
						$(this).parent("li").append("<span data-name='"+name+"' class='next'>&#x25b6;</span>");
						$("span.next").on("touchmove", function(){
							dragging = true;
						});			
					}						  
				});	
				
				
				var evt = 'ontouchend' in document ? 'touchend' : 'click';

				if(supportsTouch && $(window).innerWidth() > 767) {
					$(document).on(evt, function() {
						$(".top").removeClass("active");							 
					});	
					$("span.parent a").on(evt, function(event) {
						$parent = $(this).closest(".top");
						if($parent.attr("id")) { root = $parent.attr("id");} else { root  = root;}
						$("nav > ul li").not("li#"+root).removeClass("active");
						if($parent.hasClass("active")) {
							$parent.removeClass("active");
							return true;
						} else {
							$parent.addClass("active");
							return false;	
						}								
					});
				}
	
				var dragging = false;	
				$("span.next").on(evt, function() {						
					//if($(window).innerWidth() < 768) {
						if (dragging == true) {
							dragging = false;
							return false;					
						}			
						$parent = $(this).text();			
						$new  = $(this).prev("ul").clone("true").addClass("clone").appendTo('nav');		
						$(this).siblings("span").closest("ul").addClass("hide");
						$("<li class='back'>Back</li>").prependTo($new, "true");
						var name  = $(this).attr("data-name");
						if(!$("li.breadcrumb").length) {
							var root = $("<li class='breadcrumb'>Home</li>").prependTo($new);
							$(root).append(" / "+name+"");
						} else {
							var root = $(this).parent("li").siblings("li.breadcrumb").clone();				
							$(root).append(" / "+name+"");
							root.prependTo($new);
						}
						$(".back").on("touchmove", function(){
							dragging = true;
						});			
						$('.back').on(evt, function() {
							if (dragging == true) {
								dragging = false;
								return false;
							}
							$(this).closest("ul").prev("ul").removeClass("hide");
							$old = $(this).closest("ul");
							setTimeout(function() {
								$old.remove();							
							}, 250);
						});	
					//}	
				});
				$(".back").on("touchmove", function(event) {event.preventDefault();}, false);
				menus = document.querySelectorAll("button,main,nav");					   
				button = document.querySelector("button");	
				button.addEventListener(evt, menu, false);
				button.addEventListener("touchmove", function(event){event.preventDefault();}, false);
				function menu(event) {
						event.preventDefault();
						$(menus).toggleClass("menu");
				}
				
	//END OF RESPONSIVE NAVIGATION
	
});	
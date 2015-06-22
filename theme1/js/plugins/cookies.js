createCookie = function (name, value, days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime() + (days * 60 * 60 * 1000)); //so it's hours now actually -MT
		var expires = "; expires=" + date.toGMTString();
	}
	else var expires = "";
	document.cookie = name + "=" + value + expires + "; path=/";
};

readCookie = function (name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') c = c.substring(1, c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
	}
	return null;
};

// cookie policy
$(document).ready(function() {		
	if (readCookie('cookies') == null) {
		$("#cookies").addClass("show");
	}
	$("#cookies").on("click", function() {
		createCookie('cookies', '1');	
		$(this).removeClass("show");	
	});
});
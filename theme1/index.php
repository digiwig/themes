<?php header("Content-type: text/html; charset=utf-8"); ?>
<!doctype html>
<html lang="en">
	<title>{title}</title>		
	<meta charset="utf-8"/>	
	<meta http-equiv="X-UA-Compatible" content="IE=edge">    	
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>		
	<meta name="description" content="{description}"/>	
	<meta name="apple-mobile-web-app-title" content="{site_name}">			
	<link rel="canonical" href="{landing_page_url}"/>
	<link rel="dns-prefetch" href="{some content heavy page?}">	
	<link rel="author" href="{url_to_google_plus_profile}"/>
	<link rel="stylesheet" href="css/styles.css" type="text/css" media="all" />		
	<!--[if lt IE 9]>
	<link rel="stylesheet" href="/css/ie.css" type="text/css" media="all" />	
	<script src="/js/vendor/ie/html5.js"></script>
  	<script src="//s3.amazonaws.com/nwapi/nwmatcher/nwmatcher-1.2.5-min.js"></script>
	<script src="//html5base.googlecode.com/svn-history/r38/trunk/js/selectivizr-1.0.3b.js"></script>
	<script src="/js/vendor/ie/rem.min.js"></script>
	<![endif]-->		       
</head>
<body>
<header></header>
<main>
	<section>
		<div class="grid">
			<div class="row">
				<div class="u-6-12"></div>
				<div class="u-6-12">
					<h1>This is a title spanning a few lines</h1>
					<p>Vestibulum placerat finibus massa, ac vestibulum nisl bibendum at. Aliquam velit risus, fermentum in ipsum id, sagittis rhoncus dui? Vivamus nulla felis, bibendum vel magna a, pulvinar tempus sem.</p>
					<a class="button">Read more</a>
				</div>
			</div>
		</div>
	</section>
	<section>
		<div class="grid">
			<div class="row">
				<div class="u-4-12">
					<span class="feature icon-facebook"></span>
				</div>
				<div class="u-4-12">2</div>
				<div class="u-4-12">3</div>
			</div>
		</div>
	</section>
	<section>
		<div class="grid">
			<div class="row">
				<div class="u-2-12 mobile-2-4">1</div>
				<div class="u-4-12 mobile-2-4">2</div>
				<div class="u-2-12 mobile-2-4">3</div>
				<div class="u-4-12 mobile-2-4">4</div>
			</div>
		</div>
	</section>
	<section>
		<div class="grid">
			<div class="row">
				<div class="u-2-6 mobile-4-12"></div>
				<div class="u-2-6 mobile-4-12"></div>
				<div class="u-2-6 mobile-4-12"></div>
				<div class="u-2-6 mobile-4-12"></div>
				<div class="u-2-6 mobile-4-12"></div>
				<div class="u-2-6 mobile-4-12"></div>
			</div>
		</div>
	</section>
	<section>
		<div class="grid">
			<div class="row">
				<div class="mobile-6-12"></div>
				<div class="mobile-6-12"></div>
				<div class="mobile-6-12"></div>
				<div class="mobile-6-12"></div>
				<div class="mobile-6-12"></div>
				<div class="mobile-6-12"></div>
			</div>
		</div>
	</section>
</main>
<footer>asdasd</footer>


<!--[if !(IE 8)]><!-->
<script type="text/javascript">
(function() {
	function getScript(url,success){
		var script=document.createElement('script');
		script.src=url;
		var head=document.getElementsByTagName('head')[0],
		done=false;
		script.onload=script.onreadystatechange = function(){
		if ( !done && (!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete') ) {
			done=true;
			if(success) {
				success();
			}
			script.onload = script.onreadystatechange = null;
			head.removeChild(script);
		}
		};
		head.appendChild(script);
	}
	getScript("/js/vendor/jquery-1.7.2.min.js",function(){	
		if('ontouchstart' in window || navigator.msMaxTouchPoints){
			getScript("/js/vendor/fastclick.js");			
		}	
		getScript("/js/scripts.min.js");
	});
})();
</script>
<!--<![endif]-->
</body>
</html>
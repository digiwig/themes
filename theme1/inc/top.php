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
<body <?php if(basename($_SERVER['REQUEST_URI'], ".php") == ""): ?>class="home"<?php else:?>class="<?=basename($_SERVER['REQUEST_URI'], ".php");?>"<?php endif;?>>
<div id="cookies"><p>Cookies on the wesbite: This website uses cookies. Click here to close.</p></div>
<header>
	<nav>
		<a><img src="/img/logo_demo.png" width="100%"/></a>
		<menu>
			<a href="/" <?php if(basename($_SERVER['REQUEST_URI'], ".php") == ""): ?>class="active"<?php endif;?>>Home</a>
			<a href="about-us.php" <?php if(basename($_SERVER['REQUEST_URI'], ".php") == "about-us"): ?>class="active"<?php endif;?>>About Us</a>
			<a href="services.php" <?php if(basename($_SERVER['REQUEST_URI'], ".php") == "services"): ?>class="active"<?php endif;?>>Services</a>
			<a href="blog.php" <?php if(basename($_SERVER['REQUEST_URI'], ".php") == "blog"): ?>class="active"<?php endif;?>>Blog</a>
			<a href="contact.php" <?php if(basename($_SERVER['REQUEST_URI'], ".php") == "contact"): ?>class="active"<?php endif;?>>Contact</a>
		</menu>
	</nav>
	<button></button>
</header>
<main>
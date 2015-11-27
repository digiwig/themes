<?php header("Content-type: text/html; charset=utf-8"); ?>
<!doctype html>
<html lang="en">
<head>
	<title>Theme Two</title>
		
	<meta charset="utf-8">	
	<meta http-equiv="X-UA-Compatible" content="IE=edge">    	
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">		
	<meta name="description" content="{description}">	
	<meta name="apple-mobile-web-app-title" content="{site_name}">
	<meta name="format-detection" content="telephone=no">	
	<link rel="canonical" href="{landing_page_url}"/>
	<link href='https://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700,800|Lato:400,100,300,700,900' rel='stylesheet' type='text/css'>
	<link rel="stylesheet" href="/css/styles.css" type="text/css" media="all" />	
      
</head>
<body>
<header>
	<a href="">Logo Goes Here (but must be quite tiny!)</a>
	<nav>
		<a href="#home" class="active">Home</a>
		<a href="#services">Services</a>
		<a href="#work">Work</a>
		<a href="#clients">Clients</a>
		<a href="#team">Team</a>
		<a href="#blog">Blog</a>
		<a href="#contact">Contact</a>
	</nav>
</header>
<main>
	<section id="home">
		<div class="content">
			<h1>Big Agency Results <span>Small Agency Care</span></h1>
			<p>A creative digital agency from New York</p>
			<a class="button">Let me see more</a>		
		</div>
	</section>
	<section id="services"></section>
	<section id="work"></section>
	<section id="clients"></section>
	<section id="team"></section>
	<section id="blog"></section>
	<section id="contact"></section>
</main>
<?php include("inc/footer_scripts.php");?>
</body>
</html>
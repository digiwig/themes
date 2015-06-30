	<footer>
		<div class="grid">
			<div class="row">
				<div class="u-3-12 mobile-7-12">
					<h4>Contact</h4>
					<address>
						<a href="mailto:exampe@example.com">E: example@example.com
						<a href="tel:+18501234567">T: 850-123-4567</a>
						<span>12 Queen Street<br/>Soho Gardens<br/>London<br/>W2 6PR</span>
					</address>
				</div>
				<div class="u-3-12 mobile-5-12">
					<h4>Quick Links</h4>
					<menu>
						<a href="">Link A</a>
						<a href="">Link B</a>
						<a href="">Link C</a>
						<a href="">Link D</a>
					</menu>
					<h4>Social</h4>
					<menu class="icons">
						<a class="icon-facebook"></a>
						<a class="icon-twitter"></a>
						<a class="icon-pinterest"></a>
						<a class="icon-vimeo"></a>
					</menu>
				</div>
				<div class="u-6-12 mobile-12-12">
					<h4>Newsletter</h4>
					<p>Subscribe to our newsletter and keep up to date with the latest news and events</p>
					<form>
						<input type="text"/>
						<input type="submit" value="Sign up"/>
					</form>
				</div>
			</div>
			<div class="row legals">
				<span class="u-6-12 mobile-12-12">&copy; Copyright 2015. Diginut Ltd.</span>
				<menu class="u-6-12 mobile-12-12 links">
					<a href="">Terms of Use</a>
					<a href="">Privacy Policy</a>
					<a href="">Cookies</a>
				</menu>
			</div>		
		</div>
	</footer>
</main>
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
		getScript("/js/scripts.min.js", function() {
			getScript("/js/plugins/cookies.js");
			getScript("/js/plugins/navigation.js");
			if (document.getElementById('googleMap')) {
				getScript("/js/vendor/map.js", function() {});
			}	
		});
	});
})();
</script>
<!--<![endif]-->
</body>
</html>
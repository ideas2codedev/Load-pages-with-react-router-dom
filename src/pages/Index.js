/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
//import logo from './logo.svg';
function Index (){
	
	return (
		<div id="index">
			<section id="banner">
				<div className="inner">
					<h1>Introspect: <span>A free + fully responsive<br />
					site template developed by TEMPLATED, edited by <a target="_blank" rel="noopener noreferrer" href="https://github.com/irenteria0617">@ismael</a></span></h1>
					<ul className="actions">
						<li><a href="#" className="button alt">Get Started</a></li>
					</ul>
				</div>
			</section>

			<section id="one">
				<div className="inner">
					<header>
						<h2>Magna Etiam Lorem</h2>
					</header>
					<p>Suspendisse mauris. Fusce accumsan mollis eros. Pellentesque a diam sit amet mi ullamcorper vehicula. Integer adipiscin sem. Nullam quis massa sit amet nibh viverra malesuada. Nunc sem lacus, accumsan quis, faucibus non, congue vel, arcu, erisque hendrerit tellus. Integer sagittis. Vivamus a mauris eget arcu gravida tristique. Nunc iaculis mi in ante.</p>
					<ul className="actions">
						<li><a href="#" className="button alt">Learn More</a></li>
					</ul>
				</div>
			</section>

			<section id="two">
				<div className="inner">
					<article>
						<div className="content">
							<header>
								<h3>Pellentesque adipis</h3>
							</header>
							<div className="image fit">
								<img src="images/pic01.jpg" alt="" />
							</div>
							<p>Cumsan mollis eros. Pellentesque a diam sit amet mi magna ullamcorper vehicula. Integer adipiscin sem. Nullam quis massa sit amet lorem ipsum feugiat tempus.</p>
						</div>
					</article>
					<article className="alt">
						<div className="content">
							<header>
								<h3>Morbi interdum mol</h3>
							</header>
							<div className="image fit">
								<img src="images/pic02.jpg" alt="" />
							</div>
							<p>Cumsan mollis eros. Pellentesque a diam sit amet mi magna ullamcorper vehicula. Integer adipiscin sem. Nullam quis massa sit amet lorem ipsum feugiat tempus.</p>
						</div>
					</article>
				</div>
			</section>

			<section id="three">
				<div className="inner">
					<article>
						<div className="content">
							<span className="icon fa-laptop"></span>
							<header>
								<h3>Tempus Feugiat</h3>
							</header>
							<p>Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia, magna lorem ullamcorper laoreet, lectus arcu.</p>
							<ul className="actions">
								<li><a href="#" className="button alt">Learn More</a></li>
							</ul>
						</div>
					</article>
					<article>
						<div className="content">
							<span className="icon fa-diamond"></span>
							<header>
								<h3>Aliquam Nulla</h3>
							</header>
							<p>Ut convallis, sem sit amet interdum consectetuer, odio augue aliquam leo, nec dapibus tortor nibh sed.</p>
							<ul className="actions">
								<li><a href="#" className="button alt">Learn More</a></li>
							</ul>
						</div>
					</article>
					<article>
					<div className="content">
							<span className="icon fa-laptop"></span>
							<header>
								<h3>Sed Magna</h3>
							</header>
							<p>Suspendisse mauris. Fusce accumsan mollis eros. Pellentesque a diam sit amet mi ullamcorper vehicula.</p>
							<ul className="actions">
								<li><a href="#" className="button alt">Learn More</a></li>
							</ul>
						</div>
					</article>
				</div>
			</section>

			<section id="footer">
				<div className="inner">
					<header>
						<h2>Get in Touch</h2>
					</header>
					<form method="post" action="#">
						<div className="field half first">
							<label htmlFor="name">Name</label>
							<input type="text" name="name" id="name" />
						</div>
						<div className="field half">
							<label htmlFor="email">Email</label>
							<input type="text" name="email" id="email" />
						</div>
						<div className="field">
							<label htmlFor="message">Message</label>
							<textarea name="message" id="message" rows="6"></textarea>
						</div>
						<ul className="actions">
							<li><input type="submit" value="Send Message" className="alt" /></li>
						</ul>
					</form>
					<div className="copyright">
						&copy; Untitled Design: <a href="https://templated.co/">TEMPLATED</a>. Images <a href="https://unsplash.com/">Unsplash</a>
					</div>
				</div>
			</section>
		</div>
	);

	
}

export default Index;

var React = require('react');
module.exports = React.createClass({

	render: function() {
		return (
			<section className="navBar-Box">
				<div className="topGreyBox"></div>
				<div className="navBar">
					<a href="#home" className="navLogo"></a>
					<div className="logoTitle">Fresh Jobs</div>
					<ul className="navBarItems">
						<li><a href="#jobs">JOBS</a></li>
						<li><a href="#companies">COMPANIES</a></li>
						<li><a href="#cities">CITIES</a></li>
						<li><a href="#whyFresh">WHY FRESH?</a></li>
						<li><a href="#forEmployers">FOR EMPLOYERS</a></li>
					</ul>
				</div>
			</section>
			)
	}
})
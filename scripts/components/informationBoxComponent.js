var React = require('react');
module.exports = React.createClass({
	render: function() {
		return (
			<section className="informationBox">
			<h1>Looking for a job?</h1>
			<hr/>
			<span>
				Create a Fresh Jobs profile and <strong>let employers come to you.</strong>
			</span>
			<ul>
				<li>Employers search our database and contact you</li>
				<li>Import easily from LinkedIn</li>
				<li>Link to Stack Overflow, GitHub, CodePlex, and more</li>
			</ul>
			<button>
				<span>Create a Profile</span>
			</button>
			</section>
			)
	}
})
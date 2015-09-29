var React = require('react');
module.exports = React.createClass({

	render: function() {
		return (
			<section className="jobRow-Box">
			<div className="jobTitleBox">
				<span className="jobTitle">Senior Front-End Engineer</span>
				<span className="dateAdded">Yesterday</span>
			</div>
			<div className="infoLocation-Line">
				<span className="job-type">NSONE</span>
				<span className="bullet">&#8226;</span>
				<span className="location">New York, NY</span>
			</div>
			<div className="descriptionSnip">Lots and lots of words regarding saomething that I am sure is very important but hasnt actyally been pulled from a server just yet.</div>
			<ul className="tagLine">
				<li>tag1</li>
				<li>tag2</li>
				<li>tag3</li>
			</ul>
			<hr/>
			</section>
			)
	}
})
var React = require('react');
module.exports = React.createClass({

	render: function() {

		return (
			<section className="jobRow-Box">
				<div className="jobTitleBox">
					<span className="jobTitle">{this.props.job.get('title')}</span>
					<span className="dateAdded">Today</span>
				</div>
				<div className="infoLocation-Line">
					<span className="job-type">{this.props.job.get('company')}</span>
					<span className="bullet">&#8226;</span>
					<span className="location">{this.props.job.get('location')}</span>
				</div>
				<div className="descriptionSnip">{this.props.job.get('description')}</div>
				<ul className="tagLine">
					<li></li>
					<li></li>
					<li></li>
				</ul>
				<hr/>
			</section>
						)
	}
})


// 


// <tr>
// 				<th>{this.props.job.get('title')}</th>
// 				<th>{this.props.job.get('company')}</th>
// 				<th>{this.props.job.get('location')}</th>
// 				<th>{this.props.job.get('description')}</th>
// 			</tr>

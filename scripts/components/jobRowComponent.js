var React = require('react');
module.exports = React.createClass({

	render: function() {
		console.log(this.props.model.get('tag[0]'));
		return (
			<section className="jobRow-Box">
			<div className="jobTitleBox">
				<span className="jobTitle">{this.props.model.get('title')}</span>
				<span className="dateAdded">{this.props.model.get('dateCreated')}</span>
			</div>
			<div className="infoLocation-Line">
				<span className="job-type">{this.props.model.get('company')}</span>
				<span className="bullet">&#8226;</span>
				<span className="location">{this.props.model.get('location')}</span>
			</div>
			<div className="descriptionSnip">{this.props.model.get('description')}</div>
			<ul className="tagLine">
				<li>{this.props.model.get('tag[0]')}</li>
				<li>{this.props.model.get('tag[1]')}</li>
				<li>{this.props.model.get('tag[2]')}</li>
			</ul>
			<hr/>
			</section>
			)
	}
})
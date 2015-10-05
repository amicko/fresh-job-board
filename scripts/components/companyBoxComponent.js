var React = require('react');
module.exports = React.createClass({

	render: function() {
		return (
			<section className="company-Box">
				<div className="company-Box-Box">
					<h1>Company Information</h1>
					<hr />
					<div className="coverPic"></div>
					<div className="profilePic"></div>
					<div className="companyInfo">
						<span className="companyName">{this.props.company.get('name')}</span>
						<span className="companyLocation">{this.props.company.get('location')}</span>
					</div>
				</div>
			</section>
			)
	}
})
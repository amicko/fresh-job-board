var React = require('react');

var CompanyBoxComponent = require('./companyBoxComponent.js');

module.exports = React.createClass({

	render: function() {
		var companyBoxData = this.props.companyBox.map(function(company) {
			return (
				<CompanyBoxComponent company={company} />
			);
		});
		return (
			<div>{companyBoxData}</div>
			)
	}
})
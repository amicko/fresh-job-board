var React = require('react');

var JobRowComponent = require('./jobRowComponent');

module.exports = React.createClass({
	componentWillMount: function() {
		var self = this;
		console.log(this.props.jobRow);
		this.props.jobRow.on('sync', function() {
			self.forceUpdate();
		});
	},

	render: function() {
		console.log(this);
		var jobRowData = this.props.jobRow.map(function(job) {
			return (
				<JobRowComponent job={job} />
			);
		});
		return (
			<div>{jobRowData}</div>
			)
	}
})
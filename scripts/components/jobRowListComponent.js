var React = require('react');

var JobRowComponent = require('./jobRowComponent');

module.exports = React.createClass({

	render: function() {
		// var jobRowData = this.props.jobRow.map(function(job) {
		// 	return (
		// 		<JobRowComponent job={job} />
		// 	);
		// });
		console.log(this.props.jobRow)

		return (
			<div className="row">
				<h1>Job Positions</h1>
				<table className="table">
					<thead>
						<tr>
							<th>Title</th>
							<th>Company</th>
							<th>Location</th>
							<th>Description</th>
						</tr>
					</thead>
					<tbody>
						<div></div>
					</tbody>
				</table>
			</div>
			)
	}
})
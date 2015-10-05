var React = require('react');
module.exports = React.createClass({
	render: function() {
		// console.log(this.props.job);
		return (
			<section className="form-box">
				<form className="submitJobForm" onSubmit={this.onFormSubmitted}>
					<h2>Post your job</h2>
					<label>Title</label>
					<input type="text" ref="title"/>
					<label>Company Name</label>
					<input type="text" ref="company"/>
					<label>Location</label>
					<input type="text" ref="location"/>
					<label>Description</label>
					<textarea ref="description"></textarea>
					<label>Tags</label>
					<input type="text" ref="tags"/>
					<button>Submit Job</button>
				</form>
			</section>
			)
	},
	onFormSubmitted: function(e) {
		e.preventDefault();
		var newJob = this.props.jobs.add({
			title: this.refs.title.getDOMNode().value,
			company: this.refs.company.getDOMNode().value,
			location: this.refs.location.getDOMNode().value,
			description: this.refs.description.getDOMNode().value
		})
		console.log('Job successfully submitted');
	}
})
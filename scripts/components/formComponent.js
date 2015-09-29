var React = require('react');
module.exports = React.createClass({

	render: function() {
		return (
			<section className="form-box">
				<form className="submitJobForm">
					<h2>Post your job</h2>
					<label>Title</label>
					<input type="text" />
					<label>Company Name</label>
					<input type="text" />
					<label>Location</label>
					<input type="text" />
					<label>Description</label>
					<textarea></textarea>
					<label>Tags</label>
					<input type="text" />
					<button>Submit Job</button>
				</form>
			</section>
			)
	}
})
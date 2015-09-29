var React = require('react');
module.exports = React.createClass({

	render: function() {
		return (
			<section className="first-box">
				<h2>Tips for your job posting</h2>
				<hr/>
				<p>
					<strong>Add Keywords</strong> because the majority of candidates search for availablepositions using keywords, make sure you use all relevant keywords in your posting.
				</p>
				<p>
					<strong>Use familiar job titles.</strong> Use specific but familiar job titles in your postings. make sure the titles are clear and succinct.
				</p>
				<p>
					<strong>Give them details.</strong> The purpose of posting a job is to spark a candidate's interest in the available position. When job postings have detailed descriptions, candidates tend to apply to them more.
				</p>
				<p>
					<strong>Expand your location.</strong> Do not limit your job posting to a restricted area around the job's location. Make sure to include surrounding cities and metropolitan areas in your circle.
				</p>
				<p>
					<strong>Discuss compensation.</strong> Even though you may not want to give an exact compensation, give a range. Make sure to point out any bonuses, commisions, or non-monetary compensation, as well.
				</p>
			</section>
			)
	}
})
var React = require('react');
var FirstBox = require('./firstBoxComponent.js');
var FormComponent = require('./formComponent.js');
var NavComponent = require('./navComponent.js');
var JobRowList = require('./jobRowListComponent');
var JobRowComponent = require('./JobRowComponent.js');
var CompanyBoxComponent = require('./companyBoxComponent.js');
var jobPostCollection = require('../collections/jobPostingCollection.js');
var jobPost = require('../models/jobPostingModel.js');
var companyInfoCollection = require('../collections/companyInfoCollection.js');
var companyInfo = require('../models/companyInfoModel.js');

// var jobPost1 = new jobPost({
// 	title: 'Farmer', 
// 	dateCreated: 'September 29, 2015', 
// 	company: 'Monsanto', 
// 	location: 'Houston, TX', 
// 	description: 'words, words, words', 
// 	tag: "['stuff', 'junk', 'more stuff']"
// })
// var jobPost2 = new jobPost({
// 	title: 'Font-End Engineer', 
// 	dateCreated: 'September 29, 2015', 
// 	company: 'Google', 
// 	location: 'Austin, TX', 
// 	description: 'words, words, words', 
// 	tag: "['stuff', 'junk', 'more stuff']"
// })
// var jobPost3 = new jobPost({
// 	title: 'Inventory Supervisor', 
// 	dateCreated: 'September 29, 2015', 
// 	company: 'Wal-Mart', 
// 	location: 'Taylor, TX', 
// 	description: 'words, words, words', 
// 	tag: "['stuff', 'junk', 'more stuff']"
// })
// var jobPost4 = new jobPost({
// 	title: 'Data Entry Specialist', 
// 	dateCreated: 'September 29, 2015', 
// 	company: 'Texas State Comptroller', 
// 	location: 'Austin, TX', 
// 	description: 'words, words, words', 
// 	tag: "['stuff', 'junk', 'more stuff']"
// })

var company1 = new companyInfo({name: 'MaxPlay', location: 'Austin, TX'});




module.exports = React.createClass({

	componentWillMount: function() {
	this.jobs = new jobPostCollection();
	this.jobs.fetch();
	console.log(this.jobs);
	},

	render: function() {
		return (
			<section className="app-Box">
				<NavComponent />
				<div className="subNav-Box">
					<FormComponent />
					<FirstBox />
				</div>
				<div>
					<JobRowList jobRow={JobRowComponent} />
				</div>
				<div>
					<CompanyBoxComponent model={company1} />
				</div>
			</section>
			)
	}
})
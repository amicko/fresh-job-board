var React = require('react');
var Backbone = require('backbone');
var JobCollection = require('../collections/jobPostingCollection.js');

// Jobs Page:
var FilterBox = require('./filterBoxComponent.js');
var JobRowList = require('./jobRowListComponent.js');
var InfoBox = require('./informationBoxComponent.js');
var jobData = require('../data/jobData.js');

// Company Page:
var CompanyBox = require('./companyBoxListComponent.js');
var companyData = require('../data/companyData.js');

// For Employers Page:
var NewJobForm = require('./formComponent.js');
var CompanyTipsBox = require('./firstBoxComponent.js');

console.log('pre-module.exports')

module.exports = React.createClass({


	getInitialState: function() {
		return {
			pageName: 'home',
			id: null
		};
	},
	componentWillMount: function() {
		var self = this;
		this.jobs = new JobCollection();

		var Router = Backbone.Router.extend({
			routes: {
				'': 'goHome',
				'home': 'goHome',
				'jobs': 'goJobs',
				'companies': 'goCompanies',
				'cities': 'goCities',
				'whyFresh': 'goWhyFresh',
				'forEmployers': 'goForEmployers'
			},
			goHome: function() {
				self.setState({
					pageName: 'home'
				})
			},
			goJobs: function() {
				self.setState({
					pageName: 'jobs'
				})
			},
			goCompanies: function() {
				self.setState({
					pageName: 'companies'
				})
			},
			goCities: function() {
				self.setState({
					pageName: 'cities'
				})
			},
			goWhyFresh: function() {
				self.setState({
					pageName: 'whyFresh'
				})
			},
			goForEmployers: function() {
				self.setState({
					pageName: 'forEmployers'
				})
			}
		})

		this.router = new Router();
		Backbone.history.start();
	},
	render: function() {
		var pageComponent = null;

		if(this.state.pageName === 'home') {
			console.log('Home Page');
		}
		else if(this.state.pageName === 'jobs') {
			console.log('Jobs Page');
			pageComponent = <div>
								<FilterBox />
								<div className="jobRow-container">
									<JobRowList jobRow={jobData}/>
								</div>
								<div className="infoBox-container">
									<InfoBox />
								</div>
							</div>
		}
		else if(this.state.pageName === 'companies') {
			console.log('Companies Page');
			pageComponent = <div>
								<CompanyBox companyBox={companyData}/>
							</div>
		}
		else if(this.state.pageName === 'cities') {
			console.log('Cities Page');
			pageComponent = <div className="construction">
								<h1>COMING SOON!</h1>
								<h2>This site is under construction</h2>
							</div>
		}
		else if(this.state.pageName === 'whyFresh') {
			console.log('Why Fresh Page');
			pageComponent = <div className="construction">
								<h1>COMING SOON!</h1>
								<h2>This site is under construction</h2>
							</div>
		}
		else if(this.state.pageName === 'forEmployers') {
			console.log('For Employers Page');
			pageComponent = <div>
								<NewJobForm jobs={this.jobs} router={this.router}/>
								<CompanyTipsBox />
							</div>
		}

		return (
			<div>
				<main>
					{pageComponent}
				</main>
			</div>
			)
	}
})
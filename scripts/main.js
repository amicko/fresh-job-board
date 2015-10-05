'use strict';

var React = require('react');
var AppComponent = require('./components/AppComponent');

React.render(
	<AppComponent />,
	document.getElementById('main-content')
);




// 'use strict';
// var React = require('react');
// var Backbone = require('backbone');
// var FilterBox = require('./components/filterBoxComponent.js');
// var JobRowList = require('./components/jobRowListComponent.js');
// var InfoBox = require('./components/informationBoxComponent.js');
// var jobData = require('./data/jobData.js');
// var CompanyBox = require('./components/companyBoxListComponent.js');
// var companyData = require('./data/companyData.js');
// var CompanyTipsBox = require('./components/firstBoxComponent.js');
// var NewJobForm = require('./components/formComponent.js');
// var JobCollection = require('./collections/jobPostingCollection.js');

// var mainElement = document.getElementById('main-content');
// // console.log(this);

// // this.jobs = new JobCollection();

// var Router = Backbone.Router.extend({
// 	routes: {
// 		'': 'goHome',
// 		'home': 'goHome',
// 		'jobs': 'goJobs',
// 		'companies': 'goCompanies',
// 		'cities': 'goCities',
// 		'whyFresh': 'goWhyFresh',
// 		'forEmployers': 'goForEmployers'
// 	},
// 	goHome: function() {
// 		React.render(
// 			<div></div>,
// 			mainElement
// 			)
// 	},
// 	goJobs: function() {
// 		React.render(
// 			<div>
// 				<FilterBox />
// 				<div className="jobRow-container">
// 					<JobRowList jobRow={jobData}/>
// 				</div>
// 				<div className="infoBox-container">
// 					<InfoBox />
// 				</div>
// 			</div>,
// 			mainElement
// 		);
// 	},
// 	goCompanies: function() {
// 		React.render(
// 			<div>
// 				<CompanyBox companyBox={companyData}/>
// 			</div>,
// 			mainElement
// 		);
// 	},
// 	goCities: function() {
// 		React.render(
// 			<div className="construction">
// 				<h1>COMING SOON!</h1>
// 				<h2>This site is under construction</h2>
// 			</div>,
// 			mainElement
// 			)
// 	},
// 	goWhyFresh: function() {
// 		React.render(
// 			<div className="construction">
// 				<h1>COMING SOON!</h1>
// 				<h2>This site is under construction</h2>
// 			</div>,
// 			mainElement
// 			)
// 	},
// 	goForEmployers: function() {
// 		React.render(
// 			<div>
// 				<NewJobForm />
// 				<CompanyTipsBox />
// 			</div>,
// 			mainElement
// 		);
// 	}
// })

// var r = new Router();
// Backbone.history.start();


// // React.render(
// // 	<AppComponent />,
// // 	mainElement
// // 	)


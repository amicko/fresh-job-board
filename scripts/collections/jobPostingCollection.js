var Backbone = require('backbone');
var jobPostingModel = require('../models/jobPostingModel.js');
module.exports = Backbone.Collection.extend({
	model: jobPostingModel
	// url: 'https://nonprofit-dashboard.herokuapp.com/campaigns'
});
var Backbone = require('backbone');
var companyInfoModel = require('../models/companyInfoModel.js');
module.exports = Backbone.Collection.extend({
	model: companyInfoModel
	// url: 'https://nonprofit-dashboard.herokuapp.com/campaigns'
});
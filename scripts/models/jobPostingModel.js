var Backbone = require('backbone');
module.exports = Backbone.Model.extend({
	defaults: {
		id: null,
		title: '',
		company: '',
		location: '',
		dateCreated: null,
		description: '',
		tag: []
	}
})
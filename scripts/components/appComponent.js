var React = require('react');
var FirstBox = require('./firstBoxComponent.js');
var FormComponent = require('./formComponent.js');
var NavComponent = require('./navComponent.js');
module.exports = React.createClass({

	render: function() {
		return (
			<section className="app-Box">
				<NavComponent />
				<FormComponent />
				<FirstBox />
			</section>
			)
	}
})
'use strict';
var React = require('react');
var AppComponent = require('./components/appComponent.js');
var FirstBox = require('./components/firstBoxComponent.js');
var FormComponent = require('./components/formComponent.js');
var NavComponent = require('./components/navComponent.js');
var JobRowComponent = require('./components/jobRowComponent.js');
var FilterBoxComponent = require('./components/filterBoxComponent.js');
var InformationBoxComponent = require('./components/informationBoxComponent.js');

var mainElement = document.getElementById('main-content');


React.render(
	<AppComponent />,
	mainElement
	)


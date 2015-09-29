var React = require('react');
module.exports = React.createClass({
	render: function() {
		return (
			<section className="filterBox">
				<form>
					<div className="keyword">
						<label>Keywords</label>
						<input type="text"/>
					</div>
					<div className="formLocation">
						<label>Location</label>
						<input type="text"/>
					</div>
					<button>Search</button>
				</form>
			</section>
			)
	}
})
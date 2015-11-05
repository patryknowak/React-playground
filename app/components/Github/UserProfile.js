var React = require('react');

var UserProfile = React.createClass({

	render: function(){
		
		return (
			<div>
				User {this.props.username} <br />
				Bio {this.props.bio.name}
			</div>
		)
	}
});

module.exports = UserProfile;
Template.search.helpers({
	ownProfile: function() {
    	return this.userId == Meteor.userId();
  	}	
});

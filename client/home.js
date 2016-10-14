import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './home.html';

Template.home.events({
	'click #experience': function(event){
		Router.go("/exp");
	},
	
	'click #projects':function(event){
		Router.go("/pro");
	},
	'click #contact':function(event){
		Router.go("/con");
	}
	
});

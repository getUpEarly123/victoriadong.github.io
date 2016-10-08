Router.route("/",function(){
	this.render("home");
	
});
Router.route("/exp",function(){
	this.render("experience");
});
Router.route("/pro",function(){
	this.render("projects");
});

Router.route("/con",function(){
	this.render("contact");
});
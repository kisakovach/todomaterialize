RAD.model('task', Backbone.Model.extend({

	defaults: {
		title:"new task",
		text: "new text",
		deadline: new Date(),
		completed: 0
	}
	
}), false);
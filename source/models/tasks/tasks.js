RAD.model('tasks', Backbone.Collection.extend({
 
 model:RAD.model("task"),

 comparator: function(task){
  return - task.get("deadline");
 } 
}), true);
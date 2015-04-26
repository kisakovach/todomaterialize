RAD.utils.fromJSON = function(taskJSON){
	  taskJSON.deadline = new Date (taskJSON.deadline)
};

RAD.utils.cropdate= function(task){
 date = task.get("deadline");
 return new Date(date.getFullYear(),date.getMonth(),
        date.getDate());	
}


RAD.application(function (core) {
    var app = this;
			
    app.start = function () {
       // alert('Hello world!');

// to add your first view - run "rad add view view.main" from the root of this project
// you can use the code below to show your first view
        var options = {
            container_id: '#screen',
            content: "screen.main",
            animation: 'none'
        };
       
        core.startAll();
        core.publish("tasks.loader.load",{
        file: "source/external/tasks.json",
        loader: false,
        callback: function(data){
           _(data).each(function(task){
	         console.log(task);
             RAD.utils.fromJSON(task);	
	         console.log(task);
             RAD.model("tasks").add(task);
	       });
	   
        }
       });
       core.publish('navigation.show', options);

    };

    app.list = function(){

        var options = {
            container_id: '#main',
            content: "main.list",
            animation: 'fade',
            
        };
        
        core.publish('navigation.show', options);
    };

    app.add = function(){

        var options = {
            container_id: '#main',
            content: "main.add",
            animation: 'fade',
            
        };
        
        core.publish('navigation.show', options);
    }



    return app;
}, true);

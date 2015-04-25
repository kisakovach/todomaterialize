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
        file: "source/external/tasks.json" ,
        loader: false,
        callback: function(data){
            RAD.model("tasks").set(data);
        }});
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

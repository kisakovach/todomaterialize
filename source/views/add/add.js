RAD.view("main.add", RAD.Blanks.View.extend({

    url: 'source/views/add/add.html',

    onInitialize: function () {
        this.model= new RAD.models.task();
    },
    events: {
     "click .btn":"OnAddTask"
    },
    
    OnAddTask: function(e){
     var m={};
     m.title = this.$("#title").val();
     m.text = this.$("#text").val();
     m.deadline=new Date(this.$("#deadline").val()+" "+$("#time").val());
	
     this.publish("tasks.loader.addtask",{model:m});
       
    }	
	
/*
    onNewExtras: function (extras) {
        
    },
    onReceiveMsg: function (channel, data) {
        
    },
    onStartRender: function () {
        
    },
    onEndRender: function () {
        
    },
    onBeforeAttach: function(){

    },
    onStartAttach: function () {
        
    },
    onEndAttach: function () {
        
    },
    onEndDetach: function () {
        
    },
    onDestroy: function () {
        
    }
*/

}));
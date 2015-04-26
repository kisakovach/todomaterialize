RAD.view("main.list", RAD.Blanks.ScrollableView.extend({

    model: RAD.model("tasks"),
    url: 'source/views/list/list.html',

    onInitialize: function () {
        
    },
    
    events:{
    "click input":"OnChecked",
    "click tr":"OnClicked"		
    },

    OnChecked: function(e) {
     		var cid=e.target.id;
		console.log("get value: "+cid);
		if(!e.target.hasAttribute("checked")){                                         
			this.model.get(cid).set("completed",1);
			this.publish("tasks.loader.changetask");
		} else { 
			this.model.get(cid).set("completed",0);		
			this.publish("tasks.loader.changetask");
		}       
    },
	
    OnClicked: function(e) {
      
 	if(!(e.target.type=="checkbox")){
	 
	}


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
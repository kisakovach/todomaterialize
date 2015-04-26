RAD.service("tasks.loader", RAD.Blanks.Service.extend({
   
   _getJSON: function (file, callback ){
    var service =this;
    $.getJSON(file,callback)
    .done(function(data){
        console.log(new Date() + "dialog close");
        service.publish("navigation.dialog.close",{ container_id:"#screen",
                                             	       content:"screen.load"
	                                                 });
     }); 
   },
   
   
   saveToLocal: function(){
   	
   	localStorage.setItem("tasks",JSON.stringify(RAD.model("tasks").toJSON()));
	
   },
   
   loadFromLocal: function(){
       if(localStorage.getItem("tasks")!=null){
         var jsonTasks =  JSON.parse(localStorage.getItem("tasks"));
	       _(jsonTasks).each(RAD.utils.fromJSON);
	       RAD.model("tasks").set(jsonTasks);
	       return true;
	     } else {
	       return false;
	     }
   },	
   	 
   onReceiveMsg: function (channel, data) {
        window.console.log('channel:', channel, 'data:', data);
        var msg = channel.split(".");
        switch(msg[msg.length-1]){
            case "load" : 
               if(!this.loadFromLocal()){
                 if(!data.loader){
                    console.log(new Date()+" is loaded");
                    this.publish("navigation.dialog.show",{ container_id:"#screen",
                                                            content:"screen.load",
							                                              animation:"fade"
                                                          });
		            };
                this._getJSON(data.file,data.callback);
              };
      	    case "addtask" : 
      		    if(data.id_task==null){
      		      RAD.model("tasks").add(data.model);
      		    } else {
      		      //RAD.model("tasks").get(data.id_task).set(data.model);
      		    }
      		    this.saveToLocal();
      	    case "changetask":
      		    this.saveToLocal();   
      	    break;
        };    
    }
}));
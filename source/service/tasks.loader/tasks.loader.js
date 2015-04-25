RAD.service("tasks.loader", RAD.Blanks.Service.extend({
   
   _getJSON: function (file, callback ){
    var service =this;
    $.getJSON(file,callback)
    .done(function(data){
        console.log(new Date() + "dialog close");
        service.publish("navigation.dialog.close",{ container_id:"#screen",
                                             content:"screen.load",
                                             animation:"fade"
                                            });
     }) 
   },
    
   onReceiveMsg: function (channel, data) {
        window.console.log('channel:', channel, 'data:', data);
        var msg = channel.split(".");
        switch(msg[msg.length-1]){
            case "load" : 
                if(!data.loader){
                    console.log(new Date()+" is loaded");
                    this.publish("navigation.dialog.show",{ container_id:"#screen",
                                                     content:"screen.load",
                                                     animation:"fade"
                                                    });
                };
            this._getJSON(data.file,data.callback);
            break;
        }    
    }
}));
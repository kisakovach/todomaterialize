RAD.view("screen.main", RAD.Blanks.View.extend({

    url: 'source/views/main/main.html',
/*
    onInitialize: function () {
        
    },
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

    events: {

        "click #list-btn": "OnList",
        "click #add-btn": "OnAdd",

    },

    OnList: function (e) {
        // body...
        //$("#main").html("");
	this.application.list();
        this.publish("app.list",{b:"list tabed"});

    },
    
    OnAdd: function (e) {
        // body...
	//$("#main").html("");
        this.application.add();
        this.publish("app.sdd",{b:"add tabed"});

    }

}));
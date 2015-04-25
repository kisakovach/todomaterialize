RAD.view("main.add", RAD.Blanks.View.extend({

    url: 'source/views/add/add.html',

    onInitialize: function () {
        this.model= new RAD.models.task();
    },
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
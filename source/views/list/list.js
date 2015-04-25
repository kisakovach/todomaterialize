RAD.view("main.list", RAD.Blanks.ScrollableView.extend({

    model: RAD.models.tasks,
    url: 'source/views/list/list.html',

    onInitialize: function () {
        
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
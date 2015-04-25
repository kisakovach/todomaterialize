(function (document, window) {
    // don't remove ## marks, CLI uses them for updating this file
    // #script_begin#
    
    var scripts = [
        
        "source/models/task/task.js",
        
        "source/models/tasks/tasks.js",
        
        "source/service/tasks.loader/tasks.loader.js",
        
        "source/views/add/add.js",
        
        "source/views/list/list.js",
        
        "source/views/main/main.js",
        
        "source/views/screen.load/screen.load.js",
        
        "source/application/application.js"
    ];
    // #script_end#
    function onEndLoad() {

        var core = window.RAD.core,
            application = window.RAD.application,
            coreOptions = {
                defaultBackstack: false,
                defaultAnimation: 'none',
                animationTimeout: 3000,
                debug: false
            };

        //initialize core by new application object
        core.initialize(application, coreOptions);

        //start
        application.start();
    }

    window.RAD.scriptLoader.loadScripts(scripts, onEndLoad);
}(document, window));
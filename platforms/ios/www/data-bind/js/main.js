var app;

require.config({
    //baseUrl: '../libs/',
    paths: {
        jQuery: "../libs/jquery.min",
        kendo: "../libs/kendo.mobile.min",
        json2: "./json2",
        form: "../libs/jquery.form.min"
    },
    shim: {
        jQuery: {
            exports: "jQuery"
        },
        kendo: {
            exports: "kendo"
        },
        json2: {
            exports: "json2"
        },
        form: {
            exports: "form"
        }
    }
});

require(["jQuery", "app"], function($, application) {
    $(function() {
        app = application
        application.init();
        
        //global ajax timeout
        $.ajaxSetup({  
          timeout:10000
        });  
    });
});
﻿define([], function () {
    var _kendoApp;

    return {
        init: function (kendoApp) {
            _kendoApp = kendoApp;
        },
        kendoApp: function () {
            return _kendoApp;
        },
        parseQueryStringToObject: function () {
            var argsParsed = {},
                arg,
                kvp,
                hash = document.location.hash;

            if(!hash || hash.length == 0) {
                return argsParsed;
            }
            var args = document.location.hash.split('?');
            if(args.length < 2) {
                return argsParsed;
            }
            args = args[1].split('&');
            
            for (i=0; i < args.length; i++)
            {
                arg = decodeURIComponent(args[i]);
            
                if (arg.indexOf('=') == -1)
                {
                    argsParsed[arg.trim()] = true;
                }
                else
                {
                    kvp = arg.split('=');
                    var val = kvp[1].trim();
                    argsParsed[kvp[0].trim()] = isNaN(val) ? val : parseFloat(val);
                }
            }
            return argsParsed;
        },
        
        setViewTitle: function (view, title) {
            view.data("kendoMobileView").title = title;
            var navbar = view.find(".km-navbar").data("kendoMobileNavBar");
            if (navbar) {
                navbar.title(title);
            }
        },

        navigate: function (location) {
            _kendoApp.navigate(location);
        },

        changeLoadingMessage:function(msg){
            _kendoApp.changeLoadingMessage(msg);
        },

        redirect: function (location) {
            _kendoApp.pane.history.pop();
            _kendoApp.navigate(location);
        },

        replace:function(location){
            _kendoApp.replace(location);
        },

        scrollViewToTop: function () {
            //viewElement.data("kendoMobileView").scroller.reset();
            _kendoApp.scroller().reset();
        },
        
        showLoading: function (message) {
            //$(".loading-message").text(message ? message : "Loading...");
            _kendoApp.showLoading(message);
        },
        
        hideLoading: function () {
            _kendoApp.hideLoading();
        }
    };
});
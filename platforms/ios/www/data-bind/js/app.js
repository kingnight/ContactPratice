define(["jQuery", "kendo",  "config", "utils", "contacts-view"],
       function($, kendo,  config,   utils, contactsView) {

    var _onError = function (error, url, line) {
        utils.showError(error);
    };

    var init = function () {
        window.onerror = _onError;

        var appOptions = {};

        appOptions.loading = '<h1></h1>';
        if (kendo.support.mobileOS.android) {
            //appOptions.skin = "flat";
            appOptions.skin = "android-light";
            appOptions.transition = "overlay";
        }
        else if (kendo.support.mobileOS.ios) {
            appOptions.statusBarStyle = "black-translucent";
            //appOptions.transition = "slide";
            //appOptions.loading ='';
        }
       
        var kendoApp=new kendo.mobile.Application($(document.body),appOptions);
        utils.init(kendoApp);
    };

    return {
        closeErrorModal: utils.closeError,
        config: config,
        init: init,
        contactsView: contactsView
    };
});
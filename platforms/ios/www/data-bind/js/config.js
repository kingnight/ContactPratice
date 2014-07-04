define([], function () {
    var appId = "2281792";
    var domain = "192.168.44.56:8080/MServer/",
    //var domain = "192.168.3.175/MServer/",
    //var domain = "192.168.17.41:8080/MServer/",
        serverUrl = "http://" + domain,
        serviceUrl = serverUrl + "dispatcher.search?appId=aisino&mid=abc123&url=http://aisino/";
        sqlServiceUrl = serverUrl + "dispatcher.search?appId=aisino&mid=abc123&url=http://sql/";

    return {
        domain: domain,
        serverUrl: serverUrl,
        serviceUrl: serviceUrl,
        loginUrl: serviceUrl + "user/login.html",  //login
        logoutUrl: serverUrl+ "logout.search", //logout
        upgradeUrl: serverUrl+"checkVersion.search", //check app upgrade
        apkUrl: serverUrl+"appfile/AisinoMobi.apk", //apk
        
        userInfoUrl: serviceUrl + "user/mainCurrentUserData.html", //download user info url
        modifyUserUrl: serviceUrl + "user/modifyUser.html",   //submit user info url
        tasksUrl: serviceUrl + "job/json/selfJobs.html",      // task list
        confirmTaskUrl: serviceUrl + "myjob/changeOkStatus.html", //confirm task
        progressUrl: serviceUrl + "progress/json/readProgress.html",// read task progress
        saveProgressUrl: serviceUrl+ "progress/json/saveProgress.html", // new and update
        confirmProgressUrl: serviceUrl + "progress/json/okProgress.html",// confirm progress
        deleteProgressUrl: serviceUrl + "progress/json/deleteProgress.html", // delete progress
                                   
        //noticeUrl: serviceUrl + "notice/givePersonalNotices.html",
        imageUrl: serviceUrl+"user/downLoadImg.html?photoPath=",  // user image in user view.
        imageUploadUrl: serviceUrl+"upload/uploadFile.html", // upload image to server
        
        //sql
        sqlTasksUrl: sqlServiceUrl+"queryMyJob.jsp", // get tasks by querying sql
        clockingInUrl: sqlServiceUrl + "querytest.jsp",  //clocking-in 
        queryPushInofUrl: sqlServiceUrl + "queryPushInof.jsp",  //query PushInof setting
        updatePushInofUrl: sqlServiceUrl + "updatePushInof.jsp", //change  PushInof setting
        
        pushServerURL: serverUrl + "updateEmpChannelInfo.search", // push server url
        contactsInfoURL:serverUrl + "searchContactsInfoServlet.search"  //contact server url

    };
});
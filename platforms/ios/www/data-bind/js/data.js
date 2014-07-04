define(["jQuery", "kendo", "config", "utils"], function ($, kendo, config, utils) {
    var _wcfSchemaData = function (data) {
            return data.value;
        },

        _wcfSchemaTotal = function (data) {
            return data["odata.count"];
        };
    
    var DataSourceConfig = function (url, options) {
        this.transport = {
            read: url
        };
        //this.sort = {
        //    field: sortField,
        //    dir: "asc"
       // };
        $.extend(this, options || {});
    };
    
    DataSourceConfig.prototype = {
        type: "odata",
        schema: {
            data: _wcfSchemaData,
            total: _wcfSchemaTotal
        },
        requestStart: function () { //infinite scrolling has its own, less obtrusive indicator
            if (this.pageSize() === undefined || this.page() === 1) { 
                utils.showLoading(); 
            }
        }, 
        requestEnd: function () { 
            utils.hideLoading(); 
        },
        error: function () { 
            utils.hideLoading(); 
            utils.showError("There was an error loading the data from the server. Please close the app and try again."); 
        }
    };

    var EndlessScrollDataSource = kendo.data.DataSource.extend({
        _observe: function(data) {            
            if(this._page > 1) {
                this._data.push.apply(this._data, data);
                return this._data;
            }
            return kendo.data.DataSource.prototype._observe.call(this, data);
        }
    });

    return {
        clear: function (dataSource) {
            dataSource.view().splice(0, dataSource.view().length);
        },
        
        //tasksList: new EndlessScrollDataSource(new DataSourceConfig(config.tasksUrl, {
        //    pageSize: 20
        //})),
        tasksList:function() { 
            return new kendo.data.DataSource({
                transport:{
                  read: function(options) {
                      $.ajax({
                        url: config.tasksUrl,
                        dataType: "json",
                        /*success: function(result) {
                            alert(result);
                            alert(result.rows);
                            alert(result.rows[0].title);
                          options.success(result);
                        }*/
                      });
                    }
                }
            })
            //return datasource;
        },
                    
        noticesList: function() {
            alert("--noticeUrl:"+config.noticeUrl);
            var datasource = new kendo.data.DataSource({
                autoSync: false,
                transport:{
                    read:{
                        url: config.noticeUrl,
                        pageSize: 20,
                        dataType: "json"
                    }
                }/*,
                schema: {
                    data: "rows"
                }*/
            });
            /*var data;
            datasource.fetch(function(){
                alert("fetch  data");
                data = datasource.data();
                alert("1111"+data);
            });
            alert("2222"+data);*/
            return datasource;
        }
        /*genresList: new kendo.data.DataSource(new DataSourceConfig(config.genresUrl, "Name")),
        
        artistsList: new kendo.data.DataSource(new DataSourceConfig(config.artistsUrl, "Name", {
            serverFiltering: true,
            serverSorting: true,
            serverGrouping: false,
            group: [{field: "FirstLetter"}],
            schema: {
                parse: function (data) {
                    $.each(data.value, function (index, artist) {
                        artist.FirstLetter = artist.Name.substring(0,1).toUpperCase();
                        if(artist.FirstLetter.match(/\d/)) {
                            artist.FirstLetter = "#"
                        }
                    });
                    return data;
                },
                data: _wcfSchemaData,
                total: _wcfSchemaTotal
            }
        })),

        albumsList: new EndlessScrollDataSource(new DataSourceConfig(config.albumsUrl + "?$expand=Artist", "Title", {
            serverPaging: true,
            serverFiltering: true,
            serverSorting: true,
            pageSize: 20
        })),

        searchList: new EndlessScrollDataSource(new DataSourceConfig(config.albumsUrl + "?$expand=Artist", "Title", {
            serverPaging: true,
            serverFiltering: true,
            serverSorting: true,
            pageSize: 20
        })),

        orderHistory: function (user, pass) {
            return new kendo.data.DataSource({
                serverPaging: true,
                serverSorting: true,
                pageSize: 5,
                sort: [{field: "OrderDate", dir: "desc"}, {field: "Title", dir: "asc"}],
                group: {field: "OrderId"},
                transport: {
                    read: {
                        url: config.orderHistoryUrl,
                        type: "POST",
                        data: {
                            username: user,
                            password: pass
                        }
                    }
                },
                schema: {
                    data: "Data",
                    total: "Total",
                    model: {
                        id: "OrderId",
                        fields: {
                            OrderId: { type: "number" },
                            OrderDate: { type: "date" },
                            Quantity: { type: "number" },
                            UnitPrice: { type: "number" },
                            Title: { type: "string"}
                        }
                    }
                },
                requestStart: function () { 
                    if (this.page() === 1) { 
                        utils.showLoading(); 
                    }
                },
                requestEnd: function () { 
                    if (this.page() === 1) { 
                        utils.hideLoading(); 
                    }
                },
                error: function () { 
                    utils.hideLoading(); 
                    utils.showError("There was an error loading the data from the server. Please close the app and try again."); 
                }
            });
        }*/
    };
});
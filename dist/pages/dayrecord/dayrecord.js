"use strict";

var _util = require("../../utils/util.js");

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = getApp();
Page({
    data: {
        dataSource: [{
            level: "B类 较重要",
            content: "",
            // username: app.globalData.userInfo["username"],
            progress: ""
        }, {
            level: "B类 较重要",
            content: "",
            // username: app.globalData.userInfo["username"],
            progress: ""
        }, {
            level: "B类 较重要",
            content: "",
            // username: app.globalData.userInfo["username"],
            progress: ""
        }],
        today: "",
        username: ""
    },
    TapHeader: function TapHeader() {
        wx.navigateTo({
            url: "../calendar/calendar"
        });
    },
    tapClear: function tapClear() {
        var oldData = this.data.dataSource;
        oldData.pop();
        this.setData({
            dataSource: oldData
        });
    },
    addNewone: function addNewone() {
        var newItem = {
            level: "B类 较重要",
            content: "",
            // username: app.globalData.userInfo["username"],
            progress: ""
        };
        var oldData = this.data.dataSource;
        oldData.push(newItem);
        this.setData({
            dataSource: oldData
        });
    },
    commit: function commit() {},
    onLoad: function onLoad() {
        var timestamp = Date.parse(new Date());
        var date = new Date(timestamp); //年         
        var Y = date.getFullYear(); //月      
        var M = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1; //日      
        var D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
        var W = date.getDay();
        var weekday = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
        var day = Y + "年" + M + "月" + D + "日" + weekday[W];
        this.setData({
            today: day,
            username: app.globalData.userInfo["username"]
        });
    }
});
//# sourceMappingURL=dayrecord.js.map

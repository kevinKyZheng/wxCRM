'use strict';

var _util = require('../../utils/util.js');

var _util2 = _interopRequireDefault(_util);

var _md = require('../../utils/md5.js');

var _network = require('../../lib/network');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 获取服务器接口地址
var api = require('../../config/config.js');

// const network = require("../../lib/network");
var app = getApp();
Page({
    // var titleArray = ["联系方式", "所在部门", "现任职位", "我的名片"]
    data: {
        infoArray: [],
        titleArray: ["联系方式", "所在部门", "现任职位"],
        userName: "",
        headImgSource: ""
    },
    tapItem: function tapItem() {
        wx.showModal({
            title: '联系方式',
            content: '13123123',
            showCancel: true,
            cancelText: '取消',
            cancelColor: '#3b9cff',
            confirmText: '确定',
            confirmColor: '#3b9cff',
            success: function success(result) {
                if (result.confirm) {}
            },
            fail: function fail() {},
            complete: function complete() {}
        });
    },
    onLoad: function onLoad() {
        wx.setNavigationBarTitle({
            title: '我的',
            success: function success(res) {
                // success
            }
        });
        // const params = {userId:app.globalData.userInfo["userId"]}
        // network.requestWithLoading(api.getUserInformation,params,function(res){
        //     console.log(res)
        // },function(){
        // })
        var timestamp = Date.parse(new Date());
        var date = new Date(timestamp); //年         
        var Y = date.getFullYear(); //月      
        var M = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1; //日      
        var D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
        var H = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
        var Mi = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
        var S = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
        var nowTime = Y + M + D + H + Mi + S;
        //注意getTime()取得是毫秒数
        var seconds = date.getTime() / 1000;
        var timeInterval = Math.floor(seconds).toString();
        var timeStrMD5 = (0, _md.hexMD5)(nowTime).toUpperCase().substring(8, 24);
        var token = (0, _md.hexMD5)(app.globalData.userInfo["token"] + timeStrMD5).toUpperCase();
        var that = this;
        wx.request({
            url: api.getUserInformation,
            data: { userId: app.globalData.userInfo["userId"] },
            method: 'POST',
            header: {
                'content-type': 'application/json', // 默认值
                'userid': app.globalData.userInfo["userId"],
                'token': token,
                'nowTime': timeInterval,
                'source': 'iOS'
            },
            success: function success(res) {
                console.log(res);
                // var userinformation = res.data.data[0];
                // var tempArray = [userinformation["telPhone"],
                // userinformation["departmentName"],
                // userinformation["roleName"]]
                // console.log(tempArray)
                // that.setData({
                //     infoArray: tempArray,
                //     userName:userinformation["username"],
                //     headImgSource:userinformation["headerImg"],
                // })
            },
            fail: function fail() {
                // fail
            },
            complete: function complete() {
                // complete
            }
        });
    },
    tapLogoutBtn: function tapLogoutBtn() {
        console.log((0, _md.hexMD5)("123").toUpperCase().substring(8, 24));
        wx.reLaunch({
            url: '../login/login',
            success: function success(result) {},
            fail: function fail() {},
            complete: function complete() {}
        });
    }
});
//# sourceMappingURL=mine.js.map

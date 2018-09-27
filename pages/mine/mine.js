require("../../utils/util.js")

var util = require('../../utils/md5.js');
const app = getApp();
Page({
    data:{
        array:[{"title":"1111"},{"title":"222"},{"title":"3333"}]
    },
    tapItem:function(){
        wx.showModal({
            title: '联系方式',
            content: '13123123',
            showCancel: true,
            cancelText: '取消',
            cancelColor: '#3b9cff',
            confirmText: '确定',
            confirmColor: '#3b9cff',
            success: (result) => {
                if(result.confirm){
                    
                }
            },
            fail: ()=>{},
            complete: ()=>{}
        });
    },
    onLoad:function(){
        wx.setNavigationBarTitle({
            title: '我的',
            success: function(res) {
                // success
            }
        })
        var timestamp = Date.parse(new Date());   
        var date = new Date(timestamp);    //年      
        var Y =date.getFullYear();    //月      
        var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);    //日      
        var D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
        var H = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();   
        var Mi = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
        var S = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
        var nowTime = Y + M + D + H + Mi + S;
        var timeStrMD5 = util.hexMD5(nowTime.toString()).toUpperCase().substring(8,24);
        var token = util.hexMD5(app.globalData.userInfo["token"]+ timeStrMD5).toUpperCase().toString();
        // 20180927 165 8
        var timeInterval= date.getTime().toString();
        console.log("当：" + timeStrMD5);
        console.log("当1：" +nowTime);
        console.log("当前时间：" + token);
        wx.request({
            url: 'http://crmapi.chinawutong.com/api/UserInformation/getUserInformation',
            data: {userId:app.globalData.userInfo["userId"]},
            method: 'POST',
            header: {
                'content-type': 'application/json', // 默认值
                'userid':app.globalData.userInfo["userId"],
                'token':token,
                'nowTime':timeInterval,
                'source':'iOS'
              }, 
            success: function(res){
                console.log(res)
            },
            fail: function() {
                // fail
            },
            complete: function() {
                // complete
            }
        })
    },
    tapLogoutBtn:function(){
        console.log(util.hexMD5("123").toUpperCase().substring(8,24));
        wx.reLaunch({
            url: '../login/login',
            success: (result)=>{
                
            },
            fail: ()=>{},
            complete: ()=>{}
        });
    } 
})
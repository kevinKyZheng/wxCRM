import time from "../../utils/util.js";
import { hexMD5 } from '../../utils/md5.js';
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
        date = new Date(date.getTime() + date.getTimezoneOffset() * 60000);     
        
        var Y =date.getFullYear();    //月      
        var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);    //日      
        var D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
        var H = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();   
        var Mi = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
        var S = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
        var nowTime = Y + M + D + H + Mi + S;
        var timeInterval= date.getTime().toString();

        // console.log(timestamp);
        // console.log("当1111：" + app.globalData.userInfo["token"]);

        var timeStrMD5 = hexMD5(nowTime).toUpperCase().substring(8,24);
        var token = hexMD5(app.globalData.userInfo["token"]+ timeStrMD5).toUpperCase();
        // 20180928001624
        // let timeStrmd5 = timeStr.md5().uppercased()
        // let startIndex = timeStrmd5.index(timeStrmd5.startIndex, offsetBy: 8)
        // let endIndex = timeStrmd5.index(timeStrmd5.endIndex, offsetBy: -8)
        // let range = startIndex ..< endIndex
        // let token = (UserInfo.sharedInstance.Token + timeStrmd5[range]).md5().uppercased()
        console.log("当：" + timeInterval);
        console.log("当1：" +nowTime);
        console.log("当前时间：" + token);
        wx.request({
            url: 'http://crmapi.chinawutong.com/api/UserInformation/getUserInformation',
            data: {userId:app.globalData.userInfo["userId"]},
            method: 'POST',
            header: {
                'content-type': 'application/json', // 默认值
                'user`id':app.globalData.userInfo["userId"],
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
        console.log(hexMD5("123").toUpperCase().substring(8,24));
        wx.reLaunch({
            url: '../login/login',
            success: (result)=>{
                
            },
            fail: ()=>{},
            complete: ()=>{}
        });
    } 
})
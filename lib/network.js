
import time from "../utils/util.js";
import { hexMD5 } from '../utils/util';
const app = getApp()

// function header(){
//     //计算 token
//     var timestamp = Date.parse(new Date());   
//     var date = new Date(timestamp);         
//     var Y =date.getFullYear();     
//     var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);    //日      
//     var D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
//     var H = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();   
//     var Mi = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
//     var S = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
//     var nowTime = Y + M + D + H + Mi + S;
//     var timeStrMD5 = hexMD5(nowTime).toUpperCase().substring(8,24);
//     var token = hexMD5(app.globalData.userInfo["token"]+ timeStrMD5).toUpperCase()
//     //计算 时间戳
//     var seconds = date.getTime()/1000 //注意getTime()取得是毫秒数
//     var timeInterval= Math.floor(seconds).toString();
//     return {
//         'content-type': 'application/json', // 默认值
//         'userid':app.globalData.userInfo["userId"],
//         'token':token,
//         'nowTime':timeInterval,
//         'source':'iOS'
//     }
// }
// const default_header = this.header()
// header = default_header

function requestWithLoading(url,params,message="加载中",success,fail){
    var timestamp = Date.parse(new Date());   
    var date = new Date(timestamp);         
    var Y =date.getFullYear();     
    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);    //日      
    var D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    var H = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();   
    var Mi = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    var S = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
    var nowTime = Y + M + D + H + Mi + S;
    var timeStrMD5 = hexMD5(nowTime).toUpperCase().substring(8,24);
    var token = hexMD5(app.globalData.userInfo["token"]+ timeStrMD5).toUpperCase()
    //计算 时间戳
    var seconds = date.getTime()/1000 //注意getTime()取得是毫秒数
    var timeInterval= Math.floor(seconds).toString();
    if (message != ""){
        wx.showLoading({
            title:message
        })
    }
    wx.request({
        url:url,
        data:params,
        // header:header,
        header: {
            'content-type': 'application/json', // 默认值
            'userid':app.globalData.userInfo["userId"],
            'token':token,
            'nowTime':timeInterval,
            'source':'iOS'
            },
        method:"POST",
        success:function(res){
            wx.hideLoading()
            success(res.data)
        },
        fail:function(e){
            wx.hideLoading()
            fail()
        }
    })
}

function request(url,params,success,fail){
    this.requestWithLoading(url,params,"",success,fail)
}
module.exports = {
    requestWithLoading: requestWithLoading,
    request: request
}
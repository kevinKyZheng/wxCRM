const app = getApp()
import { hexMD5 } from '../../utils/md5.js';

Page({
    data:{
      username:"",
      password:"",
      autoLogin:true
    },
    onLoad:function(){
      var that = this
      // wx.getStorage({
      //   key:"historyLogin",
      //   success:function(res){
      //     console.log(res)
      //     console.log(res.username)
      //     that.setData({
      //       // username:res.username,
      //       // password:res["password"]
      //     })
      //   }
      // })
      wx.getStorage({
        key:"username",
        success:function(res){
          console.log(res)
          that.setData({
            username:res
          })
        }
      })
      wx.getStorage({
        key:"password",
        success:function(res){
          console.log(res)
          that.setData({
            password:res
          })
        }
      })
      this.tapLoginBtn()
    },
    tapLoginBtn:function(){
        var that = this
        wx.showLoading({
          title:"加载中"
        })
        wx.request({
            url: 'http://crmapi.chinawutong.com/api/Login/UserLogin', //仅为示例，并非真实的接口地址
            // "userName": username, "userPass": password, "source": "iOS"
            data: {
              userPass: '91e31e2ef2076caf',
              userName: 'test_wtbuzhang',
              source: 'iOS'
              // userPass: this.data.password,
              // userName: this.data.username,
              // source: 'iOS'
            },
            method:"POST",
            header: {
              'content-type': 'application/json' // 默认值
            },
            success (res) {
              wx.hideLoading()
              //
              wx.setStorage({
                // key:"historyLogin",
                // data:{"username":that.data.username,"password":that.data.password}
                key:"password",
                data:that.data.password
              })
              wx.setStorage({
                key:"username",
                data:that.data.username,
              })
              app.globalData.userInfo["userId"] = res.data["data"]["UserID"];
              app.globalData.userInfo["token"] = res.data["data"]["Token"];
              app.globalData.userInfo["power"] = res.data["data"]["UserPower"];
              console.log(res);
              wx.switchTab({
                url: '../root/root',
                success: function(res){
                  // success
                },
                fail: function() {
                  // fail
                },
                complete: function() {
                  // complete
                }
              })
              console.log(app.globalData.userInfo["token"]);
              console.log(app.globalData.userInfo["userId"]);
              console.log(app.globalData.userInfo["power"]);

            }
        })     
    },
    usernameConfirm:function(e){
      this.setData({
        username:e.detail.value
      })
    },
    passwordConfirm:function(e){
      var passwordMD5 = hexMD5(e.detail.value).substring(8,24)
      console.log(passwordMD5)
      this.setData({
        password:passwordMD5
      })
    }

})
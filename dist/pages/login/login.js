'use strict';

var _api = require('../../lib/api');

var _md = require('../../utils/md5.js');

var app = getApp();

Page({
  data: {
    username: "",
    password: "",
    autoLogin: true
  },
  onLoad: function onLoad() {
    var that = this;
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
      key: "username",
      success: function success(res) {
        console.log(res);
        that.setData({
          username: res
        });
      }
    });
    wx.getStorage({
      key: "password",
      success: function success(res) {
        console.log(res);
        that.setData({
          password: res
        });
      }
    });
    this.tapLoginBtn();
  },
  // tapLoginBtn: function () {
  //   console.log("123")
  //   wx.getLocation({
  //     type:"gcj02",
  //     success:this.updateLocation,
  //     fail:(e)=>{
  //       this.openLocation()
  //     }
  //   })
  // },
  updateLocation: function updateLocation(res) {
    console.log("111");
    console.log(res);
    var lat = res.latitude,
        lon = res.longtitude,
        name = res.name;

    var data = {
      lat: lat,
      lon: lon
    };
    if (name) {
      data.address = name;
    }
    console.log(lat);
    // this.setData(data)
    this.getAddress(lat, lon, name);
  },
  getAddress: function getAddress(lat, lon, name) {
    var _this = this;

    var fail = function fail(e) {
      // console.log(e)
      _this.setData({
        address: name || '北京市海淀区西二旗北路'
      });
      wx.hideLoading();
      _this.getWeatherData();
    };
    (0, _api.geocode)(lat, lon, function (res) {
      console.log(res);
      // let result = (res.data || {}).result
      // console.log(result)
    },
    // fail,
    fail);
  },

  openLocation: function openLocation() {
    wx.showToast({
      title: '检测到您未授权使用位置权限，请先开启哦',
      icon: 'none',
      duration: 3000
    });
  },
  tapLoginBtn: function tapLoginBtn() {
    console.log(this.data.username);
    console.log(this.data.password);
    var that = this;
    wx.showLoading({
      title: "加载中"
    });
    // wx.login({
    //   success:(res)=>{
    //     console.log(res)
    //   }
    // })
    wx.request({
      url: 'http://crmapi.chinawutong.com/api/Login/UserLogin', //仅为示例，并非真实的接口地址
      data: {
        userPass: '91e31e2ef2076caf',
        userName: 'test_wtbuzhang',
        source: 'iOS'
        // userPass: that.data.password,
        // userName: that.data.username,
        // source: 'iOS'
      },
      method: "POST",
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function success(res) {
        wx.hideLoading();
        //
        wx.setStorage({
          // key:"historyLogin",
          // data:{"username":that.data.username,"password":that.data.password}
          key: "password",
          data: that.data.password
        });
        wx.setStorage({
          key: "username",
          data: that.data.username
        });
        app.globalData.userInfo["userId"] = res.data["data"]["UserID"];
        app.globalData.userInfo["token"] = res.data["data"]["Token"];
        app.globalData.userInfo["power"] = res.data["data"]["UserPower"];
        app.globalData.userInfo["username"] = res.data["data"]["RoleName"];
        console.log(res);
        wx.switchTab({
          url: '../root/root',
          success: function success(res) {
            // success
          },
          fail: function fail() {
            // fail
          },
          complete: function complete() {
            // complete
          }
        });
        console.log(app.globalData.userInfo["token"]);
        console.log(app.globalData.userInfo["userId"]);
        console.log(app.globalData.userInfo["power"]);
      },
      fail: function fail(e) {
        wx.hideLoading();
        wx.showToast({
          title: e
        });
      },
      complete: function complete(e) {}
    });
  },
  usernameConfirm: function usernameConfirm(e) {
    this.setData({
      username: e.detail.value
    });
  },
  passwordConfirm: function passwordConfirm(e) {
    var passwordMD5 = (0, _md.hexMD5)(e.detail.value).substring(8, 24);
    console.log(passwordMD5);
    this.setData({
      password: passwordMD5
    });
  }
});
//# sourceMappingURL=login.js.map

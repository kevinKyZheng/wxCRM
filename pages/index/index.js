//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    sectionTitleArray:app.globalData.userInfo["power"]
    // topArray:[{title:"日志管理",icon:"record.png"},{title:"员工管理",icon:"record.png"},{title:"公文审批",icon:"record.png"},{title:"公文申请",icon:"record.png"},{title:"请假申请",icon:"record.png"},{title:"请假审批",icon:"record.png"}],
    // bottomArray:[{title:"123",icon:"123"},{title:"234",icon:"234"},{title:"123",icon:"123"},{title:"234",icon:"234"},{title:"123",icon:"123"},{title:"234",icon:"234"}]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  // goDetail:function(e){
  //   console.log(e.currentTarget.dataset.id)
  //   // navigateUrl = 
  //   wx.navigateTo({
  //       url:'../logs/logs'
  //   });
  // },
  goDetail:function(){
    wx.request({
      url: 'http://crmapi.chinawutong.com/api/Login/UserLogin', //仅为示例，并非真实的接口地址
      // "userName": username, "userPass": password, "source": "iOS"
      data: {
        userPass: '91e31e2ef2076caf',
        userName: 'test_wtbuzhang',
        source: 'iOS'
      },
      method:"POST",
      header: {
        'content-type': 'application/json' // 默认值
      },
      success (res) {
        console.log(res.data)
      }
    })
  },
  // getUserInfo: function(e) {
  //   console.log(e)
  //   app.globalData.userInfo = e.detail.userInfo
  //   this.setData({
  //     userInfo: e.detail.userInfo,
  //     hasUserInfo: true
  //   })
  // }
})

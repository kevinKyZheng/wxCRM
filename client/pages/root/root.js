//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    sectionTitleArray:[],
    // elements:[],
    topArray:[{title:"日志管理",icon:"record.png"},{title:"员工管理",icon:"record.png"},{title:"公文审批",icon:"record.png"},{title:"公文申请",icon:"record.png"},{title:"请假申请",icon:"record.png"},{title:"请假审批",icon:"record.png"}],
    bottomArray:[{title:"123",icon:"123"},{title:"234",icon:"234"},{title:"123",icon:"123"},{title:"234",icon:"234"},{title:"123",icon:"123"},{title:"234",icon:"234"}]
  },
  onLoad:function(){
    this.setData({
      sectionTitleArray:app.globalData.userInfo["power"],
      // elements:app.globalData.userInfo["power"]["elements"]
    });
    var power = app.globalData.userInfo["power"]
    var elements = power.elements
    // console.log(app.globalData.userInfo["power"]["title"])
    console.log(elements)
    for (const element in elements) {
      console.log("123")
      if(element === "rizhi"){
        console.log(app.globalData.classDic[element])
      }
      // if (object.hasOwnProperty(element)) {
      //   const element = object[element];
        
      // }
    }
  },
  //事件处理函数
  goDetail:function(e){
    console.log(e.currentTarget.dataset.id)
    // navigateUrl = 
    wx.navigateTo({
        // url:"../journal/journal"
        url:"../dayrecord/dayrecord"
    });
  },
})

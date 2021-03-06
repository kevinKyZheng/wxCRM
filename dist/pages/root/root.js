"use strict";

var _constant = require("../../common/js/constant");

var app = getApp(); //index.js
//获取应用实例

Page({
  data: {
    sectionTitleArray: [],
    itemsArray: [],
    topArray: [{ title: "日志管理", icon: "record.png" }, { title: "员工管理", icon: "record.png" }, { title: "公文审批", icon: "record.png" }, { title: "公文申请", icon: "record.png" }, { title: "请假申请", icon: "record.png" }, { title: "请假审批", icon: "record.png" }],
    bottomArray: [{ title: "123", icon: "123" }, { title: "234", icon: "234" }, { title: "123", icon: "123" }, { title: "234", icon: "234" }, { title: "123", icon: "123" }, { title: "234", icon: "234" }]
  },
  onLoad: function onLoad() {
    //   {"rizhi":[
    //     {"badge":"0"},
    //     {"title":"日志管理"},
    //     {"icon":"root_rizhi.png"},
    //     {"vcClass":"DailyRecordManageController"}
    // ]}
    var power = app.globalData.userInfo["power"];
    var elements = power[0].elements;
    var tempArray = [];
    elements.forEach(function (value, i) {
      tempArray.push(_constant.classDic[value]);
    });
    this.setData({
      itemsArray: tempArray,
      sectionTitleArray: power
    });
  },
  //事件处理函数
  goDetail: function goDetail(e) {
    console.log(e.currentTarget.dataset.id);
    // navigateUrl = 
    wx.navigateTo({
      // url:"../journal/journal"
      url: "../dayrecord/dayrecord"
    });
  }
});
//# sourceMappingURL=root.js.map

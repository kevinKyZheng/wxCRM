"use strict";

var constant = {
    taskStatus: {
        pending: "加载中",
        error: "发生错误",
        finish: "完成"
    }
};
var classDic = {
    "rizhi": {
        "badge": "0",
        "title": "日志管理",
        "icon": "root_rizhi.png",
        "url": "journal/journal" },
    "gonggao": {
        "badge": "0",
        "title": "通知公告",
        "icon": "root_gonggao.png",
        "url": "NoticeViewController" },
    "gongwenshenpi": {
        "badge": "0",
        "title": "公文审批",
        "icon": "root_shenpi.png",
        "url": "OfficialDocumentController" },
    "gongwenshenqing": {
        "badge": "0",
        "title": "公文申请",
        "icon": "root_gongwenshenpi.png",
        "url": "OfficialDocumentApplyController" },
    "waiqin": {
        "badge": "0",
        "title": "外勤",
        "icon": "root_waiqin.png",
        "url": "OutdoorWorkViewController" },
    "qingjiashenqing": {
        "badge": "0",
        "title": "请假申请",
        "icon": "root_qingjia.png",
        "url": "LeaveListController" },
    "qingjiashenpi": {
        "badge": "0",
        "title": "请假审批",
        "icon": "root_qingjiashenpi.png",
        "url": "AskForLeaveApprovalController" },
    "huiyishi": {
        "badge": "0",
        "title": "会议室预约",
        "icon": "root_huiyishi.png",
        "url": "" },
    "kehutuijian": {
        "badge": "0",
        "title": "客户推荐",
        "icon": "root_kehutuijian.png",
        "url": "CustomerRecommendVc" },
    "yuangong": {
        "badge": "0",
        "title": "员工管理",
        "icon": "root_guanli.png",
        "url": "" },
    "zhanbao": {
        "badge": "0",
        "title": "战报",
        "icon": "root_zhanbao.png",
        "url": "SaleReportsViewController" },
    "waihutonghua": {
        "badge": "0",
        "title": "外呼通话",
        "icon": "icon-外呼通话.png",
        "url": "DialogViewController" },
    "waihutonghua1": {
        "badge": "0",
        "title": "外呼通话",
        "icon": "icon-外呼通话.png",
        "url": "OneDialogViewController" },
    "lukehu": {
        "badge": "0",
        "title": "录入客户",
        "icon": "root_lukehu.png",
        "url": "InputWTClientInfoController" },
    "zhuku": {
        "badge": "0",
        "title": "主客户库",
        "icon": "root_zhukehuku.png",
        "url": "MainCustomerViewController" },
    "quanbukehuku": {
        "badge": "0",
        "title": "全部客户库",
        "icon": "root_zhukehuku.png",
        "url": "AllCustomerStorageController" },
    "xiaoshouku": {
        "badge": "0",
        "title": "我的客户库",
        "icon": "root_mykehuku.png",
        "url": "MyCustomerViewController" },
    "chengdankehu": {
        "badge": "0",
        "title": "成单客户",
        "icon": "chengdankehu.png",
        "url": "IntoASingleCustomerViewController" },
    "yuyuekehu": {
        "badge": "0",
        "title": "预约客户",
        "icon": "root_yuyue.png",
        "url": "ReservationCustomerController" },
    "xudanku": {
        "badge": "0",
        "title": "续单公海",
        "icon": "root_gonghai.png",
        "url": "ContinueViewController" },
    "dituiku": {
        "badge": "0",
        "title": "我的地推客户",
        "icon": "root_gonghai.png",
        "url": "MyLandCustomerViewController" },
    "jianyi": {
        "badge": "0",
        "title": "产品建议",
        "icon": "root_jianyi.png",
        "url": "" },
    "mitiao": {
        "badge": "0",
        "title": "密条",
        "icon": "root_mitiao.png",
        "url": "" },
    "xierizongjie": {
        "badge": "0",
        "title": "写日总结",
        "icon": "DRM_rizongjie.png",
        "url": "WriteDailySummaryController" },
    "dxxierizongjie": {
        "badge": "0",
        "title": "写日总结",
        "icon": "DRM_rizongjie.png",
        "url": "SellWriteDailySummaryController" },
    "xierijihua": {
        "badge": "0",
        "title": "写日计划",
        "icon": "DRM_rijihua.png",
        "url": "WriteDailyPlanController" },
    "dxxierijihua": {
        "badge": "0",
        "title": "写日计划",
        "icon": "DRM_rijihua.png",
        "url": "SellWriteDailyPlanController" },
    "xiezhouzongjie": {
        "badge": "0",
        "title": "写周总结",
        "icon": "DRM_zhouzongjie.png",
        "url": "WriteWeeklySummaryController" },
    "xiezhoujihua": {
        "badge": "0",
        "title": "写周计划",
        "icon": "DRM_zhoujihua.png",
        "url": "WriteWeeklyPlanController" },
    "woderizhi": {
        "badge": "0",
        "title": "我的日志",
        "icon": "DRM_mydailyrecord.png",
        "url": "MyDailyRecordController" },
    "bumenyuangongrizhi": {
        "badge": "0",
        "title": "部门员工日志",
        "icon": "DRM_otherdailyrecord.png",
        "url": "OtherDailyRecordController" },
    "kehubaifang": {
        "badge": "0",
        "title": "客户拜访",
        "icon": "waiqin_kehubaifang",
        "url": "CustomerVisitViewController" },
    "shichangpeifang": {
        "badge": "0",
        "title": "市场陪访",
        "icon": "waiqin_peifang",
        "url": "PeifangController" },
    "waiqindaka": {
        "badge": "0",
        "title": "外勤打卡",
        "icon": "waiqin_daka",
        "url": "OutdoorWorkSignInViewController" },
    "wodebaifangjilu": {
        "badge": "0",
        "title": "我的拜访记录",
        "icon": "waiqin_baifangjilu",
        "url": "MyVisitRecordViewController" },
    "wodepeifangjilu": {
        "badge": "0",
        "title": "我的陪访记录",
        "icon": "waiqin_peifangjilu",
        "url": "PeifangRecordfController" },
    "yuangongbaifangtongji": {
        "badge": "0",
        "title": "员工拜访统计",
        "icon": "waiqin_yuangongbaifangtongji",
        "url": "CustomerVisitStatisticsViewController" },
    "yuangongpeifangtongji": {
        "badge": "0",
        "title": "员工陪访统计",
        "icon": "waiqin_yuangongpeifangtongji",
        "url": "AccompanyVisitStatisticsViewController" },
    "yuangongdakatongji": {
        "badge": "0",
        "title": "员工打卡统计",
        "icon": "waiqin_yuangongdakatongji",
        "url": "OutdoorWorkStatisticsViewController" },
    "yuangongweizhi": {
        "badge": "0",
        "title": "员工位置",
        "icon": "waiqin_yuangongweizhi",
        "url": "StaffLocationViewController" },
    //快捷方式
    "fashenpi": {
        "badge": "0",
        "title": "发审批",
        "icon": "root_fashenpi.png",
        "url": "AddOfficialDocumentController" },
    "fagonggao": {
        "badge": "0",
        "title": "发公告",
        "icon": "root_fagonggao.png",
        "url": "PublishNoticeViewController" }
};
module.exports = {
    constant: constant,
    classDic: classDic
};
//# sourceMappingURL=constant.js.map

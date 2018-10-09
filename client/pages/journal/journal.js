Page({
    data: {
        array: [{
                "title": "写日总结",
                "icon": "rizongjie.png"
            },
            {
                "title": "写日计划",
                "icon": "rijihua.png"
            },
            {
                "title": "写周总结",
                "icon": "zhouzongjie.png"
            },
            {
                "title": "写周计划",
                "icon": "zhoujihua.png"
            },
        ]
    },
    itemTap:function(){
        wx.navigateTo({
            url:"../dayrecord/dayrecord"
        });
    }
})
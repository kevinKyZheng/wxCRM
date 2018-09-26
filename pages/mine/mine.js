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
        // wx.request({
        //     url: 'https://URL',
        //     data: {},
        //     method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
        //     // header: {}, // 设置请求的 header
        //     success: function(res){
        //         // success
        //     },
        //     fail: function() {
        //         // fail
        //     },
        //     complete: function() {
        //         // complete
        //     }
        // })
    },
    tapLogoutBtn:function(){
        wx.reLaunch({
            url: '../login/login',
            success: (result)=>{
                
            },
            fail: ()=>{},
            complete: ()=>{}
        });
    } 
})
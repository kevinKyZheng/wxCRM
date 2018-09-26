Page({
    data:{

    },
    tapLoginBtn:function(){
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
              console.log(res.data)
            }
        })     
    },

})
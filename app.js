//app.js

App({
  onLaunch: function () {

    if (!wx.getStorageSync('openid')) {
      wx.login({
        //获取code
        success: function (res) {
          var code = res.code //返回code
          console.log(code)
          wx.request({
            url: 'https://api.weixin.qq.com/sns/jscode2session?appid=wxded537cbd5013e24&secret=1aad4a3e92d93d5409dcdcd3ac1c2260&js_code=' + code + '&grant_type=authorization_code',
            data: {},
            header: {
              'content-type': 'application/json'
            },
            success: function (res) {
              console.log(res.data)
              var openid = res.data.openid //返回openid
              wx.setStorage({
                key: 'openid',
                data: openid,
              })



            }
          })
        }
      })
    }
    if (wx.getStorageSync('jcookie')) {

    var that = this;
    wx.request({
      url: 'https://m.zhangtalent.cn/wxlogin',
      method: 'POST',
      data: 'uuid=' + wx.getStorageSync('openid') + "&username=" + wx.getStorageSync('nickname') + "&icon=" + wx.getStorageSync('icon') + "&phonenum=000",    //参数为键值对字符串
      header: {
        //设置参数内容类型为x-www-form-urlencoded
        'content-type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json'
      },
      success: function (res) {
        wx.setStorage({
          key: 'show',
          data: "false",
        })
        wx.setStorage({
          key: 'jcookie',
          data: res.data.jcookie,
        })
        
        wx.showToast({
          title: 'Yeah，登录成功',
        })
        console.log(res.data);
      },

    })
    }
  },
  getUserInfo:function(cb){
    var that = this
  },
  globalData:{
    userInfo:null
  }
})
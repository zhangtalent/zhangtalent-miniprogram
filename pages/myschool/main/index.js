// pages/myschool/main/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show: true,
    offset: 0,
    items: [],
    love:'https://yss-1253784481.cossh.myqcloud.com/lovepicture/5187db4e443d4be0a0bc8bd28289782dicons8-heart-outline-48%20(1).png',
    nolove:'https://yss-1253784481.cossh.myqcloud.com/lovepicture/22f07180aa094625917edb8efc1195fficons8-heart-outline-48.png'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //控制登录框
    console.log(wx.getStorageSync('show'))
    var shows = wx.getStorageSync('show')
    if (shows != "false" || shows == "") {
      console.log('hello' + shows + "ffddf")
      this.setData({
        show: true,
      })
    } else {
      console.log('hello' + shows + "fff")
      console.log('bb')
      this.setData({
        show: false,
      })
    }

    var that = this;
    wx.request({
      url: 'https://m.zhangtalent.cn/myschooldata',
      method: 'POST',
      data: 'offset=' + that.data.offset,    //参数为键值对字符串
      header: {
        //设置参数内容类型为x-www-form-urlencoded
        'Cookie': wx.getStorageSync('jcookie'),
        'content-type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json'
      },
      success: function (res) {
        that.setData({
          items: res.data,
          offset: that.data.offset + 1
        })

      },

    })


  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },
  changeenjoy:function(e){
    console.log(e.currentTarget.dataset.enjoyid)
    wx.request({
      url: 'https://m.zhangtalent.cn/changeenjoy',
      method: 'POST',
      data: 'enjoyid=' + e.currentTarget.dataset.enjoyid,    //参数为键值对字符串
      header: {
        //设置参数内容类型为x-www-form-urlencoded
        'Cookie': wx.getStorageSync('jcookie'),
        'content-type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json'
      },
      success: function (res) {
        wx.showToast({
          title: '赞成功',
        })
        
      },

    })
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    var that = this;
    that.setData({
      items: [],
      offset: 0
    })
    wx.request({
      url: 'https://m.zhangtalent.cn/myschooldata',
      method: 'POST',
      data: 'offset=' + that.data.offset,    //参数为键值对字符串
      header: {
        //设置参数内容类型为x-www-form-urlencoded
        'Cookie': wx.getStorageSync('jcookie'),
        'content-type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json'
      },
      success: function (res) {
        wx.stopPullDownRefresh()
        that.setData({
          items: res.data,
          offset: that.data.offset + 1
        })

      },

    })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    wx.showToast({
      title: '获取中...',
      icon: 'loading',
      duration: 1000,
      mask: true
    })
    var that = this;
    wx.request({
      url: 'https://m.zhangtalent.cn/myschooldata',
      method: 'POST',
      data: 'offset=' + that.data.offset,    //参数为键值对字符串
      header: {
        //设置参数内容类型为x-www-form-urlencoded
        'Cookie': wx.getStorageSync('jcookie'),
        'content-type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json'
      },
      success: function (res) {
        that.setData({
          items: that.data.items.concat(res.data),
          offset: that.data.offset + 1
        })
        console.log(that.data.offset);
      },

    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  bindGetUserInfo: function (e) {
    var that = this;
    console.log(e.detail.userInfo)
    if (e.detail.userInfo) {
      //用户按了允许授权按钮
      wx.setStorage({
        key: 'nickname',
        data: e.detail.userInfo.nickName,
      })
      wx.setStorage({
        key: 'icon',
        data: e.detail.userInfo.avatarUrl,
      })

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
          that.setData({
            show: false,
          })
          wx.showToast({
            title: 'Yeah，登录成功',
          })
          console.log(res.data);
        },

      })
      console.error(e.detail.userInfo.nickName)

    } else {
      //用户按了拒绝按钮
      wx.showToast({
        title: '啊哦，登录失败',
      })
    }
  },
  /**
   跳转添加
  */
  goadd: function () {
    console
    wx.navigateTo({
      url: '/pages/myschool/add/index'
    })
  }
})
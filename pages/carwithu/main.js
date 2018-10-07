// pages/wall/lost/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    offset: 0,
    items: []
  },
  bindyear: function (e) {
    this.setData({
      yearindex: e.detail.value
    })
    console.log(e)
  },
  bindterm: function (e) {
    this.setData({
      termindex: e.detail.value
    })
    console.log(e)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showToast({
      title: '获取中...',
      icon: 'loading',
      duration: 1000,
      mask: true
    })
    var that = this;
    wx.request({
      url: 'https://m.zhangtalent.cn/carwithudata',
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
  /**
   兼职信息跑腿
  */
  running: function () {
    console
    wx.navigateTo({
      url: '/pages/jwxt/all/work/index'
    })
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    wx.showToast({
      title: '刷新中...',
      icon: 'loading',
      duration: 1000,
      mask: true
    })
    var that = this;
    that.setData({
      item:[],
      offset: 0
    })
    wx.request({
      url: 'https://m.zhangtalent.cn/carwithudata',
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
  call: function (e) {
    console.log(e.currentTarget.dataset.num[0])

    wx.makePhoneCall({
      phoneNumber: e.currentTarget.dataset.num[0], 
    //此号码并非真实电话号码，仅用于测试      
    success:function(){        
      console.log("拨打电话成功！")      
      },      
    fail:function(){        
      console.log("拨打电话失败！")      
      }    
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
      url: 'https://m.zhangtalent.cn/carwithudata',
      method: 'POST',
      data: 'offset=' + that.data.offset,    //参数为键值对字符串
      header: {
        //设置参数内容类型为x-www-form-urlencoded
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
  /**
   跳转添加
  */
  goadd: function () {
    console
    wx.navigateTo({
      url: '/pages/carwithu/add/index'
    })
  }
})
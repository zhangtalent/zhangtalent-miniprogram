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
      url: 'https://m.zhangtalent.cn/workdata',
      method: 'POST',
      data: 'offset=' + that.data.offset,    //参数为键值对字符串
      header: {
        //设置参数内容类型为x-www-form-urlencoded
        'content-type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json'
      },
      success: function (res) {
        that.setData({
          items: res.data,
          offset: that.data.offset + 1
        })
        console.log(res.data);
      },

    })
  },
  show: function (event) {
    
    var uuid = event.currentTarget.dataset.uuid
    wx.setStorageSync('uuid', uuid)
    wx.navigateTo({
      url: '/pages/show/index',
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
      offset: 0
    })
    wx.request({
      url: 'https://m.zhangtalent.cn/workdata',
      method: 'POST',
      data: 'offset=' + that.data.offset,    //参数为键值对字符串
      header: {
        //设置参数内容类型为x-www-form-urlencoded
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
      url: 'https://m.zhangtalent.cn/workdata',
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

  }
})
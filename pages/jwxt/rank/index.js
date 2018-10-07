// pages/jwxt/rank/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    yeararray: ['2018', '2017', '2016', '2015', '2014'],
    termarray: ['1', '2'],
    termindex: 0,
    yearindex: 0,
    items: ''
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
  getrank: function () {
    wx.showToast({
      title: '获取中...',
      icon: 'loading',
      duration: 1000,
      mask: true
    })
    var that = this;
    var term = 3;
    if (that.data.termindex == 1) {
      term = 12;
    }
    wx.request({
      url: 'https://yss.zhangtalent.cn/rank.php',
      method: 'POST',
      data: 'year=' + that.data.yeararray[that.data.yearindex] + '&term=' + term + "&stucode=" + wx.getStorageSync('stucode') + '&cookie=' + wx.getStorageSync('cookie'),    //参数为键值对字符串
      header: {
        //设置参数内容类型为x-www-form-urlencoded
        'content-type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json'
      },
      success: function (res) {
        console.log(res.data.items)
        if (res.data.result != 'fail') {
          console.log('ok')
          console.log(res.data)
          that.setData({
            items: res.data.items
          })
        } else {
          console.log(res.data)
          wx.showModal({
            title: '提示',
            content: '登陆信息过期，重新登陆',
            success: function (res) {
              if (res.confirm) {
                console.log('用户点击确定')
              } else {
                console.log('用户点击取消')
              }

            }
          })
        }

      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
    wx.showToast({
      title: '获取中...',
      icon: 'loading',
      duration: 1000,
      mask: true
    })
    var that = this;
    var term = 3;
    if (that.data.termindex == 2) {
      term = 12;
    }
    wx.request({
      url: 'https://yss.zhangtalent.cn/rank.php',
      method: 'POST',
      data: 'year=' + that.data.yeararray[that.data.yearindex] + '&term=' + term + "&stucode=" + wx.getStorageSync('stucode') + '&cookie=' + wx.getStorageSync('cookie'),    //参数为键值对字符串
      header: {
        //设置参数内容类型为x-www-form-urlencoded
        'content-type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json'
      },
      success: function (res) {
        console.log(res.data.items)
        if (res.data.result != 'fail') {
          console.log('ok')
          console.log(res.data)
          that.setData({
            items: res.data.items
          })
        } else {
          console.log(res.data)
          wx.showModal({
            title: '提示',
            content: '登陆信息过期，重新登陆',
            success: function (res) {
              if (res.confirm) {
                console.log('用户点击确定')
              } else {
                console.log('用户点击取消')
              }

            }
          })
        }

      }
    })
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
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})
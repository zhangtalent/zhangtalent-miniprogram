// pages/library/booklist/continuerent/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgurl: '',
    authcode: '',
    cookie: '',
    code:'',
    check: '',

  },
  setauthcode: function (e) {
    this.setData({
      authcode: e.detail.value
    })
    console.log(this.data.authcode)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      this.setData({
          code:options.code,
          check:options.check

      })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },/**续借 */
  gorent: function (e) {
    wx.showToast({
      title: 'Loading...',
      icon: 'loading',
      duration: 1000,
      mask: true
    })
    var that = this;
    wx.request({
      url: 'https://yss.zhangtalent.cn/library/surecontinue.php',
      method: 'POST',
      data: 'code=' + that.data.code + '&check=' + that.data.check + '&cc=' + that.data.authcode + '&cookie=' + wx.getStorageSync('libcookie'),    //参数为键值对字符串
      header: {
        //设置参数内容类型为x-www-form-urlencoded
        'content-type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json'
      },
      success: function (res) {
        console.log('用户点击确定'+res.data)
          wx.showModal({
            title: '提示',
            content: '' + res.data,
            success: function (res) {
              if (res.confirm) {
                console.log('用户点击确定' )
              } else {
                console.log('用户点击取消')
              }

            }
          })
       

      }
    })
  },
  /**
     * 生命周期函数--监听页面显示
     */
  onShow: function () {
    wx.showToast({
      title: 'loading...',
      icon: 'loading',
      duration: 500,
      mask: true
    })
    var that = this;
    wx.request({
      url: 'https://yss.zhangtalent.cn/library/continuerent.php',
      method: 'POST',
      data: 'cookie=' + wx.getStorageSync('libcookie'),
      header: {
        //设置参数内容类型为x-www-form-urlencoded
        'content-type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json'
      },
      success: function (res) {

        console.log('ok')
        console.log(res.data)
        that.setData({
          imgurl: res.data.imgurl,
        })

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
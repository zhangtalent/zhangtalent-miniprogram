// pages/library/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    stucode: '',
    password: '',
    authcode: '',
    cookie: ''
  },
  setstucode: function (e) {
    this.setData({
      stucode: e.detail.value
    })
    console.log(this.data.stucode)
  },
  setpassword: function (e) {
    this.setData({
      password: e.detail.value
    })
    console.log(this.data.password)
  },
  setauthcode: function (e) {
    this.setData({
      authcode: e.detail.value
    })
    console.log(this.data.authcode)
  },
  /**登陆 */
  login: function (e) {
    wx.showToast({
      title: '登陆中...',
      icon: 'loading',
      duration: 1000,
      mask: true
    })
    var that = this;
    wx.request({
      url: 'https://yss.zhangtalent.cn/library/wecheck.php',
      method: 'POST',
      data: 'u=' + that.data.stucode + '&p=' + that.data.password + '&cc=' + that.data.authcode + '&cookie=' + that.data.cookie,    //参数为键值对字符串
      header: {
        //设置参数内容类型为x-www-form-urlencoded
        'content-type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json'
      },
      success: function (res) {
        if (res.data.result == 'success') {
          console.log('ok')
          console.log(res.data)
          //成功后跳转功能页
          //存缓存
          wx.setStorageSync('libstucode', that.data.stucode)
          wx.setStorageSync('libcookie', that.data.cookie)
          wx.setStorageSync('libpassword', that.data.password)
          wx.navigateTo({
            url: './booklist/index'
          })
        } else {
          wx.showModal({
            title: '提示',
            content: '登陆失败，可能密码错误',
            success: function (res) {
              if (res.confirm) {
                console.log('用户点击确定'+res.data)
              } else {
                console.log('用户点击取消')
              }

            }
          })
        }

      }
    })
  },
  /**获取验证码 */
  code: function (e) {
    wx.showToast({
      title: 'loading...',
      icon: 'loading',
      duration: 500,
      mask: true
    })
    var that = this;
    wx.request({
      url: 'https://yss.zhangtalent.cn/library/weimg.php',
      method: 'GET',
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
            cookie: res.data.cookie
          })
          console.log(res.data.cookie+that.data.cookie)

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
    this.setData({
      stucode: wx.getStorageSync('libstucode'),
      password: wx.getStorageSync('libpassword')
    })
    console.log(this.data.cookie);
   


    //获取验证码
    wx.showToast({
      title: 'loading...',
      icon: 'loading',
      duration: 500,
      mask: true
    })
    var that = this;
    wx.request({
      url: 'https://yss.zhangtalent.cn/library/weimg.php',
      method: 'GET',
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
          cookie: res.data.cookie
        })
        console.log(res.data.cookie + that.data.cookie)

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
// pages/jwxt/login/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    stucode: '',
    password:'',
    cookie:''
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
      url: 'https://yss.zhangtalent.cn/login.php',
      method: 'POST',
      data: 'u=' + this.data.stucode + '&p=' + this.data.password,    //参数为键值对字符串
      header: {
        //设置参数内容类型为x-www-form-urlencoded
        'content-type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json'
      },
      success: function (res) {
        if (res.data.result=='ok'){
          console.log('ok')
          console.log(res.data)
          that.setData({
            cookie: res.data.cookie
          })
          //成功后跳转功能页
          //存缓存
          wx.setStorageSync('stucode', that.data.stucode)
          wx.setStorageSync('cookie', that.data.cookie)
          wx.setStorageSync('password', that.data.password)
          wx.navigateTo({
            url: '../main/index'
          })
        } else {
          wx.showModal({
            title: '提示',
            content: '登陆失败，可能密码错误',
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
    this.setData({
      stucode: wx.getStorageSync('stucode'),
      password: wx.getStorageSync('password')
    })
    console.log(this.data.cookie);
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
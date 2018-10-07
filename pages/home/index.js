// pages/home/index.js
var app = getApp() 
Page({
 
  /**
   * 页面的初始数据
   */
  data: {
    ads: [],
    show: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //控制登录框
    console.log(wx.getStorageSync('show'))
    var shows = wx.getStorageSync('show')
    if(shows!="false"||shows==""){
      console.log('hello'+shows+"ffddf")
      this.setData({
        show: true,
      })
    }else{
      console.log('hello' + shows + "fff")
      console.log('bb')
      this.setData({
        show: false,
      })
    }
     
   
    //轮播图
    wx.showToast({
      title: '获取中...',
      icon: 'loading',
      duration: 500,
      mask: true
    })
    var that = this;
    wx.request({
      url: 'https://m.zhangtalent.cn/addata',
      method: 'POST',
      data: 'offset=0',    //参数为键值对字符串
      header: {
        //设置参数内容类型为x-www-form-urlencoded
        'content-type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json'
      },
      success: function (res) {
        that.setData({
          ads: res.data,
        })
      },

    })
  },
  show: function (event) {

    var uuid = event.currentTarget.dataset.uuid
    wx.setStorageSync('uuid', uuid)
    wx.navigateTo({
      url: '../show/index',
    })
  },
  english: function (event) {

    wx.navigateTo({
      url: '../english/bookanwser/booklist/index',
    })
  },
  library: function (event) {

    wx.navigateTo({
      url: '../library/index',
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
  
  },
  /**教务系统 */
  jwxtlogin: function (event) {
    wx.navigateTo({
      url: '../jwxt/login/index',
    })
  },
  /**查电费 */
  gowater: function (event) {
    wx.navigateTo({
      url: '../water/index',
    })
  }
  ,
  /**查社区分 */
  gosqf: function (event) {
    wx.navigateTo({
      url: '../sqf/login/index',
    })
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
        data: 'uuid=' + wx.getStorageSync('openid') + "&username=" + wx.getStorageSync('nickname') + "&icon=" + wx.getStorageSync('icon') + "&phonenum=000"  ,    //参数为键值对字符串
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
  }

})
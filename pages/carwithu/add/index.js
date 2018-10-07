// pages/myschool/add/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgurl: '/images/add_pic.png',
    imgs: '',
    location: '',
    destination: '',
    peoplenum: '',
    time: '',
    contact: ''
  },

  setlocation: function (e) {
    this.setData({
      location: e.detail.value
    })
    console.log(this.data.location)
  },
  setdestination: function (e) {
    this.setData({
      destination: e.detail.value
    })
    console.log(this.data.destination)
  },
  setpeoplenum: function (e) {
    this.setData({
      peoplenum: e.detail.value
    })
    console.log(this.data.peoplenum)
  },
  settime: function (e) {
    this.setData({
      time: e.detail.value
    })
    console.log(this.data.time)
  },
  setcontact: function (e) {
    this.setData({
      contact: e.detail.value
    })
    console.log(this.data.contact)
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  submit: function () {
    var that = this;
    wx.request({
      url: 'https://m.zhangtalent.cn/carwithuadd',
      method: 'POST',
      data: 'location=' + that.data.location + '&destination=' + that.data.destination + '&contact=' + that.data.contact + '&more=000' + '&peoplenum=' + that.data.peoplenum + '&time=' + that.data.time ,    //参数为键值对字符串
      header: {
        //设置参数内容类型为x-www-form-urlencoded
        'Cookie': wx.getStorageSync('jcookie'),
        'content-type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json'
      },
      success: function (res) {
        if (res.data.result != 'false') {
          console.log('ok')
          console.log(res.data)
          wx.showModal({
            title: '提示',
            content: '成功',
            success: function (res) {
              if (res.confirm) {
                console.log('用户点击确定')
              } else {
                console.log('用户点击取消')
              }

            }
          })

        } else {
          wx.showModal({
            title: '提示',
            content: '失败',
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

  }
})
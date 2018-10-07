// pages/water/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lmarray: ['南区楼（11#）', '南区楼（12#）', '管院10#', '管院11#', '医学院A', '医学院C', '医学院D', '医学院E', '学园东', '学园西', '雪津楼', '三路楼', '新公寓'],
    lmidarray: ['11', '12', '20', '21', '31', '32', '33', '34', '35', '36', '39', '40', '41'],
    lcarray: ['一层', '二层', '三层', '四层', '五层', '六层', '七层', '八层', '九层', '十层'],
    lcidarray: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
    lmindex: 0,
    lcindex: 0,
    result: '',
    room:''
  },
  setroom: function (e) {
    this.setData({
      room: e.detail.value
    })
    console.log(this.data.room)
  },
  bindlm: function (e) {
    this.setData({
      lmindex: e.detail.value
    })
    console.log(e)
  },
  bindlc: function (e) {
    this.setData({
      lcindex: e.detail.value
    })
    console.log(e)
  },
  getwater: function () {
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
      url: 'https://yss.zhangtalent.cn/water.php',
      method: 'POST',
      data: 'drlouming=' + that.data.lmidarray[that.data.lmindex] + '&drceng=' + that.data.lcidarray[that.data.lcindex] + "&zroom=" + that.data.room ,    //参数为键值对字符串
      header: {
        //设置参数内容类型为x-www-form-urlencoded
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        console.log(res.data.items)
        if (res.data.result != 'fail') {
          console.log('ok')
          console.log(res.data)
          that.setData({
            result: res.data.replace(/，/g, '\n').replace(/：/g, '\n').replace(/日期\n/i, '').replace(/电表名称\n/i, '').replace(/用量\(度\/吨\)\n/i, '').replace(/单价\(元\/度\/吨\)\n/i, '使用明细\n').replace(/\n\n\n\n/i, '\n').replace(/\n\n\n/i, '\n')
          })
        } else {
          console.log(res.data)
          wx.showModal({
            title: '提示',
            content: '错误',
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
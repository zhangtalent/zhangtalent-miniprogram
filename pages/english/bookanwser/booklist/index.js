// pages/english/bookanwser/booklist/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    book1array: ['Unit1', 'Unit2', 'Unit3', 'Unit4', 'Unit5', 'Unit6', 'Unit7', 'Unit8', 'Unit9', 'Unit10'],
    book2array: ['Unit1', 'Unit2', 'Unit3', 'Unit4', 'Unit5', 'Unit6', 'Unit7', 'Unit8', 'Unit9', 'Unit10'],
    book3array: ['Unit1', 'Unit2', 'Unit3', 'Unit4', 'Unit5', 'Unit6', 'Unit7', 'Unit8', 'Unit9', 'Unit10'],
    book4array: ['Unit1', 'Unit2', 'Unit3', 'Unit4', 'Unit5', 'Unit6', 'Unit7', 'Unit8', 'Unit9', 'Unit10'],
    lmindex: 0,
    lcindex: 0,
    result: '',
    room: ''
  },
  bindbook1: function (e) {
    console.log((parseInt(e.detail.value) + 1))
    wx.setStorageSync('pageid', "englishdxb1u" + (parseInt(e.detail.value)+1)+'.html')
    wx.navigateTo({
      url: '/pages/english/bookanwser/bookshow/index',
    })
  },
  bindbook2: function (e) {
    console.log((parseInt(e.detail.value) + 1))
    wx.setStorageSync('pageid', "englishdxb2u" + (parseInt(e.detail.value) + 1) + '.html')
    wx.navigateTo({
      url: '/pages/english/bookanwser/bookshow/index',
    })
  },
  bindbook3: function (e) {
    console.log((parseInt(e.detail.value) + 1))
    wx.setStorageSync('pageid', "englishdxb3u" + (parseInt(e.detail.value) + 1) + '.html')
    wx.navigateTo({
      url: '/pages/english/bookanwser/bookshow/index',
    })
  },
  bindbook4: function (e) {
    console.log((parseInt(e.detail.value) + 1))
    wx.setStorageSync('pageid', "englishdxb4u" + (parseInt(e.detail.value) + 1) + '.html')
    wx.navigateTo({
      url: '/pages/english/bookanwser/bookshow/index',
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
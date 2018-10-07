// pages/myschool/add/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgurl:'/images/add_pic.png',
    imgs:'',
    content: ''
  },

  setcontent: function (e) {
    this.setData({
      content: e.detail.value
    })
    console.log(this.data.content)
  },
  selectpic: function () {
    var that = this; 
    { 
      wx.chooseImage
      ({ 
        sizeType: ['original', 'compressed'], 
        success: function (res) 
        { 
          console.log(res.tempFilePaths[0])
          wx.uploadFile({ 
            url: 'https://m.zhangtalent.cn/upload', 
            filePath: res.tempFilePaths[0],
            header: {
              //设置参数内容类型为x-www-form-urlencoded
              'Cookie': wx.getStorageSync('jcookie'),
              'Accept': 'application/json'
            }, 
            name: 'img', 
            success: function (res) { 
              //      
              var ss = JSON.parse(res.data)
              console.log(ss.url)        
                that.setData({
                  imgurl:ss.url,
                  imgs :ss.url
                })
                
                console.log(ss.url)
                wx.showToast({ 
                  title: '上传成功',
                  duration: 3000 }); 
                 } })
        }
        })
      console.log(ss.url)

    }},
    delpic:function(){
      this.setData({
        imgurl: '/images/add_pic.png',
        imgs:''
      })
      
    },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  submit:function(){
    var that = this;
    wx.request({
      url: 'https://m.zhangtalent.cn/myschooladd',
      method: 'POST',
      data: 'imgurl=' + that.data.imgs + '&content=' + that.data.content,    //参数为键值对字符串
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
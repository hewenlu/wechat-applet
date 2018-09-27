// pages/yanzhengma/yanzhengma.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sureCode: true,
    inputFocus: false,
    sureCodeNum: [],
  },

  // 弹出验证框
  showSureCode:function(){
    var that = this;
    that.setData({
      sureCode: false
    })
  },
  // 输入框的焦点问题
  inputFocus: function () {
    var that = this;
    that.setData({
      inputFocus: true
    })
  },
  // 输入框输入值后的数据处理
  input: function (e) {
    var that = this;
    var value = e.detail.value;
    var sureCodeNum = [];
    console.log(value);
    for (var i = 0; i < value.length; i++) {
      sureCodeNum[i] = value.substr(i, 1);
    }
    that.setData({
      sureCodeNum: sureCodeNum
    })
  },
  // 取消输入
  cancel: function () {
    var that = this;
    that.setData({
      sureCode: true
    })
  },
  // 确认输入
  sure:function(){
    var that = this;
    wx.showLoading({
      title: '验证中',
    })
    setTimeout(function(){
      wx.hideLoading();
      that.setData({
        sureCode: true
      })
    },1000)
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
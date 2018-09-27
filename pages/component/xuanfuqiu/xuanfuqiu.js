// pages/xuanfuqiu/xuanfuqiu.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  ballMoveEvent: function (e) {
    var that = this;
    console.log('我被拖动了....')
    var touchs = e.touches[0];
    var pageX = touchs.pageX;
    var pageY = touchs.pageY;
    console.log('pageX: ' + pageX)
    console.log('pageY: ' + pageY)
    //防止坐标越界,view宽高的一般
    if (pageX < 30) return;
    if (pageX > that.data.screenWidth - 30) return;
    if (that.data.screenHeight - pageY <= 30) return;
    if (pageY <= 30) return;
    //这里用right和bottom.所以需要将pageX pageY转换
    var x = that.data.screenWidth - pageX - 30;
    var y = that.data.screenHeight - pageY - 30;
    console.log('x: ' + x)
    console.log('y: ' + y)
    that.setData({
      ballBottom: y,
      ballRight: x
    });
  },
  ballMoveEnd: function () {
    var that = this;

    console.log("我停止接触了")
    if (that.data.ballRight >= (that.data.screenWidth / 2) - 25) {
      that.setData({
        ballRight: that.data.screenWidth - 55
      });

    } else {
      that.setData({
        ballRight: 5
      });
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    // 获取屏幕宽高
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          screenHeight: res.windowHeight,
          screenWidth: res.windowWidth,
        });
      }
    });
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
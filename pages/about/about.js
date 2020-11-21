// pages/home/home.js

// 获取App()产生的实例对象
const app = getApp()

// 调用Page()注册页面示例
Page({

  /**
   * 页面的初始数据
   */
  data: {
    myName: 'sgz',
    hobby: [
      {id: 1, thing: 'dreaming'},
      {id: 2, thing: 'talking'},
      {id: 3, thing: 'painting'},
      {id: 4, thing: 'reading'}
    ],
    count: 0
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

  // --------------监听wxml中相关事件
  handlePlus() {
    this.setData({
      count: this.data.count + 1
    })
  },
  handleMinus() {
    if(this.data.count >= 1){
      this.setData({
        count: this.data.count - 1
      })
    }
  },
  /**
   * 获取用户信息
   */
  handleGetUserInfo(event) {
    console.log(event)
    console.log(app.globalData.userInfo)
  },

  // --------------监听其他事件
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   * enablePullDownRefresh 在json文件中配置打开下拉刷新
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 监听页面滚动 
   */
  onPageScroll: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
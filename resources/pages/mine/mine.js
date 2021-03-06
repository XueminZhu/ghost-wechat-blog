//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  showRecent: function () {
    wx.navigateTo({
      url: '../collected/collected?gotoType=recent'
    })
  },
  showCollected: function () {
    wx.navigateTo({
      url: '../collected/collected?gotoType=collected'
    })
  },
  showAboutMe: function () {
    wx.navigateTo({
      url: '../about/about_me'
    })
  },
  showAboutWechat: function () {
    wx.navigateTo({
      url: '../about/about_wechat'
    })
  },
  onLoad: function () {
    let that = this;
    app.getUserInfo(1, function (userInfo, isLogin) {
      if (!isLogin) {
        wx.switchTab({
          url: '/pages/index/index'
        })
      }
      else {
        that.setData({
          userInfo: userInfo
        });
      }
    });
  }
})

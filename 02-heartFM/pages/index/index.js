//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    indicatorDots:true,
    autoplay:true,
    interval:3000,
    duration:300,
    homedata:{}
  },
  onShow: function(){
  	var that=this;
		wx.request({
			url:"http://yiapi.xinli001.com/fm/home-list.json?key=046b6a2a43dc6ff6e770255f57328f89",
			success: function(res){
				console.log(res.data.data);
				that.setData({
					"homedata":res.data.data
				})
			}
		})
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})

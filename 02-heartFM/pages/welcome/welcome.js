Page({
	data:{
		indicatorDots:true,
	    autoplay:false,
	    interval:3000,
	    duration:300,
	    isLastGuide:false,
		guideimgs:[
			"/images/welcome/guide1.png",
			"/images/welcome/guide2.png",
			"/images/welcome/guide3.png"
		]
	},
	slideChange: function(event){
		if(event.detail.current == 2){
			this.setData({
				isLastGuide:true
			})
		}else{
			this.setData({
				isLastGuide:false
			})
		}
		
	},
	toIndex: function(){
		wx.navigateTo({
			url:"/pages/index/index"
		})
	}
})

Page({
	
	data:{
		action:{
			method:"play"
		},
		curPercent:0,
		totalDuring:"",
		detailItem:{},
		urlid:0,
		loadinghidden:false,
		menulist:[
			{
				"icon":"/images/detail/gift01.png",
				"text":"送礼物"
			},
			{
				"icon":"/images/detail/comment.png",
				"text":"评论"
			},
			{
				"icon":"/images/detail/fm_like.png",
				"text":"赞"
			},
			{
				"icon":"/images/detail/share.png",
				"text":"分享"
			},
			{
				"icon":"/images/detail/more.png",
				"text":"更多"
			}
		],
		controler:{
			"preimg": "/images/detail/pre.png",
			"playimg": "/images/detail/pause.png",
			"nextimg": "/images/detail/next.png"
		}
	},
	timeupdate: function(event){
		var remaintime=event.detail.duration-event.detail.currentTime;
		var minutes=Math.ceil(remaintime/60);
		var seconds=Math.ceil(remaintime%60);
		this.setData({
			"detailItem.duration":"-"+(minutes<10?'0'+minutes:minutes)+":"+(seconds<10?'0'+seconds:seconds),
			"curPercent": event.detail.currentTime/event.detail.duration
		})
		console.log(this.data.curPercent);
	},
	onLoad: function(options){
		//获取列表页面传过来的ID
		this.data.urlid=options.id;
	},
	onShow: function(){		
		var that=this;
		wx.request({	
			url:"http://yiapi.xinli001.com/fm/broadcast-detail.json?id="+this.data.urlid+"&key=046b6a2a43dc6ff6e770255f57328f89",
			success: function(res){
				console.log(res.data.data);
				var totalSeconds=res.data.data.duration;
				var minutes=Math.ceil(totalSeconds/60);
				var seconds=Math.ceil(totalSeconds%60);
				setTimeout(function(){
					that.setData({
						"detailItem":res.data.data,
						"menulist[1].text":"评论"+res.data.data.commentnum,
						"menulist[2].text":"赞"+res.data.data.favnum,
						"totalDuring":"-"+(minutes<10?'0'+minutes:minutes)+":"+(seconds<10?'0'+seconds:seconds),
						"loadinghidden":true
						
					})
				},1500);
				
			}
		});
		
	},
	prebtntouchdown: function(){
		this.setData({
			"controler.preimg":"/images/detail/_pre.png"
		});
	},
	prebtntouchup: function(){
		this.setData({
			"controler.preimg":"/images/detail/pre.png"
		});
	},
	playbtntouchdown: function(){
		this.setData({
			"controler.playimg":"/images/detail/_play.png"
		})
	},
	bindbtntouchup: function(){
		var status=this.data.action.method;
		console.log(status);
		if(status=="play"){
			this.setData({
				"controler.playimg":"/images/detail/play.png",
//				"action.method":"pause"
				 action: {
        			method: 'pause'
      			 }
			});
		}else{
			this.setData({
				"controler.playimg":"/images/detail/pause.png",
				 action: {
        			method: 'play'
      			 }
			});
		}
		
	},
	nextbtntouchdown: function(){
		this.setData({
			"controler.nextimg":"/images/detail/_next.png"
		});
	},
	nextbtntouchup: function(){
		this.setData({
			"controler.nextimg":"/images/detail/next.png"
		});
	}
	
	
});


Page({
	data:{
		listdata:[],
		refreahbtn:{
			loading: true,
			plain: true
		},
		loadhidden:true,
		curpage:0,
		category_id:0,
		loadinghidden:false
	},
	onLoad: function(options){
		this.data.category_id=options.category_id;
	},
	onShow: function(){
		var that=this;
		wx.request({
			url:"http://yiapi.xinli001.com/fm/category-jiemu-list.json?category_id="+this.data.category_id+"&offset=0&limit=10&key=046b6a2a43dc6ff6e770255f57328f89",
			success: function(res){
				console.log(res.data.data);
				setTimeout(function(){
					that.setData({
						"listdata":res.data.data,
						"loadinghidden":true
					})
				},1500);
				
			}
		})
	},
	upper: function(){
		var that=this;
		this.setData({
			"loadhidden":false
		})
		wx.request({
			url:"http://yiapi.xinli001.com/fm/category-jiemu-list.json?category_id=1&offset=0&limit=10&key=046b6a2a43dc6ff6e770255f57328f89",
			success: function(res){
				
				setTimeout(function(){
					that.setData({
						"listdata":res.data.data,
						"loadhidden":true
					});
					
				},1500)
				
			}
		})
	},
	lower: function(){
		this.data.curpage+=10;
		var that=this;
		this.setData({
			"loadhidden":false
		})
		wx.request({
			url:"http://yiapi.xinli001.com/fm/category-jiemu-list.json?category_id=1&offset="+this.data.curpage+"&limit=10&key=046b6a2a43dc6ff6e770255f57328f89",
			success: function(res){
				setTimeout(function(){
					that.setData({
						"listdata":that.data.listdata.concat(res.data.data),
						"loadhidden":true
					})
				},1500)
				
			}
		})
	}
	
})

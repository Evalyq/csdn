var manage = new Vue({
	el:"#main",
	data:{
       artList:{},
	},
	mounted:function(){
        this.getSavelist();
	},
	methods:{
		getSavelist:function(){
			var that = this;
            $.ajax({
            	url:"http://csdn.com/Home/Blog/lists",
				dataType:"json",
				type:"post",
				data:{
                    user_id:localStorage.getItem("uid"),
				},
				success:function(res){
                    if(res.message == "success"){
                        that.artList = res.data.lists;
                    }
                },
                error:function(res){
                    alert("接口错误");
                } 
            })
		},
		del:function(item){
			var that = this;
			$.ajax({
				url:"http://csdn.com/Home/Blog/delete",
				dataType:"json",
				type:"post",
				data:{
                    blog_id:item.id,
				}, 
                success:function(res){
                    if(res.message == "success"){
                        that.artList.forEach(function(i,index){
							if(i.id== item.id){
								that.artList.splice(index,1)
							}
					    })
                    }
                },
                error:function(res){
                    alert("接口错误");
                }
			})
		},
		see:function(item){
			window.location.href="info.html?id="+item.id;
		},
		edit:function(item){
			
			$.ajax({
            	url:"http://csdn.com/Home/Blog/info",
				dataType:"json",
				type:"post",
				data:{
                    blog_id:item.id,
				},
				success:function(res){
					window.location.href="postedit.html?id="+item.id;
                },
                error:function(res){
                    alert("接口错误");
                } 
            })

		}
		
	}
})
$(window).scroll(function(){
    var btHeight = $(".operate").height();
	var windowHeight = $(window).height();
	var scrollHeight = $(window).scrollTop();
	var bodyHeight = $("body").height();
	if((windowHeight+scrollHeight)>=(bodyHeight-btHeight)){
		$(".operate").removeClass("fixed");
	}else{
		$(".operate").addClass("fixed");
	}
});
var info = new Vue({
	el:'#main',
	data:{
		relatedBlog:[],
		blogInfo:[],
		useInfo:{},
		more:false,
		img:null,
		imgShow:true,
		EditJudge:true,
	},
	mounted:function(){
        this.getData();
        console.log(this.id);
	},
	methods:{
		getData:function(){
			var that = this;
			$.ajax({
				url:'http://csdn.com/Home/Info/index',
				dataType:'json',
				data:{
                    user_id:localStorage.getItem("uid"),
                    blog_id:getQuery().id
				},
				type:'get',
				success:function(res){
					localStorage.getItem("img");
					// if(this.img!=null){
					// 	alert(22222222);
					// };
                    that.relatedBlog = res.data.relate_data;
                    that.useInfo = res.data.user_info;
                    that.blogInfo = res.data.blog_info;
                    this.img = localStorage.getItem("img");
                    localStorage.setItem("bid",that.blogInfo[0].id);
                    console.log(that.user_id);
                    console.log(that.useInfo.id);
                    if( localStorage.getItem("uid") == that.useInfo.id){that.EditJudge=true}else{
                    	that.EditJudge=false;
                    }
                    // console.log(that.relatedBlog);
                    // console.log(that.blogInfo);
                    // that.ID = getQuery().id;
                    // if(that.user_id == that.useInfo.id){
                    // 	that.EditJudge=true,
                    // }

                    // }else
                    // 	that.EditJudge=false,
                    // }
				},
				error:function(res){
					alert(111);
				}
			})
		},
		getSave:function(saveData){
			$.ajax({
				url:'http://csdn.com/Home/collect/add',
				dataType:'json',
				data:saveData,
				type:'post',
				success:function(res){
					if(res.message == "success"){
						// alert("收藏成功");
					}else{
						alert(res.message);
					};

                    
				},
				error:function(res){
                    alert(1111);
				}
			})
		},
		save:function(){
			var uid = localStorage.getItem("uid");
			var bid = localStorage.getItem("bid")
            var saveData={
                 user_id:uid,
                 blog_id:bid,
            };
            this.getSave(saveData);
		},
		loadmore:function(){
             this.more = true;
		},
		// edit:function(){
  //           $.ajax({
		// 		url:" http://csdn.com/Home/Blog/doUpdate",
		// 		dataType:"json",
		// 		type:"post",
		// 		data:{
		// 			  blog_id:,
		// 			  title:item.title,
		// 			  content: 博客内容
		// 			  classify_id:item.classify_id,
		// 		}, 
  //               success:function(res){
  //                   if(res.message == "success"){
  //                      location.href="./postedit.html";
  //                   }
  //               },
  //               error:function(res){
  //                   alert("接口错误");
  //               }
		// 	})
		// }
	}
})
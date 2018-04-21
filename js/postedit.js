var postedit =  new Vue({
	el:"#main",
	data:{
       title:"",
       classify_id:"1",
       cate:{},
	},
	mounted:function(){
         var ue = UE.getEditor('container');
         this.getCate();
         this.update();
	},
	methods:{
		getCate:function(){
			var that = this;
           $.ajax({
           	    url:"http://csdn.com/Home/Index/index",
           	    data:{
                     
                },
                type:'get',
                dataType:'json',
                success:function(res){
                    that.cate = res.data.cate;
                    localStorage.getItem("img");
                    if(this.img!=null){
                         this.imgShow = true;
                    }else{
                        this.imgShow = false;
                     }
                },
                 error:function(res){
                 	alert(1111);
                }
           })
		},
		getEditorContent:function(){
			return UE.getEditor('container').getContent()
		},
		issue:function(){
           $.ajax({
	           	  url:"http://csdn.com/Home/Blog/doAdd",
	           	  dataType:"json",
	           	  type:"post",
	           	  data:{
	           	  	  user_id :localStorage.getItem("uid"),
					  title :this.title,
					  content :this.getEditorContent(),
					  classify_id: localStorage.getItem("bid"),
	           	  },
	           	success:function(res){
		           	  	if(res.message == "success"){
		           	  		window.location.href="manage.html"
		           	  	}else{
		           	  		alert("参数错误")
		           	  	}
	           	  	  
	           	  },
	       	  	error:function(res){
	       	  		alert("接口失败");
	       	  	}
           })
		},
		update:function(){
			var that= this;
			$.ajax({
            	url:"http://csdn.com/Home/Blog/info",
				dataType:"json",
				type:"post",
				data:{
                    blog_id:window.location.search.split("=")[1],
				},
				success:function(res){
                    that.title = res.data.info.title;
                    that.classify_id = res.data.info.classify_id;
                    // that.cl
                },
                error:function(res){
                    alert("接口错误");
                } 
            })

		}
	}
})
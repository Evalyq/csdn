var my = new Vue({
	el:"#main",
	data:{
	    imgShow:true,
        blogList:{},
	},
	mounted:function(){
		this.getList();
	},
	methods:{
        getList:function(){
            var that = this;
             $.ajax({
             	url:"http://csdn.com/Home/Collect/lists",
             	type:"post",
             	dataType:"json",
             	data:{
                   user_id:localStorage.getItem("uid")
             	},
             	success:function(res){
                    console.log(res);
                    that.blogList = res.data;
                    console.log(that.blogList);
                     
             		if(this.user_id != null){
                        this.imgShow = true;

             		}else{
             			this.imgShow = false;
             		};
             	},
             	error:function(res){

             	}
             })
        }
	}
})
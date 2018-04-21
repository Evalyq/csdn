var my = new Vue({
	el:"#main",
	data:{
		imgShow:true,
		userName:"",
		useImg:"",
	},
	mounted:function(){
		this.getUser();
	},
	methods:{
		getUser:function(){
			var that = this;
           this.userName = window.localStorage.getItem("username");
           this.useImg = window.localStorage.getItem("img");
           var uid=localStorage.getItem("uid");
	         if(this.uid == null){
	             that.imgShow = false;
	         }else{
	            that.imgShow = true;
	         }
		},
        out:function(){
        	localStorage.removeItem("uid");
        	window.location.href="index.html";
        	
        }
	}
})
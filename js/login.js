var login = new Vue({
	el:"#loginmain",
	data:{
       phone:null,
       password:null,
       imgShow:true,
	},
	mounted:function(){
		
	},
	methods:{
		click:function(){
			var that = this;
            var data={
                'phone':this.phone,
                'password':this.password,
            };
			that.getData(data);
		},
		getData:function(data){
			if(this.phone == ""){
				alert("用户名不能为空");
				return false;
			};

			if(this.password == ""){
				alert("密码不能为空");
				return false;
			};
			$.ajax({
				url:'http://csdn.com/Home/User/doLogin',
				dataType:'json',
				data:data,
				type:'post',
				success:function(res){
					if(res.message == "success"){
							alert("登录成功了");
							localStorage.setItem("img",res.data.userimg);
						    localStorage.setItem("uid",res.data.userid);
						    localStorage.setItem("username",res.data.username);
							window.history.back(-1);
						    
						}else {
							alert("登录失败了");
					}
				},
				error:function(res){
					alert(111);
				}
			})
		}
	}
})
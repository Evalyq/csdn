var sign = new Vue({
	el:"#signmain",
	data:{
       
	},
	mounted:function(){
		
	},
	methods:{
		click:function(){
			var that = this;
            var  phone = $(".username").val();
			var  password = $(".userpass").val();
			var uname = $(".uname").val();
            var data={
                'phone':phone,
                'password':password,
                'uname':uname,
            };
			that.getData(data);
		},
		getData:function(data){
			$.ajax({
				url:'http://csdn.com/Home/User/doReg ',
				dataType:'json',
				data:data,
				type:'post',
				success:function(res){
                    if(res.data.message == "success"){
                    	alert("注册成功");
                    	window.location.href="login.html";
                    }
				},
				error:function(){
					alert(111);
				}
			})
		}
	}
})

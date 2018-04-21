var index = new Vue({
	el:"#main",
	data:{
		banner:[],
		blogList:[],
		cate:[],
        imgShow:true,
	},
	mounted:function(){
        this.getData();
        this.swiperBanner();
	},
	methods:{
        getData:function(){
        	var that = this;
        	$.ajax({
                 url:"http://csdn.com/Home/Index/index",
                 data:{
                     
                 },
                 type:'get',
                 dataType:'json',
                 success:function(res){
                     that.blogList = res.data.blog_lists;
                     that.cate = res.data.cate;
                     that.banner = res.data.banner;
                     var uid=localStorage.getItem("uid");
                     console.log(uid == null);
                     if(uid == null){
                         that.imgShow = false;
                     }else{
                        that.imgShow = true;
                     };
                     console.log(that.imgShow);
                 },
                 error:function(res){
                 	alert(1111);
                 }

        	})
        },
        swiperBanner:function(){
                var mySwiper = new Swiper('.swiper-container',{
					loop: true,
					direction:'horizontal',
					autoplay:true,
			        observer: true,
			        observeParents:true,
			      })
	            },
	}
})
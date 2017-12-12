window.onload=function(){
	var mySwiper = new Swiper('.slider-touch', {
		autoplay: 1500,//可选选项，自动滑动
		loop : true,
		autoplayDisableOnInteraction:false, //手指触摸后继续滑动
		pagination : '.swiper-pagination',
		observer:true,         //当li改变时，自动更新
		observeParents:true,  //当容器宽改变时，自动更新
	})

	var mySwiper1 = new Swiper('.slider1', {
		autoplay: 1500,//可选选项，自动滑动
		loop : true,
		autoplayDisableOnInteraction:false, //手指触摸后继续滑动
		pagination : '.swiper-pagination1',
		observer:true,         //当li改变时，自动更新
		observeParents:true,  //当容器宽改变时，自动更新
	})

	var mySwiper2 = new Swiper('.slider2', {
		autoplay: 1500,//可选选项，自动滑动
		loop : true,
		autoplayDisableOnInteraction:false, //手指触摸后继续滑动
		pagination : '.swiper-pagination1',
		observer:true,         //当li改变时，自动更新
		observeParents:true,  //当容器宽改变时，自动更新
	})

	var mySwiper3 = new Swiper('.slider3', {
		autoplay: 1500,//可选选项，自动滑动
		loop : true,
		autoplayDisableOnInteraction:false, //手指触摸后继续滑动
		pagination : '.swiper-pagination1',
		observer:true,         //当li改变时，自动更新
		observeParents:true,  //当容器宽改变时，自动更新
	})

	// 首页长广告
	var mySwiper3 = new Swiper('.skill-content', {
		// autoplay: 1500,//可选选项，自动滑动
		autoplayDisableOnInteraction:false, //手指触摸后继续滑
		observer:true,         //当li改变时，自动更新
		observeParents:true,  //当容器宽改变时，自动更新
		slidesPerView : 3.5,//'auto'
	})

	//搜索背景
	var search=document.getElementById("search");
	var goTop=document.getElementById("goTop");
	window.onscroll=function(){
		var y=document.body.scrollTop;
		if(y>0){
			search.style.background="rgba(208,55,67,0.85)";
		}else if(y==0){
			search.style.background="rgba(0,0,0,0)";
		}
		if(y>1500){
			goTop.src="images/a-top.png";
			goTop.onclick=function(){
				y=0;
			}
		}else{
			goTop.src="images/a-recommend.png";
		}
	}
}
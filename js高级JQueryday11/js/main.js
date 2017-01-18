//console.log("hello js");

requirejs.config({
	baseUrl:'js/lib',
	paths:{
		'app':'../app',
		'jquery':'jquery-3.1.1',
		'myutil':'../app/myutil'
	},
	shim:{
		'myutil':{
			exports:'createXHR'
		}
	}
});
//第一个参数描述依赖
//第二个参数回调
//define(['jquery','app/myfn','js/app/myfn1.js','myutil','app/index4nav'],function($,url,mystyle,xhr,nav){
//	console.log($);
//	$('div').html("hello");
//	console.log(url);
//	console.log(mystyle);
//	console.log(xhr);
//	var x=xhr();
//	x.open('get',url.getBaseUrl()+'/books');
//	x.send(null);
//	x.onreadystatechange=function(){
//		if(x.readyState==4){
//			
////			$('div').css(mystyle).html(x.responseText);
//		}
//	}
//	
//	console.log(nav);
//	nav("#nav")
//	//取数据并且填充到页面div上
//})



//定义模块

define(['app/index4nav'],function(nav){

var root=document.querySelector("#nav ul");
console.log(nav);
nav(root);


})


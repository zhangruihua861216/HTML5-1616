//获取滚动高度
function $top(){
	return document.documentElement.scrollTop||document.body.scrollTop;
}
//获取可视窗口的宽
function $w(){
	return document.documentElement.clientWidth||document.body.clientWidth||window.innerWidth;
}

//获取可视窗口的高
function $h(){
	return document.documentElement.clientHeight||document.body.clientHeight||window.innerHeight;
}

//根据id获取元素节点
function $(idName){
	return document.getElementById(idName);
}

//产生随机颜色 例如 #ffffff
function randomColor(){	
	// 
	var str = "0123456789ACBDEFabcdef";
	var color = "#";
	for(var i=0;i<6;i++){
		var index = parseInt(Math.random()*str.length);
		color+=str[index];
	}
	return color;
}
//产生随机颜色 例如 rgb(255,255,255)
function randomColor2(){
	var color = "rgb("
	var r = parseInt(Math.random()*256);
	var g = parseInt(Math.random()*256);
	var b = parseInt(Math.random()*256);
	color = color+r+","+g+","+b+")";
	return color;
	
}
// rgba(255,255,255,0-1之间浮点数) 父标签班透明不会影响子标签
// opacity: 父标签半透明那么子标签也会半透明

//获取内部外部样式表中的属性的属性值
// obj--- 元素节点
// name----属性名
function getStyle(obj,name){
	// IE obj.currentStyle--> ！=null
	if (obj.currentStyle) {
		return obj.currentStyle[name];
	}else{
		return window.getComputedStyle(obj,null)[name];
	}
}


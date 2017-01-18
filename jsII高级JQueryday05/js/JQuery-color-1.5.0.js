
//新需求：
//移入移出时使用其它颜色
//自定义触发方式
$.fn.extend({
	Color:function(options){
	  return this.each(function(){
	  	var _defaults={
	  		overColor:"red",
	  		outColor:"white",
	  		diy:"mouseover",//事件触发方式 默认鼠标移入  接收标准事件"click";
	  		
	  	}
	  	$.extend(_defaults,options);
	  	
             $(this).find("tr").on(_defaults.diy,function(){
             	$(this).css("background",_defaults.overColor);
             })
	  })
	}
})

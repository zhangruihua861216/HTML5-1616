
//新需求：
//移入移出时使用其它颜色
$.fn.extend({
	Color:function(options){
	  return this.each(function(){
	  	var _defaults={
	  		overColor:"red",
	  		outColor:"white",
	  		
	  	}
	  	$.extend(_defaults,options);
	  	
		$(this).find("tr").hover(function(){
//			$(this).css("background",options && options.overColor||"red");
			$(this).css("background",_defaults.overColor);
		},function(){
//			$(this).css("background",options && options.outColor ||"blue");
			$(this).css("background",_defaults.outColor);
		})
	  })
	}
})

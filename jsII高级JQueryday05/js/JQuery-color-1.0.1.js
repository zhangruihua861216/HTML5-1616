
//新需求：
//移入移出时使用其它颜色
$.fn.extend({
	Color:function(options){
	  return this.each(function(){
		$(this).find("tr").hover(function(){
			$(this).css("background",options.overColor);
		},function(){
			$(this).css("background",options.outColor);
		})
	  })
	}
})

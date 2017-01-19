$.fn.extend({
	Color:function(){
	  return this.each(function(){
//	    console.log($(this));
		$(this).find("tr").hover(function(){
			$(this).css("background","red");
		},function(){
			$(this).css("background","white");
		})
	  })
	}
})

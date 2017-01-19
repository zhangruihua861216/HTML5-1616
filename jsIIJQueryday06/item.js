$(function(){
	var currentPage = 1;
	var pageSize = 20;
	$.ajax({
		url: "items.php",
		data: {
			currentPage: currentPage,
			pageSize: pageSize,
			orderBy: "all",
			orderType: "all",
			searchKey: "all"

		},
		success: function(res){
			res = $.parseJSON(res);
			var data = res.data,total = res.total;
			if(data.length>0){
				
				$.each(data,function(m,n){
					var ul = $("<ul/>").appendTo($("body")); 	 
					$("<li/>").append($("<img/>").html("图片："+n.pic)).appendTo(ul);
					$("<li/>").html("价格"+n.price).appendTo(ul);		
					$("<li/>").html("商品名称"+n.name).appendTo(ul);		
					$("<li/>").append($("<button/>")).html("-").append($("<input/>")).html(n.num).append($("<button/>").html("+")).appendTo(ul);
					$("<li/>").append(
						$("<span/>").html("好评"+n.better)
						).append($("<span/>")).html("差评"+n.bad).append($("<span/>")).html("库存量"+n.stock).appendTo(ul);
					$("<li/>").html("加入购物车").appendTo(ul);								
				})
			}
		}
	})
})
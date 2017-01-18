$(function(){
	
getItems();
bindEvent();

})
var currentPage=1; //当前页数
var pageSize=20;  //每页条数
var orderBy="all"; //排序字段  接收 saled price better
var orderType="all"; //排序方式 asc desc
var searcheKey="all"; //搜索关键字


//获取商品
function getItems(){
		console.log(currentPage);
		$.ajax({
				url:"items.php",
				data :{//要发送到服务器的数据
					
					currentPage:currentPage, 
					pageSize:pageSize,
					orderBy:"all",
					orderType:"all",
					searchKey:"all"
					},
					success:function(res){
					res = $.parseJSON(res);
					if(res.data.length>0) {
						
					  createItemDom(res.data);
					  createPage(res.total);
							
				  }//if
				  
				  
					
				}//success
				
//				console.log(currentPage)
				
			})//$.ajax				
	}//function getItem


//根据商品数量  创建分页按钮
function createPage(total){
	//向上取整
	total=Math.ceil(total/pageSize);
	var pageUl=$(".pageNum");
	for(var i=0;i<total;i++){
		$("<li/>").append(
			$("<input/>").attr("type","button").val(i+1)
		)
	    .appendTo(pageUl)
	}
}

//将结果集转换为DOM
function createItemDom(data){
	$.each(data,function(m,n){
        $("<li/>").append(
        	$("<img/>").attr("src","img/4.jpg")
        ).append(
        	$("<p/>").addClass("price").append(
        		$("<em/>").html(n.price)
            ).append(
            	$("<span/>").html(n.saled)
            )
        ).append(
        	$("<p/>").addClass("name").html(n.name)
        ).append(
        	$("<div/>").append(
        		$("<button>").addClass("minus").html("-")
        	).append(
        		$("<input/>").addClass("num")
            ).append(
        	    $("<button/>").addClass("p").html("+")
        	)
        ).append(
        	$("<div/>").addClass("inf").append(
        		$("<p/>").addClass("p1").html("好评:"+n.better)
        	).append(
        		$("<p/>").addClass("p2").html("差评:"+n.bad)
        	).append(
        		$("<p/>").addClass("p3").append(
        			$("<em>").html("库存")
        		).append(
        			$("<span/>").addClass("stock").html(n.stock)
        		)
        	).append(
        		$("<input/>").attr("type","button").val("加入购物车").addClass("addtocar")
        	)
        ).appendTo(".show ul")
	})

}

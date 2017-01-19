

var currentPage=1,pageSize=20;
$.ajax({
		url : "items.php",
		type : "get",//指定请求方式  默认get
		data :{//要发送到服务器的数据
			currentPage:currentPage, 
			pageSize:pageSize,
			orderBy:"all",
			orderType:"all",
			searchKey:"all"
			},
//		async:true,//是否异步 默认true  同步false
		// dataType:"json",//指定服务器返回的数据类型 如无必要 无需指定 json html  XML text jsonp  script
		success : function(res){
			res = $.parseJSON(res);
			console.log(res);
//			var data = res.data,total = res.total;
//			console.log(total);
//			if (data.length>0) {
//			each(date.function(m,n){
//					console..log(n);

//			})
//		}
			
		}
		
	})
define(['myutil','app/myfn'],function(x,url){
//	console.log(x);
//	console.log(url);

function getNavData(root){
	var xhr=x();  //创建ajax对象
	xhr.open('get',url.getBaseUrl()+'/znav');
	xhr.send(null);
	xhr.onreadystatechange=function(e){
		if(xhr.readyState==4){
			//
			var navs=JSON.parse(xhr.responseText)
			console.log(navs);
			navs.forEach(function(elem,index){
				var li=document.createElement("li");
				li.innerHTML=elem["name"];
				root.appendChild(li);
				
			})
		}
	}
	
}	
	return getNavData;
})



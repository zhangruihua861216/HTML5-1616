define(['myutil','app/myfn'],function(x,url){
//	console.log(x);
//	console.log(url);

function getNavData(f){
	var xhr=x();  //创建ajax对象
	xhr.open('get',url.getBaseUrl()+'/znav');
	xhr.send(null);
	xhr.onreadystatechange=function(e){
		if(xhr.readyState==4){
			//
			f(xhr.responseText);
		}
	}
	
}	
	return getNavData;
})



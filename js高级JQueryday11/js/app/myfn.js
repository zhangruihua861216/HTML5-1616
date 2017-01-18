
//定义一个模块
define({
	baseUrl:"http://127.0.0.1",
	port:9000,
	getBaseUrl:function(){
		return this.baseUrl+":"+this.port;
	}
});

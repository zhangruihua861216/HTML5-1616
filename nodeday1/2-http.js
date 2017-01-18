/**
 * Created by Administrator on 2016/11/30.
 */


var http=require("http");

var server=http.createServer(function(req,res){
    console.log("有请求进入");
// request  请求  response  响应
    //text/plain  文本类型
    //text/html HTML类型
    //application/json JSON类型
    res.writeHead("200",{"Content-Type":"text/plain;charset=utf-8"});
    //res.write("你看到我了");
    res.write(109);
    //end() 结束响应
    //res.end();
    res.end("你又看到我了");
    //write() 可以写多次 end()只能写一次，写完就结束
    //write() end() 必须为字符串或Buffer
    //可以没有write() 但不能没有end()

});
server.listen(8080, function () {
    console.log("服务已启动,端口号：8080")
})

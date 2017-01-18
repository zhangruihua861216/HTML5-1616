/**
 * Created by Administrator on 2016/12/3.
 */

var http=require("http");
var fs=require("fs");
var url=require("url");
http.createServer(function(req,res){
    var reqObj=url.parse(req.url,true);
    if(reqObj.pathname=="/"){
        res.writeHead("200",{"Content-Type":"text/html;charset=utf-8"});
        fs.createReadStream("./home.html").pipe(res);
    }else if(reqObj.pathname != "/favicon.ico" && reqObj.pathname!="/index.js.map"){
        console.log(reqObj.pathname);
        fs.createReadStream("."+reqObj.pathname).pipe(res);
    }
}).listen(8080,function(){
    console.log("服务已启动");
});

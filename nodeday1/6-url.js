
    var http=require("http");
    fs=require("fs");
    var urlModule=require("url");
    var server=http.createServer(function (req,res) {
    //req.url 得到请求地址 斜杠后面的内容
    //   console.log(req.url);
    //req.method 请求方式
    //   console.log(req.method);
    //url.parse() 将请求信息解析成一个对象 参数为字符串(请求地址)
    //   console.log(urlModule.parse(req.url));
       res.writeHead("200",{"Content-Type":"text/html;charset=utf-8"});
       //res.write("");
       var  pathname=urlModule.parse(req.url).pathname;
       console.log(pathname);
       //if(pathname=="/a"){
       //    res.write("你访问了a页面");
       //}else if(pathname=="/b"){
       //    res.write("<h1>你访问的b页面</h1>")
       //}
      //var href="./404.html";
      //if(pathname=="/home"){
      //    href="./home.html";
      //}else if(pathname=="/items"){
      //    href="./items.html";
      //}else if(pathname=="/login"){
      //    href="./login.html";
      //}
        var href="./404.html";
        if(pathname.indexOf("/home")!=-1){
            href="./home.html";
        }else if(pathname=="/items"){
            href="./items.html";
        }else if(pathname=="/login"){
            href="./login.html";
        }
        fs.readFile(href,function (err,data){
            if(!err){
                //console.log(data.toString());
                res.write(data.toString());
                res.end();
            }
        })
      //if(pathname=="/home"){
      //    fs.readFile(href,function (err,data){
      //        if(!err){
      //            console.log(data.toString());
      //            res.write(data.toString());
      //            res.end();
      //        }
      //    })
      //}


       //res.end("Hello Node");

});
server.listen(8080,function(){
    console.log("服务启动")
})

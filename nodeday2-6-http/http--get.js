    var http=require("http");
    var urlModel=require("url");
    var fs=require("fs");
    var qs=require("querystring");
//get请求  参数通过url.parse(req.url).query 获取
    http.createServer(function(req,res){
        res.writeHead("200","Content-type:text/plain;charset:utf-8");
        var reqObj=urlModel.parse(req.url,true);
        console.log(reqObj.pathname);
        console.log(reqObj.query);
        if(reqObj.pathname=="/"){
             fs.createReadStream("./login.html").pipe(res)
        }else if(reqObj.pathname=="/login"){
            console.log("登录");
            console.log(reqObj.query);
            console.log(reqObj.query.username);
            if(reqObj.query.username=="admin"){
                fs.createReadStream("./home.html").pipe(res);
            }
                   }
    }).listen(8090,function () {
       console.log("服务已启动");
    })

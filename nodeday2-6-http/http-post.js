
var http=require("http");
var url=require("url");
var vidable=require("formidable");
http.createServer(function(req,res){
    //res.wrar fs=require("fs");
    var qs=require("querystring");
    var formiteHead("200",{"Content-Type":"text/html;charset=utf-8"});
    var reqObj=url.parse(req.url,true);
    if(reqObj.pathname=="/"){
        res.writeHead("200",{"Content-Type":"text/html;charset=utf-8"});
        fs.createReadStream("./login.html").pipe(res);
    }else if(reqObj.pathname=="/login") {
        if (req.method == "POST") {
            var chunks = "";
            req.on("data", function (chunk) {
                chunks += chunk.toString();
            });
            req.on("end", function () {
                res.writeHead("200",{"Content-Type":"text/html;charset=utf-8"});
                chunks = qs.parse(chunks);
                if (chunks.username == "admin") {
                    fs.createReadStream("./home.html").pipe(res);
                }
            });
        }
    }else if(reqObj.pathname="/upload"){
        var form=new formidable.IncomingForm();
        //uploadDir 设置上传目录 此目录必须存在 否则报错
        form.uploadDir = "upload";
        //keepExtensions 是否保留文件扩展名
        form.keepExtensions=true;
        form.parse(req,function(err,fields,files){
            console.log(fields);
            console.log(files);
        });
        res.end();

    }

    else if(reqObj.pathname != "/favicon.ico" && reqObj.pathname!="/index.js.map"){
        console.log(reqObj.pathname);
        fs.createReadStream("."+reqObj.pathname).pipe(res);
    }
    //else if(reqObj.pathname.indexOf(".css")!=-1){
    //    res.writeHead("200","Content-type:text/css;charset:utf-8");
    //    console.log(reqObj.pathname);
    //    fs.createReadStream("."+reqObj.pathname).pipe(res);
    //}
    }).listen(8080,function () {
    console.log("服务已启动");
});


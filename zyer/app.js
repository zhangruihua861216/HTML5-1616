
/**
 * Created by Administrator on 2016/12/4.
 */

    document.querySelector("button")

 var express=require("express");
 var app=express();
 app.use(express.static("public"));
 app.use(express.static("data"));
 app.get("/",function(req,res){
    res.set("Content-Type","text/html");
    res.sendFile(__dirname+"/views/home.html");
 });
app.get("/cityWalk",function(req,res){
    res.set("Content-Type","text/html");
    res.sendFile(__dirname+"/views/cityWalk.html");
});
app.get("/zw-footer-prepend",function(req,res){
 res.set("Content-Type","text/html");
 res.sendFile(__dirname+"/views/zw-footer-prepend.html");
});

app.get("/zw-footer",function(req,res){
    res.set("Content-Type","text/html");
    res.sendFile(__dirname+"/views/zw-footer.html");
});
var server=app.listen(8080,function(){
 console.log("服务已启动");
})

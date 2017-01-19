/**
 * Created by Administrator on 2016/12/2.
 */

var  express=require("express");
var app=express();
console.log(__dirname);
app.use(express.static("public"));
 app.get("/",function(req,res){
     //console.log(req);
     //console.log(req.route);
   res.send("hello");
});
app.get("/home",function(req,res){
    //res.send("这是home页");

    res.set("Content-Type","text/html");
    res.sendFile(__dirname+"/home.html");
    //res.sendFile();
});



var server=app.listen(8060,function(){
    console.log("服务启动");
});


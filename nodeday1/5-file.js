///**
// * Created by Administrator on 2016/11/30.
// */
////readFile(path[,encode,]callback)  异步读取文件
////path：文件路径
////encode:文件编码
////callback:回调函数  返回 错误信息 读取到的内容
var fs=require("fs");
//console.log("开始读取");
//fs.readFile("./data.txt","utf-8",function(err,data){
//    console.log(err);
//    console.log("读取中");
//    //if(!err){
//    //    console.log(data);
//    //    console.log(data.toString());
//    //}
//
//})
////readFileSync(path[,encode])同步读取文件
//var res=fs.readFileSync("./data.txt");
//console.log(res.toString());
//console.log("读取完成");



//writeFile(path,content,callback) 异步写文件  如果文件不存在， 会先创建文件
//path 要写入的文件
//content 要写入的内容
//callback 回调函数
console.log("开始写");
fs.writeFile("/data.txt","一段新的血泪史", function (err) {
    console.log("写中");
    console.log(err);
    fs.readFile("./data.txt",function(err,data){
        console.log(data.toString());
    })
})
console.log("写结束");
//同步写文件
//fs.writeFileSync()



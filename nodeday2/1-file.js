/**
 * Created by Administrator on 2016/12/1.
 */

//1.读取小文件时没有问题，但由于使用内存作为中转，读取大文件时可能造成内存爆仓，这种方式不可取
var fs=require("fs");
//fs.writeFileSync("./copydata.txt",fs.readFileSync("./data.txt"));



//2.同第一种不可取
//fs.readFile("./data.txt",function(err,data){
//    if(!err){
//        fs.writeFile("./copydata2.txt",data);
//    }
//})



//3. Stream  由于硬盘的读取和写入速度相差过大，使用这种方式可能会造成写入的文件不全
//  var rs=fs.createReadStream("./data.txt");
////  var rs=fs.createReadStream("./1.mp4");
//  var ws=fs.createWriteStream("./copydata3.txt")
//  var chunks="";
//
//rs.on("data",function(data){
//    console.log(data.toString());
//    console.log("读取中");
//    chunks+=data.toString();
//});
//rs.on("end",function(){
//    console.log("文件读取完成");
//    console.log(chunks);
//});
//
//ws.write("新的内容",function(){
//    console.log("写入");
//})


//3-1. 同上原有不可取
//var rs=fs.createReadStream("./data.txt");
//var ws=fs.createWriteStream("./copydata3-1.txt")
//var chunks="";
//rs.on("data",function(data){
//    console.log(data.toString());
//    console.log("读取中");
//    chunks+=data.toString();
//    ws.write(data.toString(),function(){
//        console.log("写入中")
//    })
//});
//rs.on("end",function(){
//    console.log("文件读取完成");
//    console.log(chunks);
//});

//4.管道 pipe()

fs.createReadStream("./data.txt").pipe(fs.createWriteStream("./copydata4.txt"))


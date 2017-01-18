/**
 * Created by Administrator on 2016/12/1.
 */
var events=require("events");  //加载事件模块
var event=new events.EventEmitter();
//添加事件 event.on("事件名称",事件执行函数);

//1.
//event.on("走",function(){
//    console.log("大胆的向前走");
//});
////触发事件 event.emit("事件名称"[,参数....]);
//event.emit("走");

//2/
//function  callback(){
//    console.log("大胆的向前走");
//}
//
//event.on("走",callback);
//event.on("走",callback);
//event.on("走",callback);
//event.on("走",callback);
//event.on("走",callback);
//event.on("走",callback);
//event.on("走",callback);
//event.on("走",callback);
//event.on("走",callback);
//event.on("走",callback);
//event.on("走",callback);
//event.on("走",callback);
//event.on("走",callback);
//event.on("走",callback);
//event.on("走",callback);
//event.on("跑",function(speed){
//   console.log("开跑"+speed)
// });
////触发事件 event.emit("事件名称"[,参数....]);
//event.emit("走");
//event.emit("跑","10km");


//3.
//设置允许添加相同事件的数量上限，为0时，表示无上限
event.setMaxListeners(15);

//设置之后，再次运行2，，警告经不存在

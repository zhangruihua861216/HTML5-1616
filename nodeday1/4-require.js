/**
 * Created by Administrator on 2016/11/30.
 */
//var myModule=require("./4-module");
var url=require("url");
var str="http://www.baidu.com/first?name=admin&age=30#abc";
//url.parse(href[,bol]) 解析路径为对象
//href 要解析的路径
//bol  是否将参数字符串转换为对象  默认为false
console.log(url.parse(str,true));
//Url {
//Url {
//    protocol: 'http:', 请求协议
//        slashes: true,
//        auth: null,  授权信息
//        host: 'www.baidu.com',  主机 含  端口
//        port: null,  端口号 默认80为null
//        hostname: 'www.baidu.com',  主机名称 不含商品
//        hash: '#abc',  锚点
//        search: '?name=admin&age=30',   查询字符串
//        query: 'name=admin&age=30',  参数字符串
//        pathname: '/first',  请求路径
//        path: '/first?name=admin&age=30',  完整的请求路径 含查询字符串
//        href: 'http://www.baidu.com/first?name=admin&age=30#abc' }  原始路径
//console.log(myModule);
//myModule.say();
//myModule.walk();
//myModule.eat();


//function  gailou(){
//    for(var i=0;i<10;i++){
//
//        var zhuan=require("./4-module");
//        zhuan.zhuan();
//    }
//}
//gailou()
//
//function  gaifang() {
//    var zhuan = require("./4-module");
//    zhuan.zhuan();
//}
//
//gaifang()


var obj={
    host:"www.baidu.com",
    path:"/first",
    hash:"#abc"
}

console.log(url.format(obj));

/**
 * Created by Administrator on 2016/12/1.
 */

var qs=require("querystring");
var obj={
    name:"admin",
    age:30,
    desc:"hello"
}
//qs.stringify(object[,str][,str1]) 将对象转换为查询字符串
console.log(qs.stringify(obj));
console.log(qs.stringify(obj,"-"));
console.log(qs.stringify(obj,"-","*"));

var str="name=admin&age=30";
console.log(qs.parse(str));
var str="name=admin-age=30";
console.log(qs.parse(str,"-"));
var str="name*admin-age*30";
console.log(qs.parse(str,"-","*"));
var str="name*admin&age*30";
console.log(qs.parse(str,null,"*"));
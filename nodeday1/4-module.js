/**
 * Created by Administrator on 2016/11/30.
 */
//console.log(module);
//console.log(exports);
//exports是module.exports的一个引用
//console.log(exports===module.exports);
//Module {
//    id: '.',
//        exports: {},
//    parent: null,
//        filename: 'D:\\Documents\\H
//    loaded: false,
//        children: [],
//        paths: [ ] }
module.exports.say=function(){
    console.log("hello");
}
module.exports.walk= function () {
    console.log("散步");
}

console.log("-------------");
module.exports.zhuan=function(){
    console.log("取土 开烧 成型")
}
   console.log(module);
//var obj={
//    a:{}
//}
//var ddd=obj.a;
//ddd.name="zhar";
//地址引用
// console.log(obj.a);
module.exports={
    eat：function (){
    console.log("吃");
}
}
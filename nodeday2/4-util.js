var util=require("util");
var obj={
    a:10,
    b:{
        c:{
            d:[1,2,3,{
                e:{f:5}
            }],
            g:"admin"
        }
    }
};

//第三个参数，解析深度，默认2
console.log(typeof obj);
//util.inspect(obj,showHidden,deep) 将对象格式化为字符串
//obj 要格式化的对象
//showHidden 是否显示更多的隐藏信息 null
//deep 遍历的深度 默认为2(0,1,2.....)
console.log(util.inspect(obj,null,1));
console.log(util.inspect(obj,null,2));

function Person(){
    this.name="人";
    this.age=30;
}
Person.prototype.say=function(){
    console.log("你好:"+this.name);
};
var Man=function(){
    this.name="男人";
};

//util.inherits(sub,parent) 继承(原型继承)
//sub：子类
//parent:父类
util.inherits(Man,Person);
var m=new Man();
m.say();
console.log(m.age);
//let 声明变量
//let a=10;
//console.log(a);
//let b=10;
//console.log(b);

//let 不存在变量提升
//console.log(a);
//var a=10;
//console.log(b);
//let b=10;


//for(var i=0;i<5;i++){
//
//}
//console.log(i);


//let拥有块级作用域
//for(let i=0;i<5;i++){
//
//}
//console.log(i);

//var a=10;
//var a=20;
//console.log(a);

//let不能重复声明或者定义
//let b=10;
//let b=20;
//console.log(b);

//let 暂时性si区
//var a=10;
//function test(){
//    a=20;
//    let a;
//    console.log(a);
//}
//test();

//var a=[];
//for(var i=0;i<5;i++){
//    a[i]=function(){
//        console.log(i);
//    }
//}
//a[0]();
//a[1]();
//a[2]();


var a=[];
for(let i=0;i<5;i++){
    a[i]=function(){
        console.log(i);
    }
}
a[0]();
a[1]();
a[2]();


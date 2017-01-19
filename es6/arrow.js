//function a(){
//    return 10;
//}
//console.log(a());
//
//let b=()=>10;
//console.log(b());
//var  c1=function(a,b){console.log(a+b)};//es5
//let c=(a,b)=>console.log(a+b); //es6箭头函数
//c(10,20);
//c1(11,21);


//var obj={
//    name:"zhar",
//    say:function(){
//        var that=this
//        setTimeout(function(){
//            console.log(that.name);
//        },0)
//
//    }
//}
//obj.say();


var obj={
    name:"zhar",
    say:function(){
        setTimeout(()=>console.log(this.name),0);
    }
}
obj.say();

function e(){
    console.log(this);
}

let  d=()=>console.log(this);




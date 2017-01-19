//定义模块
//define({
//    name:"zhar",
//    say:function(){
//        console.log(this.name);
//    }
//})

//define(function(){
//    function say(){
//        return 20;
//    }
//    return{
//        say:say
//    }
//})

//define(function(){
//    return function(){
//        console.log(10);
//    }
//})

define(["b"],function(moduleB){
    console.log(moduleB);
})
//
//define(["b"],function(moduleB){
//    console.log(moduleB);
//})
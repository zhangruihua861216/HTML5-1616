require.config({
    //设置模块加载的根目录 默认为程序主入口文件所在位置
    //baseUrl:"modules"
    shim:{
        c:{
            exports:"C"
        },
        swiper:{
            deps:["jquery","css!modules/swiper/swiper-3.3.1.min.css"],
            exports:"Swiper"
        }
    },
    paths:{
        a:"modules/a",
        b:"modules/b",
        c:"modules/c",
        jquery:"lib/jquery",
        css:"lib/css",
        swiper:"modules/swiper/swiper-3.3.1.min"
    }
});


//require(["lib/jquery"],function(){
//    console.log($);
//})

//require(["modules/a","modules/b"],function(moduleA,moduleB){
//    console.log(moduleB);
//    //console.log(a.say());
//    //console.log(a());
//
//});


require(["a","b","c","css!modules/main.css","swiper"],function(_,moduleB,c){
    //console.log(moduleB);
    //console.log(c);
    console.log(Swiper)
    //console.log(a.say());
    //console.log(a());

});


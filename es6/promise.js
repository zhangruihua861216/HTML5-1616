function  getData(callback){
    //$.ajax({
    //    url:url,
    //    success:callback
    //})

    //setTimeout(function(){
    //    console.log("我模拟了异步执行")
    //},1000)
    //setTimeout(callback,1000);
    setTimeout(function(){callback("我是异步返回给你的数据")},1000)
}

//getData(function(){
//    console.log("我模拟了异步执行")
//})
getData(function(data){
    console.log("我模拟了异步执行"+data)
})
//promise 标准代码
//new　Promise(function(resolve,reject){
//    if(成功){
//        resolve();
//    }else{
//        reject()
//    }
//});
//promise 创建即运行，所以一般情况下,会将promise置于一个函数中
new　Promise(function(resolve,reject){
    console.log("异步promise");
});

function  sync1(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("异步一");
            //console.log("异步执行成功")
        },2000);
    })
}

function sync2(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("异步二");
        },2000);
    })
}

function  sync3(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("异步三");
        },2000);
    })
}

sync1();
sync1().then(function(str){
    console.log("-----");
    console.log(str+"异步执行成功");
    return sync2();
}).then(function(str){
    console.log(str+"执行成功");
    return sync3();
}).then(function(str){
    console.log(str+"执行成功");
    return"终于完了";
}).then(function(str){
    console.log(str);
});

//Promise.all([异步方法1,....]).then(resolve) 所有在数组内的异步方法  同时执行，以最后一个执行完为准，返回结果数组
Promise.all([sync1(),sync2(),sync3()])
    .then(function(str){
        console.log(str+"执行完成");
    })
//Promise.race([异步函数1....]).then() 竞赛模式
// 所有在数组内的函数同时执行，以最快完成的为准 返回最先完成的结果
Promise.race([sync1(),sync2(),sync3()])
    .then(function(str){
        console.log(str+"执行完成");
    })
//getData("xx.php",function(){});
//
//getData("x1.php",function(){});

//function createHearder(){
//    getData("header.json",function(){
//    //append();
//        // nav.appendchild();
//    })
//}
//
//function  createMenu(){
//     getData("menu.json",function(){
//         //
//     })
//}
//
//function  createBanner(){
//    getData("banner.json",function(){
//        $("swiper").append();
//    })
//}
//
//$(function(){
//    //createHearder();
//    //createBanner();
//    //createMenu();
//})

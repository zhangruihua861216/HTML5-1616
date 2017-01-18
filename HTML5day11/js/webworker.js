// 从 0-100万中取出10万个不重复数
function randNum(){
    return parseInt(Math.random()*1000000);
}
var n = 0;
function _initNumArr(){
    var arr = [];
    console.time("start");
    while(arr.length<100000){
        var val = randNum();
        var _has = false;
        for(var i=0;i<arr.length;i++){
            if(arr[i]==val){
                _has = true;
                break;
            }
        }
        if(!_has){
            arr.push(val);
        }
    }
    console.log(arr.length);
    console.timeEnd("start");
    return arr;
}

onmessage=function(e){
    console.log(e);
    var  arr=_initNumArr();
    console.log(arr);
    postMessage(arr);
}

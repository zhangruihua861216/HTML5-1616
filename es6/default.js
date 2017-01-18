function fun(){
    var a=a?a:a=20;
    var b=b?b:b=10;
    return a-b;
}

fun(20,10);


function fun(a,b)
{
    a?a:a=20;
    b?b:b=10;
    return a-b;
}

console.log(fun());


var fun=(a=20,b=10)=>a-b;
var fun=(a=20,b=10)=>{return a-b};
var fun=function(a=20,b=10){
    return a-b;
}

function(a=20,b=10){
    return a-b;
}
console.log(fun());



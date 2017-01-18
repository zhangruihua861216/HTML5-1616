angular.module("wineApp")
    .controller("validateCodeController",function($scope){
    $scope.getCode=function(num){
        var arr=['a','b','c','d','e','f','g','h','0','1','2','3','4','5','6','7','8','9','A','B','C','D','E']
        var code="";
        for(var i=0;i<num;i++){
            var n=parseInt(Math.random()*arr.length);
            code+=arr[n];
        }
        document.getElementById("myspanCode").innerHTML=code;
        console.log("hehe");
    }
})
window.onload=function() {

    var ul = document.querySelector(".countdown");
    var li = ul.querySelectorAll("li");
    var div = document.querySelectorAll(".countdown div");
    var starts = document.querySelectorAll(".countdown .start");
    var ings = document.querySelectorAll(".countdown .ing");
    var ends = document.querySelectorAll(".countdown  .end");

    for(var kk=0;kk<li.length;kk++){
        (function(kk){
            li[kk].onclick=function(){
                resetAttributeLi();
                resetAttributeLiDiv();
                li[kk].setAttribute("class","hover");
                for (var i = 0; i < li[kk].children.length; i++) {
                    li[kk].children[i].setAttribute("class", "hover " + li[0].children[i].getAttribute("class"));
                }
                squareFun(kk);
            }
        })(kk)

    }
    var square=document.querySelectorAll(".square");
    var squareDiv1=document.querySelectorAll(".squareDiv1")[0];
    var squareDiv2=document.querySelectorAll(".squareDiv2")[0];

    function  squareFun(kk){
        var date = new Date();
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var seconds=date.getSeconds();
        var Diffminutes=getTwoNum(59-minutes);
        var Diffsecond=getTwoNum(59-seconds);
        switch (kk){
            case 0:
                if(hours<=9){
                    var Diffhours=getTwoNum(9-hours-1);
                    squareDiv1.innerHTML="距离本场开始";
                    squareDiv2.innerHTML=Diffhours+":"+Diffminutes+":"+Diffsecond;
                }else if(hours==10){
                    squareDiv1.innerHTML="距离本场结束";
                    squareDiv2.innerHTML="00"+":"+Diffminutes+":"+Diffsecond;
                }else{
                    squareDiv1.innerHTML="本场已结束";
                    squareDiv2.innerHTML="00"+":"+"00"+":"+"00";
                }
                break;
            case 1:
                if(hours<12){
                    var Diffhours=getTwoNum(12-hours-1);
                    squareDiv1.innerHTML="距离本场开始";
                    squareDiv2.innerHTML=Diffhours+":"+Diffminutes+":"+Diffsecond;
                }else if(hours==12){
                    squareDiv1.innerHTML="距离本场结束";
                    squareDiv2.innerHTML="00"+":"+Diffminutes+":"+Diffsecond;
                }else{
                    squareDiv1.innerHTML="本场已结束";
                    squareDiv2.innerHTML="00"+":"+"00"+":"+"00";
                }
                break;
            case 2:
                if(hours<15){
                    var Diffhours=getTwoNum(15-hours-1);
                    squareDiv1.innerHTML="距离本场开始";
                    squareDiv2.innerHTML=Diffhours+":"+Diffminutes+":"+Diffsecond;
                }else if(hours==15){
                    squareDiv1.innerHTML="距离本场结束";
                    squareDiv2.innerHTML="00"+":"+Diffminutes+":"+Diffsecond;

                }else{
                    squareDiv1.innerHTML="本场已结束";
                    squareDiv2.innerHTML="00"+":"+"00"+":"+"00";
                }
                break;
            case 3:
                if(hours<19){
                    var Diffhours=getTwoNum(19-hours-1);
                    squareDiv1.innerHTML="距离本场开始";
                    squareDiv2.innerHTML=Diffhours+":"+Diffminutes+":"+Diffsecond;
                }else if(hours==19){
                    squareDiv1.innerHTML="距离本场结束";
                    squareDiv2.innerHTML="00"+":"+Diffminutes+":"+Diffsecond;
                }else{
                    squareDiv1.innerHTML="本场已结束";
                    squareDiv2.innerHTML="00"+":"+"00"+":"+"00";
                 }
                break;
        }
    }

    function  getTwoNum(num){
        return num<10?"0"+num:num;
    }
    function  resetAttributeLi(){
        for(var aa=0;aa<li.length;aa++){
            li[aa].removeAttribute("class");
        }
    }
    function  resetAttributeLiDiv(){
        for(var bb=0;bb<div.length;bb++){
              var classVal = div[bb].getAttribute("class");
                  classVal = classVal.replace("hover", "");
                  div[bb].setAttribute("class", classVal);

            }
        }


    var date=new Date();
    var hours=date.getHours();
    var minutes=date.getMinutes();
    console.log(hours);

    if(hours<=9&&hours>=0){
        restEndDiv();
        resetIngDiv();
        li[0].onclick();
    }else if(hours==10){
        restEndDiv();
        resetIngDiv();
        starts[0].style.display="none";
        ings[0].style.display="block";
        li[0].onclick();

    }else if(hours<12){
        restEndDiv();
        resetIngDiv();
        starts[0].style.display="none";
        ings[0].style.display="none";
        ends[0].style.display="block";
        li[1].onclick();

    }else if(hours==12){
        restEndDiv();
        resetIngDiv();
        starts[0].style.display="none";
        ings[0].style.display="none";
        ends[0].style.display="block";
        starts[1].style.display="none";
        ings[1].style.display="block";
        li[1].onclick();

    }else if(hours<14){
        restEndDiv();
        resetIngDiv();
        starts[0].style.display="none";
        ings[0].style.display="none";
        ends[0].style.display="block";
        starts[1].style.display="none";
        ings[1].style.display="none";
        ends[1].style.display="block";
        li[2].onclick();

    }else if(hours==15){
        restEndDiv();
        resetIngDiv();
        starts[0].style.display="none";
        ings[0].style.display="none";
        ends[0].style.display="block";
        starts[1].style.display="none";
        ings[1].style.display="none";
        ends[1].style.display="block";
        starts[2].style.display="none";
        ings[2].style.display="block";
        li[2].onclick();

    }else if(hours<19){
        restEndDiv();
        resetIngDiv();
        starts[0].style.display="none";
        ings[0].style.display="none";
        ends[0].style.display="block";
        starts[1].style.display="none";
        ings[1].style.display="none";
        ends[1].style.display="block";
        starts[2].style.display="none";
        ings[2].style.display="none";
        ends[2].style.display="block";
        li[3].onclick();

    }else if(hours==19){
        restEndDiv();
        resetIngDiv();
        starts[0].style.display="none";
        ings[0].style.display="none";
        ends[0].style.display="block";
        starts[1].style.display="none";
        ings[1].style.display="none";
        ends[1].style.display="block";
        starts[2].style.display="none";
        ings[2].style.display="none";
        ends[2].style.display="block";
        starts[3].style.display="none";
        ings[3].style.display="block";
        li[3].onclick();
    }else {
        restEndDiv();
        resetIngDiv();
        starts[0].style.display="none";
        ings[0].style.display="none";
        ends[0].style.display="block";
        starts[1].style.display="none";
        ings[1].style.display="none";
        ends[1].style.display="block";
        starts[2].style.display="none";
        ings[2].style.display="none";
        ends[2].style.display="block";
        starts[3].style.display="none";
        ings[3].style.display="none";
        ends[3].style.display="block";
    }
    function  reststartDiv(){
        for(var dd=0;dd<starts.length;dd++){
            starts[dd].style.display="none";
        }
    }
    function restEndDiv(){
        for(var mm=0;mm<ends.length;mm++){
            ends[mm].style.display="none";
        }
    }
    function  resetIngDiv(){
        for(var nn=0;nn<ings.length;nn++){
            ings[nn].style.display="none";
        }
    }

    var squareDiv2=document.querySelectorAll(".countdown-time .squareDiv2")[0];
    console.log(squareDiv2);
    console.log(squareDiv2.innerHTML);
    setInterval(function(){
        squareDiv2.innerHTML=squareDiv2.innerHTML
    },500);


}

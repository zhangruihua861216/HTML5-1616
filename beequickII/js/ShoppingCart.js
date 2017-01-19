window.onload=function(){


    //预定时间下拉框实现方法
    var ReceivingTime=document.querySelector(".ReceivingTime");
    var ReceivingTimeGroup=ReceivingTime.querySelectorAll("optgroup")[0];
    var hour=new Date().getHours();
        if(hour>=23||hour>0&&hour<9){
            document.querySelector(".todayOneHour").style.display="none";
            ReceivingTimeGroup.style.display="none";
        }
        for(var i=9;i<hour;i++){
            document.querySelector(".today"+i).style.display="none";
        }

    var reserve = document.querySelector(".part-2 .reserve");
     ReceivingTime.addEventListener("change",function(){
         reserve.innerHTML=reserve.value;
     })


    //全选实现方法
    var all=document.querySelectorAll("input[type='checkbox']");
    var selAll=document.querySelectorAll(".checkbox-All")
    var selAllOne=document.querySelectorAll(".checkbox-one");
    var newPrices=document.querySelectorAll(".newPrice");
    var numbers=document.querySelectorAll(".number");
    var totalPrice=document.querySelector(".totalPrice");
    var totalNumer=document.querySelector(".totalNumber");
    var allBool=true;




    //如果所有的单选都被选中，则全选也默认被选中
    function selAllCheck(){
        var count=0;
        for(var n=0;n<selAllOne.length;n++){
            if(selAllOne[n].checked){
                count++;

            }
            if(count==selAllOne.length){
                selAll[0].checked=true;
            }
        }
    }
    //如果有一个单选未被选中，则全选不被选中
    function cancelselAllCheck(){
        for(var ii=0;ii<selAllOne.length;ii++){
            if (selAllOne[ii].checked==false){
                selAll[0].checked=false;
            }
        }
    }
    //如果全选按钮被选中，或者取消，则所有单选按钮保持和全选按钮一样的状态，选中或未被选中
    function modifyselAllCheck(className){
        if(className=="checkbox-All"){
            for(var k=0;k<all.length;k++){
                all[k].checked=selAll[0].checked;
            }
        }
    }



    //计算
    function  getTotal(){
        var selected=0;
        var price=0;
        for(var i=0;i<selAllOne.length;i++){
               if(selAllOne[i].checked){
                   price+=parseFloat(newPrices[i].innerHTML)*parseInt(numbers[i].innerHTML);
                   selected+=parseInt(numbers[i].innerHTML);
                  }
        }
        totalPrice.innerHTML=price.toFixed(2);
        totalNumer.innerHTML=selected;
    }

    for(var j=0;j<all.length;j++){
        all[j].onclick=function(){
            //if(this.className=="checkbox-All"){
            //    for(var k=0;k<all.length;k++){
            //        all[k].checked=this.checked;
            //    }
            //}
            modifyselAllCheck(this.className);
            cancelselAllCheck();
            selAllCheck();
            getTotal();
        }
    }



//点击增加商品数量
    var add=document.querySelectorAll(".add");
    for(var kk=0;kk<add.length;kk++){
        (function(kk){
            add[kk].onclick=function(){
                numbers[kk].innerHTML=parseInt(numbers[kk].innerHTML)+1;
                console.log(this);
                selAllOne[kk].checked=true;
                selAllOne[kk].onclick();
            }
        })(kk)
    }


//点击减少商品数量
    var sub=document.querySelectorAll(".sub");
    for(var mm=0;mm<sub.length;mm++){
        (function(mm){
            sub[mm].onclick=function(){
                if(parseInt(numbers[mm].innerHTML)>1){
                    numbers[mm].innerHTML=parseInt(numbers[mm].innerHTML)-1;
                    selAllOne[mm].onclick();
                }else
                {
                    selAllOne[mm].checked=false;
                    //selAllOne[mm].onclick();
                  console.log(selAllOne[mm].parentNode.parentNode.parentNode.parentNode.parentNode.removeChild(selAllOne[mm].parentNode.parentNode.parentNode.parentNode));
                }
            }
        })(mm)

    }

    selAll[0].checked=true;
    selAll[0].onclick();
}

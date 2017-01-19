define(["jquery","text!modules/FlashSupermarket/FlashSupermarket.html",
       "css!modules/FlashSupermarket/FlashSupermarket.css"
         //"modules/FlashSupermarket/FlashSupermarketfun"
        //"modules/FlashSupermarket/tool",
 ],function($,html){

    function  $h(){
        return document.documentElement.clientHeight||document.body.clientHeight||window.innerHeight;
    }
    function render(){
        $("main").empty();
        $("main").append(html);
        bindEvent();
    }
    function getStyle(obj,name){
        if(obj.currentStyle){
            return obj.currentStyle[name];
        }else{
            return window.getComputedStyle(obj,null)[name];
        }
    }
    function bindEvent(){
        var uls=document.querySelectorAll("ul");
        for(var i=0;i<uls.length;i++){
            uls[i].style.height=$h()+"px";
        }
        var lis=uls[0].querySelectorAll("li");

        for(var j=0;j<lis.length;j++){
            lis[j].index=j;
            lis[j].onclick=function(){
                resetUL();
                resetSort(document.querySelectorAll(".BysortDetail")[0].querySelectorAll("div"));
                uls[this.index+1].style.display="block";
                lis[this.index].className="select";
                showSort(this.index);
            }
            showSort(0);
        }
        function  resetUL(){
            for(var m=0;m<lis.length;m++){
                uls[m+1].style.display="none";
                lis[m].removeAttribute("class");
            }
        }
        function resetSort(BysortDetailSub){
            for(var n=0;n<BysortDetailSub.length;n++){
                BysortDetailSub[n].style.display="none";
            }
        }
        function restSortBool(BySortSub,BysortDetailSub){
            for(var z=0;z<BysortDetailSub.length;z++){
                BySortSub=false;
            }
        }
        function showSort(idx){
            var BysortDetail=document.querySelectorAll(".BysortDetail");
            var BysortDetailSub=BysortDetail[idx].querySelectorAll("div");
            var BySort=document.querySelectorAll(".BySort");
            var BySortSub=BySort[idx].querySelectorAll("span");
            var BySortSubBool=[];
            var labels=document.querySelectorAll(".BySort span label");
            var lists=document.querySelectorAll(".market .list");
            for(var k=0;k<BySortSub.length;k++){
                BySortSub[k].idx=k;
                BySortSubBool[k]=false;
                BySortSub[k].onclick=function(){
                    resetSort(BysortDetailSub);
                    restSortBool(BySortSub[this.idx],BysortDetailSub);
                    var cssStyle=getStyle(BysortDetailSub[this.idx],"display");
                    if(BySortSubBool[this.idx]==false){
                        BysortDetailSub[this.idx].style.display="block";
                        BySortSubBool[this.idx]=true;
                        BySortSubBool[this.idx+1]=false;
                        BySortSubBool[this.idx-1]=false;
                        labels[this.idx].innerHTML="&#xe603;";
                    }else{
                        BysortDetailSub[this.idx].style.display="none";
                        BySortSubBool[this.idx]=false;
                        labels[this.idx].innerHTML="&#xe6b6;";
                    }


                }
            }
        }
    }






    return {
        render:render
    }
})

define(["jquery","text!modules/FlashSupermarket/FlashSupermarket.html",
       "css!modules/FlashSupermarket/FlashSupermarket.css",
       "css!modules/home/header.css",
 ],function($,html){


    function render(){
        $("main").empty();
        $("main").append(html);
        $.getJSON("http://www.vrserver.applinzi.com/aixianfeng/apihomehot.php",function(data){
            //console.log(data.data.length);
            if(data.data.length>0){
                var ulsP=$("<ul/>").attr("class","list").css({"height":"736px","display":"none"});
                ulsP.append(
                    $("<div/>").attr("class","BySortFix").append(
                         $("<div/>").attr("class","BySort").append(
                             $("<span>").html("全部分类")
                         ).append(
                             $("<label/>").css("font-family","iconfont").html("&#xe6b6;")
                         ).append(
                             $("<big/>").html("|")
                         ).append(
                             $("<span/>").html("综合排序")
                         ).append(
                             $("<label/>").css("font-family","iconfont").html("&#xe6b6;")
                         )
                       ).append(
                        $("<div/>").attr("class","BysortDetail").append(
                            $("<div/>").attr("class","BysortDetail-1").append(
                                $("<span/>").html("全部分类")
                            ).append(
                                $("<span/>").html("进口水果")
                            ).append(
                                $("<span/>").html("国产水果")
                            )
                            ).append(
                                $("<div/>").attr("class","BysortDetail-2").append(
                                    $("<span/>").html("综合排序")
                                ).append(
                                    $("<span/>").html("销量最高")
                                ).append(
                                    $("<span/>").html("价格最低")
                                ).append(
                                    $("<span/>").html("价格最高")
                                )
                            )
                )
                )
                $.each(data.data,function(index,n){
                    //console.log(n);
                    ulsP.append(
                        $("<li/>").attr("class","product").append(
                            $("<div/>").append(
                                $("<img/>").attr({"src": n.img})
                            ).append(
                                $("<div/>").attr("class","name").html(n.name)
                            ).append(
                                $("<div/>").attr("class","choice").html("精选")
                            ).append(
                                $("<div/>").attr("class","capacity").html(n.specifics)
                            ).append(
                                $("<div/>").attr("class","price").append(
                                    $("<span/>").attr("class","newPrice").html(n.price)
                                    )
                                    .append(
                                        $("<span/>").attr("class","oldPrice").html(n.market_price)
                                    )
                                    .append(
                                        $("<span/>").attr("class","add").html("+")
                                    )
                            )
                        )
                    ).appendTo($(".market"))
                })
            }
            bindEvent();
        })






    }


    function  $h(){
        return document.documentElement.clientHeight||document.body.clientHeight||window.innerHeight;
    }
    function getStyle(obj,name){
        if(obj.currentStyle){
            return obj.currentStyle[name];
        }else{
            return window.getComputedStyle(obj,null)[name];
        }
    }
    function bindEvent(){

        var uls=document.querySelectorAll(".market ul");
        var ulsList=document.querySelectorAll(".market .list");
        for(var i=0;i<uls.length;i++){
            uls[i].style.height=$h()+"px";
        }
        var lis=document.querySelectorAll(".market .classify li");

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
                ulsList[m].style.display="none";
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

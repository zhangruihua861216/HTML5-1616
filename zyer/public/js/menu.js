<!--城市信息获取-->


$.get("index/menu.json",function(res){
    if(res.length>0){
        $.each(res,function(index,n){
            $("<li>").html("<div>"+n.title+"</div>"+"<div>"+ n.mainCity+"</div>").appendTo($("#menu .ul_menu ul").eq(0));

            moreCity(index,n);
        })
    }
    $.each($("#menu ul:eq(0) li").add("#menu .moreCity"),function(m,n){
        $(n).hover(
            function(){
                $("#menu .moreCity:eq("+m+")").css("display","block");
                $("#menu ul:eq(0) li:eq("+m+")").css({"background":"#fff","opacity":"1"});
            },
            function(){
                $("#menu .moreCity:eq("+m+")").css("display","none");
                $("#menu ul:eq(0) li:eq("+m+")").css({"background":"#000","opacity":"0.7"});
            }
        );
    })



    function moreCity(index,n){
        var ul=$("<ul/>").appendTo($("#menu .ul_menu"));
        ul.addClass("moreCity");
        $.each(n.moreCity,function(idx,obj){
            if(obj.cityName=="主题推荐"){
                $("<li>").html("<h3>" +obj.cityName+"</h3>").appendTo(ul);
                $.each(obj.items,function(m,items){
                    $("<div>").html("<img src='"+ obj.items[m].imgUrl+"'/>").appendTo(ul)
                })
            }else{
                $("<li>").html("<h3>" +obj.cityName+"</h3>"+"<div>"+obj.items.join(" ")+"</div>").appendTo(ul);
            }

        })
        if(index!=5){
            $("<li>").html("<img src='"+n.moreCityImg+"'/>").appendTo(ul);
        }
    }

})
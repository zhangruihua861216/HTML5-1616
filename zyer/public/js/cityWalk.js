
//动态获取cityWalk界面
$.get("cityWalkList.json",function(res){
    $.each(res,function(m,n){
        console.log()
        $("<li/>").append(
            $("<img/>").attr({"src":n.imgurl})
        ).append(
            $("<div/>").append(
                $("<span/>").html(n.address)
            ).append(
                $("<span/>").html("<span>"+n.soldCount+"</span>"+" 件已销售" )
            ).append(

                $("<span/>").html("<span>"+n.browseCount+"</span>"+" 次浏览记录")
            )
        ).append(
            $("<div/>").html("<a href='#'>"+ n.title+"</a>")
        ).append(

            $("<ul/>").append(
                $("<li/>").html(n.introduce[0])

            ).append(
                $("<li/>").html(n.introduce[1])

            ).append(
                $("<li/>").html(n.introduce[2])
            )


        ).append(
            $("<div/>").append(
                $("<span/>").html("元起")
            ).append(
                $("<span/>").html(n.newPrice)
            ).append(

                $("<span/>").html(n.oldPrice+"元")
            )
        ).append(
            $("<div/>").html("<a href='#'>"+"立即预定"+"</a>")
            )
            .appendTo($(".zw-module-productlist-unit"))
    })
})


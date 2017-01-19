//动态获取机酒自由行数据
$.get("index/freeWalk.json",function(res){
    console.log(res[0].data);
    show(res[0].data);
    showMore();
    $.each(res,function(m,n){
        $("<li/>").append(
            $("<a/>").attr("href","#").html(n.title).hover(
                function(){
                    $("#zw-home-ziyouxing .content").empty()
                    show(n.data);
                    showMore();
                },
                function(){

                }
            )
        ).appendTo("#zw-home-ziyouxing ul:eq(0)")

    })
   function showMore(){
       $("<li/>").append(
           $("<a/>").append(
               $("<p/>").append(
                   $("<span/>").html("查看更多")
               ).append(
                   $("<span/>").html("机酒自由行")
               ).append(
                   $("<span/>").html("&#xe697")
               )
           ).append(
               $("<p>").append(
                   $("<span/>").html("机票")
               ).append(
                   $("<span/>").html("|")
               ).append(
                   $("<span/>").html("酒店")
               ).append(
                   $("<span/>").html("|")
               ).append(
                   $("<span/>").html("机+酒")
               ).append(
                   $("<span/>").html("|")
               ).append(
                   $("<span/>").html("邮轮")
               )

           )
       ).appendTo("#zw-home-ziyouxing .content")
   }


    function  show(data){
        console.log(data);
        $.each(data,function(idx,items){
            $("<li/>").append(
                $("<a/>").append(
                    $("<div/>").append(
                        $("<img/>").attr("src", data[idx].imgUrl)
                    )
                ).append(
                    $("<div/>").append(
                        $("<span/>").html("机+酒")
                    ).append(
                        $("<span/>").html(data[idx].price+"元起")
                    )
                ).append(
                    $("<div/>").html(data[idx].title)
                ).append(
                    $("<div/>").html(data[idx].time)
                )
                )
                .appendTo("#zw-home-ziyouxing .content")
        })
    }
})

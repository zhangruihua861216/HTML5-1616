define(["jquery","text!modules/home/home.html","modules/swiper/axfSwiper",
                 "css!modules/home/header.css",
                 "css!modules/home/home.css"
],function($,html,asf){
    function render(){
        $("main").empty();
        $("main").append(html);



        $.getJSON("http://www.vrserver.applinzi.com/aixianfeng/apihome.php",function(data){
            if(data.data.menu.length>0){
                $.each(data.data.menu,function(index,n){
                      $("<li/>").append(
                        $("<a/>").attr("href","#homecrazyspike").append(
                            $("<img/>").attr({"src": n.activity.img})

                        ).append(
                            $("<span/>").html(n.activity.name)
                        )
                    ).appendTo($(".advert-1 ul"))
                })
            }
            if(data.data.slide.length>0){
                $.each(data.data.slide,function(index,n){
                    $("<div/>").attr("class","swiper-slide").append(
                        $("<img/>").attr({"src": n.activity.img})
                    ).appendTo($(".swiper-wrapper"))
                })
            }
            asf.render(".swiper-container");

        })
        //$.getJSON("http://www.vrserver.applinzi.com/aixianfeng/apihome.php",function(data){
        //    if(data.data.slide.length>0){
        //        $.each(data.data.slide,function(index,n){
        //            $("<div/>").attr("class","swiper-slide").append(
        //                $("<img/>").attr({"src": n.activity.img})
        //            ).appendTo($(".swiper-wrapper"))
        //        })
        //    }
        //})

    }

    return {
        render:render
    }
})

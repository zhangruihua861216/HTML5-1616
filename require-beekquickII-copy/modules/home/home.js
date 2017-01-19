define(["jquery","text!modules/home/home.html","modules/swiper/axfSwiper",
                 "css!modules/home/home.css"
],function($,html,asf){
    function render(){
        $("main").empty();
        $("main").append(html);
        asf.render(".swiper-container");
    }
    return {
        render:render
    }

})

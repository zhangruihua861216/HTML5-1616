require.config({
    shim:{
        swiper:{
            deps:["jquery","css!modules/swiper/swiper-3.4.1.min.css"],
            exports:"Swiper"
        }
    },
    paths:{
        jquery:"lib/jquery",
        underscore:"lib/underscore",
        backbone:"lib/backbone",
        text:"lib/text",
        css:"lib/css",
        swiper:"modules/swiper/swiper-3.4.1.min"
    }
});

require(["modules/footer/footer","backbone", "css!modules/common/reset.css", "css!modules/home/header.css", "css!modules/common/product-common.css","router"],function(footer){
    footer.render();
    Backbone.history.start();
    location.hash="home";
})

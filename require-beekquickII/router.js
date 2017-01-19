define(["backbone"],function(){
    var router=Backbone.Router.extend({
        routes:{
            "home":"home",
            "homecrazyspike":"homecrazyspike",
             "FlashSupermarket":"FlashSupermarket",
             "FreshReservation":"FreshReservation",
             "ShoppingCart":"ShoppingCart",
             "mine":"mine",
             "mineIntegral":"mineIntegral",
             "home-crazy-spike":"home-crazy-spike",
              "swiper":"swiper"
        },
        home:function(){
            require(["modules/home/home"],function(h){
                h.render();
            })
        },
        FlashSupermarket:function(){
            require(["modules/FlashSupermarket/FlashSupermarket"],function(h){
                h.render();
            })
        },
        FreshReservation:function(){
            require(["modules/FreshReservation/FreshReservation"],function(h){
                h.render();
            })
        },
        ShoppingCart:function(){
            require(["modules/ShoppingCart/ShoppingCart"],function(h){
                h.render();
            })
        },
        mine:function(){
            require(["modules/mine/mine"],function(h){
                h.render();
            })
        },
        mineIntegral:function (){
        require(["modules/mineIntegral/jquery.circliful.min","modules/mineIntegral/mineIntegral"],function(_,h){
            h.render();
          })
        },
        homecrazyspike:function (){
        require(["modules/homecrazyspike/homecrazyspike"],function(h){
            h.render();
        })
    }
    });
    return new router();

})

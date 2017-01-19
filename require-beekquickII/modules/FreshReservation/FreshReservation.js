define(["jquery","text!modules/FreshReservation/FreshReservation.html",
             "css!modules/FreshReservation/FreshReservation.css"
],function($,html){
    function render(){
        $("main").empty();
        $("main").append(html);
        $.getJSON("http://www.vrserver.applinzi.com/aixianfeng/apiyuding.php",function(data){
           if(data.product.length>0){
               $.each(data.product,function(index,n){
                   $("<li/>").append(
                       $("<img/>").attr({"src":n.img})
                   ).append(
                       $("<div/>").attr("class","Reservation-name").html(n.name)
                   ).append(
                       $("<div/>").html(n.specifics)
                   ).append(
                       $("<div/>").append(
                           $("<span/>").attr("class","Reservation-price").html("￥"+n.price)
                       ).append(
                           $("<span/>").attr("class","Reservation-price-old").html("￥"+n.market_price)
                       ).append(
                           $("<span/>").attr("class","Reservation-price-add").html("+")
                       )
                   )
                       .appendTo($(".FreshReservation-Reservation"));

               })
           }
        })
    }
    return {
        render:render
    }
})

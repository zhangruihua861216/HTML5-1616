define(["jquery","text!modules/FreshReservation/FreshReservation.html",
             "css!modules/FreshReservation/FreshReservation.css"
],function($,html){
    function render(){
        $("main").empty();
        $("main").append(html);
    }
    return {
        render:render
    }
})

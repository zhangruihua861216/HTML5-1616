define(["jquery","text!modules/mineIntegral/mineIntegral.html",
                  "css!modules/mineIntegral/mine-integral.css",
                  "css!modules/common/reset.css",
                  "css!modules/mineIntegral/jquery.circliful.css",
                  "modules/mineIntegral/jquery-1.11.1.min",

     ],function($,html){

    function render(){
        $("main").empty();
        $("main").append(html);
        $( document ).ready(function() {
            $('#myStathalf').circliful();
            $('#myStat').circliful();
            $('#myStathalf2').circliful();
            $('#myStat2').circliful();
        });

    }

    return{
        render:render
    }
})


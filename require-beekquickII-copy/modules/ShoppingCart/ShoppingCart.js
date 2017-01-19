define(["jquery","text!modules/shoppingCart/shoppingCart.html",
                   "modules/shoppingCart/shoppingCartFun",
                 "css!modules/shoppingCart/shoppingCart.css"
      ],function($,html){

    function render(){
        $("main").empty();
        $("main").append(html);
    }
    return {
        render:render
    }
})


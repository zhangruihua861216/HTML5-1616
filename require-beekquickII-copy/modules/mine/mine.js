define(["jquery","text!modules/mine/mine.html",
    "css!modules/mine/mine.css"
],function($,html){

    function render(){
        $("main").empty();
        $("main").append(html);
    }
    return {
        render:render
    }
})


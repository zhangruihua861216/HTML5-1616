define(["jquery","text!modules/footer/footer.html","css!modules/footer/footer.css"],function($,html){
    function render(){
        $("footer").remove();
        $("body").append(html);

    }
    return{
        render:render
    }
});
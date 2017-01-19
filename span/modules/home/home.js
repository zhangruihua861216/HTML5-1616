define(["img","jquery","text!modules/home/home.html",
                  "css!modules/home/home.css"],function(img,$,html){
         function  render(){
             $("body").append(html);
         }
         return {
             render:render
         }

});
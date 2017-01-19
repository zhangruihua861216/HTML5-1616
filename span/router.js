define(["backbone"],function(){
    var router=Backbone.Router.extend({
        routes:{
            //key:val    key是路由值(访问路径里#后的值)
            //var 是对应的处理函数名
            "home":"home",
            "mineA":"mineB"
        },
        //这里的home对应上面的val
        home:function(){
            console.log("跳转到home");
            require(["modules/home/home"],function(h){
                h.render();
            })
        },
        mineB:function(){
            console.log("跳转到mine");
        }
    });
    new router();
});

define(["swiper"],function(){
    function render(sel){
        var mySwiper = new Swiper(sel, {
            autoplay: 1000,//可选选项，自动滑动
            pagination : '.swiper-pagination',
        })
    }
    return{
        render:render
    }

})

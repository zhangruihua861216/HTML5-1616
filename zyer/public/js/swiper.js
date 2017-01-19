<!--轮播图利用Swiper技术实现滚动-->
$(function(){
    var mySwiper = new Swiper('.swiper-container', {
        pagination : '.swiper-pagination',
        autoplay: 5000,//可选选项，自动滑动
        paginationClickable :true,
        prevButton:'.swiper-button-prev',
        nextButton:'.swiper-button-next',


    })
})


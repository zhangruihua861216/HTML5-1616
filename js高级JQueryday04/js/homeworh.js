
$.fn.extend({
Big : function(options){
  var defaults = {
   widthMul : 1,
   heightMul : 1,
   solider : 1
  }
  var _default = $.extend({},defaults,options);
  var solider;
  $(this).children("#minWrap").children("img").each(function(m,n){
   var width = $(n).width(),//小框宽高
    height = $(n).height(),
    maxWidth = _default.widthMul * width,//大框宽高
    maxHeight = _default.heightMul * height,
    soliderWidth = width * _default.solider,//滑块宽高
    soliderHeight = height * _default.solider;
   //小图边框
   var minWrap = $(n).wrap("<div/>").parent("div");
   //大图边框
   var maxWrap = $("#maxWrap").find("img").eq(m).wrap("<div/>").parent("div");
   //小框样式
   minWrap.css({
    border : "1px solid #000",
    borderRadius : 4,
    width : width,
    marginLeft : 700,
    height : height,
    display : "inline-block"
   }).mouseenter(function(){
    solider = $("<div/>").css({
     position : "absolute",
     left : 0,
     top : 0,
     background : "rgba(123,123,233,0.5)",
     width : soliderWidth,
     height : soliderHeight,
     display : "none"
    });
    minWrap.append(solider);
   })
   minWrap.mousemove(function(ev){
    maxWrap.show();
    var Left = this.offsetLeft,
     Top = this.offsetTop;
    var x = ev.clientX,//鼠标x方向
     y = ev.clientY;//鼠标y方向
    
    var maxX = Left + minWrap.width() - soliderWidth/2,
     minX = Left + soliderWidth/2,
     maxY = Top + minWrap.height() - soliderHeight/2 - $("body").scrollTop(),
     minY = Top + soliderHeight/2 - $("body").scrollTop();
    if (x>maxX) {
     x = maxX;
    };
    if (x<minX) {
     x = minX;
    };
    if (y>maxY) {
     y = maxY;
    };
    if (y<minY) {
     y = minY;
    };
    // console.log(x);
    solider.css({
     left : x - soliderWidth/2,
     top : y - soliderHeight/2 +　$("body").scrollTop()
    }).show();
    var sx = (x - Left) / (minWrap.width()),
     sy = (y - Top) / (minWrap.height());
    maxWrap.scrollLeft(sx * maxWrap.width());
    maxWrap.scrollTop(sy * maxWrap.height());
   }).mouseleave(function(){
    solider.hide();
    maxWrap.hide();
    solider.get(0).parentNode.removeChild(solider.get(0));
   });
    var left = $(n).parent("div")[0].offsetLeft,
             top = $(n).parent("div")[0].offsetTop;
             if (left + maxWidth + minWrap.width() >= w()){
              left -=  maxWidth +width ;
             }
             if (top + maxHeight  >= window.innerHeight) {
              top -=  maxHeight - $(n).outerHeight();
             }
   maxWrap.css({
             display: "none",
       width: maxWidth,
       height: maxHeight,
       border : "1px solid #000",
       position: "absolute",
       left: width + left,
       top: top,
       overflow: "hidden",
              borderRadius :"4px"
         });
  })
  
}
})
function w(){
return document.body.width||document.documentElement.width||window.innerWidth;
}
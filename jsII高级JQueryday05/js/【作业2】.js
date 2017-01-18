$.fn.extend({
	dialog:function(options){
		var _private={
			init:function(){
				//这里构建表现内容，也就是上午学的那些

			return this.each(function(){
			var _defaults={
					'width':480,
					'height':180,
					'border':'1px solid #f18053',
					'margin':'0px auto',
					'background':'#fff',
					'line-height':2,
					'padding-left':5,
			}
			$.extend(_defaults,options);			
				$(this).css({
					width:_defaults.width,
					height:_defaults.height,
					border:_defaults.border,
					margin:_defaults.margin,
					background:_defaults.background,
					'line-height':_defaults['line-height'],
					'padding-left':_defaults['padding-left']
				}).show();
			})
		}
     }
		var methods={
			show:function(){
				console.log("显示");
			},
			setContent:function(_html){
				console.log(this);
				console.log(_html);
				this.html(_html);
			}
		}
		if(methods[arguments[0]]){
			console.log("你也许是调用了方法");
	        methods[arguments[0]].apply(this,Array.prototype.slice.call(arguments,1))
		}else if(typeof arguments[0]=="object"){
			console.log("你肯定是在初始化");
			 return _private.init.call(this);
		}else{
			console.log("不支持");
		}
	}
})
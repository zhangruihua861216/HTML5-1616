$.fn.extend({
	dialog:function(){
		var _private={
			init:function(){
				//这里构建表现内容，也就是上午学的那些
//				console.log(el);
//				el.css({
//					width:100,
//					height:100,
//					background:red,
//				})
//			}
			
			return this.each(function(){
				$(this).css({
					width:100,
					height:100,
					background:"red",
				}).show();
			})
		}
     }
		var methods={
			show:function(){
				console.log("显示");
			},
			setContent:function(_html){
//				div.html(_html);
				console.log(this);
				console.log(_html);
				this.html(_html);
			}
		}
//		console.log(arguments);
//		call()
		if(methods[arguments[0]]){
			console.log("你也许是调用了方法");
			console.log(arguments);
	//      methods[arguments[0]](arguments)
	//      methods[arguments[0]]();
	//      slice()
	//      methods[arguments[0]](Array.prototype.slice.call(arguments,1))
	        methods[arguments[0]].apply(this,Array.prototype.slice.call(arguments,1))
//			methods.show();
		}else if(typeof arguments[0]=="object"){
			console.log("你肯定是在初始化");
			 return _private.init.call(this);
		}else{
			console.log("不支持");
		}
	}
})
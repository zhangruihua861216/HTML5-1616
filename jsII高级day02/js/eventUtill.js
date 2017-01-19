var eventUtill={
	addEventHandler:function (element,eventName,handler){
		if(element.addEventListener){
			element.addEventListener(eventName,handler,false);
		}else if(element.attachEvent){
			element.attachEvent("on"+eventName,handler);
		}else{
			//odiv.onclick=fun;
			element["on"+eventName]=handler;
		}
	},
	deleteEventHandler:function (element,eventName,handler){
		if(element.removeEventListener){
			element.removeEventListener(eventName,handler,false);
		}else if(element.detachEvent){
			element.detachEvent("on"+eventName,handler)
		}else {
			element["on"+eventName]=null;
		}
	},
	stopBubble:function (e){
		if(e.stopPropagation){
			e.stopPropagation();
		}else{
			e.cancelBubble=true;
		}
	},
	stopDefault:function(e){
		if(e.preventDefault){
			e.preventDefault()
		}else{
			e.returnValue=false;
		}
	},
	//获取事件对象
	getEvent:function(e){
		return e||window.event;
	},
	//获取处理事件的目标元素
	getTarget:function(event){
		return event.target||event.srcElement;
	}
//面向对象特点：抽象、封装、继承、多态
	
	
}


	//轮播图滚动
	var slide=document.querySelector(".slide");
	var Imgslide=document.querySelectorAll(".slide img")[0];
	var ImgslideClone=Imgslide.cloneNode(true);
		ImgslideClone.style.left=Imgslide.offsetWidth+'px';
		slide.appendChild(ImgslideClone);
	var logo=document.querySelector(".logo");
	var oImg=document.querySelectorAll("#logo_bird")[0];
	var imgArr=["img/bird0.png","img/bird1.png"];
	var imgArrDown=["img/down_bird0.png","img/down_bird1.png"];
	var imgArrUp=["img/up_bird0.png","img/up_bird1.png"];
	var index=1;
	var startTimer=setInterval(move,30);	
	var speed=1;
	var game=document.querySelector(".game");	
	var score=0;
	function move(){		
		//bird 翅膀闪动
		birdFly(oImg,imgArr);		
		//logo 移动
	    logo.style.top=logo.offsetTop-speed+"px";
	    if(logo.offsetTop<80||logo.offsetTop>130){
	    	speed=-speed;
	    }
	}
	// 小鸟飞 翅膀动
	function birdFly(obj,imgArr){
		obj.src=imgArr[index];
		index++;		
		if(index==imgArr.length){
			index=0;
		}		
	}	
// 传送带移动	
    var slidetimer=setInterval(slideMove,30);	
	function slideMove(){
		Imgslide.style.left=Imgslide.offsetLeft-1+"px";
		ImgslideClone.style.left=ImgslideClone.offsetLeft-1+"px";
		
		if(Imgslide.offsetLeft<=-Imgslide.offsetWidth){
			Imgslide.style.left=ImgslideClone.offsetWidth+"px";
		}
		if(ImgslideClone.offsetLeft<=-ImgslideClone.offsetWidth){
			ImgslideClone.style.left=Imgslide.offsetWidth+"px";
		}		
	}
	
	// 游戏开始
	
	var startBtn=document.querySelector(".start");
	var bird=document.getElementById("bird");
	eventUtill.addEventHandler(startBtn,"click",function(){
		logo.style.display="none";
		startBtn.style.display="none";
		game.style.display="block";
		//停止开始界面的定时器
		clearInterval(startTimer);
		startGame();//开始游戏
		

	})
	
function startGame(){
	gameMusic.play();//播放背景音乐
	createPipe();//创建管道
	// 过2秒小鸟开始下坠
	setTimeout(function(){		  
		   bird.downTimer=setInterval(Down,200);
		},2000);
	freshScore();
	var collisionTimer=setInterval(collision,30);
}
var scoreDiv=document.getElementById("score");
var myScore=document.getElementById("myScore");
var best=document.getElementById("best");
function freshScore(){
	//显示分数div
	scoreDiv.innerHTML="";
	//把分数 numer类型-->string类型
	console.log(score);
	var scoreStr=score.toString();
	console.log(scoreStr);
	for(var  i=0;i<scoreStr.length;i++){
		scoreDiv.innerHTML+="<img src='img/"+scoreStr[i]+".jpg'/>";
	}
}

function saveScore(){
	//上一次的最高分
	//第一次获取 最高分  获取到的是null
	var preScore=window.localStorage.getItem("flappy1");
	myScore.innerHTML=score;
	if(preScore<score){
		window.localStorage.setItem("flappy1",score);
		best.innerHTML=score;
	}else{
		best.innerHTML=preScore;
	}
	
}

//小鸟上下移动
var birdspeed=0;
var maxSpeed = 8;
    function Up(){
    	birdFly(bird,imgArrUp);
	   	birdspeed--;
	   	bird.style.top=bird.offsetTop-birdspeed+"px";
	 	if (birdspeed<=0) {
			clearInterval(bird.upTimer);
			birdspeed=0;
			bird.downTimer=setInterval(Down,200);
		}
		if(bird.offsetTop+bird.offsetHeight<=30) {			 
			//游戏结束
			clearInterval(bird.upTimer);
			gameOver();		
		}   
    }
	function Down(){
		birdFly(bird,imgArrDown);
		birdspeed++;		
		if (birdspeed>=maxSpeed) {
			birdspeed = maxSpeed;
		};
		bird.style.top=bird.offsetTop+birdspeed+"px";
		if(bird.offsetTop+bird.offsetHeight>=424){
			clearInterval(bird.downTimer);
			gameOver();
		}
	}	
	 game.onclick=function(){
	 	bulletMusic.play();
	 	clearInterval(bird.downTimer);
	 	clearInterval(bird.upTimer);
		birdspeed = 8;
		bird.upTimer = setInterval(Up,30);	 	
	 }	
	
	
	//柱子	
	function createPipe(){
		createPipeTimer = setInterval(function(){
			var ul=document.createElement("ul");
			game.appendChild(ul);		
			var liUp=document.createElement("li");
			ul.appendChild(liUp);		
			liUp.setAttribute("class","up_mod");
			var imgUp=document.createElement("img");
			imgUp.setAttribute("src","img/up_pipe.png");
			liUp.appendChild(imgUp);
			var liDown=document.createElement("li");
			liDown.setAttribute("class","down_mod");
			ul.appendChild(liDown);
			var imgDown=document.createElement("img");
			imgDown.setAttribute("src","img/down_pipe.png");
			liDown.appendChild(imgDown);
			var liUpHeight=parseInt(Math.random()*(250-32)+32)
			liUp.style.height=liUpHeight+"px";
			console.log(liUpHeight);
			imgUp.style.top=liUpHeight-60+"px";
			console.log(imgUp.style.top)
			liDown.style.height=ul.offsetHeight-parseInt(liUp.style.height)-120+"px";
		 	var addScore = true;
		 	function ulMove(oul){
		 		oul.timer = setInterval(pipeMove,30);
		 		function pipeMove(){
			 		if(oul.offsetLeft<-oul.offsetWidth*2){
			 			oul.remove();
			 			clearInterval(oul.timer);
			 		}
			 		//加分 一根水管  只能加一分   使用addScore进行判断
			 		if(addScore&&oul.offsetLeft<=5){
			 			addScore=false;
			 			score++;
			 			freshScore();
			 		}
			 		oul.style.left = oul.offsetLeft-2+"px";
			    }
		 	}	 	
		 	ulMove(ul);
		 	
	 	
		},3000) 	
	}

			
/***************检测碰撞***********/

function collision(){
	//获取所有ul
	var pipeUl_lis_arr=document.getElementsByTagName("ul");
//	console.log(pipeUl_lis_arr);
	//遍历ul中的li 中的上管道  下管道 与鸟 进行碰撞检测
	for(var i=0;i<pipeUl_lis_arr.length;i++){
		if(crash(bird,pipeUl_lis_arr[i].firstChild)||crash(bird,pipeUl_lis_arr[i].lastChild)){
			console.log("gameover+碰撞啦");
			gameOver();
		}
	}
}

function crash(div1,div2){

	var l1=div1.offsetLeft;
	var w1=div1.offsetWidth;
	var t1=div1.offsetTop;
	var h1=div1.offsetHeight;
	//注意 此处应该获取div的父节点li的offsetLeft
	
	var l2=div2.parentNode.offsetLeft;
	var w2=div2.offsetWidth;
	var t2=div2.offsetTop;
	var h2=div2.offsetHeight;
	if(l1+w1-6<l2||l1-6>l2+w2||t1+h1+5<t2||t1+5>t2+h2){
		return false;
	}else{
		return true;
	}
}


var gameoverDiv=document.getElementById("gameover");
function gameOver(){
	startMusic.pause();
	overMusic.play();
	clearAllTimer();//清楚所有的定时器
	gameoverDiv.style.display = "block";
	gameover.style.zIndex = "200";
	saveScore();
	
};
// 暴力清除
function clearAllTimer(){
	for (var i = 0; i < 1000; i++) {
		clearInterval(i);
	};
}


var okBtn = document.getElementById("ok");
okBtn.onclick=function(){
	window.location.reload();
}

function $(idName){
	return document.getElementById(idName);
}
var startMusic = $("gameMusic");//游戏背景音乐
var overMusic = $("gameOverMusic");//游戏结束的背景音乐
var bulletMusic = $("bullet");//点击时的音效
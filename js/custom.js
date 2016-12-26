/*window.onload=function(){
	var c=document.getElementById("homeCanvas");
	console.log(c);
	var ctx =c.getContext("2d");
	var img=document.getElementById("homeImg");
	ctx.drawImage(img,30,30);
};
$(document).ready(function(){
	
	
	//font color effect.
	$(window).scroll(function(){
		console.log($(".nav-link")[0]);
	});
});
*/
/*
//working on transitions the last time
$(document).ready(function(){
	
	$("#godown, #nav1").click(function(){
		
		scrollTo("#edu");
		eduIn();
	
	});
	//the syntax, wow~~ a lot to learn.
	(function($){
		var scrolled=false;
		var preTop=0;
		var r=5;// FIXIT:scroll don't always work.
		var height=$(window).height();

		var breakPos=0;
		$(function(){
			$(window).scroll(function(){
				console.log("scrolling");
				scrolled=true;
				clearTimeout($.data(this,"scrollCheck"));
				
				$.data(this,"scrollCheck",setTimeout(function(){//stopped
					
					console.log("stopped");
					var curTop=$(window).scrollTop();
					var eduTop=$("#edu").position().top;
					var proTop=$("#project").position().top;
					var workTop=$("#work").position().top;
					console.log("cur:",curTop);
					console.log("pre:",preTop);
					console.log("edu: ",eduTop);
					console.log("pro: ",proTop);
					if(scrolled){
						if(curTop>preTop){//down
							breakPos+=height;
							scrollToPos(breakPos);
						}else{//up
							breakPos-=height;
							scrollToPos(breakPos);
						}
						preTop=curTop;
						scrolled=false;
					}
					/*if(scrolled){
						if(curTop>preTop){//down
							curTop+=r;
							if(curTop<eduTop){//to edu 5 as range?
								scrollTo("#edu");
								eduIn();
							}else if(curTop<proTop){//to pro
								scrollTo("#project");
								eduOut();
							}else if(curTop<workTop){
								scrollTo("#work");
								
							}
							
						}else{//up
						//curTop<=preTop.
								curTop-=r;
								console.log("go up");
								if(curTop>workTop){
									scrollTo("#work");
								}else if(curTop> eduTop){
									scrollTo("#edu");
									eduIn();
								}else if (curTop>0){
									scrollTo("#homeImg");
									eduOut();
								}
								
						}
						preTop=curTop;
					}
					//scrolled=false;//to check the next scroll.
				},250));
			});
		});
	})(jQuery);
	
});

function eduIn(){
	$("#resumeBtn").fadeIn(1500);
	$("#eduText").fadeIn(1500);
}
function eduOut(){
	$("#resumeBtn").fadeOut(1500);
	$("#eduText").fadeOut(1500);
}
function scrollTo(slt){
	$('html,body').animate({
			scrollTop:$(slt).offset().top
		},500);
}
function scrollToPos(pos){
	$('html,body').animate({
			scrollTop:pos
		},500);
}*/

$(document).ready(function(){
	
});

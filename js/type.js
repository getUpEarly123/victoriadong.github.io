$(document).ready(function(){
	//1 millisecond = 0.001 second
	
	/*blink doesn't work 
	var support = $.keyframe.isSupported();
	$.keyframe.debug = true;
	
	$.keyframe.define([{
		name: 'blinkcreat',
		'0%':{'border-color': 'transparent'},
		'50%': {'border-color':'orange'},
		'100%':{'border-color': 'transparent'}
	},{
		name: 'typing',
		'0%': {'width': '0%'},
		'20%':{'width':'20%'},
		'50%':{'width':'20%'},
		'100%': {'width':'100%'}
    }]);
	$('.typewriter h1').playKeyframe({
		name:'blinkcreat',
		duration:'.75s',
		timingFunction:'step-end',
		iterationCount:'infinite'
	});
	$(".typewriter h1").playKeyframe([
		'typing 1s steps(30,end)'		
	]);*/
	if ($(window).width()/$(window).height() >4/3){
		console.log("called?");
	setTimeout(function(){
		$(".sentence").text("I love coding and have a great passion");
		if ($(window).width()/$(window).height() <4/3){
			$(".typecontainer").css('cssText','width : 20em !important');
		}else{
			$(".typecontainer").width('40em');
		}
		setTimeout(function(){
			$(".typecontainer > div").removeClass("sentence");
			//$(".typecontainer").css("margin-top","-=4ex");
			$(".typecontainer").append("<div class='s2wrapper'></div>");
			
			$(".s2wrapper").append("<div class='sentence2'>on technologies</div>");
			setTimeout(function(){
				
				$(".typecontainer").empty();
				$(".typecontainer").append("<div class='s3wrapper'></div>");
				$(".s3wrapper").append("<div class='sentence3'>Welcome To My Home Page!</div>");

			},2500);
			
		},2500);
		
	},2500);
	
	}
});
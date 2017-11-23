
$(document).ready(function(){
	var onpage=0;
	
	//$(".dog").css("display","none");
	setTimeout(function(){
		console.log("type ended");
		$("#main-type").css("display","none");
		$(".container").removeClass("container").addClass("container-fluid");
		$("#main-nav").css("display","block");
		createDog();
	},10100);
	/******* main-nav ****************/ 
	//console.log($("#main-page").css("display"));
	$(".c1").click(function(){
		$("#main-nav").css({"display":"none"});
		$(".dog").css("display","none");
		$("#main-page").css("display","block");
		displayAbout();

	});
	$(".c2").click(function(){
		$("#main-nav").css({"display":"none"});
		$(".dog").css("display","none");
		$("#main-page").css("display","block");
		displayExperience();
	
	});
	$(".c3").click(function(){
		$("#main-nav").css({"display":"none"});
		$(".dog").css("display","none");
		$("#main-page").css("display","block");
		displayProjects();
	
	});
	$(".c4").click(function(){
		$("#main-nav").css({"display":"none"});
		$(".dog").css("display","none");
		$("#main-page").css("display","block");
		displayContact();
		
	});



/********* main-page ****************/
	
	
	 
	$(".nav-about").click(function(){
		displayAbout();
	});
	
	$(".nav-exp").click(function(){
		displayExperience();
	});
	
	$(".nav-proj").click(function(){
		displayProjects();
	});
	
	$(".nav-contact").click(function(){
		displayContact();
	});
	/*proj hover effects
	$(".proj-img").hover(function(){
		$(this).siblings(".proj-des").toggleClass("proj-des-shrink");
		$(this).parent(".proj").toggleClass("proj-gray");
		console.log($(this).parent(".proj"));
	});
	
	
	$(".proj-des").mouseenter(function(){
		$(this).children(".proj-des-extend").css("display","inline");
		//console.log($(this).child(".proj-des-extend"));
	});
	$(".proj-des").mouseleave(function(){
		$(this).children(".proj-des-extend").css("display","none");
	});*/
	
	//hamburger click
	var display_nav=true;
	$("#hamburger").click(function(){		
		$("#about").toggleClass("transform");
		$("#exp").toggleClass("transform");
		$("#contact").toggleClass("transform");
		$("#proj").toggleClass("transform-proj");
		$("#main-page").toggleClass("transform-main-page");
		if(display_nav){
			$(".dropdown").css({"width":"60em","opacity":"1","margin-left":"-4.5vw"});
			$(".burger").removeClass("glyphicon glyphicon-menu-hamburger").addClass("glyphicon glyphicon-remove");
			display_nav=false;
			
		}else{
			burger_back();
		}
	});
	var burger_back=function(){
		$(".dropdown").css({"width":"0","opacity":"0","margin-left":"5vw"});
			display_nav=true;
			$(".burger").removeClass("glyphicon glyphicon-remove").addClass("glyphicon glyphicon-menu-hamburger");
			
			var margin_back=function(){
				$(".dropdown").css({"margin-left":"0"});
			}
			setTimeout(margin_back,1000);
	}
	$(window).resize(function(){
		
		maxH("#store");
		maxH("#sysManager");
		maxH("#cdTree");
		
		//if($(window).width()>830){
		if ($(window).width()/$(window).height() <1){
			$("#about").removeClass("transform");
			$("#exp").removeClass("transform");
			$("#contact").removeClass("transform");
			$("#proj").removeClass("transform-proj");
			$("#main-page").removeClass("transform-main-page");
			burger_back();
		}else{
			if(!display_nav){
				$("#about").addClass("transform");
				$("#exp").addClass("transform");
				$("#contact").addClass("transform");
				$("#proj").addClass("transform-proj");
				$("#main-page").addClass("transform-main-page");
				
			}
		}
	});

	
	$("video")[0].onplay = function(){
		//if ($(window).width()>830){
		if ($(window).width()/$(window).height() >1){
			console.log($(window).width());
			console.log("video clicked");
			console.log($("#chat-body").css("display"));
			$("#chat-body").css("display","none");	
			$(".chat-x").css("display","inline-block");
			$(".proj-video").css("margin-left","10em");
			$(".proj-video").css("margin-right","10em");
		}
	}
	$(".chat-x").click(function(){
	//	if ($(window).width()>830){
		if ($(window).width()/$(window).height() >1){
			$("video")[0].pause();
		
			$("#chat-body").css("display","block");
			$(".chat-x").css("display","none");
			$(".proj-video").css("margin-left","0em");
			$(".proj-video").css("margin-right","0em");
		}
	});
	
});
function displayAbout(){
		$("#exp").css("display","none");
		$("#proj").css("display","none");
		$("#contact").css("display","none");
		$("#about").css("display","block");
		$("body").scrollTop(0);
		console.log("clicked");
}

function displayExperience(){
		$("#about").css("display","none");
		$("#proj").css("display","none");
		$("#contact").css("display","none");		
		$("#exp").css("display","block");
		$("body").scrollTop(0);
		console.log("exp-clicked");
}
function displayProjects(){
	$("#about").css("display","none");
		$("#exp").css("display","none");
		$("#contact").css("display","none");
		$("#proj").css("display","block");
		$(window).scrollTop(0);
		console.log("clicked");

		maxH("#sysManager");
		maxH("#store");
		maxH("#cdTree");

}
function displayContact(){
	$("#about").css("display","none");
		$("#exp").css("display","none");
		$("#proj").css("display","none");
		$("#contact").css("display","block");
		$(window).scrollTop(0);
		console.log("clicked");
}


function maxH(ele){
	$(ele).height($(ele+" img")[0].clientHeight);
}




function createDog(){
			var scene, carmera, renderer,controls;
			var bird,mousePos = {x:0,y:0};
			var windowHalfX,windowHalfY;
			var head;
			
			function init(){
				//scene
				scene = new THREE.Scene();
				var WIDTH = window.innerWidth;
				var HEIGHT = window.innerHeight;
				//renderer
				
				renderer = new THREE.WebGLRenderer({antialias:true});
				renderer.setClearColor(0xF1F1F1,1);
				renderer.setSize(WIDTH/3,HEIGHT/3);	
				var div = document.createElement("div");
				div.className = "dog";
				//var div = document.getElementsByClassName("dog"); // doesn't work
				//var div=document.getElementById("dog");
				//console.log(document);
				console.log(div);
				div.appendChild(renderer.domElement);
				document.body.appendChild(div);
				//camera
				camera = new THREE.PerspectiveCamera(45,WIDTH/HEIGHT, 0.1,2000);
				camera.position.set(0,500,0);
				scene.add(camera);
				//window resize	
				window.addEventListener('resize',function(){
					var WIDTH = window.innerWidth;
					var HEIGHT = window.innerHeight;
					renderer.setSize(WIDTH/3,HEIGHT/3);
					camera.aspect = WIDTH/HEIGHT;
					camera.updateProjectionMatrix();
				});
			
				
				//light
				createLights();
				controls = new THREE.OrbitControls(camera, renderer.domElement);
				
				windowHalfX = WIDTH/2;
				windowHalfY = HEIGHT/2;
				document.addEventListener('mousemove',handleMouseMove,false);
				
			}	
			function createLights(){
				light = new THREE.HemisphereLight(0xffffff, 0xffffff, .5)
  
				shadowLight = new THREE.DirectionalLight(0xffffff, .8);
				shadowLight.position.set(200, 200, 200);
				shadowLight.castShadow = true;
				shadowLight.shadowDarkness = .2;
 	
				backLight = new THREE.DirectionalLight(0xffffff, .4);
				backLight.position.set(-100, 200, 50);
				backLight.shadowDarkness = .1;
				backLight.castShadow = true;
 	
				scene.add(backLight);
				scene.add(light);
				scene.add(shadowLight);
			}
			
			function animate(){
				requestAnimationFrame(animate);
				renderer.render(scene,camera);
				controls.update();			
			}
		

			Body = function (){
				this.threegroup = new THREE.Group();
				this.bodyInitPositions=[];
				this.yellowMat = new THREE.MeshLambertMaterial({
					color: 0xA3754F,
					shading: THREE.FlatShading
				});
				
				//body
				
				var bodyGeom = new THREE.CylinderGeometry(20,35,70,4);
				this.body = new THREE.Mesh(bodyGeom, this.yellowMat);
				this.vertices = [0,1,2,3,4];
				this.bodyVerticesLength = (4+1)*1;
				for (var i=0;i<this.bodyVerticesLength; i++){
					var tv = this.body.geometry.vertices[i];
					this.bodyInitPositions.push({x:tv.x, y:tv.y, z:tv.z});
				}
				this.threegroup.add(this.body);
				
				//knee
				var kneeGeom = new THREE.BoxGeometry(25,45,25);
				kneeGeom.applyMatrix( new THREE.Matrix4().makeTranslation( 0, 50, 0 ) );
				this.leftKnee = new THREE.Mesh(kneeGeom,this.yellowMat);
				this.leftKnee.position.x = 30;
				this.leftKnee.position.y = -60;
				this.leftKnee.position.z = -5;
				this.leftKnee.rotation.z = -.3;
				this.threegroup.add(this.leftKnee);
			
				
				this.rightKnee = new THREE.Mesh(kneeGeom,this.yellowMat);
				this.rightKnee.position.x = -30;
				this.rightKnee.position.y = -60;
				this.rightKnee.position.z = -5;
				this.rightKnee.rotation.z = .3;
				this.threegroup.add(this.rightKnee);
				
				//feet
				var footGeom = new THREE.BoxGeometry(25,15,15);
				this.foot1 = new THREE.Mesh(footGeom,this.yellowMat);
				this.foot1.position.x = 40;
				this.foot1.position.y = -30;
				this.foot1.position.z = 15;
				this.threegroup.add(this.foot1);
				this.foot2 = new THREE.Mesh(footGeom,this.yellowMat);
				this.foot2.position.x = -40;
				this.foot2.position.y = -30;
				this.foot2.position.z = 15;
				this.threegroup.add(this.foot2);
				
				this.foot3 = new THREE.Mesh(footGeom,this.yellowMat);
				this.foot3.position.x = 15;
				this.foot3.position.y = -30;
				this.foot3.position.z = 30;
				this.threegroup.add(this.foot3);
				
				this.foot3 = new THREE.Mesh(footGeom,this.yellowMat);
				this.foot3.position.x = -15;
				this.foot3.position.y = -30;
				this.foot3.position.z = 30;
				this.threegroup.add(this.foot3);
				
			}
			
			Body.prototype.look = function(xTarget,yTarget){
				this.tRightKneeRotZ = rule3(xTarget, -200, 200, .3-Math.PI/8, .3+Math.PI/8);
				this.tLeftKneeRotZ = rule3(xTarget, -200, 200, -.3-Math.PI/8, -.3+Math.PI/8);
				
				this.updateBody(10);
				this.body.geometry.verticesNeedUpdate = true;
				for (var i=0; i<this.vertices.length; i++){
					var tvInit = this.bodyInitPositions[i];
					var tv = this.body.geometry.vertices[this.vertices[i]];
					tv.x = tvInit.x + head.position.x;
					
				}
				
				
			}
			Body.prototype.updateBody = function(speed){
				this.rightKnee.rotation.z += (this.tRightKneeRotZ - this.rightKnee.rotation.z) / speed;
				this.leftKnee.rotation.z += (this.tLeftKneeRotZ - this.leftKnee.rotation.z) / speed;
			
			}
			
			/*
			Bird.prototype.look = function(hAngle,vAngle){
				this.hAngle = hAngle;
				this.vAngle = vAngle;
				
				for (var i=0;i<this.bodyVerticesLength; i++){
					var line = Math.floor(i/(this.rSegments+1));
					var tv = this.bodyBird.geometry.vertices[i];
					var tvInitPos = this.bodyBirdInitPositions[i];
					var a, dy;
					if (line >= this.hSegments-1){
						a = 0;
					}else{
						a = this.hAngle/(line+1); 
					}
					var tx = tvInitPos.x*Math.cos(a) + tvInitPos.z*Math.sin(a);
					var tz = -tvInitPos.x*Math.sin(a) + tvInitPos.z*Math.cos(a);
					tv.x = tx;
					tv.z = tz;
				}
				this.bodyBird.geometry.verticesNeedUpdate = true;
				
			}
			*/
			
			Dog = function(){
				this.threegroup = new THREE.Group();
				this.head = new THREE.Group();
				head = this.head;
				this.yellowMat = new THREE.MeshLambertMaterial({
					color: 0xA3754F,
					shading: THREE.FlatShading
				});
				this.blackMat = new THREE.MeshLambertMaterial({
					color: 0x000000,
					shading: THREE.FlatShading
				})
				this.whiteMat = new THREE.MeshLambertMaterial({
					color: 0xffffff,
					shading: THREE.FlatShading
				})
				//face
				var faceGeom = new THREE.BoxGeometry(60,60,60);
				this.face= new THREE.Mesh(faceGeom, this.yellowMat);
				this.face.position.y=65;
				this.head.add(this.face);
				//nose
				var noseGeom = new THREE.BoxGeometry(40,30,30);
				this.nose = new THREE.Mesh(noseGeom, this.yellowMat);
				this.nose.position.y=55;
				this.nose.position.z=40;
				this.head.add(this.nose);
				
				//nose2
				var nose2Geom = new THREE.TorusGeometry(3,3);
				this.nose2 = new THREE.Mesh(nose2Geom,this.blackMat);
				this.nose2.position.y=60;
				this.nose2.position.z=55;
				this.head.add(this.nose2);
				
				//left eye
				var leyeGeom = new THREE.BoxGeometry(15,15,5);
				this.leye = new THREE.Mesh(leyeGeom,this.whiteMat);
				this.leye.position.y =77;
				this.leye.position.z = 30;
				this.leye.position.x = -15;
				this.head.add(this.leye);
				
				var lirisGeom = new THREE.BoxGeometry(7,7,5);
				this.liris = new THREE.Mesh(lirisGeom,this.blackMat);
				this.liris.position.y = 75;
				this.liris.position.z =31;
				this.liris.position.x = -15;
				this.head.add(this.liris);
				
				//left eye
				var reyeGeom = new THREE.BoxGeometry(15,15,5);
				this.reye = new THREE.Mesh(leyeGeom,this.whiteMat);
				this.reye.position.y =77;
				this.reye.position.z = 30;
				this.reye.position.x = 15;
				this.head.add(this.reye);
				
				var ririsGeom = new THREE.BoxGeometry(7,7,5);
				this.riris = new THREE.Mesh(lirisGeom,this.blackMat);
				this.riris.position.y = 75;
				this.riris.position.z =31;
				this.riris.position.x = 15;
				this.head.add(this.riris);
				
				
				
				//mustache
				var mustacheGeom = new THREE.BoxGeometry(1,1,1);
				//mustacheGeom.applyMatrix(new THREE.Matrix4().makeTranslation(15,0,0));
				this.mustache1=new THREE.Mesh(mustacheGeom,this.blackMat);
				this.mustache1.position.z = 55;
				this.mustache1.position.y = 55;
				this.mustache1.position.x = 15;
				this.mustache1.rotation.z = .2;
				this.head.add(this.mustache1);
				
				this.mustache2=new THREE.Mesh(mustacheGeom,this.blackMat);
				this.mustache2.position.z = 55;
				this.mustache2.position.y = 55;
				this.mustache2.position.x = 10;
				this.mustache2.rotation.z = .2;
				this.head.add(this.mustache2);
				
				this.mustache3=new THREE.Mesh(mustacheGeom,this.blackMat);
				this.mustache3.position.z = 55;
				this.mustache3.position.y = 50;
				this.mustache3.position.x = 10;
				this.mustache3.rotation.z = .2;
				this.head.add(this.mustache3);
				
				this.mustache4=new THREE.Mesh(mustacheGeom,this.blackMat);
				this.mustache4.position.z = 55;
				this.mustache4.position.y = 50;
				this.mustache4.position.x = 15;
				this.mustache4.rotation.z = .2;
				this.head.add(this.mustache4);
				
				this.mustache5=new THREE.Mesh(mustacheGeom,this.blackMat);
				this.mustache5.position.z = 55;
				this.mustache5.position.y = 50;
				this.mustache5.position.x = -15;
				this.head.add(this.mustache5);
				
				this.mustache6=new THREE.Mesh(mustacheGeom,this.blackMat);
				this.mustache6.position.z = 55;
				this.mustache6.position.y = 50;
				this.mustache6.position.x = -10;
				this.head.add(this.mustache6);
				
				this.mustache7=new THREE.Mesh(mustacheGeom,this.blackMat);
				this.mustache7.position.z = 55;
				this.mustache7.position.y = 55;
				this.mustache7.position.x = -15;
				this.head.add(this.mustache7);
				
				this.mustache8=new THREE.Mesh(mustacheGeom,this.blackMat);
				this.mustache8.position.z = 55;
				this.mustache8.position.y = 55;
				this.mustache8.position.x = -10;
				this.head.add(this.mustache8);
				
				//ear
				var earGeom = new THREE.CylinderGeometry(25,25,5,3);
				this.lear = new THREE.Mesh(earGeom,this.yellowMat);
				this.lear.position.x=-40;
				this.lear.position.y=80;
				this.lear.rotation.z=.5;
				this.head.add(this.lear);
				
				this.lear = new THREE.Mesh(earGeom,this.yellowMat);
				this.lear.position.x=40;
				this.lear.position.y=80;
				this.lear.rotation.z=-.5;
				this.head.add(this.lear);
				
				//mouth
				var mouthGeom = new THREE.TorusGeometry(2,15);
				this.mouth = new THREE.Mesh(mouthGeom,this.blackMat);
				this.mouth.position.z = 55;
				this.mouth.position.y = 55;
				this.mouth.position.x = 10;
				//this.head.add(this.mouth);
				
				this.threegroup.add(this.head);
				
			}
			
			
			Dog.prototype.look = function(xTarget,yTarget){

				this.tHeagRotY = rule3(xTarget, -50, 50, -Math.PI/4, Math.PI/4);
				this.tHeadRotX = rule3(yTarget, -50,50, -Math.PI/4, Math.PI/4);
				this.tHeadPosX = rule3(xTarget, -50, 50, 17.5,-17.5);
				this.tHeadPosY = rule3(yTarget, -35, 65, 5, 25);
				this.tHeadPosZ = 30;
				this.updateBody(10);
			}
			Dog.prototype.updateBody = function(speed){
				this.head.rotation.y += (this.tHeagRotY - this.head.rotation.y) / speed;
				this.head.rotation.x += (this.tHeadRotX - this.head.rotation.x) / speed;
				this.head.position.x += (this.tHeadPosX-this.head.position.x) / speed; 
				this.head.position.y += (this.tHeadPosY-this.head.position.y) / speed; 
				this.head.position.z += (this.tHeadPosZ-this.head.position.z) / speed; 
			}
			
			function loop(){
				/*
				var tempHA = (mousePos.x-windowHalfX)/200;
				var tempVA = (mousePos.y - windowHalfY)/200;
				var userHAngle = Math.min(Math.max(tempHA, -Math.PI/3), Math.PI/3);
				var userVAngle = Math.min(Math.max(tempVA, -Math.PI/3), Math.PI/3);
				bird.look(userHAngle,userVAngle);
				*/
				var xTarget = (mousePos.x-windowHalfX);
				var yTarget= (mousePos.y-windowHalfY);
				dog.look(xTarget,yTarget);
				body.look(xTarget,yTarget);
				requestAnimationFrame(loop);
			}
			function handleMouseMove(event){
				mousePos = {x:event.clientX, y:event.clientY};
				/*console.log('x:',mousePos.x);
				console.log('y',mousePos.y);*/
			}
			function scale(){
				var mat = new THREE.LineBasicMaterial({
					color: 0xffffff
				});
				var geo1 = new THREE.Geometry();
				geo1.vertices.push(
					new THREE.Vector3(0,0,0),
					new THREE.Vector3(0,500,0)
				)
				var line1 = new THREE.Line(geo1,mat);
				
				var geo2 = new THREE.Geometry();
				geo2.vertices.push(
					new THREE.Vector3(0,0,0),
					new THREE.Vector3(500,0,0)
				)
				var line2 = new THREE.Line(geo2,mat);
				
				var geo3 = new THREE.Geometry();
				geo3.vertices.push(
					new THREE.Vector3(0,0,0),
					new THREE.Vector3(0,0,500)
				)
				var line3 = new THREE.Line(geo3,mat);
				
				scene.add(line1);
				scene.add(line2);
				scene.add(line3);
			}
			/*
			function createBird(){
				bird= new Bird();
				scene.add(bird.threegroup);
			}
			*/
			function createDog(){
				dog = new Dog();
				body = new Body();
				d = new THREE.Group();
				d.add(dog.threegroup);
				d.add(body.threegroup);
				d.rotation.x=-1;
				d.scale.set(1.7,1.7,1.7);
				d.position.z=20;
				scene.add(d);
			}
			
			
			function rule3(v,vmin,vmax,tmin, tmax){
				var nv = Math.max(Math.min(v,vmax), vmin);
				var dv = vmax-vmin;
				var pc = (nv-vmin)/dv;
				var dt = tmax-tmin;
				var tv = tmin + (pc*dt);
				return tv;
  
			}
			
			init();
			animate();		
	
			createDog();
			loop();
			//scale();
}



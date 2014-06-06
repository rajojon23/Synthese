var alphabets = new Array();
var spriteList = new Array();
var textIdList = new Array();
var textList = new Array();
var ennemyList = new Array();
var textArray = new Array();
var bulletList = new Array();

var textDirections = new Array();
var posX = new Array();
var ennemyCount = 2;

var life = 50;
var point = 0;

/*PROBLEMES A REGLER:
-	Attribuer un ennemy avec un texte
-	Possibiliter d'ajouter et de bouger plusieurs ennemies
-	Possibiliter de tirer plusieurs balles
-	Possibiliter de bien viser les balles (direction diagonal)
-	Positionner le texte à l'ennemy respectif, toujours au centre 
-	Locker sur le texte ou la premiere lettre commence par la premiere lettre taper
-	Supprimer l'ennemi quand le texte lui correspondant a ete taper correctement
-	Objectifier les textes pour faciliter leur modification
-	Perfectionner le statut de pause
-	Possibliter de supprimer l'ennemi dans n'importe quel niveau
-	Separer encore mieux les css
-	Possibiliter pour l'ennemi de se diriger vers gx
-	Possibliter pour l'ennemi d'attendre que la balle lui touche avant de mourir
-	Faire en sorte que l'ennemi disparaisse lorsque la derniere balle l'a touché
-	Faire en sorte qu'on puisse supprimer un ennemi meme si on a passé au prochain 
*/



 // when set to true, the canvas will redraw everything
 // invalidate() just sets this to false right now
 // we want to call invalidate() whenever we make a change
var canvasValid = false;

var timesTyped = -1;//compter le nb de fois que le clavier a ete taper
var errorTimes = 0;
var textDirection ="right";//s'occupera de la direction du texte



var mDirection ="right";
var numberBullets = 0;
var lock = "";
var textPos = 0;
var txt = "";
var posx = 0;//position en x du texte a bouger
var posx1 = 0;
var posx2 = 0;
var En2;
var en;

var textFont = "12px Arial";
var game;
var canvas;
var HEIGHT;
var WIDTH;
var index = 0;//donnera la position ou l'usager est rendu dans le texte
/*
var En1 = new Enemy(30,30,'Enemy2',16,16,2);
*/


//for(var i=0;i<ennemyCount;i++){
/*	ennemyList.push(En1);
	ennemyList.push(En2);*/
//}
var gamePaused = false;



				//ALOGIRTHM
				var white = {
				    r: 255,
				    g: 255,
				    b: 255,
				    a: 0.9
				};
var ctx; 
var img = new Image();
img.src = "images/building.png";
$(document).ready(function () {
	var lifebar = document.getElementById('lifebar');
	var score = document.getElementById('score');



	ctx= document.getElementById('canvas').getContext("2d");
	 canvas = document.getElementById('canvas');
  	HEIGHT = canvas.height;
  	WIDTH = canvas.width;

  	var paper = Raphael(0, 0, WIDTH, 300);

/*  	// Creates circle at x = 50, y = 40, with radius 10
	var circle = paper.circle(50, 40, 10);
	// Sets the fill attribute of the circle to red (#f00)
	circle.attr("fill", "#f00");

	// Sets the stroke attribute of the circle to white
	circle.attr("stroke", "#fff");*/


//FOR LIGHTNING 
	// var lightning = new Lightning(160,100);
	// //faire "nomobjet".path.attr pour changer la couleur de l'objet par raphael
	// lightning.path.attr("fill", "#f00");
	// //faire tourner le lightning
	// lightning.spin();

//FOR STAR
	// var star = new Star(250,100);
	// star.path.attr("fill", "yellow");




	//star.spin();

/*	var spin = Raphael.animation({transform: "r360"}, 2500).repeat(Infinity);
	//var goUp = Raphael.animation({transform: "t360"}, 2500).repeat(Infinity);
	lightning.animate(spin);*/

	/*var lightningSpin = function(){
		lightning.attr({"transform": "r 0"}).animate({"transform": "r 360"}, 2000, lightningSpin);
	}*/


	//moveText();
	//Enemy(x,y,name,w,h,speed,text)
	//*****************ETAPE 1: CREATION ENNEMY ET TEXT***********************

	En2 = new Enemy(WIDTH,60,'Enemy2',16,10,1);
	var En1 = new Enemy(WIDTH,30,'Enemy1',16,16,2);
	var En3 = new Enemy(WIDTH,90,'Enemy3',20,20,0.5);//1.5


	var sthisisatext = new Text(0, "sthisisatext",En1);
	var abracadabra = new Text(0, "abracadabra",En2);
	var ponytail = new Text(0, "ponytail",En3);
	// var lightningText = new Text(0, "lightning",lightning);
	// var starText = new Text(0, "thisisastar",star);


	ennemyList.push(En1);
	ennemyList.push(En2);
	ennemyList.push(En3);

	spriteList.push(En1);
	spriteList.push(En2);
	spriteList.push(En3);

	spriteList.push(sthisisatext);
	spriteList.push(abracadabra);
	spriteList.push(ponytail);

	// spriteList.push(lightningText);
	// textArray.push(lightningText);

	// spriteList.push(starText);
	// textArray.push(starText);

			//*****************ETAPE 2 : AJOUT DU TEXTE***********************
	//moveText(textList[1],En2);//faire bouger le texte

	textArray.push(abracadabra);
	textArray.push(sthisisatext);
	textArray.push(ponytail);


	function loadLevel2(){
			En2 = new Enemy(WIDTH,60,'Enemy4',16,10,1);
			var En1 = new Enemy(WIDTH,30,'Enemy5',16,16,2);
			var En3 = new Enemy(WIDTH,90,'Enemy6',20,20,1.5);


			var sthisisatext = new Text(0, "thisislevel2",En1);
			var abracadabra = new Text(0, "islevel2",En2);
			var ponytail = new Text(0, "thislevel2",En3);
			spriteList.length = 0;
			ennemyList.push(En1);
			ennemyList.push(En2);
			ennemyList.push(En3);


			spriteList.push(En1);
			spriteList.push(En2);
			spriteList.push(En3);

			spriteList.push(sthisisatext);
			spriteList.push(abracadabra);
			spriteList.push(ponytail);


			textArray.push(abracadabra);
			textArray.push(sthisisatext);
			textArray.push(ponytail);

	}
	
	function Lightning(x,y){
		this.x = x;
		this.y = y;
		this.h = 35;
		var p = "m"+this.x+","+this.y+"l-21.760895,23.611115l22.891327,-0.231491l-26,26.620377l24.869568,-50z"


		this.path = paper.path(p);

		var box = this.path.getBBox();
		this.width = box.width;
		this.height = box.height;


		this.spin = function (){
			var spin = Raphael.animation({transform: "r360"}, 2500).repeat(Infinity);
			//var goUp = Raphael.animation({transform: "t360"}, 2500).repeat(Infinity);
			this.path.animate(spin);
		}
	}

	function Star(x,y){
		this.x = x;
		this.y = y;
		this.h = 35;
		var p = "m"+this.x+","+this.y+",0 4.4313,8.92902 4.91705,9.2876c0.48575,0.35858 10.02731,1.30127 10.21286,1.88147c0.18555,0.5802 -6.98843,7.04129 -7.17395,7.62149c-0.18555,0.5802 1.88058,10.09183 1.39484,10.45038c-0.48575,0.35858 -8.7504,-4.57721 -9.3508,-4.57721c-0.6004,0 -8.86505,4.93579 -9.3508,4.57721c-0.48575,-0.35855 1.58038,-9.87018 1.39484,-10.45038c-0.18552,-0.5802 -7.3595,-7.04129 -7.17395,-7.62149c0.18555,-0.5802 9.72711,-1.52289 10.21286,-1.88147c0.48575,-0.35858 4.31665,-9.2876 4.91705,-9.2876z";
		this.path = paper.path(p);
/*		this.path.transform("... s0.1");//rapettisez l'image
		this.path.transform("... t"+this.x+","+this.y);//deplacer a l'endroit voulu*/

		var box = this.path.getBBox();
		var eleWidth = box.width, eleHeight = box.height;
		/*var p = "M 170.000 190.000"+starPath;*///+this.x+" "+this.y+" "
		this.width = box.width;
		this.height = box.height;



		this.spin = function (){
			var spin = Raphael.animation({transform: "r360"}, 2500).repeat(Infinity);
			//var goUp = Raphael.animation({transform: "t360"}, 2500).repeat(Infinity);
			this.path.animate(spin);
		}
	}

	//spriteList.push(new Enemy(30,50,'ennemy'));
	

	//spriteList.push(new Enemy(350,40,'Enemy2'));
	var newVal = 'a';
	posx=5;//position en x du texte a bouger

	

		
	tick();//demmarage du jeu, appelee apres instanciation de ctx et des textes

	//changera le texte qui appraraitra 
	var text = $('#text2').text().trim();

	for(var i=0;i<3;i++){
		if(i!=0)
		textIdList.push('#text'+i);//ajouter les textes à la liste
		else
		textIdList.push('#text');

		////console.log(textIdList[i]);
	}
	var move ;

/*	this.element = document.getElementById("bullet"+"2");
	alert("bulletId " + "2" + " attr:"+ $("bullet"+"2").attr("id"));*/
	//wipes the canvas context
	function clear() {
	  ctx.clearRect(0,0,WIDTH,300);
	}


	var start = 0;
	var hit = 0;
	var start2 = -WIDTH;
	//$('#text').css('display', 'none');
	function tick(){
		
		
		//*****************ETAPE 3: AFFICHAGE DU TEXTE***********************
		 //ctx.fillStyle = "black";
		  // var img = new Image();
		  // img.onload = function () {
		     ctx.drawImage(img, start++, 0,WIDTH,300);
		     ctx.drawImage(img, start2++, 0,WIDTH,300);

		     if(start2==0){
		     	start2 = -WIDTH; 
		     	start=0;
		     }
		     for(var i=0; i<textArray.length;i++){
			//changer la couleur du texte "locké"
			if(textArray[i].locked)
				ctx.fillStyle = "white";	
			else
				ctx.fillStyle = "#FF0000";

			ctx.fillText(textArray[i].text,textArray[i].x,textArray[i].y);

		//}

		 }
		 //img.src = "images/building.png";
		 //ctx.fillRect(0,0,WIDTH,300);
		
		ctx.font=textFont;



//tx.clearRect(0,0,300,300);
/*		ctx.fillText(sthisisatext.text,sthisisatext.x,sthisisatext.y);
		ctx.fillText(abracadabra.text,abracadabra.x,abracadabra.y);
		ctx.fillText(ponytail.text,ponytail.x,ponytail.y);*/
		
		for(var i=0; i<spriteList.length;i++){

		 		var toRemove = spriteList[i].tick();
		 		//console.log(spriteList[i]);
		 		if(toRemove){
		 			spriteList.splice(i,1);
		 			i--;
		 		}
		 	}

							//verifier si on est arriver a la fin du mot
					if(textArray[textPos].text.charAt(0)=="" ){
							/*for (var i = 0; i < textArray[textPos].length+1; i++) {
								bulletList.push(new Bullet(textArray[textPos].ennemy));
							};*/
						//if(wrong == false){
							/*alert("it's over");*/
							clearTimeout(move);
							//$('#text').fadeOut("slow");
							errorTimes =0;
							timesTyped = -1;
		/*					textArray[textPos].locked = false;*/
							textArray[textPos].remove = true;
							index = 0;
							//textArray[textPos].ennemy.x = true;
							//textPos++;
							////console.log(txt);
							/*alert(txt);*/
							//moveText1(textIdList,ennemyList);
							//moveText($('#text').val(),En2);
						//}
					}

			var change = 0;//variable qui augmente quand une balle a atteint sa cible

			for (var i = 0; i < bulletList.length; i++) {
				if(bulletList[i].bulletHit == 1){ //une balle a atteint sa cible
				change++;

				}	

			};


			if(change == textArray[textPos].length){//verifier si toutes les balles ont atteints leur cible
						hit ++;
						if(hit<2){//il faut pas enlever l'ennemi a chaque tick
							/*alert("HIT");*/
							bulletList[bulletList.length-1].ennemy.remove = true;
							bulletList= [];//nettoyer le tableau de balles
							hit=0;

						}
					
			}

		 	game = setTimeout(tick, 30);
	 }
	//$('#text').text(text);//remplacer le texte par celui 'trimer'
	for(var i=0;i<3;i++){
		textList[i]= $(textIdList[i]).text().trim();
		$(textIdList[i]).val(textList[i]);
	}
	
	iterateAlphabet();

	function updateLife(perc) {
		lifebar.style.width = perc+'px';
	}

	function updateScore(perc) {
		score.innerHTML = perc;
	}


	$(document).keydown(function(event){
		//supprime la letter


				//*************************BARRE DE VIE***********//



				 // var life = Math.floor(Math.random()*50);
				 // var point = Math.floor(Math.random()*50);




		        //document.getElementById('button').onclick = function() {
		            //updateLife(life);
		    	//}
		    	//*************************SCORE***********//
		    	
		    	
		        //updateScore(point);

				var keycode = event.keyCode;
				var wrong = false;//true si le mot taper ne correspond pas
				timesTyped++;//nb de fois taper
				//console.log("TEXTPOS" + textList[textPos]);

				if(keycode==49){

					//NETTOYAGE DU NIVEAU ACTUEL POUR LE PROCHAIN NIVEAU
					for(var i=0;i<ennemyList.length;i++){
						ennemyList[i].remove = true;
					}
					ennemyList.length = 0;

					for(var i=0;i<textArray.length;i++){
						textArray[i].remove = true;
					}
					textArray.length = 0;
					/*spriteList.length = 0;
					ennemyList.length = 0;*/
					//spriteList.length = 0;
					//game = clearTimeout(game);
					ctx.clearRect(0,0,WIDTH,300);
					ctx.fillStyle = "black";
					ctx.fillRect(0,0,WIDTH,300);
					//gamePaused = true;
					//replacejscssfile("js/javascript.js", "js/level2.js", "js");
					//game = clearTimeout(game);

					loadLevel2();
					//loadjscssfile("js/level2.js", "js");


				}

				//PAUSING GAME
				if(keycode==13){

					/*removejscssfile("js/javascript.js", "js");
					loadjscssfile( "js/level3.js","js")*/
					 if (!gamePaused) {
					    					game = clearTimeout(game);
					    gamePaused = true;
					  } else if (gamePaused) {
					    game = setTimeout(tick, 30);
					    gamePaused = false;
					  }
				}


				if(gamePaused==false && keycode!=13)
				{

					//changer la priorité des textes 
					//timesTyped == 0
					//textArray[textPos].text.charAt(-1)==""
					if(timesTyped == 0){
						for (var i = 0; i < textArray.length; i++) {
							if((textArray[i].text.charAt(timesTyped)).toUpperCase()==String.fromCharCode(keycode)){
								if(textArray[i]!=textArray[0]){
									var b = textArray[i];
									textArray[i] = textArray[0];
									textArray[0] = b;
									textArray[0].locked = true;
									textArray[i].locked = false;
								}
							}	
						};					
					}


					//possibliter de choisir quelle texte "tuer" apres que la pause a ete desactiver
					if(index==0){
						for (var i = 0; i < textArray.length; i++) {
							if((textArray[i].text.charAt(index)).toUpperCase()==String.fromCharCode(keycode)){
								if(textArray[i]!=textArray[0]){
									var b = textArray[i];
									textArray[i] = textArray[0];
									textArray[0] = b;
									textArray[0].locked = true;
									textArray[i].locked = false;

								}
							}	
						};					
					
					}


					
					/*if(index==0){
						for (var i = 0; i < textArray[textPos].length; i++) {
							bulletList.push(new Bullet(textArray[textPos].ennemy));
						};

					}*/
		/*			for(var i=0;i<2;i++){
						if (textArray[i].locked){
							textArray[i].removeLetter();
						}
					}*/
					txt =textArray[textPos].text.charAt(0);//la lettre qui doit etre taper
					//alert(textArray[textPos].text.charAt(-1));
					//if(timesTyped<text.length){//tant que le nb de fois taper \ taille du texte
					//alert(textList[textPos]);
					//if(txt!=""){//tant que le texte est ecnore 'vivant'
						textArray[textPos].locked = true;


					if(textArray[textPos].locked == true){
						//console.log(textArray[textPos].text.charAt(timesTyped) + " and " + String.fromCharCode(keycode));
						//mettre tout en majuscule pour eviter des problemes
						if(txt.toUpperCase()== String.fromCharCode(keycode)){
							//si les 2 caracteres sont les memes
							//console.log('same');
							fireBullet();//tire la balle 
							//au fur et a mesure que la bonne lettre est tapé,
							//le div texte change
							$(textIdList[textPos]).val(textList[textPos].substr(timesTyped+1,textList[textPos].length));
							if (textArray[textPos].locked){
								textArray[textPos].removeLetter();
								//updatePoint(point++);
							}
							//console.log('text now is:' + $(textIdList[textPos]).val());
							index++;
							
						}else{
							//console.log('wrong');
							wrong=true;
							errorTimes++;//le nbre de fois que le joueur a fait une erreur
							timesTyped--;

							//timesTyped -= errorTimes;//seconde chance 
						}
					}


					//console.log('wrong: ' + wrong);

			}
		});
		
		

		function Text(id,text,ennemy){
			this.id = id;
			this.text = text;
			this.original = text;//le texte original 
			this.y = ennemy.y+(ennemy.h);
			this.direction = "right";
			this.remove = false;
			this.locked= false;
			this.ennemy= ennemy;
			this.length = text.length;
			//https://coderwall.com/p/kdi8ua

			$.fn.textWidth = function(text, font) {
			    if (!$.fn.textWidth.fakeEl) $.fn.textWidth.fakeEl = $('<span>').hide().appendTo(document.body);
			    $.fn.textWidth.fakeEl.text(text || this.val() || this.text()).css('font', font || this.css('font'));
			    return $.fn.textWidth.fakeEl.width();
			};

			


				this.tick = function(){
					//le text sera toujours à la bonne position par rapport a l'ennemy
					this.width= $.fn.textWidth(this.text,textFont);
					if(ennemy instanceof Enemy)
					this.x = ennemy.x - (this.width/2);
					else if(ennemy instanceof Lightning) //si c'est un lightning
					this.x = ennemy.x - (this.width);
					else{ //si c'est un lightning
					this.x = ennemy.x - (this.width/2);
					this.y = ennemy.y + ennemy.height;
					}


					if(ennemy.remove == true){
						this.remove = true;
						console.log("remove true");
					}

					
					/*if(this.text==""){
						//alert("TEXT BLANK");
						this.remove = true;
						
						ennemy.remove = true;

					}*/
				}

				this.removeLetter= function(){
					this.text = this.text.substr(1,this.text.length);
					//alert(this.text);
				}

				//console.log(this.text.length);

				return this.remove;

		}
		

	function fireBullet(){
		bulletsFired++;



		// if(bulletsFired>textArray[textPos].length){
		// 	bulletsFired = 0;
		// }
		// 		bulletList[bulletsFired].ennemy = textArray[textPos].ennemy;
		// spriteList.push(bulletList[bulletsFired]);
		var bullet = new Bullet(textArray[textPos].ennemy);
		spriteList.push(bullet);
		bulletList.push(bullet);

		/*
		bulletList = [];
		//var bullet = new Bullet(textArray[textPos].ennemy);
		for (var i = 0; i <= 20; i--) {
			bulletList.push(new Bullet(textArray[textPos].ennemy));
			
		};*/
		//bulletList[bulletsFired] = new Bullet(textArray[textPos].ennemy);



/*		spriteList.push(new Bullet());
		spriteList.push(new Bullet());
		spriteList.push(new Bullet());*/
	}





	function addText(text,x,y){
		////console.log('filling text');
		ctx.fillText(text,x,y);
	}





});//END DOCUMENT LOAD

	function Enemy(x,y,name,w,h,speed,text){
	this.x = x;
	this.y= y;
	this.speed=speed;
	this.w = w; // default width and height?
	this.h = h;
	this.fill = '#444444';
	this.velocity=0.5;
	this.name= name;
	this.direction = "left";//pour la direction de l'ennemie
	this.remove = false;
	this.text = text;
	this.nouvelElement = document.createElement("div");//similaire a un getElement
	//this.element = document.getElementById('ennemy');
	this.nouvelElement.setAttribute("id", this.name);
	document.body.appendChild(this.nouvelElement);


	//nouvelElement.appendChild(texteElement);
	//document.body.appendChild(nouvelElement);
	//spriteList.push(new Enemy(this.x,this.y,this.name));


/*	//console.log('<div id='+'"'+this.name+'"'+'>'+'</div>');
	$('body').append('<div id='+'"'+this.name+'"'+'>'+'</div>');
	//console.log($('body').find("div"));
	if($('#'+this.name).length > 0)
		//console.log('EXISTS');
	this.element = document.getElementById(this.name);
	//this.element.id = this.name;
	//console.log(this.name +' PROBLEM HERE: ' + this.element);*/
	this.element = document.getElementById(this.name);
	if(this.element.id == "Enemy")
		this.element.style.color= "blue";
	else
		this.element.style.color= "red";
	this.element.style.width = this.w + "px";
	this.element.style.height = this.h + "px";

	this.tick = function(){

		//lui donner son top/left
		this.element.style.left = this.x + "px";
		this.element.style.top = this.y + "px";


		//console.log("id of " +this.element.id);
			//var remove = false;//pour verifier si a suppriemr ou pas
/*				if(this.direction =="right"){
		textArray			
					this.x+=this.speed;
					if(this.x > HEIGHT){
						this.direction ="left";
					}
				}
				else{*/
					if(this.x >400){
						this.x-=this.speed;
						//console.log(this.text);
					
						//this.direction ="right";
					}
					else{
						//this.remove = true;
						

						//updateLife(life--);
						
						//this.text.remove = true;
					}
				//}

				

				/*//console.log("TEXT ON TICK:" + $('#text').val());
				//console.log("LENGTH:" + ($('#text').val()).length);*/
				if (($('#text').val()).length == 0){
					/*//console.log('REMOVING VAL');*/
					/*if(clickCount>0)
					remove = true;*/
				}

				//self-destruct!
				if(this.remove){
					document.body.removeChild(this.nouvelElement);
				}

		 	return this.remove;
		}

		
	}
var bulletsFired = 0;
	var count  =0;
	var bhit = 0;


function Bullet(ennemy){
	this.x=100;
	this.y=290;
	this.speed=10;
	this.ennemy = ennemy;
	this.remove = false;
	this.moving = true; //verifier si la balle bouge encore ou pas
	this.angle =  0;
	this.distance = 0;
	this.width = 10;
	this.height = 10;
	this.bulletHit= 0;

	if(numberBullets==20){
		numberBullets=0;
		/*for(var i=0;i<21;i++){
			spriteList.push(bulletList[i]);
			bulletList[i].element.style.display = "block";
		}*/
	}
	numberBullets++;
	var bulletId = "bullet" + numberBullets;
	var axisX = 100;

	var distX= this.x+axisX;


	//Il faut que bulletId soit present dans le css
	this.element = document.getElementById(bulletId);
	//document.body.appendChild(this.element);
	//var el = document.getElementById(bulletId);


/*	this.nouvelElement = document.createElement("div");//similaire a un getElement
	//this.element = document.getElementById('ennemy');
	this.nouvelElement.setAttribute("id", "bullet");
	document.body.appendChild(this.nouvelElement);
	
	this.element = document.getElementById("bullet");*/
	var textLength = textArray[textPos].text.replace(/[^A-Z]/gi, "").length;
	var textLife = textLength;
/*	if(numberBullets==20)
		numberBullets=0;*/
	//style = window.getComputedStyle(this.element);
	//alert("bulletId " + bulletId + " attr:"+ $(bulletId).attr("id"));

	this.tick = function(){

		/*getElementAngle1(this.x, this.y, this.ennemy.x, this.ennemy.y)*/;
		this.distance = getDistance(100, 290, this.ennemy.x, this.ennemy.y);
		distX = getDistance(100, 290, this.ennemy.x , 290);

/*		this.distance = getDistance(this.ennemy.x, this.ennemy.y, this.ennemy.x-this.ennemy.speed,this.ennemy.y);
		distX = getDistance(this.ennemy.x, this.ennemy.y, this.ennemy.x+this.ennemy.speed,this.ennemy.y);*/


		//prends l'angle de difference entre le xy de GX et le xy de l'ennemi
		this.angle = getAngle(this.distance,distX);

		//ETAPE 1: DECOMPOSITION EN VECTEUR UNITAIRE
		var u2x = Math.cos(180);
		var u2y = Math.sin(180);


		//ETAPE 2: DETERMINATION DE T
		var v1 = this.speed;
		var v2 = this.ennemy.speed;
		var a = Math.pow(v2,2);
		var p1x = this.x;
		var p1y=this.y;
		var p2x=this.ennemy.x;
		var p2y=this.ennemy.y;

		var b = 2*v2*(u2x*(p2x-p1x)+u2y*(p2y-p1y));
		var c = Math.pow(p1x,2)+Math.pow(p1y,2)+Math.pow(p2x,2)+Math.pow(p2y,2)-2*(p1x*p2x+p1y*p2y);
		var d = Math.pow(v1,2);


		var t = (-b-Math.sqrt(4*c*(d-a)+Math.pow(b,2)))/(2*(a-d));

		//ETAPE 3 : CALCUL DU VECTEUR UNITAIRE DU PROJECTILE
		var u1x = (p2x-p1x+u2x*v2*t)/(v1*t);
		var u1y = (p2y-p1y+u2y*v2*t)/(v1*t);


		this.angle = getAngle(u1y,u1x);

		var p3x = p1x+u1x*v1*t;
		var p3y = p1y+u1y*v1*t;

		//console.log(this.angle);
		this.element.style.left = this.x + "px";
		this.element.style.top = this.y + "px";

		//ETAPE 4: CALCUL FINAL DU TRAJET EN UTILISANT LA FONCTION AFFINE
		var a2 = (p3y-p1y)/(p3x-p1x);
		var b2 = ((p3x*p1y) - (p1x*p3y))/(p3x-p1x);

		if(this.x < p3x){
			this.bulletHit = 0;
			this.x +=this.speed;
			this.y= a2*this.x + b2;
			this.element.style.display = "block";
			//bhit=0;
		}
		if(this.x >= p3x ){//probleme: this.x 
			this.bullet
			this.bulletHit = 1;
			this.element.style.display = "none";


			//this.remove = true;
/*			if(textArray[textPos].text==""){
				
				for (var i=0;i<bulletList.length;i++) {
				
					if(bulletList[i].bulletHit==1){
						bhit++;
					}
					
				}
				if(bhit==textArray[textPos].length){

					alert("OVER");
					
				}

			} */
		}

	

/*
			var change = 0;
			for (var i = 0; i < bulletList.length; i++) {
				if(bulletList[i].bulletHit == 1){
				change++;
					if(bulletList[i]!=bulletList[textArray[textPos].length-1]){
						var b = bulletList[i];
						bulletList[i] = textArray[bulletList.length-1];
						textArray[bulletList.length-1] = b;
					}
				}	
			};	

		if((bulletList[textArray[textPos].length-1].bulletHit == 1) && change==textArray[textPos].length){
			//alert("OVER");
			//console.log("ENNEMY HIT");
			bulletList[bulletList.length-1].bulletHit == 0;


		}*/
		/*if(this.y > p3y){
			
		}*/


/*		if(this.x > this.ennemy.x && this.y > 50)
			this.x -=this.speed;
		if(this.y > this.ennemy.y)
			this.y -=this.speed;*/
		//console.log("BULLET: " + this.x);

		//alert(getAngle(this.ennemy,this));
		/*if (this.x < this.ennemy.x + this.ennemy.w  && this.x + this.width  > this.ennemy.x &&
		this.y < this.ennemy.y + this.ennemy.h && this.y + this.height > this.ennemy.y){*/
		count++;
		
		/*setTimeout(function(){*/

		/*if(Math.abs(this.ennemy.x- this.x) <=1){*/




		/*},500);*/

		if(!this.moving){
			this.element.style.backgroundColor = "blue";

		}
		//bline(this.x, this.y, this.ennemy.x, this.ennemy.y);




		if(this.remove){
			/*textArray[textPos].ennemy.remove = true;			
			textArray[textPos].remove = true;*/
			/*document.body.removeChild(this.element);*/
			//this.element.style.display = "none";

			/*document.body.removeChild(this.nouvelElement);*/
			/*document.body.removeChild(this.element);*/


		}

		return this.remove;
	}



	//ALOGIRTHM
		function bline(x0, y0, x1, y1) {
				 
				  var dx = Math.abs(x1 - x0), sx = x0 < x1 ? 1 : -1;
				  var dy = Math.abs(y1 - y0), sy = y0 < y1 ? 1 : -1; 
				  var err = (dx>dy ? dx : -dy)/2;
				 
				  while (true) {
				    setPixel(x0,y0, white);
				    if (x0 === x1 && y0 === y1) break;
				    var e2 = err;
				    if (e2 > -dx) { err -= dy; x0 += sx; }
				    if (e2 < dy) { err += dx; y0 += sy; }
				  }
		}
						// setpixel
		var setPixel = function (x,y,c) {
				    var p=ctx.createImageData(1,1);
				    p.data[0]=c.r;
				    p.data[1]=c.g;
				    p.data[2]=c.b;
				    p.data[3]=c.a;
				    ctx.putImageData(p,x,y);
		}









	
}


//transformation des alphabets en number
function iterateAlphabet()
{
	 var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	 for(var i=0; i<str.length; i++)
	 {
	      var nextChar = str.charCodeAt(i);//prends le caractere selectioner et la transforme en charCode
	      alphabets[i] = nextChar;
	      ////console.log(nextChar + ' ');
	 }
}

//Box object to hold data for all drawn rects

// Draws a single shape to a single context
// draw() will call this with the normal canvas
// myDown will call this with the ghost canvas
function drawshape(context, shape, fill) {
  context.fillStyle = fill;
  
  context.fillRect(shape.x,shape.y,shape.w,shape.h);
}





//http://www.javascriptkit.com/javatutors/loadjavascriptcss.shtml
function loadjscssfile(filename, filetype){
 if (filetype=="js"){ //if filename is a external JavaScript file
  var fileref=document.createElement('script')
  fileref.setAttribute("type","text/javascript")
  fileref.setAttribute("src", filename)
 }
 else if (filetype=="css"){ //if filename is an external CSS file
  var fileref=document.createElement("link")
  fileref.setAttribute("rel", "stylesheet")
  fileref.setAttribute("type", "text/css")
  fileref.setAttribute("href", filename)
 }
 if (typeof fileref!="undefined")
  document.getElementsByTagName("head")[0].appendChild(fileref)
}


function removejscssfile(filename, filetype){
 var targetelement=(filetype=="js")? "script" : (filetype=="css")? "link" : "none" //determine element type to create nodelist from
 var targetattr=(filetype=="js")? "src" : (filetype=="css")? "href" : "none" //determine corresponding attribute to test for
 var allsuspects=document.getElementsByTagName(targetelement)
 for (var i=allsuspects.length; i>=0; i--){ //search backwards within nodelist for matching elements to remove
  if (allsuspects[i] && allsuspects[i].getAttribute(targetattr)!=null && allsuspects[i].getAttribute(targetattr).indexOf(filename)!=-1)
   allsuspects[i].parentNode.removeChild(allsuspects[i]) //remove element by calling parentNode.removeChild()
 }
}


function replacejscssfile(oldfilename, newfilename, filetype){
 var targetelement=(filetype=="js")? "script" : (filetype=="css")? "link" : "none" //determine element type to create nodelist using
 var targetattr=(filetype=="js")? "src" : (filetype=="css")? "href" : "none" //determine corresponding attribute to test for
 var allsuspects=document.getElementsByTagName(targetelement)
 for (var i=allsuspects.length; i>=0; i--){ //search backwards within nodelist for matching elements to remove
  if (allsuspects[i] && allsuspects[i].getAttribute(targetattr)!=null && allsuspects[i].getAttribute(targetattr).indexOf(oldfilename)!=-1){
   var newelement=createjscssfile(newfilename, filetype)
   allsuspects[i].parentNode.replaceChild(newelement, allsuspects[i])
  }
 }
}

var alphabets = new Array();
var spriteList = new Array();
var textIdList = new Array();
var textList = new Array();
var ennemyList = new Array();
var textArray = new Array();

var textDirections = new Array();
var posX = new Array();
var ennemyCount = 2;

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

$(document).ready(function () {

	 canvas = document.getElementById('canvas');
  	HEIGHT = canvas.height;
  	WIDTH = canvas.width;
	//moveText();
	//Enemy(x,y,name,w,h,speed,text)
	//*****************ETAPE 1: CREATION ENNEMY ET TEXT***********************
	En2 = new Enemy(30,60,'Enemy2',16,10,1);
	var En1 = new Enemy(30,30,'Enemy1',16,16,2);
	var En3 = new Enemy(10,90,'Enemy3',20,20,1.5);


	var sthisisatext = new Text(0, "sthisisatext",En1);
	var abracadabra = new Text(0, "abracadabra",En2);
	var ponytail = new Text(0, "ponytail",En3);

	ennemyList.push(En1);
	ennemyList.push(En2);
	ennemyList.push(En3);

	spriteList.push(En1);
	spriteList.push(En2);
	spriteList.push(En3);

	spriteList.push(sthisisatext);
	spriteList.push(abracadabra);
	spriteList.push(ponytail);

			//*****************ETAPE 2 : AJOUT DU TEXTE***********************
	//moveText(textList[1],En2);//faire bouger le texte

	textArray.push(abracadabra);
	textArray.push(sthisisatext);
	textArray.push(ponytail);

	function loadLevel2(){
			En2 = new Enemy(30,60,'Enemy2',16,10,1);
			var En1 = new Enemy(30,30,'Enemy1',16,16,2);
			var En3 = new Enemy(10,90,'Enemy3',20,20,1.5);


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
	
	//spriteList.push(new Enemy(30,50,'ennemy'));
	

	//spriteList.push(new Enemy(350,40,'Enemy2'));
	var newVal = 'a';
	posx=5;//position en x du texte a bouger

	var ctx = document.getElementById('canvas').getContext("2d");

		
	tick();//demmarage du jeu, appelee apres instanciation de ctx et des textes

	//changera le texte qui appraraitra 
	var text = $('#text2').text().trim();

	for(var i=0;i<3;i++){
		if(i!=0)
		textIdList.push('#text'+i);//ajouter les textes à la liste
		else
		textIdList.push('#text');

		console.log(textIdList[i]);
	}
	var move ;

/*	this.element = document.getElementById("bullet"+"2");
	alert("bulletId " + "2" + " attr:"+ $("bullet"+"2").attr("id"));*/
	//wipes the canvas context
	function clear() {
	  ctx.clearRect(0,0,300,300);
	}




	//$('#text').css('display', 'none');
	function tick(){
		

		//*****************ETAPE 3: AFFICHAGE DU TEXTE***********************
		ctx.fillStyle = "black";
		ctx.fillRect(0,0,300,300);
		//tx.clearRect(0,0,300,300);
		ctx.font=textFont;

/*		ctx.fillText(sthisisatext.text,sthisisatext.x,sthisisatext.y);
		ctx.fillText(abracadabra.text,abracadabra.x,abracadabra.y);
		ctx.fillText(ponytail.text,ponytail.x,ponytail.y);*/
		for(var i=0; i<textArray.length;i++){
			//changer la couleur du texte "locké"
			if(textArray[i].locked)
				ctx.fillStyle = "white";	
			else
				ctx.fillStyle = "#FF0000";

			ctx.fillText(textArray[i].text,textArray[i].x,textArray[i].y);
		}

		for(var i=0; i<spriteList.length;i++){

		 		var toRemove = spriteList[i].tick();
		 		console.log(spriteList[i]);
		 		if(toRemove){
		 			spriteList.splice(i,1);
		 			i--;
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




	$(document).keydown(function(event){
		//supprime la letter



				var keycode = event.keyCode;
				var wrong = false;//true si le mot taper ne correspond pas
				timesTyped++;//nb de fois taper
				console.log("TEXTPOS" + textList[textPos]);

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
					ctx.clearRect(0,0,300,300);
					ctx.fillStyle = "black";
					ctx.fillRect(0,0,300,300);
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
					//if(textArray[textPos].locked == true){
						console.log(textArray[textPos].text.charAt(timesTyped) + " and " + String.fromCharCode(keycode));
						//mettre tout en majuscule pour eviter des problemes
						if(txt.toUpperCase()== String.fromCharCode(keycode)){
							//si les 2 caracteres sont les memes
							console.log('same');
							fireBullet();//tire la balle 
							//au fur et a mesure que la bonne lettre est tapé,
							//le div texte change
							$(textIdList[textPos]).val(textList[textPos].substr(timesTyped+1,textList[textPos].length));
							if (textArray[textPos].locked){
								textArray[textPos].removeLetter();
							}
							console.log('text now is:' + $(textIdList[textPos]).val());
							index++;
							
						}else{
							console.log('wrong');
							wrong=true;
							errorTimes++;//le nbre de fois que le joueur a fait une erreur
							timesTyped--;

							//timesTyped -= errorTimes;//seconde chance 
						}
					//}
					//verifier si on est arriver a la fin du mot
					if(textArray[textPos].text.charAt(1)==""){

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
							//console.log(txt);
							/*alert(txt);*/
							//moveText1(textIdList,ennemyList);
							//moveText($('#text').val(),En2);
						//}
					}

					console.log('wrong: ' + wrong);

			}
		});
		
		

		function Text(id,text,ennemy){
			this.id = id;
			this.text = text;

			this.y = ennemy.y+(ennemy.h);
			this.direction = "right";
			this.remove = false;
			this.locked= false;
			//https://coderwall.com/p/kdi8ua

			$.fn.textWidth = function(text, font) {
			    if (!$.fn.textWidth.fakeEl) $.fn.textWidth.fakeEl = $('<span>').hide().appendTo(document.body);
			    $.fn.textWidth.fakeEl.text(text || this.val() || this.text()).css('font', font || this.css('font'));
			    return $.fn.textWidth.fakeEl.width();
			};

			


				this.tick = function(){
					//le text sera toujours à la bonne position par rapport a l'ennemy
					this.width= $.fn.textWidth(this.text,textFont);
					this.x = ennemy.x - (this.width/2);
					

					if(this.text==""){
						//alert("TEXT BLANK");
						this.remove = true;
						
						ennemy.remove = true;

					}
				}

				this.removeLetter= function(){
					this.text = this.text.substr(1,this.text.length);
					//alert(this.text);
				}


				return this.remove;

		}

	

		function moveText1(mtext,enemy){
				alert("moving text");
				var ltxt1 = $(textIdList[0]).val();//le texte a utiliser $('#text').val();
				var ltxt2 = $(textIdList[1]).val();
				
				var ltxt = mtext; 
				//un 'clone' de l'ennemie qui doit etre suivi		
				//necessaire puisque le setTimeOut a besoin d'une variable globale
				
				//enleve le # au debut du texte
				var substr = textIdList[0].substr(1,textIdList[textPos].length);
				var test = document.getElementById(substr);
				//$(textIdList[textPos]).css("display","block");
				//var height = (test.clientHeight + 1);
				var height =($(textIdList[0])).height();
				var width = ($(textIdList[0])).width();
				$(textIdList[0]).css("display", "block");
				$(textIdList[0]).css('text-align','center');
				for(var i=0; i<enemy.length;i++){//changer 
					//synchroniser la direction de l'ennemi et du texte
					textDirections[i] = enemy[i].direction;
					//synchroniser la position de l'ennemi et du texte
					posX[i] = enemy[i].x ;

					var offw = test.offsetWidth;
					var cliw = test.clientWidth;

					if(textDirections[i] =="right"){
						
						posX[i]+=enemy[i].speed;
						if(posX[i] > 250){
							textDirections[i] ="left";
						}
					}
					else{
						posX[i]-=enemy[i].speed;

						if(posX[i] <20){
							textDirections[i] ="right";
						}
					}
					
					
					
	
				}

					ctx.clearRect(0,0,300,300);
				for(var i=0; i<enemy.length;i++){//changer 
					ctx.fillText($(textIdList[i]).val(),posX[i],enemy[i].y+(enemy[i].h));
				}
					setTimeout(function() {
						console.log('TEXT ON MOVE : ' + mtext );
			    		//il faut que la nouvelle valeur du texte soit sauvegarder 
			    		//txt = $('#text').val();;//$('#text').val();
			    		
			    		moveText1(ltxt,enemy);
						},30);
				

		}

	function moveText0(mtext,enemy){

/*				var ltxt1 = $(textIdList[0]).val();//le texte a utiliser $('#text').val();
				var ltxt2 = $(textIdList[1]).val();*/

				var ltxt = mtext; 
				//un 'clone' de l'ennemie qui doit etre suivi		
				//necessaire puisque le setTimeOut a besoin d'une variable glfobale
				
				//enleve le # au debut du texte
				var substr = textIdList[0].substr(1,textIdList[textPos].length);
				var test = document.getElementById(substr);
				//$(textIdList[textPos]).css("display","block");
				//var height = (test.clientHeight + 1);
				var height =($(textIdList[0])).height();
				var width = ($(textIdList[0])).width();
				$(textIdList[0]).css("display", "block");
				$(textIdList[0]).css('text-align','center');
				//synchroniser la direction de l'ennemi et du texte


				textDirection1 = enemy[0].direction;
				textDirection2 = enemy[1].direction;
				//synchroniser la position de l'ennemi et du texte
				posx1 = enemy[0].x ;/*- (test.clientWidth/2);*/
				posx2 = enemy[1].x;
				var offw = test.offsetWidth;
				var cliw = test.clientWidth;
				//posx = enemy.x- (width/2);
				//console.log('txt : ' + txt);
				  //console.log('textDirection: ' + textDirection);
				if(textDirection1 =="right"){
					
					posx1+=enemy[0].speed;
					if(posx1 > 250){
						textDirection1 ="left";
					}
				}
				else{
					posx1-=enemy[0].speed;

					if(posx1 <20){
						textDirection1 ="right";
					}
				}

				if(textDirection2 =="right"){
					
					posx2+=enemy[1].speed;
					if(posx2 > 250){
						textDirection2 ="left";
					}
				}
				else{
					posx2-=enemy[1].speed;

					if(posx2 <20){
						textDirection2 ="right";
					}
				}

				ctx.clearRect(0,0,300,300);

				//ctx.fillText($(mtext[0]).text().trim(),posx1,enemy[0].y+(enemy[0].h));
				//ctx.fillText($(mtext[1]).text().trim(),posx2,enemy[1].y+(enemy[1].h));
				//console.log(mtext);
				
				ctx.fillText($(textIdList[1]).val(),posx2,enemy[1].y+(enemy[1].h));
				ctx.fillText($(textIdList[0]).val(),posx1,enemy[0].y+(enemy[0].h));


				setTimeout(function() {
						console.log('TEXT ON MOVE : ' + mtext );
			    		//il faut que la nouvelle valeur du texte soit sauvegarder 
			    		//txt = $('#text').val();;//$('#text').val();
			    		
			    		moveText0(ltxt,enemy);
						},30);
				

	}




			function moveText(mtext,enemy){
				var ltxt = $(textIdList[textPos]).val();//le texte a utiliser $('#text').val();
				//un 'clone' de l'ennemie qui doit etre suivi		
				//necessaire puisque le setTimeOut a besoin d'une variable globale
				
				//enleve le # au debut du texte
				var substr = textIdList[textPos].substr(1,textIdList[textPos].length);
				var test = document.getElementById(substr);
				//$(textIdList[textPos]).css("display","block");
				//var height = (test.clientHeight + 1);
				var height =($(textIdList[textPos])).height();
				var width = ($(textIdList[textPos])).width();
				$(textIdList[textPos]).css("display", "block");
				$(textIdList[textPos]).css('text-align','center');
				//synchroniser la direction de l'ennemi et du texte
				textDirection = enemy.direction;
				//synchroniser la position de l'ennemi et du texte
				posx = enemy.x ;/*- (test.clientWidth/2);*/
				var offw = test.offsetWidth;
				var cliw = test.clientWidth;
				//posx = enemy.x- (width/2);
				//console.log('txt : ' + txt);
				  //console.log('textDirection: ' + textDirection);
				if(textDirection =="right"){
					
					posx+=enemy.speed;
					if(posx > 250){
						textDirection ="left";
					}
				}
				else{
					posx-=enemy.speed;

					if(posx <20){
						textDirection ="right";
					}
				}

				ctx.clearRect(0,0,300,300);
				//console.log('moveText, posx:' + posx);
				ctx.fillText(mtext,posx,enemy.y+(enemy.h));
				//console.log(mtext);
	

					setTimeout(function() {
						console.log('TEXT ON MOVE : ' + mtext );
			    		//il faut que la nouvelle valeur du texte soit sauvegarder 
			    		//txt = $('#text').val();;//$('#text').val();
			    		
			    		moveText(ltxt,enemy);
						},30);
				

		}

	function fireBullet(){

		spriteList.push(new Bullet());
/*		spriteList.push(new Bullet());
		spriteList.push(new Bullet());
		spriteList.push(new Bullet());*/
	}





	function addText(text,x,y){
		//console.log('filling text');
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
	this.direction = "right";//pour la direction de l'ennemie
	this.remove = false;
	this.nouvelElement = document.createElement("div");//similaire a un getElement
	//this.element = document.getElementById('ennemy');
	this.nouvelElement.setAttribute("id", this.name);
	document.body.appendChild(this.nouvelElement);


	//nouvelElement.appendChild(texteElement);
	//document.body.appendChild(nouvelElement);
	//spriteList.push(new Enemy(this.x,this.y,this.name));


/*	console.log('<div id='+'"'+this.name+'"'+'>'+'</div>');
	$('body').append('<div id='+'"'+this.name+'"'+'>'+'</div>');
	console.log($('body').find("div"));
	if($('#'+this.name).length > 0)
		console.log('EXISTS');
	this.element = document.getElementById(this.name);
	//this.element.id = this.name;
	console.log(this.name +' PROBLEM HERE: ' + this.element);*/
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
		console.log("id of " +this.element.id);
			//var remove = false;//pour verifier si a suppriemr ou pas
				if(this.direction =="right"){
					
					this.x+=this.speed;
					if(this.x > HEIGHT){
						this.direction ="left";
					}
				}
				else{
					this.x-=this.speed;

					if(this.x <20){
						this.direction ="right";
					}
				}



				console.log("TEXT ON TICK:" + $('#text').val());
				console.log("LENGTH:" + ($('#text').val()).length);
				if (($('#text').val()).length == 0){
					console.log('REMOVING VAL');
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





function Bullet(){
	this.x=100;
	this.y=290;
	this.speed=10;
	numberBullets++;
	var bulletId = "bullet" + numberBullets;
	//Il faut que bulletId soit present dans le css
	this.element = document.getElementById(bulletId);
	//var el = document.getElementById(bulletId);

	if(numberBullets==6)
		numberBullets=0;
	//style = window.getComputedStyle(this.element);
	//alert("bulletId " + bulletId + " attr:"+ $(bulletId).attr("id"));  
	this.tick = function(){
		this.element.style.left = this.x + "px";
		this.element.style.top = this.y + "px";

		if(this.x < En2.x && this.y > 50)
			this.x +=this.speed;
		if(this.x > En2.x && this.y > 50)
			this.x -=this.speed;
		if(this.y > 50)
			this.y -=this.speed;
		console.log("BULLET: " + this.x);
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
	      //console.log(nextChar + ' ');
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

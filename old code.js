var alphabets = new Array();
var spriteList = new Array();
var textIdList = new Array();
var textList = new Array();
var ennemyList = new Array();

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
/*
var En1 = new Enemy(30,30,'Enemy2',16,16,2);
*/


//for(var i=0;i<ennemyCount;i++){
/*	ennemyList.push(En1);
	ennemyList.push(En2);*/
//}


$(document).ready(function () {


	//moveText();
	En2 = new Enemy(30,60,'Enemy2',16,10,1);
	var En1 = new Enemy(30,30,'Enemy1',16,16,2);


	var sthisisatext = new Text(0, "sthisisatext",En1);
	var abracadabra = new Text(0, "abracadabra",En2);

	ennemyList.push(En1);
	ennemyList.push(En2);

	spriteList.push(En1);
	spriteList.push(En2);

	spriteList.push(sthisisatext);
	spriteList.push(abracadabra);


	
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
		
		ctx.clearRect(0,0,300,300);
		ctx.fillText(sthisisatext.text,sthisisatext.x,sthisisatext.y);
		ctx.fillText(abracadabra.text,abracadabra.x,abracadabra.y);
		

		for(var i=0; i<spriteList.length;i++){

		 		var toRemove = spriteList[i].tick();
		 		console.log(spriteList[i]);
		 		if(toRemove){
		 			spriteList.splice(i,1);
		 			i--;
		 		}
		 	}


		 	setTimeout(tick, 30);
	 }
	//$('#text').text(text);//remplacer le texte par celui 'trimer'
	for(var i=0;i<3;i++){
		textList[i]= $(textIdList[i]).text().trim();
		$(textIdList[i]).val(textList[i]);
	}
	
	//console.log(text.charAt(0));
	//console.log(text.charCodeAt(0));

	//console.log(text.length);
	//console.log(textIdList[i]);
	iterateAlphabet();

	//moveText(textList[1],En2);//faire bouger le texte
	var textArray = new Array();
	textArray.push(abracadabra);
	textArray.push(sthisisatext);
	//moveText0(textList[0],En1);//faire bouger le texte
	//moveText1(textIdList,ennemyList);
	//setInterval( function() { moveText0(textList[0],En1); }, 30)
	//moveText(($('#text1').val()),5,40);
	//moveText2(($('#text2').val()),5,40);
	//moveText($('#text1').val());
	$(document).keydown(function(event){
		//supprime la letter


			var keycode = event.keyCode;
			var wrong = false;//true si le mot taper ne correspond pas
			timesTyped++;//nb de fois taper
			console.log("TEXTPOS" + textList[textPos]);


			if(timesTyped == 0){
				for (var i = 0; i < textArray.length; i++) {
					if((textArray[i].text.charAt(timesTyped)).toUpperCase()==String.fromCharCode(keycode)){
						var b = textArray[i];
						textArray[i] = textArray[0];
						textArray[0] = b;
					}


						//$(textIdList[i]).val(textList[i]);		
				};					
			}

			textArray[textPos].locked = true;
			for(var i=0;i<2;i++){
				if (textArray[i].locked){
					textArray[i].removeLetter();
				}
			}

/*
			if(timesTyped == 0){
				for (var i = 0; i < textList.length; i++) {
					if((textList[i].charAt(timesTyped)).toUpperCase()==String.fromCharCode(keycode)){
						var b = textList[i];
						textList[i] = textList[0];
						textList[0] = b;

						var e = ennemyList[i];
						ennemyList[i] = ennemyList[0];
						ennemyList[0] = e;

						var c = textIdList[i];
						textIdList[i] = textIdList[0];
						textIdList[0] = c;
					}


						$(textIdList[i]).val(textList[i]);		
				};					
			}*/



			txt =textList[textPos].charAt(timesTyped);//la lettre qui doit etre taper

			//if(timesTyped<text.length){//tant que le nb de fois taper \ taille du texte
			//alert(textList[textPos]);
			if(txt!=""){//tant que le texte est ecnore 'vivant'

				console.log(textList[textPos].charAt(timesTyped) + " and " + String.fromCharCode(keycode));
				//mettre tout en majuscule pour eviter des problemes
				if(txt.toUpperCase()== String.fromCharCode(keycode)){
					//si les 2 caracteres sont les memes
					console.log('same');
					fireBullet();//tire la balle 
					//au fur et a mesure que la bonne lettre est tapé,
					//le div texte change
					$(textIdList[textPos]).val(textList[textPos].substr(timesTyped+1,textList[textPos].length));
					console.log('text now is:' + $(textIdList[textPos]).val());

					
				}else{
					console.log('wrong');
					wrong=true;
					errorTimes++;//le nbre de fois que le joueur a fait une erreur
					timesTyped--;

					//timesTyped -= errorTimes;//seconde chance 
				}
			}
			else{
				//if(wrong == false){
					alert("it's over");
					clearTimeout(move);
					//$('#text').fadeOut("slow");
					errorTimes =0;
					timesTyped = -1;
					textArray[textPos].locked = false;
					textPos++;
					console.log(txt);
					alert(txt);
					//moveText1(textIdList,ennemyList);
					//moveText($('#text').val(),En2);
				//}
			}

			console.log('wrong: ' + wrong);


		});
	

		
		function Text(id,text,ennemy){
			this.id = id;
			this.text = text;
			this.x = ennemy.x;
			this.y = ennemy.y+(ennemy.h);
			this.direction = "right";
			this.remove = false;
			this.locked= false;
				this.tick = function(){
					if(this.direction =="right"){
						
						this.x+=ennemy.speed;
						if(this.x > 250){
							this.direction ="left";
						}
					}
					else{
						this.x-=ennemy.speed;

						if(this.x <20){
							this.direction ="right";
						}
					}

					

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

		function moveText2(mtext,enemy){
				alert("moving text");
				var ltxt = mtext; 
				//un 'clone' de l'ennemie qui doit etre suivi		
				//necessaire puisque le setTimeOut a besoin d'une variable globale
				
		
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
			var remove = false;//pour verifier si a suppriemr ou pas
				if(this.direction =="right"){
					
					this.x+=this.speed;
					if(this.x > 250){
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





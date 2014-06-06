<!DOCTYPE html>
<html lang="fr">
    <head>
        <title>Search</title>
        <meta charset="utf-8" />
		<!-- <link href="css/style.css" rel="stylesheet" /> -->
		<link href="css/objects.css" rel="stylesheet" />
		<link href="css/ui.css" rel="stylesheet" />
		<link href="css/style.css" rel="stylesheet" />
		<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" type="text/javascript"></script>
		<script type="text/javascript" src="js/jquery.min.js"></script>
		<script src="js/lightning.js"></script>
		<script type="text/javascript" src="js/raphael-min.js"></script>
		<script src="js/fso.min.js"></script>
		<script src="js/javascriptold4.js"></script>
		<script src="js/utils.js"></script>
		


		

	
	</head>
	<body >
		<canvas  id="canvas" width="800" height="300" style="border:1px solid red;">
		Not gonna happen...
		</canvas>


		 <!--  <div id="container" display="none">    
		        <input type="file" onchange='readText(this)' />
		        <br/>
		        <hr/>   
		        <h3>Contents of the Text file:</h3>
		        <div id="main">
		            ...
		        </div>
		    </div> -->
		<div id="gx" >
		
			
		</div>
		<div id="background">
			

		</div>
		<div id="ennemy">
		
			
		</div>

		<div id="menu-home">
			 <span id="start" class = "text text-start" onclick="start()" >
				START
			</span> 

			<div id="scoreboard" class = "text text-high">
				HIGH SCORE
			</div> 
		</div> 

		<div id="menu-pause">
			 <span id="pause" class = "text text-pause" >
				PAUSE
			</span> 

			<div id="pauseDesc" class = "text text-desc">
				appuyer sur 'ENTER' pour continuer
			</div> 
		</div> 

		<div id="menu-gameover">
			 <span id="gameover" class = "text text-gameover" >
				GAME OVER
			</span> 
		</div> 
		<button onclick="init()">PLAY MUSIC</button>
		<script type="text/javascript">
		function start(){
			// alert('hello');
			$('#menu-home').css('display','none');
			loadGame(output);

		}
		var rand = [];
		function check(){
					function getRandomInt(min, max) {
				  return Math.floor(Math.random() * (max - min + 1)) + min;
				}
				// var P = new findInterval(level1Words,'P');
				// var randP = getRandomInt(P.beginning, P.end);
				// var A = new findInterval(level1Words,'A');
				// var randA = getRandomInt(A.beginning, A.end);
				// var C = new findInterval(level1Words,'C');
				// var randC = getRandomInt(C.beginning, C.end);

				
				for (var i = 0; i < 3; i++) {
					rand[i] = [];
				};
				
				
				// for (var i = 0; i < alphabets.length; i++) {
				// 	var temp =  new findInterval(level1Words,alphabets[i]);
				// 	console.log(alphabets[i] +": de "+temp.beginning +" a "+ temp.end);
				// 	var tempRand = getRandomInt(temp.beginning, temp.end);
				// 	rand[0][i] = tempRand;
				// 	console.log(rand[0][i]);
					
				// };

				// for (var i = 0; i < alphabets.length; i++) {
				// 	var temp =  new findInterval(level2Words,alphabets[i]);
				// 	console.log(alphabets[i] +": de "+temp.beginning +" a "+ temp.end);
				// 	var tempRand = getRandomInt(temp.beginning, temp.end);
				// 	rand[1][i] = tempRand;
				// 	console.log(rand[1][i]);
					
				// };
				// for (var i = 0; i < alphabets.length; i++) {
				// 	var temp =  new findInterval(level3Words,alphabets[i]);
				// 	console.log(alphabets[i] +": de "+temp.beginning +" a "+ temp.end);
				// 	var tempRand = getRandomInt(temp.beginning, temp.end);
				// 	rand[2][i] = tempRand;
				// 	console.log(rand[2][i]);
					
				// };





			//setTimeout(check,500);
		}
		$(document).ready(function(){
			check();
		});
		$( document).keyup(function(event) {
			var buttonArray = new Array();
			var bStart = $('#start');

			var bScore = $('#scoreBoard');
			buttonArray.push(bStart);
			buttonArray.push(bScore);


			 var code = event.which;
					  //if(code==13)event.preventDefault();
			if(code==38 || code==40){
				console.log('up down');
				for (var i = 0; i < buttonArray.length; i++) {
					if(buttonArray[i].css('background-color')=='black'){
						buttonArray[i].css('background-color','white');

					}
					else{
						buttonArray[i].css('background-color','black');				
					}
				};

			}
		});
		// $('#start').click(function(){
		// 	alert('hello');
		// });

		
		</script>
		<span id="text" >
			<!-- sthisisatext -->
		</span>

		<span id="text1" >
			<!-- abracadabra -->
		</span>
		<span id="text2" >
			<!-- ponytail -->
		</span>
		<div id="bullet" >
			
		</div>
		<div id="bullet0">
			
		</div>
		<div id="bullet1">
			
		</div>

		<div id="bullet2" >
			
		</div>
		<div id="bullet3" >
			
		</div>
		<div id="bullet4" >
			
		</div>
		<div id="bullet5" >
			
		</div>
		<div id="bullet6" >
			
		</div>
		<div id="bullet7" >
			
		</div>
		<div id="bullet8" >
			
		</div>
		<div id="bullet9" >
			
		</div>
		<div id="bullet10" >
			
		</div>
		<div id="bullet11" >
			
		</div>
		<div id="bullet12" >
			
		</div>
		<div id="bullet13" >
			
		</div>
		<div id="bullet14" >
			
		</div>
		<div id="bullet15" >
			
		</div>
		<div id="bullet16" >
			
		</div>
		<div id="bullet17" >
			
		</div>
		<div id="bullet18" >
			
		</div>
		<div id="bullet19" >
			
		</div>
		<div id="bullet20" >
			
		</div>	
		<div id="bullet21" >
			
		</div>

		<div id="bullet22" >
			
		</div>
		<div id="bullet23" >
			
		</div>	

		<div id="bullet24" >
			
		</div>	

		<div id="bullet25" >
			
		</div>	
		<div id="bullet26" >
			
		</div>	
		
		<div id="bullet27" ></div>
<div id="bullet28" ></div>
<div id="bullet29" ></div>
<div id="bullet30" ></div>
<div id="bullet31" ></div>
<div id="bullet32" ></div>
<div id="bullet33" ></div>
<div id="bullet34" ></div>
<div id="bullet35" ></div>
<div id="bullet36" ></div>
<div id="bullet37" ></div>
<div id="bullet38" ></div>
<div id="bullet39" ></div>
<div id="bullet40" ></div>
<div id="bullet41" ></div>
<div id="bullet42" ></div>
<div id="bullet43" ></div>
<div id="bullet44" ></div>
<div id="bullet45" ></div>
<div id="bullet46" ></div>
<div id="bullet47" ></div>
<div id="bullet48" ></div>
<div id="bullet49" ></div>
<div id="bullet50" ></div>
<div id="bullet51" ></div>
<div id="bullet52" ></div>
<div id="bullet53" ></div>
<div id="bullet54" ></div>
<div id="bullet55" ></div>
<div id="bullet56" ></div>
<div id="bullet57" ></div>
<div id="bullet58" ></div>
<div id="bullet59" ></div>
<div id="bullet60" ></div>
<div id="bullet61" ></div>
<div id="bullet62" ></div>
<div id="bullet63" ></div>
<div id="bullet64" ></div>
<div id="bullet65" ></div>
<div id="bullet66" ></div>
<div id="bullet67" ></div>
<div id="bullet68" ></div>
<div id="bullet69" ></div>
<div id="bullet70" ></div>
<div id="bullet71" ></div>
<div id="bullet72" ></div>
<div id="bullet73" ></div>
<div id="bullet74" ></div>
<div id="bullet75" ></div>
<div id="bullet76" ></div>
<div id="bullet77" ></div>
<div id="bullet78" ></div>
<div id="bullet79" ></div>
<div id="bullet80" ></div>
<div id="bullet81" ></div>
<div id="bullet82" ></div>
<div id="bullet83" ></div>
<div id="bullet84" ></div>
<div id="bullet85" ></div>
<div id="bullet86" ></div>
<div id="bullet87" ></div>
<div id="bullet88" ></div>
<div id="bullet89" ></div>
<div id="bullet90" ></div>
<div id="bullet91" ></div>
<div id="bullet92" ></div>
<div id="bullet93" ></div>
<div id="bullet94" ></div>
<div id="bullet95" ></div>
<div id="bullet96" ></div>
<div id="bullet97" ></div>
<div id="bullet98" ></div>
<div id="bullet99" ></div>		
<div id="bullet100" ></div>
<div id="bullet101" ></div>
<div id="bullet102" ></div>
<div id="bullet103" ></div>
<div id="bullet104" ></div>
<div id="bullet105" ></div>
<div id="bullet106" ></div>
<div id="bullet107" ></div>
<div id="bullet108" ></div>
<div id="bullet109" ></div>
<div id="bullet110" ></div>
<div id="bullet111" ></div>
<div id="bullet112" ></div>
<div id="bullet113" ></div>
<div id="bullet114" ></div>
<div id="bullet115" ></div>
<div id="bullet116" ></div>
<div id="bullet117" ></div>
<div id="bullet118" ></div>
<div id="bullet119" ></div>
<div id="bullet120" ></div>
<div id="bullet121" ></div>
<div id="bullet122" ></div>
<div id="bullet123" ></div>
<div id="bullet124" ></div>
<div id="bullet125" ></div>
<div id="bullet126" ></div>
<div id="bullet127" ></div>
<div id="bullet128" ></div>
<div id="bullet129" ></div>
<div id="bullet130" ></div>
<div id="bullet131" ></div>
<div id="bullet132" ></div>
<div id="bullet133" ></div>
<div id="bullet134" ></div>
<div id="bullet135" ></div>
<div id="bullet136" ></div>
<div id="bullet137" ></div>
<div id="bullet138" ></div>
<div id="bullet139" ></div>
<div id="bullet140" ></div>
<div id="bullet141" ></div>
<div id="bullet142" ></div>
<div id="bullet143" ></div>
<div id="bullet144" ></div>
<div id="bullet145" ></div>
<div id="bullet146" ></div>
<div id="bullet147" ></div>
<div id="bullet148" ></div>
<div id="bullet149" ></div>
<div id="bullet150" ></div>
<div id="bullet151" ></div>
<div id="bullet152" ></div>
<div id="bullet153" ></div>
<div id="bullet154" ></div>
<div id="bullet155" ></div>
<div id="bullet156" ></div>
<div id="bullet157" ></div>
<div id="bullet158" ></div>
<div id="bullet159" ></div>
<div id="bullet160" ></div>
<div id="bullet161" ></div>
<div id="bullet162" ></div>
<div id="bullet163" ></div>
<div id="bullet164" ></div>
<div id="bullet165" ></div>
<div id="bullet166" ></div>
<div id="bullet167" ></div>
<div id="bullet168" ></div>
<div id="bullet169" ></div>
<div id="bullet170" ></div>
<div id="bullet171" ></div>
<div id="bullet172" ></div>
<div id="bullet173" ></div>
<div id="bullet174" ></div>
<div id="bullet175" ></div>
<div id="bullet176" ></div>
<div id="bullet177" ></div>
<div id="bullet178" ></div>
<div id="bullet179" ></div>
<div id="bullet180" ></div>
<div id="bullet181" ></div>
<div id="bullet182" ></div>
<div id="bullet183" ></div>
<div id="bullet184" ></div>
<div id="bullet185" ></div>
<div id="bullet186" ></div>
<div id="bullet187" ></div>
<div id="bullet188" ></div>
<div id="bullet189" ></div>
<div id="bullet190" ></div>
<div id="bullet191" ></div>
<div id="bullet192" ></div>
<div id="bullet193" ></div>
<div id="bullet194" ></div>
<div id="bullet195" ></div>
<div id="bullet196" ></div>
<div id="bullet197" ></div>
<div id="bullet198" ></div>
<div id="bullet199" ></div>
<div id="bullet200" ></div>
<div id="bullet201" ></div>
<div id="bullet202" ></div>
<div id="bullet203" ></div>
<div id="bullet204" ></div>
<div id="bullet205" ></div>
<div id="bullet206" ></div>
<div id="bullet207" ></div>
<div id="bullet208" ></div>
<div id="bullet209" ></div>
<div id="bullet210" ></div>
<div id="bullet211" ></div>
<div id="bullet212" ></div>
<div id="bullet213" ></div>
<div id="bullet214" ></div>
<div id="bullet215" ></div>
<div id="bullet216" ></div>
<div id="bullet217" ></div>
<div id="bullet218" ></div>
<div id="bullet219" ></div>
<div id="bullet220" ></div>
<div id="bullet221" ></div>
<div id="bullet222" ></div>
<div id="bullet223" ></div>
<div id="bullet224" ></div>
<div id="bullet225" ></div>
<div id="bullet226" ></div>
<div id="bullet227" ></div>
<div id="bullet228" ></div>
<div id="bullet229" ></div>
<div id="bullet230" ></div>
<div id="bullet231" ></div>
<div id="bullet232" ></div>
<div id="bullet233" ></div>
<div id="bullet234" ></div>
<div id="bullet235" ></div>
<div id="bullet236" ></div>
<div id="bullet237" ></div>
<div id="bullet238" ></div>
<div id="bullet239" ></div>
<div id="bullet240" ></div>
<div id="bullet241" ></div>
<div id="bullet242" ></div>
<div id="bullet243" ></div>
<div id="bullet244" ></div>
<div id="bullet245" ></div>
<div id="bullet246" ></div>
<div id="bullet247" ></div>
<div id="bullet248" ></div>
<div id="bullet249" ></div>
<div id="bullet250" ></div>
<div id="bullet251" ></div>
<div id="bullet252" ></div>
<div id="bullet253" ></div>
<div id="bullet254" ></div>
<div id="bullet255" ></div>
<div id="bullet256" ></div>
<div id="bullet257" ></div>
<div id="bullet258" ></div>
<div id="bullet259" ></div>
<div id="bullet260" ></div>
<div id="bullet261" ></div>
<div id="bullet262" ></div>
<div id="bullet263" ></div>
<div id="bullet264" ></div>
<div id="bullet265" ></div>
<div id="bullet266" ></div>
<div id="bullet267" ></div>
<div id="bullet268" ></div>
<div id="bullet269" ></div>
<div id="bullet270" ></div>
<div id="bullet271" ></div>
<div id="bullet272" ></div>
<div id="bullet273" ></div>
<div id="bullet274" ></div>
<div id="bullet275" ></div>
<div id="bullet276" ></div>
<div id="bullet277" ></div>
<div id="bullet278" ></div>
<div id="bullet279" ></div>
<div id="bullet280" ></div>
<div id="bullet281" ></div>
<div id="bullet282" ></div>
<div id="bullet283" ></div>
<div id="bullet284" ></div>
<div id="bullet285" ></div>
<div id="bullet286" ></div>
<div id="bullet287" ></div>
<div id="bullet288" ></div>
<div id="bullet289" ></div>
<div id="bullet290" ></div>
<div id="bullet291" ></div>
<div id="bullet292" ></div>
<div id="bullet293" ></div>
<div id="bullet294" ></div>
<div id="bullet295" ></div>
<div id="bullet296" ></div>
<div id="bullet297" ></div>
<div id="bullet298" ></div>
<div id="bullet299" ></div>



		<div id="lifebar" >
			
		</div>
		<div id="score" >
			00
		</div>

<!-- 		<svg id="lightning" >
		  <path stroke="#aaffff" id="lightning" d="m153.869568,88l-21.760895,23.611115l22.891327,-0.231491l-26,26.620377l24.869568,-50z" stroke-width="5" fill="#aaffff"/>


		</svg>

		<embed src="images/lightning.svg" id="lightning-embed"/>
		<object type="image/svg+xml" data="images/lightning.svg"  id="lightning-object">
		</object> -->
    <script type="text/javascript">
    //loadGame(output);
    		var text = "null";
    		var output = ""; 
    checkFileAPI();
		    var reader; //GLOBAL File Reader object for demo purpose only

		    /**
		     * Check for the various File API support.
		     */
		    function checkFileAPI() {
		        if (window.File && window.FileReader && window.FileList && window.Blob) {
		            reader = new FileReader();
		            return true; 
		        } else {
		            alert('The File APIs are not fully supported by your browser. Fallback required.');
		            return false;
		        }
		    }

		    /**
		     * read text input
		     */
		    function readText(filePath) {
		        output = ""; //placeholder for text output
		        if(filePath.files && filePath.files[0]) {           
		            reader.onload = function (e) {
		                output = e.target.result;
		                text = displayContents(output);
		            };//end onload()
		            reader.readAsText(filePath.files[0]);
		        }//end if html5 filelist support
		        else if(ActiveXObject && filePath) { //fallback to IE 6-8 support via ActiveX
		            try {
		                reader = new ActiveXObject("Scripting.FileSystemObject");
		                var file = reader.OpenTextFile(filePath, 1); //ActiveX File Object
		                output = file.ReadAll(); //text contents of file
		                file.Close(); //close file "input stream"
		                text = displayContents(output);
		                
		            } catch (e) {
		                if (e.number == -2146827859) {
		                    alert('Unable to access local files due to browser security settings. ' + 
		                     'To overcome this, go to Tools->Internet Options->Security->Custom Level. ' + 
		                     'Find the setting for "Initialize and script ActiveX controls not marked as safe" and change it to "Enable" or "Prompt"'); 
		                }
		            }       
		        }
		        else { //this is where you could fallback to Java Applet, Flash or similar
		            return false;
		        }       

		        
		        return true;
		    }   

		    /**
		     * display content using a basic HTML replacement
		     */
		    function displayContents(txt) {
		        
		        return txt; //display output in DOM
		    }   

		    function getContent(){
		    	
		    	return text;
		    }
		</script>

		<div id="result">
			

		</div>
	</body>
</html>
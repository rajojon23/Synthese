
var choice = new Array();

$(document).ready(function () {

	$.fn.textWidth = function(text, font) {
		if (!$.fn.textWidth.fakeEl) $.fn.textWidth.fakeEl = $('<span>').hide().appendTo(document.body);
		$.fn.textWidth.fakeEl.text(text || this.val() || this.text()).css('font', font || this.css('font'));
		return $.fn.textWidth.fakeEl.width();
	};


	var ctx = document.getElementById('canvas').getContext("2d");

	var width = document.getElementById('canvas').width;
	var height = document.getElementById('canvas').height;

	var gameTitle = "GX Planet";
	var textFont = "50px Gabriola";
	ctx.font=textFont;
	var middle = $.fn.textWidth(gameTitle,textFont);
	ctx.fillText(gameTitle, (width/2)-middle+80,(height/2)-100);
	ctx.fillText("", (width/2)-middle+80,(height/2)-100);

	//loader le fichier de jeu
	document.getElementById('start').onclick = function(){
		removejscssfile("css/style.css", "css");
		removejscssfile("js/menu.js", "js")
		loadjscssfile("js/javascript.js", "js");
	}
	//loadjscssfile("js/javascript.js", "js");

	/*for(var i=0;i<)*/

	/*$(document).keydown(function(event){


	});
	*/



});

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
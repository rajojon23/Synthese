
// Permet de faire une rotation d'un élément pour un angle donné.
// Exemple : DIV à 45 degré.
//			 Prend le DIV dans son angle original (0) et fait une
//			 rotation de 45 degré.
// Note : Ce script ne fonctionne pas sous IE

function rotateElement(element, angle) {
    var properties = ['transform', 'WebkitTransform', 'MozTransform'];
    var p = null;
    var result = null;
    
    while (p = properties.shift()) {
        if (typeof element.style[p] != 'undefined') {
            result = p;
        }
    }
    
    if (result != null) {
    	element.style[result] = 'rotate(' + angle + 'deg)';
	}
}

// L'angle 0 correspond au nord (vers le haut)
// Exemple : getElementAngle(posElementX, posElementY, posSourisX, posSourisY)
//			 Ceci retournera l'angle de l'élément par rapport à la position de la souris
function getElementAngle(x1, y1, x2, y2) {
	var adj = x2 - x1;
	var opp = y2 - y1;
	
	var angle = Math.abs(Math.atan(opp/adj) * 180/Math.PI);
	
	if (adj > 0 && opp < 0 ) {
		angle = 90 - angle;
	}
	else if (adj >= 0 && opp >= 0) {
		angle += 90;
	}
	else if (adj < 0 && opp >= 0) {
		angle = 180 + (90 - angle);
	}
	else {
		angle += 270;
	}
	
	return angle;
}



function getElementAngle1(x1, y1, x2, y2) {
	var deltaY = y2 - y1;
	var deltaX = x2 - x1;
	
	/*var angle = (Math.atan2(deltaY, deltaX) * (180 / Math.PI) *-1) + 100 ;*/
	var angle = ((Math.atan2(deltaY, deltaX) * (180 / Math.PI))) ;
	return angle;
}

function getDistance(x1, y1, x2, y2){

	var dist = Math.sqrt((x2-x1)*(x2-x1) +(y2-y1)*(y2-y1));
	return dist;

}

function getAngle(v1,v2){



	var angleRad = Math.atan2(v1,v2);//atan2Normalized(v1,v2);//Math.atan2(v1,v2);/*(x1*y1 + x2*y2)/ ((Math.sqrt(Math.pow(x1, 2)+Math.pow(x2, 2)))*(Math.sqrt(Math.pow(y1, 2)+Math.pow(y2, 2))));*/

	var angleDeg = angleRad * 180 / Math.PI;
	return angleDeg;
}

function atan2Normalized(x,y) {
	    var result = Math.atan2(x, y);
	    if (result < 0) {
	        result += (2 * Math.PI);
	    }
	    return(result);
}

// Retourne la position de la souris X
// Exemple : <div onclick="alert(getMousePositionX(event))">...</div>
function getMousePositionX(e) {
	var IE = document.all?true:false;
	var tempX = 0;
	
	if (IE) { 
		tempX = event.clientX + document.body.scrollLeft;
	}
	else {  
		tempX = e.pageX;
	}  
	
	return tempX;
}

// Retourne la position de la souris Y
// Exemple : <div onclick="alert(getMousePositionY(event))">...</div>
function getMousePositionY(e) {
	var IE = document.all?true:false;
	var tempY = 0;
	
	if (IE) { 
		tempY = event.clientY + document.body.scrollLeft;
	}
	else {  
		tempY = e.pageY;
	}  
	
	return tempY;
}


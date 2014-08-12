
// Add message about surveillance WORKING TOO WELL - INJECTS ALL OVER THE PLACE
document.body.insertAdjacentHTML('afterend','<h1 id="message" style="position:absolute;left:0;top:0;padding:5px 10px;color:#888;font-size:2em;">Use caution. Facebook monitors your conversations.</h1>');

var body = document.body;
body.classList.add("deface");


//toggle css classes BROKEN
var cssSwitcher = function(){
  debugger;
var body = document.body;
  if(body.className.indexOf("deface") < 0){
  body.classList.add("deface");
}else{
  body.classList.remove("deface");
  }
}

// Untype and Retype title BROKEN
for(var char in document.title.length)
{document.title = document.title.substring(0, document.title.length-1);}
var newName = "deface";
for (var char in newName)
  {document.title[char] = newName[char];setTimeout(1000);}

// Change favicon BROKEN
(function() {
    var link = document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB9oFFAADATTAuQQAAAAZdEVYdENvbW1lbnQAQ3JlYXRlZCB3aXRoIEdJTVBXgQ4XAAAAEklEQVQ4y2NgGAWjYBSMAggAAAQQAAGFP6pyAAAAAElFTkSuQmCC';
    document.getElementsByTagName('head')[0].appendChild(link);
}());

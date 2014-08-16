//Apply CSS
// document.body.classList.add("deface");
//Apply title
// var titler = function(){document.title="deface"}
// setTimeout(titler,5000)

//Apply message
// <code id="cursor">|</code>

document.body.insertAdjacentHTML('beforebegin','<p class=cli >Deface is an open source project. check out the code <a href="http://github.com/basiclaser/deface"target="_blank">here.</a></p>');


setTimeout("document.body.insertAdjacentHTML('beforebegin','<p class=cli >Be careful. Facebook monitors your conversations.');",4000);

setTimeout("document.body.insertAdjacentHTML('beforebegin','<p class=cli >Say hi <a href=\"https://twitter.com/basiclaser\"target=\"_blank\">@basiclaser</a><span class=\"cursor\">|</span></p>');",8000);
//
// var addbutton = function(){document.body.insertAdjacentHTML('afterend','<h1>toggle deface</h1>');
// }
// setTimeout(addbutton,1000)

// var addbutton = function(){document.body.insertAdjacentHTML('afterend','<h1>toggle deface</h1>');
// }
// setTimeout(addbutton,1000)

// Add message about surveillance WORKING TOO WELL - INJECTS ALL OVER THE PLACE
// document.body.insertAdjacentHTML('afterend','<div style="width:20px; height:20px; background:#999; border-radius:100%;;left:0;top:0;padding:10px;z-index:999;" onclick="document.body.classList.remove(\'deface\');"></div>');
document.title = "deface";


//toggle css classes BROKEN
// document.body.insertAdjacentHTML('afterend','<script type="text/javascript">cssSwitcher = function(){document.body.classList.remove(\'deface\')};</script>');

// if(body.className.indexOf("deface") < 0){document.body.classList.add("deface");}else{document.body.classList.remove("deface");}

// Untype and Retype title BROKEN

// for(var i = 0; i < 8; i++){
// setTimeout(300,document.title = document.title.substring(0, document.title.length-1);)
// }

// Change favicon BROKEN
// (function() {
//     var link = document.createElement('link');
//     link.type = 'image/x-icon';
//     link.rel = 'shortcut icon';
//     link.href = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB9oFFAADATTAuQQAAAAZdEVYdENvbW1lbnQAQ3JlYXRlZCB3aXRoIEdJTVBXgQ4XAAAAEklEQVQ4y2NgGAWjYBSMAggAAAQQAAGFP6pyAAAAAElFTkSuQmCC';
//     document.getElementsByTagName('head')[0].appendChild(link);
// }());

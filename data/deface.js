//inject CSS
document.body.classList.add("deface");
//inject title
setTimeout(document.title="deface",5000);
//inject message

// document.body.insertAdjacentHTML('afterbegin','<p class=\"cli\" onclick=\"document.body.classList.remove(\'deface\');\">Toggle Deface</p>');

document.body.insertAdjacentHTML('beforebegin','<div id="defaceButton" onclick="if(document.body.classList.contains(\'deface\')){document.body.classList.remove(\'deface\');} else {document.body.classList.add(\'deface\');}"><p>d</p></div>');
// document.body.insertAdjacentHTML('afterbegin','<script>function toggleFunction(){
// if (document.body.classList.contains("deface")){document.body.classList.remove("deface");}else{document.body.classList.add("deface");}};
// </script>');

//if(document.body.classList.contains("deface")){document.body.classList.remove("deface");}else{document.body.classList.add("deface");}


document.body.insertAdjacentHTML('beforebegin','<p class=\"cli hideit\" >Deface is an open source project. check out the code <a href="http://github.com/basiclaser/deface"target="_blank">here.</a></p>');
setTimeout("document.body.insertAdjacentHTML('beforebegin','<p class=\"cli hideit\" >Be careful. Facebook monitors your conversations.');",3000);

setTimeout("document.body.insertAdjacentHTML('beforebegin','<p class=\"cli hideit\" ><a   href=\"https://twitter.com/basiclaser\"target=\"_blank\">@basiclaser</a><span class=\"cursor\">|</span></p>');",6000);


// var addbutton = function(){document.body.insertAdjacentHTML('afterend','<h1>toggle deface</h1>');
// }
// setTimeout(addbutton,1000)

// var addbutton = function(){document.body.insertAdjacentHTML('afterend','<h1>toggle deface</h1>');
// }
// setTimeout(addbutton,1000)
//
// setTimeout("document.body.insertAdjacentHTML('afterend','<div style=\"width:20px; height:20px; background:#999; border-radius:100%;;left:0;top:0;padding:10px;z-index:999;\" onclick=\"document.body.classList.remove('deface');\"></div>');",10000)


//toggle css classes BROKEN
document.body.insertAdjacentHTML('afterend','<script type="text/javascript">cssSwitcher=function(){document.body.classList.remove(\'deface\')};</script>');
if(body.className.indexOf("deface") < 0){document.body.classList.add("deface");}else{document.body.classList.remove("deface");}



// Change favicon BROKEN
// (function() {
//     var link = document.createElement('link');
//     link.type = 'image/x-icon';
//     link.rel = 'shortcut icon';
//     link.href = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB9oFFAADATTAuQQAAAAZdEVYdENvbW1lbnQAQ3JlYXRlZCB3aXRoIEdJTVBXgQ4XAAAAEklEQVQ4y2NgGAWjYBSMAggAAAQQAAGFP6pyAAAAAElFTkSuQmCC';
//     document.getElementsByTagName('head')[0].appendChild(link);
// }());

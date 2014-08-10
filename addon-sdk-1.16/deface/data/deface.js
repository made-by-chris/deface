// Add message about surveillance
document.body.insertAdjacentHTML('afterend','<h1 id="message" style="position:absolute;left:0;top:0;padding:5px 10px;color:#666;font-size:2em;">use caution. Facebook monitors your conversations.</h1>');

// Untype and Retype title
for(var char in document.title.length)
{document.title = document.title.substring(0, document.title.length-1);}
var newName = "deface";
for (var char in newName)
  {document.title[char] = newName[char];setTimeout(1000);}

// Change favicon

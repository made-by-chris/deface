//inject CSS
document.body.classList.add("deface");
//inject title
setTimeout(document.title="deface",5000);
//inject message

document.body.insertAdjacentHTML('afterbegin','<div id="defaceButton" class="selno" onclick="if(document.body.classList.contains(\'deface\')){document.body.classList.remove(\'deface\');} else {document.body.classList.add(\'deface\');}"></div></script>');


setTimeout("document.body.insertAdjacentHTML('beforeend','<p style=\"font-size:1rem;position:fixed;left:50px;top:0;\" class=\"selno cli\" >Welcome. Be careful. All conversations are monitored.<a href=\"http://github.com/basiclaser\" target=\"_blank\"> @basiclaser</a><span class=\"cursor\">|</span></p>');",3000);

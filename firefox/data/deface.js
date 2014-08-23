//inject CSS
document.body.classList.add("deface");
//inject title
setTimeout("document.title=\"deface\"",7000);
//inject message
setTimeout("document.body.insertAdjacentHTML('beforeend','<p style=\"font-size:1rem;position:fixed;left:50px;top:0;\" class=\"selno cli\" >Be careful. All conversations are monitored. <a href=\"https://twitter.com/basiclaser\" target=\"_blank\">deface</a><span class=\"cursor\">|</span></p>');",3000);

//inject toggle icon
var html = document.createElement('div');
    html.innerHTML = '<div id="defaceButton" class="selno" ></div>';
document.body.appendChild(html);

document.getElementById('defaceButton').addEventListener('click', function() {
    if (document.body.classList.contains('deface')) {
        document.body.classList.remove('deface');
        setTimeout('document.body.classList.add(\'deface\')',30000);
    } else {
        document.body.classList.add('deface');
    }
});

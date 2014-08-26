//splash
// document.body.insertAdjacentHTML('afterbegin','<div id=\"splash\"></div>');

//inject CSS
document.body.classList.add("deface");
//inject title
// setInterval("document.title=\"deface\"",5000);
//inject message
setTimeout("document.body.insertAdjacentHTML('beforeend','<p style=\"font-size:1rem;position:fixed;left:50px;top:0;\" class=\"selno cli\" >Be careful. All conversations are monitored. <a href=\"https://twitter.com/basiclaser\" target=\"_blank\">deface</a><span class=\"cursor\">|</span></p>');",3000);

//inject toggle icon
var html = document.createElement('div');
    html.innerHTML = '<div id="defaceButton" class="selno" ></div>';
document.body.appendChild(html);

document.getElementById('defaceButton').addEventListener('click', function() {
    if (document.body.classList.contains('deface')) {
        document.body.classList.remove('deface');
        // setTimeout('document.body.classList.add(\'deface\');',60000);
    } else {
        document.body.classList.add('deface');
    }
});

// // FADE OUT THE FLASH SCREEN
// var splash = document.getElementById("splash");
//
// function fadeout(el) {
//   el.style.opacity = 1;
//
//   var tick = function() {
//     el.style.opacity = el.style.opacity - 0.1
//     if (+el.style.opacity > 0) {
//       (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16)
//     }
//     // if(+el.style.opacity == 0){splash.style.display = 'none';}
//   };
//
//   tick();
// }
// setTimeout('fadeout(splash);',3000);
// splash.style.display = 'none'

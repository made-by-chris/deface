//splash
// document.body.insertAdjacentHTML('afterbegin','<div id=\"splash\"></div>');

document.body.classList.add("deface");
document.body.classList.add('heighty');

setInterval('document.title="deface"',5000);


//inject toggle icon
var html = document.createElement('div');
    html.innerHTML = '<div id="defaceButton" class="selno" ></div><div id="arrow-left" class="hide-options" ></div><div id="options" class="hide-options"><ul><li id="quick-peek">quick peek</li><hr ><li id="deface-off">deface off</li><hr ><li id="toggle-height">toggle height</li></ul></div>';
document.body.appendChild(html);

//inject message
// setTimeout("document.body.insertAdjacentHTML('beforeend','<p style=\"font-size:1rem;position:fixed;left:50px;top:0;\" class=\"selno cli\" >Be careful. All conversations are monitored. <a href=\"https://twitter.com/basiclaser\" target=\"_blank\">deface</a><span class=\"cursor\">|</span></p>');",3000);

var defaceButton = document.getElementById('defaceButton');
var options = document.getElementById('options')
var arrowleft = document.getElementById('arrow-left')
var quickpeek = document.getElementById('quick-peek')
var defaceoff = document.getElementById('deface-off')
var toggleheight = document.getElementById('toggle-height')

defaceButton.addEventListener('click', function() {
    if (document.body.classList.contains('deface')) {
      if (options.classList.contains('hide-options')) {
        options.classList.remove('hide-options');
        arrowleft.classList.remove('hide-options');
      } else {
          options.classList.add('hide-options'); 
          arrowleft.classList.add('hide-options');

          arrowleft.classList.add('hide-options');

      }
    } else {document.body.classList.add('deface');}
    
});

quickpeek.addEventListener('click', function() {
    if (document.body.classList.contains('deface')) {
      document.body.classList.remove('deface');
      options.classList.add('hide-options'); 
      arrowleft.classList.add('hide-options');
      setTimeout(function () { document.body.classList.add('deface') },30000);
    } else {
        document.body.classList.add('deface');
    }
});

defaceoff.addEventListener('click', function() {
      document.body.classList.remove('deface');
      options.classList.add('hide-options'); 
      arrowleft.classList.add('hide-options');

});

toggleheight.addEventListener('click', function() {
      if (document.body.classList.contains('heighty')) {
        document.body.classList.remove('heighty');
        options.classList.add('hide-options'); 
        arrowleft.classList.add('hide-options');

      } else {
          document.body.classList.add('heighty');
          options.classList.add('hide-options'); 
          arrowleft.classList.add('hide-options');

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

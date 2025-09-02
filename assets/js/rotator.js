(function(){
  "use strict";
  var el = document.querySelector(".rotator");
  if (!el) return;
  var phrases = [];
  try { phrases = JSON.parse(el.getAttribute("data-phrases")) || []; } catch(e){}
  if (!phrases.length) return;
  el.textContent = phrases[0];
  if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  var i = 0, hold = 2600, fade = 220, timer;
  var cycle = function(){
    timer = setTimeout(function(){
      el.classList.add("is-hidden");
      setTimeout(function(){
        i = (i + 1) % phrases.length;
        el.textContent = phrases[i];
        el.classList.remove("is-hidden");
        cycle();
      }, fade);
    }, hold);
  };
  document.addEventListener("visibilitychange", function(){
    if (document.hidden && timer) { clearTimeout(timer); }
    else if (!document.hidden) { cycle(); }
  });
  cycle();
})();
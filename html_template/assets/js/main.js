/* --------------------------------------------
  DOCUMENT.READY
--------------------------------------------- */
$(document).ready(function(){
  'use strict';

  window.sr = ScrollReveal({ reset: false, mobile: false });

  var topLight = {
    origin   : "top",
    distance : "0.5em",
    duration : 1500,
    scale    : 3.05,
  }
  var rightLight = {
    origin   : "right",
    distance : "0.5em",
    duration : 1600,
    scale    : 3.05,
  }

  var topLight = {
    origin   : "top",
    distance : "0em",
    duration : 1000,
    delay    : 1000,
    scale    : 1,
  }
  var background = {
    origin   : "bottom",
    distance : "0em",
    duration : 300,
    delay    : 100,
    scale    : 1,
  }

  var block = {
    reset: true,
    viewOffset: { top: 64 }
  }

  sr.reveal(".s01, .s02, .s03", topLight)
  sr.reveal(".s04, .s05", rightLight)
  sr.reveal(".scene-background-purple", background)
  sr.reveal(".scene-city", topLight)
  sr.reveal(".scene-entrepreneur", topLight)
  sr.reveal(".scene-genetic", topLight)
  sr.reveal(".scene-world", topLight)


});

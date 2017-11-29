/* --------------------------------------------
  DOCUMENT.READY
--------------------------------------------- */
$(document).ready(function(){
  'use strict';

  window.sr = ScrollReveal({ reset: true, mobile: true });

  var topLight = {
    origin   : "top",
    distance : "100px",
    duration : 1500,
    scale    : 3.05,
  }
  var rightLight = {
    origin   : "right",
    distance : "100px",
    duration : 2000,
    scale    : 5.05,
  }

  var intro = {
    origin   : "bottom",
    distance : "64px",
    duration : 900,
    delay    : 1500,
    scale    : 1,
  }

  var github = {
    origin   : "top",
    distance : "32px",
    duration : 600,
    delay    : 1800,
    scale    : 0,
  }

  var block = {
    reset: true,
    viewOffset: { top: 64 }
  }

  sr.reveal(".s01, .s02, .s03", topLight)
  sr.reveal(".s04, .s05", rightLight)

});

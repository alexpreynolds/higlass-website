/* Copyright HiGlass Team: HiGlass Launcher */
!(function(e,o){"object"==typeof exports&&"undefined"!=typeof module?o(require("hglib")):"function"==typeof define&&define.amd?define(["hglib"],o):o(e.hglib)})(this,(function(e){"use strict";function o(e){var o=e.split("+").join(" "),n={},t=void 0,i=/[?&]?([^=]+)=([^&]*)/g;for(t=i.exec(o);t;)n[decodeURIComponent(t[1])]=decodeURIComponent(t[2]),t=i.exec(o);return n}var n=o(document.location.search),t=n.config?n.config:"G8DKPkbdT8i57a3t9TObPA";e.HgComponent(document.querySelector("#higlass"),"http://52.45.229.11/viewconfs/?d="+t)}));
//# sourceMappingURL=hg-launcher.js.map
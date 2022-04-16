// ==UserScript==
// @name         astolfo overlay
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  the astolfo.co alliance overlay
// @author       Adcoss95, JulieM-Dev, LuKill, embed
// @match        https://rplace.tk/
// @grant        none
// ==/UserScript==
window.addEventListener('load', () => {
    document.getElementById("canvparent2").appendChild(
        (function () {
            const i = document.createElement("img");
            i.src = "https://github.com/embedvr/astolfo-place/raw/main/overlay_2.png";
            i.style = "position: absolute;left: 0;top: 0;image-rendering: pixelated;width: 2000px;height: 2000px;pointer-events: none;";
            console.log(i);
            document.addEventListener("keydown", function(event) {
                if(event.key == "F4"){
                    if (i.style.display === "none") {
                        i.style.display = "block";
                    } else {
                        i.style.display = "none";
                    }
                }
            });
            return i;
        })())

}, false);

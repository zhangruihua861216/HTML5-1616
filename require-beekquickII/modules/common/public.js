var evt = "onorientationchange" in window ? "orientationchange" : "resize";
var doc = document.documentElement;
window.addEventListener(evt, _resize, false);
window.addEventListener("DOMContentLoaded", _resize);

function _resize() {
    doc.style.fontSize = 10 * (doc.clientWidth / 320) + "px";
}

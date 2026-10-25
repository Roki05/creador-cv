// Páginas de ejemplos por profesión: ajusta el tamaño del currículum de muestra
// y, al pulsar «Usar este ejemplo», lo abre en el editor.
// Los datos del ejemplo solo pasan de una página a otra dentro del navegador.
(function () {
  "use strict";
  var PENDING_KEY = "cvgratis:ejemplo-pendiente"; // Lo lee js/app.js al abrir el editor
  var A4_WIDTH_PX = 794;

  document.documentElement.classList.add("js");

  function fit() {
    Array.prototype.forEach.call(document.querySelectorAll(".example-cv .page-holder"), function (holder) {
      var page = holder.querySelector(".page");
      var available = holder.parentElement.clientWidth;
      if (!page || available <= 0) return;
      var scale = Math.min(1, available / A4_WIDTH_PX);
      page.style.transform = "scale(" + scale + ")";
      holder.style.width = A4_WIDTH_PX * scale + "px";
      holder.style.height = page.offsetHeight * scale + "px";
    });
  }

  function useExample(e) {
    var link = e.target.closest("[data-use-example]");
    if (!link) return;
    var data = document.getElementById("cv-example");
    if (!data) return;
    try {
      window.sessionStorage.setItem(PENDING_KEY, data.textContent);
    } catch (err) {
      return; // Sin almacenamiento (modo muy privado): el enlace abre el editor vacío
    }
    e.preventDefault();
    window.location.href = link.href;
  }

  function init() {
    fit();
    if ("ResizeObserver" in window) {
      var box = document.querySelector(".example-scroll");
      if (box) new ResizeObserver(fit).observe(box);
    } else {
      window.addEventListener("resize", fit);
    }
    document.addEventListener("click", useExample);
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();

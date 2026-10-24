// Anuncios de Google AdSense + aviso de cookies.
// El aviso de cookies lo muestra Google (mensaje "Normativa europea" de AdSense,
// una CMP certificada por Google) en cuanto se carga el script de AdSense.
// Mientras "adsenseClient" esté vacío en js/config.js, no se carga nada de Google
// y no hay cookies de terceros, así que tampoco hace falta aviso.
(function () {
  "use strict";
  var config = window.CV_CONFIG || {};
  var client = (config.adsenseClient || "").trim();
  if (!/^ca-pub-\d+$/.test(client)) return; // Sin configurar: sin anuncios ni cookies

  // Coloca los anuncios solo en los huecos previstos (fuera del editor y del PDF).
  var slots = document.querySelectorAll("[data-ad-slot]");
  Array.prototype.forEach.call(slots, function (box) {
    var id = (config.adSlots || {})[box.getAttribute("data-ad-slot")];
    if (!id) return;
    var ins = document.createElement("ins");
    ins.className = "adsbygoogle";
    ins.style.display = "block";
    ins.setAttribute("data-ad-client", client);
    ins.setAttribute("data-ad-slot", id);
    ins.setAttribute("data-ad-format", "auto");
    ins.setAttribute("data-full-width-responsive", "true");
    box.appendChild(ins);
    box.hidden = false;
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  });

  // Enlace "Configurar cookies": vuelve a abrir el aviso para cambiar o retirar el consentimiento.
  window.googlefc = window.googlefc || {};
  window.googlefc.callbackQueue = window.googlefc.callbackQueue || [];
  window.googlefc.callbackQueue.push({
    CONSENT_API_READY: function () {
      document.querySelectorAll("[data-cookie-settings]").forEach(function (btn) {
        btn.hidden = false;
        btn.addEventListener("click", function () { window.googlefc.showRevocationMessage(); });
      });
    }
  });

  // El script se carga aunque aún no haya huecos configurados: Google lo necesita
  // para revisar la web y para mostrar el aviso de cookies.
  var s = document.createElement("script");
  s.async = true;
  s.crossOrigin = "anonymous";
  s.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=" + encodeURIComponent(client);
  document.head.appendChild(s);
})();

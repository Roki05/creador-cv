// Coloca los anuncios solo en los huecos previstos (fuera del editor y del PDF).
(function () {
  "use strict";
  var config = window.CV_CONFIG || {};
  var client = (config.adsenseClient || "").trim();
  if (!/^ca-pub-\d+$/.test(client)) return; // Sin configurar: sin anuncios

  var slots = document.querySelectorAll("[data-ad-slot]");
  var used = 0;
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
    used++;
  });
  if (!used) return;

  var s = document.createElement("script");
  s.async = true;
  s.crossOrigin = "anonymous";
  s.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=" + encodeURIComponent(client);
  document.head.appendChild(s);
})();

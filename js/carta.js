// Carta de presentación: formulario, vista previa en directo y descarga en PDF.
// Reutiliza los datos del currículum guardados en este navegador.
// Todo ocurre en el navegador. Nada se envía a ningún servidor.
(function () {
  "use strict";

  var STORAGE_KEY = "cvgratis:carta";
  var CV_KEY = "cvgratis:datos";     // Donde guarda el currículum la página principal
  var LANG_KEY = "cvgratis:idioma";
  var SKIP_KEY = "cvgratis:sin-aviso-pdf";
  var LANGS = Object.keys(window.CARTA_I18N);
  var SENDER_KEYS = ["name", "title", "email", "phone", "location", "link"];
  var RECIPIENT_KEYS = ["job", "company", "contact", "ref", "address"];
  var TEXT_KEYS = ["template", "accent", "lang", "place", "date", "subject", "greeting", "body", "closing"];

  // ---------- Almacenamiento local (solo en este navegador) ----------
  function storageGet(key) {
    try { return window.localStorage.getItem(key); } catch (e) { return null; }
  }
  function storageSet(key, value) {
    try { window.localStorage.setItem(key, value); } catch (e) { /* modo privado: no pasa nada */ }
  }
  function storageRemove(key) {
    try { window.localStorage.removeItem(key); } catch (e) { /* idem */ }
  }

  function detectLang() {
    var fromUrl = new URLSearchParams(location.search).get("lang");
    if (fromUrl && LANGS.indexOf(fromUrl) !== -1) return fromUrl;
    var saved = storageGet(LANG_KEY);
    if (saved && LANGS.indexOf(saved) !== -1) return saved;
    var nav = (navigator.language || "es").slice(0, 2).toLowerCase();
    return LANGS.indexOf(nav) !== -1 ? nav : "es";
  }

  var uiLang = detectLang();

  function emptyState(lang) {
    var s = { template: "clasica", accent: "#1f5f8b", lang: lang, sender: {}, recipient: {} };
    ["place", "date", "subject", "greeting", "body", "closing"].forEach(function (k) { s[k] = ""; });
    SENDER_KEYS.forEach(function (k) { s.sender[k] = ""; });
    RECIPIENT_KEYS.forEach(function (k) { s.recipient[k] = ""; });
    return s;
  }

  function normalize(data) {
    var base = emptyState(uiLang);
    if (!data || typeof data !== "object") return base;
    TEXT_KEYS.forEach(function (k) { if (typeof data[k] === "string") base[k] = data[k]; });
    if (LANGS.indexOf(base.lang) === -1) base.lang = uiLang;
    [["sender", SENDER_KEYS], ["recipient", RECIPIENT_KEYS]].forEach(function (pair) {
      var src = data[pair[0]];
      if (!src || typeof src !== "object") return;
      pair[1].forEach(function (k) { if (typeof src[k] === "string") base[pair[0]][k] = src[k]; });
    });
    return base;
  }

  // Lee el currículum guardado por la página principal (o null si no hay).
  function readCV() {
    var raw = storageGet(CV_KEY);
    if (!raw) return null;
    try {
      var cv = JSON.parse(raw);
      return cv && typeof cv === "object" ? cv : null;
    } catch (e) { return null; }
  }

  function cvHasPersonal(cv) {
    return !!(cv && cv.personal && SENDER_KEYS.some(function (k) { return clean(cv.personal[k]); }));
  }

  // Copia nombre, contacto, plantilla, color e idioma del currículum a la carta.
  function copyFromCV(target, cv) {
    SENDER_KEYS.forEach(function (k) {
      target.sender[k] = cv.personal && typeof cv.personal[k] === "string" ? cv.personal[k] : "";
    });
    if (typeof cv.template === "string") target.template = cv.template;
    if (typeof cv.accent === "string") target.accent = cv.accent;
    if (LANGS.indexOf(cv.cvLang) !== -1) target.lang = cv.cvLang;
  }

  var copiedOnStart = false;
  function loadState() {
    var raw = storageGet(STORAGE_KEY);
    if (raw) {
      try { return normalize(JSON.parse(raw)); } catch (e) { /* datos dañados: empezamos de cero */ }
    }
    // Primera visita: si ya hay un currículum, aprovechamos sus datos.
    var fresh = emptyState(uiLang);
    var cv = readCV();
    if (cvHasPersonal(cv)) {
      copyFromCV(fresh, cv);
      copiedOnStart = true;
    }
    return fresh;
  }

  var state = loadState();
  var saveTimer = null;
  function saveSoon() {
    clearTimeout(saveTimer);
    saveTimer = setTimeout(saveNow, 300);
  }
  function saveNow() {
    if (!saveTimer) return;
    clearTimeout(saveTimer);
    saveTimer = null;
    storageSet(STORAGE_KEY, JSON.stringify(state));
  }

  // ---------- Utilidades ----------
  function t(key) {
    var own = window.CARTA_I18N[uiLang].ui;
    if (own[key] != null) return own[key];
    var common = window.I18N[uiLang] ? window.I18N[uiLang].ui : {};
    if (common[key] != null) return common[key];
    return window.CARTA_I18N.es.ui[key] != null ? window.CARTA_I18N.es.ui[key] : window.I18N.es.ui[key];
  }
  function L() { return window.CARTA_I18N[state.lang].letter; }
  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }
  function clean(s) { return typeof s === "string" ? s.trim() : ""; }
  function $(sel) { return document.querySelector(sel); }
  function $all(sel) { return Array.prototype.slice.call(document.querySelectorAll(sel)); }

  function getPath(path) {
    return path.split(".").reduce(function (o, k) { return o ? o[k] : ""; }, state);
  }
  function setPath(path, value) {
    var parts = path.split(".");
    var obj = state;
    for (var i = 0; i < parts.length - 1; i++) obj = obj[parts[i]];
    obj[parts[parts.length - 1]] = value;
  }

  function todayISO() {
    var d = new Date();
    return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
  }
  function parseISO(s) {
    var m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(s || "");
    return m ? new Date(+m[1], +m[2] - 1, +m[3]) : new Date();
  }

  // ---------- Textos automáticos (se usan mientras el campo esté vacío) ----------
  function autoValues() {
    var r = state.recipient;
    return {
      place: clean(state.sender.location),
      subject: L().subject(lowerFirst(clean(r.job)), clean(r.ref)),
      greeting: L().greeting(clean(r.contact)),
      closing: L().closing
    };
  }
  function value(key) { return clean(state[key]) || autoValues()[key]; }

  function refreshAutoPlaceholders() {
    var auto = autoValues();
    Object.keys(auto).forEach(function (k) {
      var el = document.querySelector('[data-path="' + k + '"]');
      if (el) el.placeholder = auto[k];
    });
    // La fecha vacía significa «hoy»: así no se queda antigua al volver otro día.
    var date = $('[data-path="date"]');
    if (!state.date && document.activeElement !== date) date.value = todayISO();
  }

  // ---------- Textos de la interfaz ----------
  function applyUI() {
    document.documentElement.lang = uiLang;
    document.title = t("metaTitle");
    var meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", t("metaDescription"));
    $all("[data-i18n]").forEach(function (el) { el.textContent = t(el.getAttribute("data-i18n")); });
    $all("[data-i18n-ph]").forEach(function (el) { el.placeholder = t(el.getAttribute("data-i18n-ph")); });
    $("#ui-lang").value = uiLang;
    refreshAutoPlaceholders();
  }

  function fillFields() {
    $all("[data-path]").forEach(function (el) { el.value = getPath(el.getAttribute("data-path")) || ""; });
    refreshAutoPlaceholders();
  }

  function onInput(e) {
    var el = e.target;
    if (!el.hasAttribute("data-path")) return;
    var path = el.getAttribute("data-path");
    // Si se borra la fecha, volvemos a «hoy».
    setPath(path, path === "date" && el.value === todayISO() ? "" : el.value);
    refreshAutoPlaceholders();
    saveSoon();
    schedulePreview();
  }

  // ---------- Vista previa de la carta ----------
  function paragraphs(s) {
    // Cada línea es un párrafo; las que empiezan por guion forman una lista.
    var lines = (s || "").split(/\r?\n/).map(function (l) { return l.trim(); }).filter(Boolean);
    var html = "";
    var inList = false;
    lines.forEach(function (line) {
      var bullet = /^[-•*·]\s*/.test(line);
      if (bullet && !inList) { html += "<ul>"; inList = true; }
      if (!bullet && inList) { html += "</ul>"; inList = false; }
      html += bullet ? "<li>" + esc(line.replace(/^[-•*·]\s*/, "")) + "</li>" : "<p>" + esc(line) + "</p>";
    });
    if (inList) html += "</ul>";
    return html;
  }

  function linkHref(s) {
    s = clean(s);
    if (!s) return "";
    return /^https?:\/\//i.test(s) ? s : "https://" + s;
  }

  function lines(s) {
    return (s || "").split(/\r?\n/).map(clean).filter(Boolean).map(esc).join("<br>");
  }

  function buildLetter() {
    var p = state.sender;
    var r = state.recipient;
    var contact = [];
    if (clean(p.email)) contact.push('<a href="mailto:' + esc(clean(p.email)) + '">' + esc(clean(p.email)) + "</a>");
    if (clean(p.phone)) contact.push(esc(clean(p.phone)));
    if (clean(p.location)) contact.push(esc(clean(p.location)));
    if (clean(p.link)) contact.push('<a href="' + esc(linkHref(p.link)) + '">' + esc(clean(p.link).replace(/^https?:\/\//i, "")) + "</a>");

    var to = [clean(r.contact), clean(r.company)].filter(Boolean).map(esc);
    if (clean(r.address)) to.push(lines(r.address));

    var accent = /^#[0-9a-f]{6}$/i.test(state.accent) ? state.accent : "#1f5f8b";
    var tpl = ["clasica", "moderna", "compacta"].indexOf(state.template) !== -1 ? state.template : "clasica";
    var subject = value("subject");
    var body = clean(state.body)
      ? paragraphs(state.body)
      : '<p class="is-empty">' + esc(L().bodyPlaceholder) + "</p>";

    return '<article class="cv letter tpl-' + tpl + " letter-" + state.lang + '" lang="' + state.lang + '" style="--accent:' + accent + '">' +
      '<header class="cv-head">' +
        '<h1 class="cv-name' + (clean(p.name) ? "" : " is-empty") + '">' + esc(clean(p.name) || L().namePlaceholder) + "</h1>" +
        (clean(p.title) ? '<p class="cv-title">' + esc(clean(p.title)) + "</p>" : "") +
        (contact.length ? '<p class="cv-contact">' + contact.join('<span class="sep"> | </span>') + "</p>" : "") +
      "</header>" +
      (to.length ? '<p class="cl-to">' + to.join("<br>") + "</p>" : "") +
      '<p class="cl-date">' + esc(L().date(value("place"), parseISO(state.date))) + "</p>" +
      (subject ? '<p class="cl-subject"><strong>' + esc(L().subjectLabel) + ":</strong> " + esc(subject) + "</p>" : "") +
      '<p class="cl-greeting">' + esc(value("greeting")) + "</p>" +
      '<div class="cl-body">' + body + "</div>" +
      '<p class="cl-closing">' + esc(value("closing")) + "</p>" +
      (clean(p.name) ? '<p class="cl-sign">' + esc(clean(p.name)) + "</p>" : "") +
    "</article>";
  }

  var previewQueued = false;
  function schedulePreview() {
    if (previewQueued) return;
    previewQueued = true;
    requestAnimationFrame(function () { previewQueued = false; renderPreview(); });
  }

  var A4_HEIGHT_PX = 1123;
  var A4_WIDTH_PX = 794;

  function renderPreview() {
    $("#letter-page").innerHTML = buildLetter();
    fitPreview();
  }

  function fitPreview() {
    var holder = $("#page-holder");
    var page = $("#letter-page");
    var available = holder.parentElement.clientWidth - 2;
    if (available <= 0) return;
    var scale = Math.min(1, available / A4_WIDTH_PX);
    page.style.transform = "scale(" + scale + ")";
    holder.style.width = A4_WIDTH_PX * scale + "px";
    holder.style.height = page.offsetHeight * scale + "px";
    var pages = Math.max(1, Math.ceil((page.offsetHeight - 4) / A4_HEIGHT_PX));
    var count = $("#page-count");
    count.textContent = pages === 1 ? t("pages1") : t("pagesN").replace("{n}", pages);
    count.classList.toggle("warn", pages > 1);
  }

  // ---------- Borrador a partir del currículum ----------
  function draftData() {
    var cv = readCV() || {};
    var exp = (Array.isArray(cv.experience) ? cv.experience : []).filter(function (x) { return x && clean(x.role); })[0] || {};
    var skills = typeof cv.skills === "string" ? cv.skills.split(/[,;\n]/).map(clean).filter(Boolean).slice(0, 4) : [];
    return {
      job: lowerFirst(clean(state.recipient.job)),
      company: clean(state.recipient.company),
      ref: clean(state.recipient.ref),
      title: clean(state.sender.title),
      role: lowerFirst(clean(exp.role)),
      employer: clean(exp.company).replace(/\.+$/, ""),
      current: !clean(exp.end) || /actual|aujourd|présent|present|hoy|now/i.test(exp.end),
      skills: skills
    };
  }

  // «Administrativa contable» → «administrativa contable» (pero «SAP» se queda igual)
  function lowerFirst(s) {
    return /^[A-ZÁÉÍÓÚÑÀÈÂÊÎÔÛÇ][a-záéíóúñàèâêîôûç]/.test(s) ? s.charAt(0).toLowerCase() + s.slice(1) : s;
  }

  // ---------- Descarga en PDF (impresión del navegador) ----------
  function fileTitle() {
    var name = clean(state.sender.name);
    var word = state.lang === "fr" ? "Lettre de motivation" : "Carta de presentacion";
    return word + (name ? " - " + name : "");
  }

  function preparePrint() {
    $("#print-root").innerHTML =
      '<table class="print-wrap"><thead><tr><td><div class="print-space"></div></td></tr></thead>' +
      '<tbody><tr><td>' + buildLetter() + "</td></tr></tbody>" +
      '<tfoot><tr><td><div class="print-space"></div></td></tr></tfoot></table>';
  }

  function doPrint() {
    preparePrint();
    var oldTitle = document.title;
    document.title = fileTitle();
    var restore = function () { document.title = oldTitle; window.removeEventListener("afterprint", restore); };
    window.addEventListener("afterprint", restore);
    window.print();
    setTimeout(restore, 1000);
  }

  function startDownload() {
    var dialog = $("#pdf-dialog");
    if (storageGet(SKIP_KEY) === "1" || typeof dialog.showModal !== "function") {
      doPrint();
      return;
    }
    $("#pdf-skip").checked = false;
    dialog.showModal();
  }

  function setState(next) {
    state = next;
    fillFields();
    saveSoon();
    renderPreview();
  }

  function showTab(which) {
    var preview = which === "preview";
    $("#app").classList.toggle("show-preview", preview);
    $("#tab-edit").setAttribute("aria-selected", String(!preview));
    $("#tab-preview").setAttribute("aria-selected", String(preview));
    if (preview) fitPreview();
    var top = $("#app").getBoundingClientRect().top + window.scrollY - $(".topbar").offsetHeight - $(".tabs").offsetHeight;
    if (window.scrollY > top) window.scrollTo(0, top);
  }

  // ---------- Arranque ----------
  function init() {
    applyUI();
    fillFields();
    renderPreview();
    if (copiedOnStart) {
      $("#cv-note").hidden = false;
      saveSoon();
    }

    var form = $("#editor");
    form.addEventListener("input", onInput);
    form.addEventListener("change", onInput);

    $("#ui-lang").addEventListener("change", function (e) {
      var prev = uiLang;
      uiLang = e.target.value;
      storageSet(LANG_KEY, uiLang);
      if (state.lang === prev) { state.lang = uiLang; fillFields(); saveSoon(); }
      applyUI();
      renderPreview();
    });

    $("#btn-download").addEventListener("click", startDownload);
    $("#btn-download-2").addEventListener("click", startDownload);
    $("#pdf-cancel").addEventListener("click", function () { $("#pdf-dialog").close(); });
    $("#pdf-ok").addEventListener("click", function () {
      if ($("#pdf-skip").checked) storageSet(SKIP_KEY, "1");
      $("#pdf-dialog").close();
      doPrint();
    });

    $("#btn-from-cv").addEventListener("click", function () {
      var cv = readCV();
      if (!cvHasPersonal(cv)) { alert(t("noCV")); return; }
      var dirty = SENDER_KEYS.some(function (k) { return clean(state.sender[k]); });
      if (dirty && !confirm(t("confirmFromCV"))) return;
      var next = normalize(state);
      copyFromCV(next, cv);
      setState(next);
    });

    $("#btn-draft").addEventListener("click", function () {
      if (clean(state.body) && !confirm(t("confirmDraft"))) return;
      state.body = L().draft(draftData());
      $('[data-path="body"]').value = state.body;
      saveSoon();
      renderPreview();
    });

    $("#btn-example").addEventListener("click", function () {
      var dirty = clean(state.body) || clean(state.recipient.company);
      if (dirty && !confirm(t("confirmExample"))) return;
      var ex = JSON.parse(JSON.stringify(window.CARTA_EXAMPLES[uiLang] || window.CARTA_EXAMPLES.es));
      ex.template = state.template; ex.accent = state.accent; ex.lang = uiLang;
      setState(normalize(ex));
    });
    $("#btn-clear").addEventListener("click", function () {
      if (!confirm(t("confirmClear"))) return;
      var fresh = emptyState(uiLang);
      fresh.template = state.template; fresh.accent = state.accent;
      storageRemove(STORAGE_KEY);
      $("#cv-note").hidden = true;
      setState(fresh);
    });

    $("#tab-edit").addEventListener("click", function () { showTab("edit"); });
    $("#tab-preview").addEventListener("click", function () { showTab("preview"); });

    if ("ResizeObserver" in window) {
      new ResizeObserver(fitPreview).observe($("#page-holder").parentElement);
    } else {
      window.addEventListener("resize", fitPreview);
    }
    window.addEventListener("beforeprint", preparePrint);
    window.addEventListener("pagehide", saveNow);
    document.addEventListener("visibilitychange", function () { if (document.hidden) saveNow(); });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();

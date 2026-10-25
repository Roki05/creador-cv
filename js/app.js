// Lógica principal: formulario, vista previa en directo y descarga en PDF.
// Todo ocurre en el navegador. Nada se envía a ningún servidor.
(function () {
  "use strict";

  var STORAGE_KEY = "cvgratis:datos";
  var LANG_KEY = "cvgratis:idioma";
  var SKIP_KEY = "cvgratis:sin-aviso-pdf";
  var PENDING_KEY = "cvgratis:ejemplo-pendiente"; // Lo deja js/ejemplo.js (páginas por profesión)
  var LANGS = Object.keys(window.I18N);

  // Campos de cada elemento de las listas repetibles.
  var LIST_DEFS = {
    experience: {
      item: "itemExperience",
      fields: [
        { key: "role", label: "fRole" },
        { key: "company", label: "fCompany" },
        { key: "city", label: "fCity" },
        { key: "start", label: "fStart", ph: "phDate", half: true },
        { key: "end", label: "fEnd", ph: "phEnd", half: true },
        { key: "desc", label: "fDesc", ph: "phDesc", textarea: true }
      ]
    },
    education: {
      item: "itemEducation",
      fields: [
        { key: "degree", label: "fDegree" },
        { key: "school", label: "fSchool" },
        { key: "city", label: "fCity" },
        { key: "start", label: "fStart", ph: "phDate", half: true },
        { key: "end", label: "fEnd", ph: "phDate", half: true },
        { key: "desc", label: "fDesc", textarea: true }
      ]
    },
    languages: {
      item: "itemLanguage",
      fields: [
        { key: "name", label: "fLangName", ph: "phLangName", half: true },
        { key: "level", label: "fLevel", ph: "phLevel", half: true, datalist: "levels" }
      ]
    }
  };

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
    return {
      template: "clasica",
      accent: "#1f5f8b",
      cvLang: lang,
      personal: { name: "", title: "", email: "", phone: "", location: "", link: "" },
      summary: "",
      experience: [{}],
      education: [{}],
      skills: "",
      languages: [{}],
      extra: ""
    };
  }

  // Mezcla datos guardados con la estructura vacía, por si faltan campos.
  function normalize(data) {
    var base = emptyState(uiLang);
    if (!data || typeof data !== "object") return base;
    ["template", "accent", "cvLang", "summary", "skills", "extra"].forEach(function (k) {
      if (typeof data[k] === "string") base[k] = data[k];
    });
    if (LANGS.indexOf(base.cvLang) === -1) base.cvLang = uiLang;
    if (data.personal && typeof data.personal === "object") {
      Object.keys(base.personal).forEach(function (k) {
        if (typeof data.personal[k] === "string") base.personal[k] = data.personal[k];
      });
    }
    Object.keys(LIST_DEFS).forEach(function (name) {
      if (Array.isArray(data[name])) {
        base[name] = data[name].filter(function (x) { return x && typeof x === "object"; }).map(function (x) {
          var item = {};
          LIST_DEFS[name].fields.forEach(function (f) { if (typeof x[f.key] === "string") item[f.key] = x[f.key]; });
          return item;
        });
      }
    });
    return base;
  }

  function loadState() {
    var raw = storageGet(STORAGE_KEY);
    if (!raw) return emptyState(uiLang);
    try { return normalize(JSON.parse(raw)); } catch (e) { return emptyState(uiLang); }
  }

  var state = loadState();
  var saveTimer = null;
  function saveSoon() {
    clearTimeout(saveTimer);
    saveTimer = setTimeout(saveNow, 300);
  }
  function saveNow() {
    if (!saveTimer) return; // Nada pendiente: no pisamos lo guardado desde otra pestaña
    clearTimeout(saveTimer);
    saveTimer = null;
    storageSet(STORAGE_KEY, JSON.stringify(state));
  }

  // ---------- Utilidades ----------
  function t(key) {
    var dict = window.I18N[uiLang].ui;
    return dict[key] != null ? dict[key] : window.I18N.es.ui[key];
  }
  function cvT(key) { return window.I18N[state.cvLang].cv[key]; }
  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }
  function clean(s) { return (s || "").trim(); }
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

  // ---------- Textos de la interfaz ----------
  function applyUI() {
    document.documentElement.lang = uiLang;
    document.title = t("metaTitle");
    var meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", t("metaDescription"));
    $all("[data-i18n]").forEach(function (el) { el.textContent = t(el.getAttribute("data-i18n")); });
    $all("[data-i18n-ph]").forEach(function (el) { el.placeholder = t(el.getAttribute("data-i18n-ph")); });
    $all("[data-only-lang]").forEach(function (el) { el.hidden = el.getAttribute("data-only-lang") !== uiLang; });
    $("#ui-lang").value = uiLang;
    $("#levels").innerHTML = t("levels").map(function (l) { return '<option value="' + esc(l) + '">'; }).join("");
    renderAllLists();
  }

  // ---------- Formulario ----------
  function fillFields() {
    $all("[data-path]").forEach(function (el) { el.value = getPath(el.getAttribute("data-path")) || ""; });
  }

  function renderList(name) {
    var def = LIST_DEFS[name];
    var box = document.querySelector('[data-list="' + name + '"]');
    var items = state[name];
    box.innerHTML = items.map(function (item, i) {
      var fields = def.fields.map(function (f) {
        var value = esc(item[f.key] || "");
        var ph = f.ph ? ' placeholder="' + esc(t(f.ph)) + '"' : "";
        var control = f.textarea
          ? '<textarea rows="3" data-key="' + f.key + '"' + ph + ">" + value + "</textarea>"
          : '<input type="text" data-key="' + f.key + '" value="' + value + '"' + ph + (f.datalist ? ' list="' + f.datalist + '"' : "") + ">";
        return '<label class="' + (f.half ? "half" : f.textarea ? "full" : "") + '"><span>' + esc(t(f.label)) + "</span>" + control + "</label>";
      }).join("");
      return '<fieldset class="item" data-index="' + i + '">' +
        '<legend>' + esc(t(def.item)) + " " + (i + 1) + "</legend>" +
        '<div class="item-tools">' +
          '<button type="button" class="icon-btn" data-move="-1" title="' + esc(t("moveUp")) + '" aria-label="' + esc(t("moveUp")) + '"' + (i === 0 ? " disabled" : "") + ">↑</button>" +
          '<button type="button" class="icon-btn" data-move="1" title="' + esc(t("moveDown")) + '" aria-label="' + esc(t("moveDown")) + '"' + (i === items.length - 1 ? " disabled" : "") + ">↓</button>" +
          '<button type="button" class="icon-btn" data-remove title="' + esc(t("remove")) + '" aria-label="' + esc(t("remove")) + '">✕</button>' +
        "</div>" +
        '<div class="row">' + fields + "</div>" +
      "</fieldset>";
    }).join("");
  }

  function renderAllLists() { Object.keys(LIST_DEFS).forEach(renderList); }

  function onInput(e) {
    var el = e.target;
    if (el.hasAttribute("data-path")) {
      setPath(el.getAttribute("data-path"), el.value);
    } else if (el.hasAttribute("data-key")) {
      var item = el.closest(".item");
      var list = el.closest("[data-list]").getAttribute("data-list");
      state[list][+item.getAttribute("data-index")][el.getAttribute("data-key")] = el.value;
    } else {
      return;
    }
    saveSoon();
    schedulePreview();
  }

  function onClick(e) {
    var btn = e.target.closest("button");
    if (!btn) return;
    if (btn.hasAttribute("data-add")) {
      var name = btn.getAttribute("data-add");
      state[name].push({});
      renderList(name);
      var boxes = document.querySelectorAll('[data-list="' + name + '"] .item');
      var last = boxes[boxes.length - 1];
      if (last) last.querySelector("input, textarea").focus();
    } else if (btn.closest(".item")) {
      var itemEl = btn.closest(".item");
      var listName = btn.closest("[data-list]").getAttribute("data-list");
      var i = +itemEl.getAttribute("data-index");
      var arr = state[listName];
      if (btn.hasAttribute("data-remove")) {
        arr.splice(i, 1);
      } else if (btn.hasAttribute("data-move")) {
        var j = i + (+btn.getAttribute("data-move"));
        if (j < 0 || j >= arr.length) return;
        var tmp = arr[i]; arr[i] = arr[j]; arr[j] = tmp;
      } else {
        return;
      }
      renderList(listName);
    } else {
      return;
    }
    saveSoon();
    schedulePreview();
  }

  // ---------- Vista previa del currículum ----------
  function hasContent(obj) {
    return Object.keys(obj).some(function (k) { return clean(obj[k]); });
  }

  function textBlock(s) {
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

  function dateRange(a, b) {
    a = clean(a); b = clean(b);
    if (a && b) return esc(a) + " – " + esc(b);
    return esc(a || b);
  }

  function linkHref(s) {
    s = clean(s);
    if (!s) return "";
    return /^https?:\/\//i.test(s) ? s : "https://" + s;
  }

  function section(key, inner) {
    if (!inner) return "";
    return '<section class="cv-sec"><h2>' + esc(cvT(key)) + "</h2>" + inner + "</section>";
  }

  function entries(list, titleKey, orgKeys) {
    return list.filter(hasContent).map(function (it) {
      var org = orgKeys.map(function (k) { return clean(it[k]); }).filter(Boolean).map(esc).join(", ");
      var dates = dateRange(it.start, it.end);
      return '<div class="cv-entry">' +
        '<div class="cv-entry-head"><h3>' + esc(clean(it[titleKey])) + "</h3>" +
        (dates ? '<span class="cv-date">' + dates + "</span>" : "") + "</div>" +
        (org ? '<p class="cv-org">' + org + "</p>" : "") +
        (clean(it.desc) ? '<div class="cv-desc">' + textBlock(it.desc) + "</div>" : "") +
      "</div>";
    }).join("");
  }

  function buildCV() {
    var p = state.personal;
    var contact = [];
    if (clean(p.email)) contact.push('<a href="mailto:' + esc(clean(p.email)) + '">' + esc(clean(p.email)) + "</a>");
    if (clean(p.phone)) contact.push(esc(clean(p.phone)));
    if (clean(p.location)) contact.push(esc(clean(p.location)));
    if (clean(p.link)) contact.push('<a href="' + esc(linkHref(p.link)) + '">' + esc(clean(p.link).replace(/^https?:\/\//i, "")) + "</a>");

    var skills = (state.skills || "").split(/[,;\n]/).map(clean).filter(Boolean);
    var langs = state.languages.filter(hasContent).map(function (l) {
      var name = esc(clean(l.name));
      var level = esc(clean(l.level));
      return "<li>" + name + (name && level ? ": " : "") + level + "</li>";
    });

    var accent = /^#[0-9a-f]{6}$/i.test(state.accent) ? state.accent : "#1f5f8b";
    var tpl = ["clasica", "moderna", "compacta"].indexOf(state.template) !== -1 ? state.template : "clasica";

    return '<article class="cv tpl-' + tpl + '" lang="' + state.cvLang + '" style="--accent:' + accent + '">' +
      '<header class="cv-head">' +
        '<h1 class="cv-name' + (clean(p.name) ? "" : " is-empty") + '">' + esc(clean(p.name) || cvT("namePlaceholder")) + "</h1>" +
        '<p class="cv-title' + (clean(p.title) ? "" : " is-empty") + '">' + esc(clean(p.title) || cvT("titlePlaceholder")) + "</p>" +
        (contact.length ? '<p class="cv-contact">' + contact.join('<span class="sep"> | </span>') + "</p>" : "") +
      "</header>" +
      section("summary", clean(state.summary) ? textBlock(state.summary) : "") +
      section("experience", entries(state.experience, "role", ["company", "city"])) +
      section("education", entries(state.education, "degree", ["school", "city"])) +
      section("skills", skills.length ? '<p class="cv-skills">' + skills.map(esc).join('<span class="sep"> · </span>') + "</p>" : "") +
      section("languages", langs.length ? '<ul class="cv-langs">' + langs.join("") + "</ul>" : "") +
      section("extra", clean(state.extra) ? textBlock(state.extra) : "") +
    "</article>";
  }

  var previewQueued = false;
  function schedulePreview() {
    if (previewQueued) return;
    previewQueued = true;
    requestAnimationFrame(function () { previewQueued = false; renderPreview(); });
  }

  // Alto de una hoja A4 en píxeles de pantalla (297 mm a 96 ppp).
  var A4_HEIGHT_PX = 1123;
  var A4_WIDTH_PX = 794;

  function renderPreview() {
    $("#cv-page").innerHTML = buildCV();
    fitPreview();
  }

  function fitPreview() {
    var holder = $("#page-holder");
    var page = $("#cv-page");
    var available = holder.parentElement.clientWidth - 2;
    if (available <= 0) return;
    var scale = Math.min(1, available / A4_WIDTH_PX);
    page.style.transform = "scale(" + scale + ")";
    holder.style.width = A4_WIDTH_PX * scale + "px";
    holder.style.height = page.offsetHeight * scale + "px";
    var pages = Math.max(1, Math.ceil((page.offsetHeight - 4) / A4_HEIGHT_PX));
    $("#page-count").textContent = pages === 1 ? t("pages1") : t("pagesN").replace("{n}", pages);
  }

  // ---------- Descarga en PDF (impresión del navegador) ----------
  function fileTitle() {
    var name = clean(state.personal.name);
    return "CV" + (name ? " - " + name : "");
  }

  function preparePrint() {
    // Copia el currículum dentro de una tabla: la cabecera y el pie vacíos se
    // repiten en cada hoja y dan margen arriba y abajo en todas las páginas.
    $("#print-root").innerHTML =
      '<table class="print-wrap"><thead><tr><td><div class="print-space"></div></td></tr></thead>' +
      '<tbody><tr><td>' + buildCV() + "</td></tr></tbody>" +
      '<tfoot><tr><td><div class="print-space"></div></td></tr></tfoot></table>';
  }

  function doPrint() {
    preparePrint();
    var oldTitle = document.title;
    document.title = fileTitle(); // Nombre que propone el navegador para el PDF
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

  // ---------- Copias en archivo ----------
  function saveFile() {
    var blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
    var a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = fileTitle().replace(/[\\/:*?"<>|]/g, "") + ".json";
    document.body.appendChild(a);
    a.click();
    setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 0);
  }

  function openFile(file) {
    var reader = new FileReader();
    reader.onload = function () {
      try {
        var data = JSON.parse(reader.result);
        if (!data || typeof data !== "object" || !data.personal) throw new Error("formato");
        setState(normalize(data));
      } catch (e) {
        alert(t("badFile"));
      }
    };
    reader.readAsText(file);
  }

  function setState(next) {
    state = next;
    fillFields();
    renderAllLists();
    saveSoon();
    renderPreview();
  }

  function isDirty() {
    return hasContent(state.personal) || clean(state.summary);
  }

  // Ejemplo elegido en una página por profesión: se carga una sola vez al abrir el editor.
  function loadPendingExample() {
    var raw = null;
    try {
      raw = window.sessionStorage.getItem(PENDING_KEY);
      window.sessionStorage.removeItem(PENDING_KEY);
    } catch (e) { return; }
    if (!raw) return;
    var ex;
    try { ex = JSON.parse(raw); } catch (e) { return; }
    if (!ex || typeof ex !== "object" || !ex.personal) return;
    if (isDirty() && !confirm(t("confirmExample"))) return;
    setState(normalize(ex));
  }

  // ---------- Pestañas en el móvil ----------
  function showTab(which) {
    var preview = which === "preview";
    $("#app").classList.toggle("show-preview", preview);
    $("#tab-edit").setAttribute("aria-selected", String(!preview));
    $("#tab-preview").setAttribute("aria-selected", String(preview));
    if (preview) fitPreview();
    // Vuelve arriba del editor / de la vista previa al cambiar de pestaña.
    var top = $("#app").getBoundingClientRect().top + window.scrollY - $(".topbar").offsetHeight - $(".tabs").offsetHeight;
    if (window.scrollY > top) window.scrollTo(0, top);
  }

  // ---------- Arranque ----------
  function init() {
    applyUI();
    fillFields();
    renderPreview();
    loadPendingExample();

    var form = $("#editor");
    form.addEventListener("input", onInput);
    form.addEventListener("change", onInput);
    form.addEventListener("click", onClick);

    $("#ui-lang").addEventListener("change", function (e) {
      var prev = uiLang;
      uiLang = e.target.value;
      storageSet(LANG_KEY, uiLang);
      // Si el CV estaba en el idioma anterior de la web, lo cambiamos también.
      if (state.cvLang === prev) { state.cvLang = uiLang; fillFields(); saveSoon(); }
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

    $("#btn-example").addEventListener("click", function () {
      if (isDirty() && !confirm(t("confirmExample"))) return;
      var ex = JSON.parse(JSON.stringify(window.CV_EXAMPLES[uiLang] || window.CV_EXAMPLES.es));
      ex.template = state.template; ex.accent = state.accent; ex.cvLang = uiLang;
      setState(normalize(ex));
    });
    $("#btn-clear").addEventListener("click", function () {
      if (!confirm(t("confirmClear"))) return;
      var fresh = emptyState(uiLang);
      fresh.template = state.template; fresh.accent = state.accent;
      storageRemove(STORAGE_KEY);
      setState(fresh);
    });
    $("#btn-save").addEventListener("click", saveFile);
    $("#btn-open").addEventListener("click", function () { $("#file-input").click(); });
    $("#file-input").addEventListener("change", function (e) {
      if (e.target.files[0]) openFile(e.target.files[0]);
      e.target.value = "";
    });

    $("#tab-edit").addEventListener("click", function () { showTab("edit"); });
    $("#tab-preview").addEventListener("click", function () { showTab("preview"); });

    if ("ResizeObserver" in window) {
      new ResizeObserver(fitPreview).observe($("#page-holder").parentElement);
    } else {
      window.addEventListener("resize", fitPreview);
    }
    // Si alguien imprime con Ctrl+P sin usar el botón, preparamos igualmente el CV.
    window.addEventListener("beforeprint", preparePrint);
    // Guarda al momento si se cierra o se oculta la pestaña.
    window.addEventListener("pagehide", saveNow);
    document.addEventListener("visibilitychange", function () { if (document.hidden) saveNow(); });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();

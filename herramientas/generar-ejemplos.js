// Genera las páginas de ejemplos de currículum por profesión (ES y FR),
// el sitemap.xml, el robots.txt y la lista de ejemplos de la portada.
//
// Uso (desde la carpeta del proyecto):   node herramientas/generar-ejemplos.js
//
// Los textos están en herramientas/profesiones-es.js y profesiones-fr.js.
// Las páginas generadas (ejemplos-cv/ y exemples-cv/) NO se editan a mano:
// cambia los textos y vuelve a ejecutar este archivo.
"use strict";

const fs = require("fs");
const path = require("path");
const vm = require("vm");

// ---------------------------------------------------------------------------
// ÚNICO sitio con la dirección de la web. Si cambias de dominio
// (por ejemplo a https://www.tudominio.com/), cámbiala aquí, con la barra final,
// y vuelve a ejecutar el generador.
const SITE_URL = "https://roki05.github.io/creador-cv/";
// ---------------------------------------------------------------------------

const ROOT = path.join(__dirname, "..");

// Textos del currículum (títulos de sección, nombres de plantilla) desde js/i18n.js.
const sandbox = { window: {} };
vm.runInNewContext(fs.readFileSync(path.join(ROOT, "js/i18n.js"), "utf8"), sandbox);
const I18N = sandbox.window.I18N;

const LANGS = {
  es: {
    dir: "ejemplos-cv",
    items: require("./profesiones-es.js"),
    home: "../",
    t: {
      brand: "Currículum Gratis",
      createCV: "Crear mi currículum",
      otherLang: "FR",
      otherLangName: "Version française",
      home: "Inicio",
      examples: "Ejemplos de currículum",
      use: "Usar este ejemplo en el editor",
      useNote: "Gratis y sin registro. Cambia los datos por los tuyos y descárgalo en PDF.",
      caption: (tpl) => "Ejemplo ficticio con la plantilla «" + tpl + "». Todos los datos son inventados.",
      tips: (s) => "Consejos para tu currículum " + s,
      skills: "Habilidades y palabras clave que buscan las empresas",
      skillsNote: "Incluye solo las que de verdad tengas y escríbelas con las mismas palabras que la oferta de empleo: así los programas de selección (ATS) las encuentran.",
      ctaTitle: (s) => "Crea tu currículum " + s + " gratis",
      ctaText: "Abre este ejemplo en el editor, cámbialo a tu gusto y descárgalo en PDF. Sin registro, sin tarjeta y sin cobros al descargar. Tus datos no salen de tu navegador.",
      related: "Más ejemplos de currículum por profesión",
      ad: "Publicidad",
      footerText: "Hecho para ayudar a encontrar trabajo, sin trampas.",
      privacy: "Privacidad y cookies",
      cookies: "Configurar cookies",
      indexTitle: "Ejemplos de currículum por profesión gratis | Currículum Gratis",
      indexDescription: "Ejemplos de currículum para camarero, dependiente, administrativo, enfermería y más profesiones. Ábrelos en el editor gratis y descárgalos en PDF.",
      indexH1: "Ejemplos de currículum por profesión",
      indexIntro: "Elige tu profesión, mira un currículum completo de ejemplo y lee los consejos para mejorarlo. Con un clic lo abres en nuestro editor gratuito, cambias los datos por los tuyos y lo descargas en PDF, sin registrarte.",
      indexCta: "¿No está tu profesión? Empieza desde cero en el editor",
      homeSection: "Ejemplos de currículum por profesión",
      homeAll: "Ver todos los ejemplos"
    }
  },
  fr: {
    dir: "exemples-cv",
    items: require("./profesiones-fr.js"),
    home: "../?lang=fr",
    t: {
      brand: "CV Gratuit",
      createCV: "Créer mon CV",
      otherLang: "ES",
      otherLangName: "Versión en español",
      home: "Accueil",
      examples: "Exemples de CV",
      use: "Utiliser cet exemple dans l'éditeur",
      useNote: "Gratuit et sans inscription. Remplacez les informations par les vôtres et téléchargez le PDF.",
      caption: (tpl) => "Exemple fictif avec le modèle « " + tpl + " ». Toutes les informations sont inventées.",
      tips: (s) => "Conseils pour votre CV " + s,
      skills: "Compétences et mots-clés recherchés par les recruteurs",
      skillsNote: "Ne gardez que celles que vous maîtrisez vraiment et reprenez les mots exacts de l'offre d'emploi : c'est ce que recherchent les logiciels de recrutement (ATS).",
      ctaTitle: (s) => "Créez votre CV " + s + " gratuitement",
      ctaText: "Ouvrez cet exemple dans l'éditeur, modifiez-le comme vous voulez et téléchargez-le en PDF. Sans inscription, sans carte bancaire et sans paiement au téléchargement. Vos données restent dans votre navigateur.",
      related: "Autres exemples de CV par métier",
      ad: "Publicité",
      footerText: "Fait pour aider à trouver un emploi, sans piège.",
      privacy: "Confidentialité et cookies",
      cookies: "Paramètres des cookies",
      indexTitle: "Exemples de CV par métier gratuits | CV Gratuit",
      indexDescription: "Exemples de CV pour serveur, vendeur, assistant administratif, aide-soignant et d'autres métiers. Ouvrez-les gratuitement dans l'éditeur et téléchargez le PDF.",
      indexH1: "Exemples de CV par métier",
      indexIntro: "Choisissez votre métier, découvrez un CV complet et lisez nos conseils pour l'améliorer. En un clic, vous l'ouvrez dans notre éditeur gratuit, vous remplacez les informations par les vôtres et vous le téléchargez en PDF, sans inscription.",
      indexCta: "Votre métier n'y est pas ? Partez de zéro dans l'éditeur",
      homeSection: "Exemples de CV par métier",
      homeAll: "Voir tous les exemples"
    }
  }
};

// ---------- Utilidades ----------
function esc(s) {
  return String(s == null ? "" : s)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
function clean(s) { return (s || "").trim(); }
function abs(rel) { return SITE_URL + rel; }
function jsonForScript(obj) {
  // Evita que un "</script>" dentro de los datos cierre la etiqueta.
  return JSON.stringify(obj).replace(/</g, "\\u003c");
}
function otherLang(lang) { return lang === "es" ? "fr" : "es"; }
function findPair(lang, slug) {
  return LANGS[otherLang(lang)].items.find((x) => x.slug === slug);
}

// ---------- El currículum en HTML (mismo marcado que buildCV() de js/app.js) ----------
function textBlock(s) {
  const lines = (s || "").split(/\r?\n/).map((l) => l.trim()).filter(Boolean);
  let html = "";
  let inList = false;
  lines.forEach((line) => {
    const bullet = /^[-•*·]\s*/.test(line);
    if (bullet && !inList) { html += "<ul>"; inList = true; }
    if (!bullet && inList) { html += "</ul>"; inList = false; }
    html += bullet ? "<li>" + esc(line.replace(/^[-•*·]\s*/, "")) + "</li>" : "<p>" + esc(line) + "</p>";
  });
  if (inList) html += "</ul>";
  return html;
}
function hasContent(obj) { return Object.keys(obj).some((k) => clean(obj[k])); }
function dateRange(a, b) {
  a = clean(a); b = clean(b);
  if (a && b) return esc(a) + " – " + esc(b);
  return esc(a || b);
}
function entries(list, titleKey, orgKeys) {
  return list.filter(hasContent).map((it) => {
    const org = orgKeys.map((k) => clean(it[k])).filter(Boolean).map(esc).join(", ");
    const dates = dateRange(it.start, it.end);
    return '<div class="cv-entry">' +
      '<div class="cv-entry-head"><h3>' + esc(clean(it[titleKey])) + "</h3>" +
      (dates ? '<span class="cv-date">' + dates + "</span>" : "") + "</div>" +
      (org ? '<p class="cv-org">' + org + "</p>" : "") +
      (clean(it.desc) ? '<div class="cv-desc">' + textBlock(it.desc) + "</div>" : "") +
    "</div>";
  }).join("");
}
function buildCV(state) {
  const labels = I18N[state.cvLang].cv;
  const section = (key, inner) => inner ? '<section class="cv-sec"><h2>' + esc(labels[key]) + "</h2>" + inner + "</section>" : "";
  const p = state.personal;
  const contact = [];
  if (clean(p.email)) contact.push(esc(clean(p.email)));
  if (clean(p.phone)) contact.push(esc(clean(p.phone)));
  if (clean(p.location)) contact.push(esc(clean(p.location)));
  if (clean(p.link)) contact.push(esc(clean(p.link)));
  const skills = (state.skills || "").split(/[,;\n]/).map(clean).filter(Boolean);
  const langs = state.languages.filter(hasContent).map((l) => "<li>" + esc(clean(l.name)) + ": " + esc(clean(l.level)) + "</li>");
  // El nombre va en <p> (no en <h1>) porque la página ya tiene su propio título principal.
  return '<article class="cv tpl-' + state.template + '" lang="' + state.cvLang + '" style="--accent:' + state.accent + '">' +
    '<header class="cv-head">' +
      '<p class="cv-name">' + esc(p.name) + "</p>" +
      '<p class="cv-title">' + esc(p.title) + "</p>" +
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

// ---------- Partes comunes de las páginas ----------
function head(o) {
  const alternates = o.alternates.map((a) => '  <link rel="alternate" hreflang="' + a.lang + '" href="' + esc(a.href) + '">').join("\n");
  return `<!doctype html>
<html lang="${o.lang}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(o.title)}</title>
  <meta name="description" content="${esc(o.description)}">
  <link rel="canonical" href="${esc(o.canonical)}">
${alternates}
  <meta property="og:type" content="article">
  <meta property="og:title" content="${esc(o.title)}">
  <meta property="og:description" content="${esc(o.description)}">
  <meta property="og:url" content="${esc(o.canonical)}">
  <meta property="og:locale" content="${o.lang === "es" ? "es_ES" : "fr_FR"}">
  <meta name="theme-color" content="#1f5f8b">
  <link rel="icon" href="../favicon.svg" type="image/svg+xml">
  <link rel="stylesheet" href="../css/styles.css">
  <link rel="stylesheet" href="../css/cv.css">
  <link rel="stylesheet" href="../css/ejemplos.css">
  <script src="../js/config.js" defer></script>
  <script src="../js/ejemplo.js" defer></script>
  <script src="../js/ads.js" defer></script>
  <script type="application/ld+json">${jsonForScript(o.jsonld)}</script>
</head>
<body>
  <!-- Página generada por herramientas/generar-ejemplos.js: no la edites a mano. -->
  <header class="topbar">
    <a class="brand" href="${o.homeHref}"><img src="../favicon.svg" alt="" width="28" height="28"><span>${esc(o.t.brand)}</span></a>
    <div class="topbar-actions">
      <a class="btn btn-ghost btn-small" href="${esc(o.otherHref)}" hreflang="${otherLang(o.lang)}" lang="${otherLang(o.lang)}" title="${esc(o.t.otherLangName)}">${o.t.otherLang}</a>
      <a class="btn btn-primary" href="${o.homeHref}">${esc(o.t.createCV)}</a>
    </div>
  </header>
`;
}

function footer(o) {
  return `
  <footer class="footer">
    <p>${esc(o.t.footerText)}</p>
    <p><a href="../privacidad.html${o.lang === "fr" ? "#fr" : ""}">${esc(o.t.privacy)}</a>
      <button type="button" class="link-btn" data-cookie-settings hidden><span>${esc(o.t.cookies)}</span></button></p>
  </footer>
</body>
</html>
`;
}

function breadcrumbsLd(list) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: list.map((b, i) => ({ "@type": "ListItem", position: i + 1, name: b.name, item: b.url }))
  };
}

// ---------- Página de cada profesión ----------
function professionPage(lang, item) {
  const L = LANGS[lang];
  const t = L.t;
  const pair = findPair(lang, item.pair);
  if (!pair) throw new Error("Falta la pareja «" + item.pair + "» de «" + item.slug + "» en el otro idioma");
  const url = abs(L.dir + "/" + item.slug + ".html");
  const pairUrl = abs(LANGS[otherLang(lang)].dir + "/" + pair.slug + ".html");
  const state = Object.assign({ template: item.template, accent: item.accent, cvLang: lang }, item.cv);
  const tplName = I18N[lang].ui["tpl" + item.template.charAt(0).toUpperCase() + item.template.slice(1)];
  const skills = item.cv.skills.split(",").map(clean).filter(Boolean);
  const related = L.items.filter((x) => x.slug !== item.slug);

  const jsonld = {
    "@context": "https://schema.org",
    "@graph": [
      breadcrumbsLd([
        { name: t.home, url: abs(lang === "es" ? "" : "?lang=fr") },
        { name: t.examples, url: abs(L.dir + "/") },
        { name: item.label, url: url }
      ]),
      { "@type": "Article", headline: item.h1, description: item.description, inLanguage: lang, mainEntityOfPage: url }
    ]
  };

  // El enlace lleva el idioma para que el editor se abra en el mismo idioma que el ejemplo.
  const useBtn = () => `<a class="btn btn-primary" href="../?lang=${lang}" data-use-example>${esc(t.use)}</a>`;

  return head({
    lang, t, title: item.title, description: item.description, canonical: url, jsonld,
    homeHref: L.home, otherHref: "../" + LANGS[otherLang(lang)].dir + "/" + pair.slug + ".html",
    alternates: [
      { lang, href: url },
      { lang: otherLang(lang), href: pairUrl },
      { lang: "x-default", href: lang === "es" ? url : pairUrl }
    ]
  }) + `
  <nav class="crumbs" aria-label="${lang === "es" ? "Estás aquí" : "Vous êtes ici"}">
    <a href="${L.home}">${esc(t.home)}</a> › <a href="./">${esc(t.examples)}</a> › <span aria-current="page">${esc(item.label)}</span>
  </nav>

  <main class="article">
    <h1>${esc(item.h1)}</h1>
    <p class="lead">${esc(item.intro)}</p>
    <div class="cta-row">
      ${useBtn()}
      <span class="muted">${esc(t.useNote)}</span>
    </div>

    <figure class="example-cv">
      <div class="example-scroll">
        <div class="page-holder"><div class="page">${buildCV(state)}</div></div>
      </div>
      <figcaption class="muted">${esc(t.caption(tplName))}</figcaption>
    </figure>

    <h2>${esc(t.tips(item.subject))}</h2>
    <ol class="tips">
${item.tips.map((tip) => "      <li><strong>" + esc(tip[0]) + "</strong> " + esc(tip[1]) + "</li>").join("\n")}
    </ol>

    <h2>${esc(t.skills)}</h2>
    <ul class="tags">
${skills.map((s) => "      <li>" + esc(s) + "</li>").join("\n")}
    </ul>
    <p class="muted">${esc(t.skillsNote)}</p>

    <aside class="ad-slot" data-ad-slot="footer" hidden><span class="ad-label">${esc(t.ad)}</span></aside>

    <section class="cta-box">
      <h2>${esc(t.ctaTitle(item.subject))}</h2>
      <p>${esc(t.ctaText)}</p>
      ${useBtn()}
    </section>

    <h2>${esc(t.related)}</h2>
    <ul class="related">
${related.map((x) => '      <li><a href="' + x.slug + '.html">' + esc(x.label) + "</a></li>").join("\n")}
    </ul>
  </main>

  <script type="application/json" id="cv-example">${jsonForScript(state)}</script>
` + footer({ lang, t });
}

// ---------- Índice de ejemplos de cada idioma ----------
function indexPage(lang) {
  const L = LANGS[lang];
  const t = L.t;
  const other = LANGS[otherLang(lang)];
  const url = abs(L.dir + "/");
  const jsonld = {
    "@context": "https://schema.org",
    "@graph": [
      breadcrumbsLd([
        { name: t.home, url: abs(lang === "es" ? "" : "?lang=fr") },
        { name: t.examples, url: url }
      ]),
      {
        "@type": "ItemList",
        itemListElement: L.items.map((x, i) => ({ "@type": "ListItem", position: i + 1, name: x.label, url: abs(L.dir + "/" + x.slug + ".html") }))
      }
    ]
  };
  return head({
    lang, t, title: t.indexTitle, description: t.indexDescription, canonical: url, jsonld,
    homeHref: L.home, otherHref: "../" + other.dir + "/",
    alternates: [
      { lang, href: url },
      { lang: otherLang(lang), href: abs(other.dir + "/") },
      { lang: "x-default", href: abs(LANGS.es.dir + "/") }
    ]
  }) + `
  <nav class="crumbs" aria-label="${lang === "es" ? "Estás aquí" : "Vous êtes ici"}">
    <a href="${L.home}">${esc(t.home)}</a> › <span aria-current="page">${esc(t.examples)}</span>
  </nav>

  <main class="article">
    <h1>${esc(t.indexH1)}</h1>
    <p class="lead">${esc(t.indexIntro)}</p>
    <ul class="cards">
${L.items.map((x) => '      <li><a href="' + x.slug + '.html"><strong>' + esc(x.label) + "</strong><span>" + esc(x.description) + "</span></a></li>").join("\n")}
    </ul>
    <p><a class="btn btn-ghost" href="${L.home}">${esc(t.indexCta)}</a></p>
    <aside class="ad-slot" data-ad-slot="footer" hidden><span class="ad-label">${esc(t.ad)}</span></aside>
  </main>
` + footer({ lang, t });
}

// ---------- Lista de ejemplos dentro de la portada (index.html) ----------
function homeBlock() {
  const START = "<!-- ejemplos:inicio (lo rellena herramientas/generar-ejemplos.js) -->";
  const END = "<!-- ejemplos:fin -->";
  const file = path.join(ROOT, "index.html");
  const html = fs.readFileSync(file, "utf8");
  const a = html.indexOf(START);
  const b = html.indexOf(END);
  if (a === -1 || b === -1) throw new Error("No encuentro las marcas de ejemplos en index.html");
  const block = Object.keys(LANGS).map((lang) => {
    const L = LANGS[lang];
    return `    <div class="examples-home" lang="${lang}" data-only-lang="${lang}"${lang === "es" ? "" : " hidden"}>
      <h2>${esc(L.t.homeSection)}</h2>
      <ul class="related">
${L.items.map((x) => '        <li><a href="' + L.dir + "/" + x.slug + '.html">' + esc(x.label) + "</a></li>").join("\n")}
      </ul>
      <p><a href="${L.dir}/">${esc(L.t.homeAll)}</a></p>
    </div>`;
  }).join("\n");
  fs.writeFileSync(file, html.slice(0, a + START.length) + "\n" + block + "\n    " + html.slice(b));
}

// ---------- sitemap.xml y robots.txt ----------
function sitemap() {
  const today = new Date().toISOString().slice(0, 10);
  const urls = [];
  const add = (loc, alts) => urls.push({ loc, alts });
  const homeAlts = [{ lang: "es", href: abs("") }, { lang: "fr", href: abs("?lang=fr") }];
  add(abs(""), homeAlts);
  ["es", "fr"].forEach((lang) => {
    const L = LANGS[lang];
    const other = LANGS[otherLang(lang)];
    add(abs(L.dir + "/"), [{ lang, href: abs(L.dir + "/") }, { lang: otherLang(lang), href: abs(other.dir + "/") }]);
    L.items.forEach((x) => {
      const pair = findPair(lang, x.pair);
      add(abs(L.dir + "/" + x.slug + ".html"), [
        { lang, href: abs(L.dir + "/" + x.slug + ".html") },
        { lang: otherLang(lang), href: abs(other.dir + "/" + pair.slug + ".html") }
      ]);
    });
  });
  const xml = '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n' +
    urls.map((u) => "  <url>\n    <loc>" + esc(u.loc) + "</loc>\n    <lastmod>" + today + "</lastmod>\n" +
      u.alts.map((a) => '    <xhtml:link rel="alternate" hreflang="' + a.lang + '" href="' + esc(a.href) + '"/>').join("\n") +
      "\n  </url>").join("\n") +
    "\n</urlset>\n";
  fs.writeFileSync(path.join(ROOT, "sitemap.xml"), xml);
  fs.writeFileSync(path.join(ROOT, "robots.txt"), "User-agent: *\nAllow: /\n\nSitemap: " + abs("sitemap.xml") + "\n");
}

// ---------- Ejecutar ----------
Object.keys(LANGS).forEach((lang) => {
  const L = LANGS[lang];
  const dir = path.join(ROOT, L.dir);
  fs.rmSync(dir, { recursive: true, force: true }); // borra páginas antiguas (p. ej. una profesión eliminada)
  fs.mkdirSync(dir, { recursive: true });
  const seen = new Set();
  L.items.forEach((item) => {
    if (seen.has(item.slug)) throw new Error("Profesión repetida: " + item.slug);
    seen.add(item.slug);
    fs.writeFileSync(path.join(dir, item.slug + ".html"), professionPage(lang, item));
  });
  fs.writeFileSync(path.join(dir, "index.html"), indexPage(lang));
  console.log(L.dir + "/: " + L.items.length + " profesiones");
});
homeBlock();
sitemap();
console.log("Listo: páginas, sitemap.xml, robots.txt y portada actualizados.");

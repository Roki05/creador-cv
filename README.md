# Creador de currículums gratis

Web para crear un currículum y descargarlo en PDF. 100 % gratis, sin registro y sin enviar datos a ningún servidor. En español y francés.

## Cómo está hecha

Es una web estática: solo archivos HTML, CSS y JavaScript. No hay que instalar ni compilar nada.

| Archivo | Para qué sirve |
| --- | --- |
| `index.html` | La página principal (formulario, vista previa, preguntas frecuentes) |
| `privacidad.html` | Política de privacidad y cookies (ES/FR) |
| `css/styles.css` | Aspecto de la web |
| `css/cv.css` | Las tres plantillas del currículum (Clásica, Moderna, Compacta) |
| `js/i18n.js` | Todos los textos en español y francés, y los ejemplos |
| `js/app.js` | El funcionamiento: formulario, vista previa y PDF |
| `js/config.js` | Los códigos de Google AdSense (vacíos hasta que te aprueben) |
| `js/ads.js` | Coloca los anuncios en sus huecos |
| `ejemplos-cv/` y `exemples-cv/` | Páginas de ejemplo por profesión (ES y FR). Se generan solas: no editarlas a mano |
| `herramientas/` | Textos de los ejemplos y el programa que crea esas páginas |
| `sitemap.xml`, `robots.txt` | Lista de páginas para Google (también se generan solas) |

## Probarla en tu ordenador

Haz doble clic en `index.html` y se abrirá en tu navegador.

## Añadir un idioma (por ejemplo, catalán)

1. En `js/i18n.js`, copia el bloque `es: { ... }`, pégalo debajo y cambia `es` por `ca`.
2. Traduce los textos.
3. En `index.html`, añade `<option value="ca">CA</option>` en el selector de idioma de arriba y `<option value="ca">Català</option>` en «Idioma del currículum».

## Ejemplos de currículum por profesión

Cada profesión tiene una página en español (`ejemplos-cv/`) y otra en francés (`exemples-cv/`), con un currículum de ejemplo, consejos y un botón «Usar este ejemplo» que lo abre en el editor.

Para añadir o cambiar una profesión:

1. Edita `herramientas/profesiones-es.js` y `herramientas/profesiones-fr.js` (copia un bloque y cambia los textos; el campo `pair` une cada profesión con su versión en el otro idioma).
2. Ejecuta `node herramientas/generar-ejemplos.js` (hace falta tener [Node.js](https://nodejs.org/) instalado).
3. Se actualizan las páginas, la lista de la portada, `sitemap.xml` y `robots.txt`.

Si la web cambia de dirección (dominio propio), cambia `SITE_URL` al principio de `herramientas/generar-ejemplos.js` y vuelve a ejecutarlo.

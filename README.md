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
| `js/ads.js` | Carga AdSense y su aviso de cookies, y coloca los anuncios en sus huecos |

## Probarla en tu ordenador

Haz doble clic en `index.html` y se abrirá en tu navegador.

## Añadir un idioma (por ejemplo, catalán)

1. En `js/i18n.js`, copia el bloque `es: { ... }`, pégalo debajo y cambia `es` por `ca`.
2. Traduce los textos.
3. En `index.html`, añade `<option value="ca">CA</option>` en el selector de idioma de arriba y `<option value="ca">Català</option>` en «Idioma del currículum».

## Anuncios y aviso de cookies

Mientras `adsenseClient` esté vacío en `js/config.js`, la web no carga nada de Google ni pone cookies. Al rellenarlo se carga AdSense, que muestra su propio aviso de cookies (el mensaje de «Normativa europea» que se configura en AdSense → Privacidad y mensajes). El enlace «Configurar cookies» del pie aparece solo y vuelve a abrir ese aviso.

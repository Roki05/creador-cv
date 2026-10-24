// Textos propios de la página de la carta de presentación.
// Los textos comunes (botones, aviso del PDF, pie de página...) se toman de i18n.js.
// Para añadir el catalán, copia el bloque "es", cámbiale la clave a "ca" y traduce.
window.CARTA_I18N = {
  es: {
    ui: {
      metaTitle: "Carta de presentación gratis online, sin registro | Descarga en PDF",
      metaDescription: "Escribe tu carta de presentación gratis con tus datos del currículum y descárgala en PDF. Sin registro, sin tarjeta y sin cobros al descargar.",
      heroTitle: "Crea tu carta de presentación gratis y descárgala en PDF",
      heroText: "Usa los datos de tu currículum, escribe tu carta y descárgala. Sin trampas.",
      letterLang: "Idioma de la carta",
      cvCopied: "Hemos copiado tus datos del currículum que tienes en este navegador.",
      secSender: "Tus datos",
      fromCV: "Copiar de mi currículum",
      noCV: "Todavía no has rellenado tu currículum en este navegador. Puedes escribir tus datos aquí directamente.",
      confirmFromCV: "Esto sustituirá tus datos de la carta por los de tu currículum. ¿Continuar?",
      secRecipient: "Empresa y oferta",
      fJob: "Puesto al que te presentas",
      phJob: "Ej.: Técnica contable",
      fCompany: "Empresa",
      phCompany: "Ej.: Grupo Mediterráneo",
      fContact: "Persona de contacto (opcional)",
      phContact: "Ej.: Marta Ruiz",
      fRef: "Referencia de la oferta (opcional)",
      phRef: "Ej.: ADM-2026-14",
      fAddress: "Dirección de la empresa (opcional)",
      phAddress: "Calle, número\nCódigo postal y ciudad",
      secLetter: "Tu carta",
      fPlace: "Lugar",
      fDate: "Fecha",
      fSubject: "Asunto",
      fGreeting: "Saludo",
      fBody: "Texto de la carta",
      phBody: "Escribe 3 o 4 párrafos cortos. Deja una línea en blanco entre párrafos.\n\nO pulsa «Escribir un borrador con mis datos» y luego personalízalo.",
      fClosing: "Despedida",
      autoHint: "Los textos en gris se rellenan solos. Escribe encima si quieres cambiarlos.",
      draft: "Escribir un borrador con mis datos",
      confirmDraft: "Esto sustituirá el texto de tu carta por un borrador. ¿Continuar?",
      tipsTitle: "Consejos para una buena carta",
      tip1: "Que ocupe una sola página: 3 o 4 párrafos cortos bastan.",
      tip2: "Escribe una carta distinta para cada empresa y menciona el puesto exacto.",
      tip3: "No repitas el currículum: cuenta por qué encajas y qué puedes aportar, con un ejemplo concreto.",
      tip4: "Repasa las faltas de ortografía y el nombre de la empresa antes de enviarla.",
      confirmClear: "¿Seguro que quieres borrar todos los datos de la carta? Tu currículum no se borrará.",
      confirmExample: "Esto sustituirá lo que has escrito por un ejemplo. ¿Continuar?",
      pages1: "1 página",
      pagesN: "{n} páginas: intenta acortarla a una",
      modalTitle: "Guarda tu carta en PDF",
      lfaq1Q: "¿Es gratis la carta de presentación?",
      lfaq1A: "Sí, igual que el currículum: puedes escribir y descargar todas las cartas que quieras sin pagar nada y sin crear una cuenta.",
      lfaq2Q: "¿Necesito haber hecho antes el currículum?",
      lfaq2A: "No, pero si ya lo has hecho en esta web y en este navegador, copiamos tus datos automáticamente y el borrador usa tu experiencia y tus habilidades.",
      lfaq3Q: "¿Se envía mi carta a algún sitio?",
      lfaq3A: "No. La carta se escribe y se guarda solo en tu navegador. Nadie más puede verla.",
      navCV: "Currículum",
      navLetter: "Carta de presentación"
    },
    letter: {
      namePlaceholder: "Tu nombre",
      subjectLabel: "Asunto",
      bodyPlaceholder: "Aquí aparecerá el texto de tu carta.",
      subject: function (job, ref) {
        if (!job && !ref) return "";
        return "Candidatura para el puesto de " + (job || "…") + (ref ? " (ref. " + ref + ")" : "");
      },
      greeting: function (contact) {
        return contact ? "Estimado/a " + contact + ":" : "Estimado equipo de selección:";
      },
      closing: "Atentamente,",
      date: function (place, d) {
        var text = d.toLocaleDateString("es-ES", { day: "numeric", month: "long", year: "numeric" });
        return (place ? place + ", a " : "") + text;
      },
      draft: function (d) {
        var p = [];
        p.push("Me pongo en contacto con ustedes para presentar mi candidatura al puesto de " + (d.job || "[puesto]") +
          (d.company ? " en " + d.company : "") + (d.ref ? ", con referencia " + d.ref : "") + ".");
        var second = "";
        if (d.role) {
          second = (d.current ? "Actualmente trabajo como " : "He trabajado como ") + d.role +
            (d.employer ? " en " + d.employer : "") + ".";
        } else if (d.title) {
          second = "Mi formación y experiencia están orientadas al ámbito de " + d.title.toLowerCase() + ".";
        }
        if (d.skills.length) {
          second += (second ? " " : "") + "Entre mis puntos fuertes están " + joinList(d.skills, "y") + ".";
        }
        if (second) p.push(second + " [Añade aquí un logro concreto, con cifras si puedes.]");
        p.push("Me motiva especialmente la posibilidad de aportar mi experiencia a " + (d.company || "su empresa") +
          " y seguir creciendo profesionalmente. [Explica en una o dos frases por qué te interesa esta empresa en concreto.]");
        p.push("Les adjunto mi currículum y quedo a su disposición para ampliar cualquier información en una entrevista.");
        return p.join("\n\n");
      }
    }
  },

  fr: {
    ui: {
      metaTitle: "Lettre de motivation gratuite en ligne, sans inscription | Téléchargement PDF",
      metaDescription: "Rédigez votre lettre de motivation gratuitement avec les informations de votre CV et téléchargez-la en PDF. Sans inscription, sans carte bancaire et sans frais.",
      heroTitle: "Créez votre lettre de motivation gratuitement et téléchargez-la en PDF",
      heroText: "Reprenez les informations de votre CV, rédigez votre lettre et téléchargez-la. Sans piège.",
      letterLang: "Langue de la lettre",
      cvCopied: "Nous avons repris les informations du CV enregistré dans ce navigateur.",
      secSender: "Vos coordonnées",
      fromCV: "Reprendre mon CV",
      noCV: "Vous n'avez pas encore rempli votre CV dans ce navigateur. Vous pouvez saisir vos coordonnées directement ici.",
      confirmFromCV: "Cela remplacera vos coordonnées par celles de votre CV. Continuer ?",
      secRecipient: "Entreprise et offre",
      fJob: "Poste visé",
      phJob: "Ex. : Comptable",
      fCompany: "Entreprise",
      phCompany: "Ex. : Groupe Rhône Alimentation",
      fContact: "Destinataire (facultatif)",
      phContact: "Ex. : Madame Durand",
      fRef: "Référence de l'offre (facultatif)",
      phRef: "Ex. : CPT-2026-14",
      fAddress: "Adresse de l'entreprise (facultatif)",
      phAddress: "Numéro et rue\nCode postal et ville",
      secLetter: "Votre lettre",
      fPlace: "Lieu",
      fDate: "Date",
      fSubject: "Objet",
      fGreeting: "Formule d'appel",
      fBody: "Texte de la lettre",
      phBody: "Rédigez 3 ou 4 paragraphes courts. Laissez une ligne vide entre les paragraphes.\n\nOu cliquez sur « Rédiger un brouillon avec mes infos » puis personnalisez-le.",
      fClosing: "Formule de politesse",
      autoHint: "Les textes en gris se remplissent tout seuls. Écrivez par-dessus pour les modifier.",
      draft: "Rédiger un brouillon avec mes infos",
      confirmDraft: "Cela remplacera le texte de votre lettre par un brouillon. Continuer ?",
      tipsTitle: "Conseils pour une bonne lettre",
      tip1: "Une seule page : 3 ou 4 paragraphes courts suffisent.",
      tip2: "Adaptez chaque lettre à l'entreprise et citez le poste exact.",
      tip3: "Ne recopiez pas votre CV : expliquez pourquoi vous correspondez au poste, avec un exemple concret.",
      tip4: "Relisez l'orthographe et le nom de l'entreprise avant l'envoi.",
      confirmClear: "Voulez-vous vraiment effacer toute la lettre ? Votre CV ne sera pas effacé.",
      confirmExample: "Cela remplacera ce que vous avez écrit par un exemple. Continuer ?",
      pages1: "1 page",
      pagesN: "{n} pages : essayez de la réduire à une",
      modalTitle: "Enregistrez votre lettre en PDF",
      lfaq1Q: "La lettre de motivation est-elle gratuite ?",
      lfaq1A: "Oui, comme le CV : vous pouvez rédiger et télécharger autant de lettres que vous voulez, sans rien payer et sans créer de compte.",
      lfaq2Q: "Dois-je d'abord faire mon CV ?",
      lfaq2A: "Non, mais si vous l'avez déjà fait sur ce site et dans ce navigateur, nous reprenons vos coordonnées automatiquement et le brouillon utilise votre expérience et vos compétences.",
      lfaq3Q: "Ma lettre est-elle envoyée quelque part ?",
      lfaq3A: "Non. La lettre est rédigée et enregistrée uniquement dans votre navigateur. Personne d'autre ne peut la voir.",
      navCV: "CV",
      navLetter: "Lettre de motivation"
    },
    letter: {
      namePlaceholder: "Votre nom",
      subjectLabel: "Objet",
      bodyPlaceholder: "Le texte de votre lettre apparaîtra ici.",
      subject: function (job, ref) {
        if (!job && !ref) return "";
        return "Candidature au poste de " + (job || "…") + (ref ? " (réf. " + ref + ")" : "");
      },
      greeting: function (contact) {
        return contact ? contact + "," : "Madame, Monsieur,";
      },
      closing: "Je vous prie d'agréer, Madame, Monsieur, l'expression de mes salutations distinguées.",
      date: function (place, d) {
        var text = d.toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });
        return (place ? place + ", le " : "Le ") + text;
      },
      draft: function (d) {
        var p = [];
        p.push("Je me permets de vous adresser ma candidature au poste de " + (d.job || "[poste]") +
          (d.company ? " au sein de " + d.company : "") + (d.ref ? " (référence " + d.ref + ")" : "") + ".");
        var second = "";
        if (d.role) {
          second = (d.current ? "J'occupe actuellement le poste de " : "J'ai occupé le poste de ") + d.role +
            (d.employer ? " chez " + d.employer : "") + ".";
        } else if (d.title) {
          second = "Ma formation et mon expérience sont orientées vers le métier de " + d.title.toLowerCase() + ".";
        }
        if (d.skills.length) {
          second += (second ? " " : "") + "Mes principaux atouts : " + joinList(d.skills, "et") + ".";
        }
        if (second) p.push(second + " [Ajoutez ici une réussite concrète, chiffrée si possible.]");
        p.push("Rejoindre " + (d.company || "votre entreprise") +
          " serait pour moi l'occasion de mettre mes compétences à votre service et de continuer à progresser. [Expliquez en une ou deux phrases pourquoi cette entreprise vous intéresse.]");
        p.push("Vous trouverez ci-joint mon CV. Je me tiens à votre disposition pour vous rencontrer lors d'un entretien.");
        return p.join("\n\n");
      }
    }
  }
};

// "a, b y c" / "a, b et c"
function joinList(items, and) {
  if (items.length < 2) return items.join("");
  return items.slice(0, -1).join(", ") + " " + and + " " + items[items.length - 1];
}

// Datos de ejemplo para el botón «Ver un ejemplo».
window.CARTA_EXAMPLES = {
  es: {
    sender: { name: "Laura García Pérez", title: "Administrativa contable", email: "laura.garcia@ejemplo.com", phone: "600 123 456", location: "Valencia", link: "linkedin.com/in/lauragarcia" },
    recipient: { job: "Técnica contable", company: "Grupo Mediterráneo Alimentación", contact: "Marta Ruiz", ref: "ADM-2026-14", address: "Avenida del Puerto, 120\n46023 Valencia" },
    body: "Me pongo en contacto con ustedes para presentar mi candidatura al puesto de Técnica contable publicado en su web.\n\nActualmente trabajo como administrativa contable en Distribuciones Levante, donde gestiono la facturación de más de 300 clientes al mes y preparo el cierre contable mensual. Gracias a unas plantillas de Excel que diseñé, reduje los errores de facturación un 20 %.\n\nConozco bien Grupo Mediterráneo por su crecimiento en los últimos años y me atrae la idea de trabajar en un departamento financiero más grande, donde pueda aportar mi experiencia en conciliaciones e impuestos y seguir aprendiendo.\n\nLes adjunto mi currículum y quedo a su disposición para ampliar cualquier información en una entrevista."
  },
  fr: {
    sender: { name: "Camille Martin", title: "Assistante comptable", email: "camille.martin@exemple.fr", phone: "06 12 34 56 78", location: "Lyon", link: "linkedin.com/in/camillemartin" },
    recipient: { job: "Comptable", company: "Groupe Rhône Alimentation", contact: "Madame Durand", ref: "CPT-2026-14", address: "120, quai Perrache\n69002 Lyon" },
    body: "Je me permets de vous adresser ma candidature au poste de comptable publié sur votre site.\n\nAssistante comptable chez Distribution Rhône depuis 2021, je gère la facturation de plus de 300 clients par mois et je prépare la clôture mensuelle. Grâce à des modèles Excel que j'ai conçus, j'ai réduit les erreurs de facturation de 20 %.\n\nJe suis attentivement le développement de votre groupe et je serais heureuse de rejoindre un service financier plus important, où je pourrais apporter mon expérience des rapprochements bancaires et de la TVA tout en continuant à progresser.\n\nVous trouverez ci-joint mon CV. Je me tiens à votre disposition pour vous rencontrer lors d'un entretien."
  }
};

// Exemples de CV par métier en FRANÇAIS.
// Chaque bloc génère une page exemples-cv/<slug>.html.
// Después de cambiar algo aquí, ejecuta: node herramientas/generar-ejemplos.js
// (Mismos campos que en herramientas/profesiones-es.js.)

module.exports = [
  {
    slug: "serveur",
    pair: "camarero",
    label: "Serveur / Serveuse",
    subject: "de serveur",
    title: "CV serveur / serveuse : exemple gratuit et conseils",
    description: "Exemple de CV de serveur prêt à adapter, avec les conseils des responsables de salle. Modifiez-le gratuitement et téléchargez-le en PDF sans inscription.",
    h1: "Exemple de CV serveur / serveuse",
    intro: "Un bon CV de serveur doit montrer en quelques secondes que vous êtes rapide, à l'aise avec la clientèle et capable de tenir le rythme pendant le coup de feu. Voici un exemple complet à adapter, avec les conseils qui comptent vraiment pour les responsables de salle.",
    template: "clasica",
    accent: "#1f5f8b",
    tips: [
      ["Chiffrez votre expérience.", "« 120 couverts par service » en dit beaucoup plus que « grande expérience en restauration »."],
      ["Indiquez vos langues et leur niveau.", "Dans les zones touristiques, l'anglais ou l'italien font souvent la différence entre deux candidats."],
      ["Précisez le type d'établissement.", "Brasserie, restaurant gastronomique, hôtel, restauration rapide : dites où vous avez travaillé et ce que vous faisiez."],
      ["Donnez vos disponibilités.", "Week-ends, coupures, saison d'été… C'est l'une des premières questions du recruteur."],
      ["Reprenez les mots de l'annonce.", "Si l'annonce parle de « service en salle », de « bar » ou d'« encaissement », utilisez ces mots : les logiciels de tri des CV (ATS) les recherchent."]
    ],
    cv: {
      personal: { name: "Thomas Lefèvre", title: "Serveur en restauration", email: "thomas.lefevre@exemple.fr", phone: "06 11 22 33 44", location: "Nice", link: "" },
      summary: "Serveur avec 5 ans d'expérience en brasserie et en hôtellerie sur la Côte d'Azur. Rapide en salle comme au bar, souriant avec la clientèle et habitué aux saisons à forte affluence. Je recherche un CDI dans un restaurant ou un hôtel.",
      experience: [
        { role: "Serveur", company: "Hôtel Promenade Azur", city: "Nice", start: "04/2022", end: "Aujourd'hui", desc: "- Service en salle jusqu'à 120 couverts par service\n- Accueil d'une clientèle internationale en français, anglais et italien\n- Conseil sur les vins et les suggestions du jour : ticket moyen en hausse\n- Formation de 3 extras chaque saison" },
        { role: "Commis de salle", company: "Brasserie du Port", city: "Nice", start: "05/2019", end: "03/2022", desc: "- Mise en place, débarrassage et service au bar\n- Préparation des boissons chaudes et encaissement" }
      ],
      education: [
        { degree: "Bac pro Commercialisation et services en restauration", school: "Lycée hôtelier de Nice", city: "Nice", start: "2016", end: "2019", desc: "" }
      ],
      skills: "Service en salle, Bar, Accueil client, Encaissement, Conseil en vins, Travail en équipe, Règles d'hygiène HACCP",
      languages: [{ name: "Français", level: "Langue maternelle" }, { name: "Anglais", level: "B2 (intermédiaire supérieur)" }, { name: "Italien", level: "B1 (intermédiaire)" }],
      extra: "Disponible les week-ends et jours fériés. Coupures acceptées."
    }
  },
  {
    slug: "vendeur",
    pair: "dependiente",
    label: "Vendeur / Vendeuse",
    subject: "de vendeur",
    title: "CV vendeur / vendeuse : exemple gratuit et conseils",
    description: "Exemple de CV de vendeuse ou de vendeur en magasin, avec des conseils pour se démarquer dans le commerce. Modifiez-le gratuitement et téléchargez-le en PDF.",
    h1: "Exemple de CV vendeur / vendeuse",
    intro: "En magasin, le responsable veut savoir si vous savez vendre, tenir une caisse et bien accueillir les clients. Cet exemple de CV de vendeuse le montre dès la première ligne, et il fonctionne aussi bien pour la mode que pour l'alimentaire ou le high-tech.",
    template: "moderna",
    accent: "#8b3a62",
    tips: [
      ["Mettez en avant vos résultats.", "Objectifs atteints, chiffre d'affaires, panier moyen. Sans chiffres, expliquez ce que vous faisiez pour vendre plus."],
      ["Nommez les tâches précises.", "Encaissement, réassort, inventaire, cabines, vitrines, commandes : ce sont les mots que cherchent les recruteurs."],
      ["Adaptez le profil au magasin.", "Mode, sport, alimentaire ou bricolage n'attendent pas la même chose. Changez deux ou trois mots du profil pour chaque annonce."],
      ["Citez les périodes de rush.", "Soldes, Noël ou rentrée prouvent que vous tenez le rythme quand le magasin est plein."],
      ["Indiquez vos disponibilités.", "Le samedi et les horaires tournants sont courants dans le commerce : dites-le clairement si c'est possible pour vous."]
    ],
    cv: {
      personal: { name: "Julie Moreau", title: "Vendeuse en prêt-à-porter", email: "julie.moreau@exemple.fr", phone: "06 22 33 44 55", location: "Paris", link: "" },
      summary: "Vendeuse avec 4 ans d'expérience en prêt-à-porter et en supermarché. J'aime conseiller les clients, j'atteins mes objectifs de vente et je gère sans difficulté l'encaissement, le réassort et les vitrines. Je recherche un poste de conseillère de vente avec des perspectives d'évolution.",
      experience: [
        { role: "Conseillère de vente", company: "Atelier Mode", city: "Paris", start: "09/2022", end: "Aujourd'hui", desc: "- Conseil client et vente additionnelle d'accessoires\n- Objectif mensuel atteint 18 mois d'affilée\n- Encaissement, retours et inventaires\n- Mise en place des vitrines selon le merchandising de la marque" },
        { role: "Employée libre-service et caissière", company: "Supermarché Marché Frais", city: "Paris", start: "06/2020", end: "08/2022", desc: "- Mise en rayon et contrôle des dates de péremption\n- Tenue de caisse avec plus de 200 clients par jour" }
      ],
      education: [
        { degree: "Bac pro Métiers du commerce et de la vente", school: "Lycée professionnel de Paris Est", city: "Paris", start: "2017", end: "2020", desc: "" }
      ],
      skills: "Conseil client, Vente additionnelle, Encaissement, Merchandising, Gestion des stocks, Gestion des réclamations",
      languages: [{ name: "Français", level: "Langue maternelle" }, { name: "Anglais", level: "B1 (intermédiaire)" }, { name: "Espagnol", level: "A2 (élémentaire)" }],
      extra: "Disponible le samedi et pendant les soldes."
    }
  },
  {
    slug: "assistant-administratif",
    pair: "administrativo",
    label: "Assistant(e) administratif(ve)",
    subject: "d'assistant administratif",
    title: "CV assistant(e) administratif(ve) : exemple et conseils",
    description: "Exemple de CV d'assistant administratif avec les mots-clés attendus par les recruteurs (Excel, SAP, facturation). Gratuit, à télécharger en PDF.",
    h1: "Exemple de CV assistant(e) administratif(ve)",
    intro: "Le CV d'un assistant administratif doit inspirer confiance : organisation, rigueur et aisance avec les logiciels. Regardez comment cet exemple précise chaque mission avec des chiffres et cite les outils que l'on retrouve dans les offres d'emploi.",
    template: "compacta",
    accent: "#2f6f4f",
    tips: [
      ["Citez vos logiciels.", "Excel, Sage, SAP, Cegid, Pennylane… Ce sont les mots-clés que filtrent le plus les logiciels de recrutement (ATS)."],
      ["Chiffrez vos missions.", "Combien de factures, de clients ou de fournisseurs vous suiviez chaque mois. Les chiffres rendent le CV crédible."],
      ["Racontez vos améliorations.", "Dématérialiser l'archivage, réduire les erreurs ou les délais : c'est ce qui vous distingue des autres candidats."],
      ["Précisez votre niveau sur Excel.", "Plutôt que « Excel avancé », donnez des exemples : tableaux croisés dynamiques, RECHERCHEV, macros."],
      ["Relisez-vous deux fois.", "Pour un poste administratif, une faute d'orthographe dans le CV pèse double."]
    ],
    cv: {
      personal: { name: "Nicolas Garnier", title: "Assistant administratif", email: "nicolas.garnier@exemple.fr", phone: "06 33 44 55 66", location: "Lille", link: "linkedin.com/in/nicolasgarnier" },
      summary: "Assistant administratif avec 7 ans d'expérience en gestion documentaire, facturation et relation fournisseurs. Je maîtrise Excel et les principaux logiciels de gestion, et je sais mener plusieurs dossiers de front. Je recherche un poste d'assistant administratif dans une entreprise stable.",
      experience: [
        { role: "Assistant administratif", company: "Transports Nord Logistique", city: "Lille", start: "01/2020", end: "Aujourd'hui", desc: "- Facturation mensuelle d'environ 250 clients et suivi des encaissements\n- Gestion des commandes et des fournisseurs sous SAP\n- Dématérialisation des bons de livraison : 70 % de papier en moins\n- Préparation des éléments variables de paie" },
        { role: "Agent administratif", company: "Cabinet Flandre Expertise", city: "Lille", start: "03/2017", end: "12/2019", desc: "- Accueil téléphonique et physique\n- Préparation de dossiers fiscaux et sociaux" }
      ],
      education: [
        { degree: "BTS Support à l'action managériale", school: "Lycée de Lille Centre", city: "Lille", start: "2015", end: "2017", desc: "" }
      ],
      skills: "Excel avancé (tableaux croisés dynamiques, RECHERCHEV), SAP, Sage, Facturation, Gestion des fournisseurs, Classement et archivage, Accueil",
      languages: [{ name: "Français", level: "Langue maternelle" }, { name: "Anglais", level: "B2 (intermédiaire supérieur)" }],
      extra: "Permis B. Saisie rapide : 60 mots par minute."
    }
  },
  {
    slug: "aide-soignant",
    pair: "auxiliar-enfermeria",
    label: "Aide-soignant(e)",
    subject: "d'aide-soignant",
    title: "CV aide-soignant(e) : exemple gratuit et conseils",
    description: "Exemple de CV d'aide-soignante diplômée d'État pour l'hôpital ou l'EHPAD, avec des conseils concrets. Modifiez-le gratuitement et téléchargez-le en PDF.",
    h1: "Exemple de CV aide-soignant(e)",
    intro: "Pour un poste d'aide-soignant, les hôpitaux et les EHPAD recherchent un diplôme, une vraie expérience des soins et une attitude calme et bienveillante. Cet exemple de CV d'aide-soignante montre comment présenter tout cela de façon claire.",
    template: "clasica",
    accent: "#1f6f8b",
    tips: [
      ["Indiquez votre DEAS.", "Diplôme d'État d'aide-soignant, avec l'année et l'IFAS : c'est la première chose vérifiée."],
      ["Précisez les services.", "Médecine, chirurgie, gériatrie, EHPAD, soins à domicile… Chacun montre des compétences différentes."],
      ["Ajoutez vos formations récentes.", "AFGSU, manutention, bientraitance, maladie d'Alzheimer, avec l'année."],
      ["Donnez vos horaires possibles.", "Jour, nuit, 12 heures, week-ends : la disponibilité est un vrai atout en santé."],
      ["Montrez la bienveillance par des faits.", "Une ligne sur ce que vous faites pour le confort des patients vaut mieux qu'une liste d'adjectifs."]
    ],
    cv: {
      personal: { name: "Sarah Benali", title: "Aide-soignante diplômée d'État", email: "sarah.benali@exemple.fr", phone: "06 44 55 66 77", location: "Marseille", link: "" },
      summary: "Aide-soignante diplômée d'État avec 5 ans d'expérience à l'hôpital et en EHPAD. Attentive à l'hygiène et au confort des patients, je travaille en binôme avec les infirmiers et je garde mon calme en situation d'urgence. Je recherche un poste en service hospitalier ou en établissement médico-social.",
      experience: [
        { role: "Aide-soignante en médecine interne", company: "Centre hospitalier des Calanques", city: "Marseille", start: "06/2021", end: "Aujourd'hui", desc: "- Soins d'hygiène et de confort\n- Prise des constantes et transmissions dans le dossier patient\n- Aide aux repas et à la mobilisation\n- Accueil des patients et de leurs familles" },
        { role: "Aide-soignante", company: "EHPAD Les Oliviers", city: "Marseille", start: "09/2019", end: "05/2021", desc: "- Accompagnement quotidien de 15 résidents dépendants\n- Prévention des escarres et des chutes" }
      ],
      education: [
        { degree: "Diplôme d'État d'aide-soignant (DEAS)", school: "IFAS de Marseille", city: "Marseille", start: "2018", end: "2019", desc: "" }
      ],
      skills: "Soins d'hygiène et de confort, Prise des constantes, Manutention des patients, Prévention des escarres, Transmissions ciblées, Travail en équipe, Bienveillance",
      languages: [{ name: "Français", level: "Langue maternelle" }, { name: "Anglais", level: "A2 (élémentaire)" }],
      extra: "AFGSU niveau 2 (2024). Disponible pour le travail de nuit et en 12 heures."
    }
  },
  {
    slug: "infirmier",
    pair: "enfermero",
    label: "Infirmier / Infirmière",
    subject: "d'infirmier",
    title: "CV infirmier / infirmière : exemple gratuit et conseils",
    description: "Exemple de CV d'infirmier diplômé d'État pour l'hôpital ou la clinique, avec des conseils sur l'Ordre et la formation continue. Gratuit en PDF.",
    h1: "Exemple de CV infirmier / infirmière",
    intro: "Dans un CV d'infirmier, l'essentiel est de montrer votre expérience clinique, les services où vous avez exercé et votre formation continue. Cet exemple est pensé pour sortir du lot dans les recrutements des hôpitaux et des cliniques.",
    template: "moderna",
    accent: "#0f766e",
    tips: [
      ["Mentionnez l'Ordre.", "L'inscription à l'Ordre national des infirmiers est obligatoire : indiquez-la, avec votre numéro RPPS si l'annonce le demande."],
      ["Classez l'expérience par services.", "Urgences, réanimation, bloc, SSR, libéral… avec les actes techniques que vous maîtrisez."],
      ["Datez votre formation continue.", "DU, AFGSU, formations aux plaies ou à la douleur : l'année montre que vous êtes à jour."],
      ["Valorisez le tutorat.", "Encadrer des étudiants en stage prouve votre expérience et votre sens des responsabilités."],
      ["Précisez votre rythme.", "Jour, nuit, 12 heures : cela aide le cadre de santé à imaginer votre affectation."]
    ],
    cv: {
      personal: { name: "Maxime Dubois", title: "Infirmier diplômé d'État", email: "maxime.dubois@exemple.fr", phone: "06 55 66 77 88", location: "Lyon", link: "linkedin.com/in/maximedubois" },
      summary: "Infirmier diplômé d'État avec 6 ans d'expérience aux urgences et en soins de suite. Rapide dans l'évaluation clinique, rigoureux sur les protocoles et à l'écoute des patients et de leurs proches. Je recherche un poste aux urgences ou en soins critiques.",
      experience: [
        { role: "Infirmier aux urgences", company: "Hôpital universitaire Confluence", city: "Lyon", start: "02/2021", end: "Aujourd'hui", desc: "- Infirmier organisateur de l'accueil (IOA) et prise en charge des urgences vitales\n- Administration des traitements et pose de voies veineuses\n- Membre de l'équipe de réanimation de l'hôpital\n- Tutorat d'étudiants infirmiers en stage" },
        { role: "Infirmier en soins de suite (SSR)", company: "Clinique Les Tilleuls", city: "Villeurbanne", start: "09/2018", end: "01/2021", desc: "- Soins techniques, pansements complexes et suivi des plaies\n- Éducation thérapeutique des patients diabétiques" }
      ],
      education: [
        { degree: "Diplôme d'État d'infirmier", school: "IFSI de Lyon", city: "Lyon", start: "2015", end: "2018", desc: "" }
      ],
      skills: "Accueil et tri aux urgences (IOA), Gestes d'urgence, Pose de voies veineuses, Plaies et cicatrisation, Administration des traitements, Dossier patient informatisé, Éducation thérapeutique",
      languages: [{ name: "Français", level: "Langue maternelle" }, { name: "Anglais", level: "B2 (intermédiaire supérieur)" }],
      extra: "Inscrit à l'Ordre national des infirmiers. AFGSU niveau 2 (2025)."
    }
  },
  {
    slug: "enseignant",
    pair: "profesor",
    label: "Enseignant(e) / Professeur(e)",
    subject: "d'enseignant",
    title: "CV enseignant / professeur : exemple gratuit et conseils",
    description: "Exemple de CV d'enseignante en collège et lycée, avec des conseils sur les concours et les outils numériques. Modifiez-le gratuitement en PDF.",
    h1: "Exemple de CV enseignant(e) / professeur(e)",
    intro: "Le CV d'un enseignant doit montrer votre discipline, les niveaux où vous avez enseigné et votre façon de travailler en classe. Dans cet exemple, vous verrez comment présenter l'enseignement, le suivi des élèves et vos résultats, sans en faire trop.",
    template: "clasica",
    accent: "#5b3a8b",
    tips: [
      ["Commencez par votre discipline et vos niveaux.", "Maternelle, élémentaire, collège, lycée, BTS ou adultes : cela doit se voir tout de suite."],
      ["Indiquez concours et diplômes.", "CAPES, CAFEP, agrégation, master MEEF : ils conditionnent les postes auxquels vous pouvez prétendre."],
      ["Donnez un résultat.", "Taux de réussite, projet mené, voyage organisé ou progression d'une classe."],
      ["Citez vos outils numériques.", "Pronote, ENT, Moodle, Genially, tableau interactif… Les établissements y sont attentifs."],
      ["Pour un poste de contractuel, montrez votre souplesse.", "Disponibilité, capacité à reprendre une classe en cours d'année, mobilité géographique."]
    ],
    cv: {
      personal: { name: "Claire Fontaine", title: "Professeure d'anglais en collège et lycée", email: "claire.fontaine@exemple.fr", phone: "06 66 77 88 99", location: "Bordeaux", link: "" },
      summary: "Professeure d'anglais avec 8 ans d'expérience en collège et en lycée. Je prépare des cours dynamiques avec des outils numériques, j'adapte mon enseignement à chaque élève et j'entretiens un lien de confiance avec les familles. Je recherche un poste dans un établissement avec section européenne.",
      experience: [
        { role: "Professeure d'anglais", company: "Lycée privé Garonne", city: "Bordeaux", start: "09/2019", end: "Aujourd'hui", desc: "- Enseignement de la seconde à la terminale\n- Coordination de la section européenne\n- Préparation aux certifications Cambridge : 92 % de réussite\n- Professeure principale d'une classe de 30 élèves" },
        { role: "Professeure d'anglais contractuelle", company: "Collège Jean-Moulin", city: "Mérignac", start: "09/2016", end: "06/2019", desc: "- Cours de la 6e à la 3e\n- Création de séquences et d'évaluations par compétences" }
      ],
      education: [
        { degree: "Master MEEF Anglais", school: "INSPÉ de l'académie de Bordeaux", city: "Bordeaux", start: "2014", end: "2016", desc: "" },
        { degree: "Licence LLCER Anglais", school: "Université Bordeaux Montaigne", city: "Pessac", start: "2011", end: "2014", desc: "" }
      ],
      skills: "Conception de séquences, Différenciation pédagogique, Pronote, ENT, Évaluation par compétences, Gestion de classe, Accompagnement personnalisé",
      languages: [{ name: "Français", level: "Langue maternelle" }, { name: "Anglais", level: "C2 (maîtrise)" }, { name: "Espagnol", level: "B1 (intermédiaire)" }],
      extra: "Lauréate du CAFEP-CAPES d'anglais (2019). Organisation d'un voyage scolaire à Londres chaque année."
    }
  },
  {
    slug: "cuisinier",
    pair: "cocinero",
    label: "Cuisinier / Cuisinière",
    subject: "de cuisinier",
    title: "CV cuisinier / cuisinière : exemple gratuit et conseils",
    description: "Exemple de CV de cuisinier ou de commis de cuisine, avec les conseils des chefs. Modifiez-le gratuitement et téléchargez-le en PDF sans inscription.",
    h1: "Exemple de CV cuisinier / cuisinière",
    intro: "Un chef regarde votre CV pour savoir trois choses : à quels postes vous savez travailler, quel volume vous avez assuré et si vous respectez les règles d'hygiène. Cet exemple de CV de cuisinier répond aux trois sur une seule page.",
    template: "moderna",
    accent: "#b45309",
    tips: [
      ["Précisez les postes maîtrisés.", "Chaud, froid, garde-manger, grill, pâtisserie… et le type de cuisine : traditionnelle, bistronomique, collective."],
      ["Donnez le volume.", "Le nombre de couverts par service prouve que vous savez travailler sous pression."],
      ["Mentionnez l'hygiène alimentaire.", "HACCP et allergènes sont indispensables dans toutes les cuisines."],
      ["Montrez vos responsabilités.", "Créer une carte, rédiger des fiches techniques ou encadrer des commis vous rapproche du poste de chef de partie."],
      ["Faites voir vos assiettes.", "Si vous avez un compte Instagram professionnel, mettez-le dans le champ « LinkedIn ou site web »."]
    ],
    cv: {
      personal: { name: "Antoine Lambert", title: "Cuisinier, chef de partie", email: "antoine.lambert@exemple.fr", phone: "06 77 88 99 00", location: "Toulouse", link: "instagram.com/antoinelambertcuisine" },
      summary: "Cuisinier avec 6 ans d'expérience en brasserie et en restaurant bistronomique. Je maîtrise le poste chaud et le grill, je respecte strictement l'hygiène et je tiens le rythme lors des services à fort volume. Je recherche un poste de cuisinier ou de chef de partie.",
      experience: [
        { role: "Chef de partie", company: "Le Capitole Gourmand", city: "Toulouse", start: "03/2022", end: "Aujourd'hui", desc: "- Responsable du poste chaud jusqu'à 150 couverts par service\n- Fonds, sauces, mise en place et maîtrise des pertes\n- Application du plan HACCP et relevés de températures\n- Encadrement de 2 commis" },
        { role: "Commis de cuisine", company: "Hôtel Garonne Centre", city: "Toulouse", start: "04/2019", end: "02/2022", desc: "- Préparation des petits-déjeuners buffet pour 200 clients\n- Renfort au garde-manger et en pâtisserie" }
      ],
      education: [
        { degree: "CAP Cuisine", school: "Lycée hôtelier de Toulouse", city: "Toulouse", start: "2017", end: "2019", desc: "" }
      ],
      skills: "Cuisine traditionnelle, Poste chaud, Grill, Sauces et fonds, HACCP, Gestion des stocks, Mise en place, Travail sous pression",
      languages: [{ name: "Français", level: "Langue maternelle" }, { name: "Espagnol", level: "B1 (intermédiaire)" }, { name: "Anglais", level: "A2 (élémentaire)" }],
      extra: "Formation allergènes. Permis B."
    }
  },
  {
    slug: "preparateur-commandes",
    pair: "mozo-almacen",
    label: "Préparateur / Préparatrice de commandes",
    subject: "de préparateur de commandes",
    title: "CV préparateur de commandes : exemple gratuit et conseils",
    description: "Exemple de CV de préparateur de commandes et cariste, avec des conseils sur les CACES et la productivité. Modifiez-le gratuitement en PDF.",
    h1: "Exemple de CV préparateur / préparatrice de commandes",
    intro: "En logistique, on recherche de la rapidité, de la rigueur et la maîtrise des engins. Cet exemple de CV de préparateur de commandes montre comment mettre en avant votre productivité et vos CACES pour être appelé en premier.",
    template: "compacta",
    accent: "#475569",
    tips: [
      ["Mettez vos CACES en avant.", "Avec les catégories (R489 1A, 3, 5…) et la date d'obtention, dans le profil ou en « Informations complémentaires »."],
      ["Chiffrez votre productivité.", "Colis ou lignes par heure, commandes par poste, camions chargés."],
      ["Citez les outils.", "Scanner, commande vocale, WMS, SAP : ce sont des mots-clés recherchés."],
      ["Parlez de sécurité.", "Zéro accident et respect des consignes sont des critères clés en entrepôt."],
      ["L'intérim compte.", "Pour chaque mission, indiquez l'entreprise où vous étiez : c'est de la vraie expérience."]
    ],
    cv: {
      personal: { name: "Kevin Petit", title: "Préparateur de commandes cariste", email: "kevin.petit@exemple.fr", phone: "06 88 99 00 11", location: "Orléans", link: "" },
      summary: "Préparateur de commandes avec 5 ans d'expérience en entrepôt logistique. Titulaire des CACES 1A, 3 et 5, j'utilise le scanner et le WMS au quotidien et j'atteins mes objectifs de productivité en toute sécurité. Je recherche un poste stable sur une plateforme logistique.",
      experience: [
        { role: "Préparateur de commandes cariste", company: "Plateforme Logistique Val de Loire", city: "Orléans", start: "10/2021", end: "Aujourd'hui", desc: "- Préparation d'environ 180 commandes par poste avec scanner et commande vocale\n- Chargement et déchargement des camions au chariot frontal et rétractable\n- Mise en stock et inventaires tournants\n- Aucun accident du travail en 3 ans" },
        { role: "Préparateur de commandes (intérim)", company: "Distribution Centre Loiret", city: "Saran", start: "03/2019", end: "09/2021", desc: "- Préparation et emballage pendant les pics d'activité\n- Contrôle des réceptions et des expéditions dans le WMS" }
      ],
      education: [
        { degree: "Titre professionnel Préparateur de commandes en entrepôt", school: "Centre de formation professionnelle d'Orléans", city: "Orléans", start: "2018", end: "2019", desc: "" }
      ],
      skills: "Préparation de commandes, CACES R489, Scanner et commande vocale, WMS, Chargement et déchargement, Inventaires, Sécurité au travail",
      languages: [{ name: "Français", level: "Langue maternelle" }, { name: "Anglais", level: "A2 (élémentaire)" }],
      extra: "CACES R489 catégories 1A, 3 et 5 (2023). Permis B et véhicule. Disponible en 2x8 et de nuit."
    }
  },
  {
    slug: "chauffeur-livreur",
    pair: "repartidor",
    label: "Chauffeur-livreur / Chauffeuse-livreuse",
    subject: "de chauffeur-livreur",
    title: "CV chauffeur-livreur : exemple gratuit et conseils",
    description: "Exemple de CV de chauffeur-livreur en véhicule utilitaire, avec des conseils sur les permis et la FIMO. Modifiez-le gratuitement et téléchargez-le en PDF.",
    h1: "Exemple de CV chauffeur-livreur",
    intro: "Pour un poste de livreur, l'employeur veut savoir quels permis vous avez, si vous connaissez le secteur et si vous êtes ponctuel. Cet exemple de CV de chauffeur-livreur dit tout cela sur une seule page, avec des faits précis.",
    template: "moderna",
    accent: "#1d4ed8",
    tips: [
      ["Listez vos permis.", "B, C1, C ou CE, ainsi que la FIMO ou la FCO et la carte conducteur, avec leur date de validité."],
      ["Précisez si vous avez tous vos points.", "C'est un vrai gage de confiance pour l'employeur."],
      ["Chiffrez.", "Colis par jour, kilomètres par tournée, taux de livraison à l'heure."],
      ["Citez les secteurs que vous connaissez.", "Bien connaître la ville et les zones d'activité fait gagner du temps de formation."],
      ["Valorisez la relation client.", "Vous représentez l'entreprise à chaque livraison : l'amabilité compte."]
    ],
    cv: {
      personal: { name: "Julien Mercier", title: "Chauffeur-livreur", email: "julien.mercier@exemple.fr", phone: "06 99 00 11 22", location: "Nantes", link: "" },
      summary: "Chauffeur-livreur avec 6 ans d'expérience en messagerie et en livraison de boissons. Je connais parfaitement Nantes et son agglomération, j'organise ma tournée pour respecter les horaires et je soigne la relation avec les clients. Je recherche un CDI de chauffeur-livreur.",
      experience: [
        { role: "Chauffeur-livreur", company: "Messagerie Express Atlantique", city: "Nantes", start: "05/2021", end: "Aujourd'hui", desc: "- Livraison de 120 à 150 colis par jour en véhicule utilitaire\n- Optimisation des tournées avec GPS\n- Gestion des retours et des incidents sur l'application\n- 99 % de livraisons à l'heure en 2025" },
        { role: "Livreur", company: "Boissons de l'Ouest", city: "Nantes", start: "02/2019", end: "04/2021", desc: "- Livraison de boissons aux cafés et restaurants\n- Chargement, déchargement et contrôle des bons de livraison" }
      ],
      education: [
        { degree: "CAP Conducteur livreur de marchandises", school: "Lycée professionnel de Nantes", city: "Nantes", start: "2016", end: "2018", desc: "" }
      ],
      skills: "Conduite de véhicule utilitaire, Optimisation de tournées, GPS et applications de livraison, Relation client, Manutention, Bons de livraison, Ponctualité",
      languages: [{ name: "Français", level: "Langue maternelle" }, { name: "Anglais", level: "A2 (élémentaire)" }],
      extra: "Permis B et C1, tous les points. FIMO marchandises à jour et carte conducteur. Disponible immédiatement."
    }
  },
  {
    slug: "receptionniste",
    pair: "recepcionista",
    label: "Réceptionniste",
    subject: "de réceptionniste",
    title: "CV réceptionniste : exemple gratuit et conseils",
    description: "Exemple de CV de réceptionniste en hôtellerie, avec des conseils sur les langues et les logiciels de réservation. Modifiez-le gratuitement en PDF.",
    h1: "Exemple de CV réceptionniste",
    intro: "Le CV d'un réceptionniste doit refléter votre sens du contact, vos langues et votre maîtrise des logiciels de réservation. Cet exemple est pensé pour l'hôtellerie, mais il convient aussi à l'accueil en entreprise, en clinique ou en salle de sport.",
    template: "clasica",
    accent: "#0e7490",
    tips: [
      ["Indiquez le vrai niveau de vos langues.", "Utilisez l'échelle A1–C2. À la réception, les langues sont la première chose regardée."],
      ["Citez le logiciel hôtelier.", "Opera, Protel, Mews, Medialog… Si l'hôtel utilise le même, vous partez avec une longueur d'avance."],
      ["Ajoutez les avis clients.", "Une bonne note sur Booking ou un prix interne prouve la qualité de votre accueil."],
      ["Montrez comment vous gérez les imprévus.", "Surréservation, réclamations, changements de dernière minute : une ligne suffit."],
      ["Adaptez le CV hors hôtellerie.", "Pour l'accueil en entreprise ou en clinique, mettez en avant le standard, l'agenda et l'accueil téléphonique."]
    ],
    cv: {
      personal: { name: "Émilie Roux", title: "Réceptionniste en hôtellerie", email: "emilie.roux@exemple.fr", phone: "07 11 22 33 44", location: "Annecy", link: "linkedin.com/in/emilieroux" },
      summary: "Réceptionniste avec 5 ans d'expérience en hôtel 4 étoiles. Je gère avec aisance les arrivées, les réservations et la facturation, je parle quatre langues et je règle les imprévus avec calme et le sourire. Je recherche un poste de réceptionniste ou de chef de réception.",
      experience: [
        { role: "Réceptionniste", company: "Hôtel du Lac Bleu ****", city: "Annecy", start: "03/2022", end: "Aujourd'hui", desc: "- Arrivées et départs jusqu'à 90 chambres par jour\n- Gestion des réservations et des tarifs sous Opera PMS\n- Accueil de la clientèle en français, anglais, allemand et italien\n- Gestion des réclamations : note moyenne de 9,2 sur Booking" },
        { role: "Réceptionniste de nuit (night audit)", company: "Hôtel des Alpes", city: "Annecy", start: "05/2019", end: "02/2022", desc: "- Audit de nuit et clôture de caisse\n- Accueil téléphonique et vente d'activités" }
      ],
      education: [
        { degree: "BTS Management en hôtellerie-restauration", school: "Lycée hôtelier de Savoie", city: "Chambéry", start: "2017", end: "2019", desc: "" }
      ],
      skills: "Arrivées et départs, Opera PMS, Gestion des réservations, Facturation et caisse, Accueil téléphonique, Gestion des réclamations, Vente additionnelle",
      languages: [{ name: "Français", level: "Langue maternelle" }, { name: "Anglais", level: "C1 (avancé)" }, { name: "Allemand", level: "B2 (intermédiaire supérieur)" }, { name: "Italien", level: "B1 (intermédiaire)" }],
      extra: "Disponible en horaires décalés, de nuit et les jours fériés."
    }
  },
  {
    slug: "conseiller-clientele",
    pair: "atencion-cliente",
    label: "Conseiller / Conseillère clientèle",
    subject: "de conseiller clientèle",
    title: "CV conseiller clientèle : exemple gratuit et conseils",
    description: "Exemple de CV de conseillère clientèle ou de téléconseiller, avec les chiffres et logiciels attendus par les recruteurs. Gratuit, en PDF.",
    h1: "Exemple de CV conseiller / conseillère clientèle",
    intro: "Les centres de relation client recherchent des personnes qui s'expriment bien, restent patientes et tiennent leurs objectifs de qualité. Cet exemple de CV de téléconseillère montre comment transformer votre quotidien en résultats mesurables.",
    template: "moderna",
    accent: "#be123c",
    tips: [
      ["Donnez des chiffres.", "Appels par jour, durée moyenne de traitement, satisfaction client, ventes réalisées."],
      ["Citez les logiciels.", "Salesforce, Zendesk, Genesys, Avaya… Ce sont des mots-clés recherchés par les logiciels de recrutement."],
      ["Indiquez les canaux.", "Téléphone, chat, e-mail, réseaux sociaux : plus vous en maîtrisez, mieux c'est."],
      ["Parlez du télétravail.", "Beaucoup d'offres sont à distance : précisez votre expérience, votre équipement et votre connexion."],
      ["Les langues ouvrent des portes.", "De nombreux postes concernent des clients étrangers : indiquez chaque langue avec son niveau."]
    ],
    cv: {
      personal: { name: "Laura Girard", title: "Conseillère clientèle", email: "laura.girard@exemple.fr", phone: "07 22 33 44 55", location: "Rennes", link: "" },
      summary: "Conseillère clientèle avec 4 ans d'expérience en centre de relation client dans les télécoms et l'énergie. Je traite les demandes et les réclamations par téléphone, chat et e-mail, je respecte les indicateurs de qualité et j'ai le sens de la vente. Je recherche un poste sur site ou en télétravail.",
      experience: [
        { role: "Téléconseillère", company: "Centre de contact Armor", city: "Rennes", start: "01/2022", end: "Aujourd'hui", desc: "- Environ 70 appels par jour de clients en téléphonie\n- Traitement des incidents et des réclamations sous Salesforce\n- Satisfaction client toujours au-dessus de l'objectif de l'équipe\n- Ventes de changements d'offre : 15 % au-dessus de la moyenne" },
        { role: "Conseillère clientèle", company: "Énergie Bretagne", city: "Rennes", start: "06/2020", end: "12/2021", desc: "- Réponses par chat et par e-mail\n- Souscriptions, résiliations et changements de titulaire" }
      ],
      education: [
        { degree: "BTS Négociation et digitalisation de la relation client (NDRC)", school: "Lycée de Rennes Sud", city: "Rennes", start: "2018", end: "2020", desc: "" }
      ],
      skills: "Relation client à distance, Gestion des réclamations, Salesforce, Zendesk, Vente par téléphone, Écoute active, Saisie rapide",
      languages: [{ name: "Français", level: "Langue maternelle" }, { name: "Anglais", level: "B2 (intermédiaire supérieur)" }, { name: "Espagnol", level: "B1 (intermédiaire)" }],
      extra: "Expérience du télétravail. Équipement personnel et connexion fibre."
    }
  },
  {
    slug: "sans-experience",
    pair: "sin-experiencia",
    label: "Sans expérience (premier emploi)",
    subject: "sans expérience",
    title: "CV sans expérience : exemple pour un premier emploi",
    description: "Vous cherchez votre premier emploi ? Exemple de CV sans expérience professionnelle et conseils pour valoriser études, stages et jobs d'été. Gratuit.",
    h1: "Exemple de CV sans expérience professionnelle",
    intro: "Vous cherchez votre premier emploi et vous ne savez pas quoi mettre dans votre CV ? Ne pas avoir d'expérience professionnelle ne veut pas dire ne rien avoir à raconter : stages, études, bénévolat et jobs d'été comptent aussi. Cet exemple vous montre comment les présenter.",
    template: "clasica",
    accent: "#1f5f8b",
    tips: [
      ["Présentez vos stages comme une expérience.", "Ils vont dans « Expérience professionnelle », avec vos missions et un résultat, comme un emploi."],
      ["Ajoutez les petits boulots.", "Animation, baby-sitting, cours particuliers, jobs d'été ou de Noël : tout montre votre sérieux."],
      ["Utilisez vos études.", "Si un projet ou un mémoire est lié au poste, expliquez-le en une ligne."],
      ["Mentionnez le bénévolat et le BAFA.", "Dans « Informations complémentaires » : ils prouvent votre engagement et alimentent l'entretien."],
      ["Écrivez un profil concret.", "Dites ce que vous cherchez et ce que vous apportez. Évitez « sérieuse et motivée » sans exemple pour le prouver."]
    ],
    cv: {
      personal: { name: "Léa Fournier", title: "Jeune diplômée en économie et gestion", email: "lea.fournier@exemple.fr", phone: "07 33 44 55 66", location: "Montpellier", link: "linkedin.com/in/leafournier" },
      summary: "Jeune diplômée d'une licence d'économie et gestion, avec un stage en marketing dans une PME locale. J'apprends vite, je suis organisée et j'aime travailler en équipe. Je recherche un premier emploi en marketing ou en relation client.",
      experience: [
        { role: "Stagiaire marketing", company: "Huiles d'Occitanie", city: "Montpellier", start: "02/2026", end: "06/2026", desc: "- Publications sur les réseaux sociaux : +30 % d'abonnés sur Instagram\n- Aide à l'organisation de 2 salons professionnels\n- Rapports de ventes hebdomadaires sur Excel" },
        { role: "Animatrice en colonie de vacances", company: "Colonie Les Cévennes", city: "Florac", start: "07/2024", end: "08/2024", desc: "- Animation d'activités pour des groupes de 15 enfants" }
      ],
      education: [
        { degree: "Licence Économie et gestion", school: "Université de Montpellier", city: "Montpellier", start: "2023", end: "2026", desc: "Projet tutoré : plan de communication digitale pour une coopérative (17/20)" }
      ],
      skills: "Excel, Canva, Réseaux sociaux, Google Workspace, Travail en équipe, Communication, Organisation",
      languages: [{ name: "Français", level: "Langue maternelle" }, { name: "Anglais", level: "B2 (intermédiaire supérieur)" }, { name: "Espagnol", level: "A2 (élémentaire)" }],
      extra: "BAFA (2023). Bénévole dans une association d'aide alimentaire (2023–2025). Permis B. Disponible immédiatement."
    }
  }
];

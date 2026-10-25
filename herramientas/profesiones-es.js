// Ejemplos de currículum por profesión en ESPAÑOL.
// Cada bloque genera una página en ejemplos-cv/<slug>.html.
// Después de cambiar algo aquí, ejecuta: node herramientas/generar-ejemplos.js
//
// slug:    nombre de la página (sin espacios ni tildes)
// pair:    slug de la misma profesión en francés (herramientas/profesiones-fr.js)
// subject: cómo se completa «Consejos para tu currículum …»
// tips:    consejos: [título en negrita, explicación]
// cv:      los datos del ejemplo (los mismos campos que el editor). Todo es inventado.

module.exports = [
  {
    slug: "camarero",
    pair: "serveur",
    label: "Camarero/a",
    subject: "de camarero/a",
    title: "Currículum de camarero/a: ejemplo y consejos gratis",
    description: "Ejemplo de currículum de camarero/a listo para copiar, con consejos de encargados de sala. Edítalo gratis y descárgalo en PDF sin registrarte.",
    h1: "Ejemplo de currículum de camarero/a",
    intro: "Un buen currículum de camarero debe demostrar en pocos segundos que eres rápido, que tratas bien al cliente y que aguantas el ritmo cuando el local se llena. Aquí tienes un ejemplo completo, listo para adaptar, y los consejos que más valoran los encargados de sala.",
    template: "clasica",
    accent: "#1f5f8b",
    tips: [
      ["Da cifras de tu experiencia.", "«120 cubiertos por turno» dice mucho más que «amplia experiencia en hostelería»."],
      ["Pon los idiomas con su nivel.", "En zonas turísticas, el inglés (o el alemán, o el francés) suele ser lo que decide entre dos candidatos."],
      ["Indica el tipo de local.", "No es lo mismo un bar de tapas, un restaurante de carta, un hotel o una cafetería: di dónde has trabajado y qué hacías."],
      ["Di tu disponibilidad.", "Fines de semana, turnos partidos, temporada de verano… Es de lo primero que pregunta el encargado."],
      ["Copia las palabras de la oferta.", "Si piden «barra», «TPV» o «servicio de sala», que aparezcan tal cual: los programas que filtran currículums (ATS) buscan esas palabras."]
    ],
    cv: {
      personal: { name: "Javier Romero Ortiz", title: "Camarero de sala", email: "javier.romero@ejemplo.com", phone: "600 111 222", location: "Málaga", link: "" },
      summary: "Camarero con 5 años de experiencia en restaurantes y hoteles de la Costa del Sol. Rápido en sala y en barra, con buen trato al cliente y acostumbrado a temporadas de mucho volumen. Busco un puesto estable en un restaurante o un hotel.",
      experience: [
        { role: "Camarero de sala", company: "Hotel Marítimo Costa", city: "Málaga", start: "04/2022", end: "Actualidad", desc: "- Servicio de comedor de hasta 120 cubiertos por turno\n- Atención a clientes en español e inglés\n- Recomendación de vinos y platos del día: subió el tique medio\n- Formación de 3 camareros nuevos cada temporada" },
        { role: "Ayudante de camarero", company: "Restaurante La Alameda", city: "Málaga", start: "05/2019", end: "03/2022", desc: "- Montaje de mesas y servicio de barra\n- Preparación de cafés y cócteles sencillos, y cobro en TPV" }
      ],
      education: [
        { degree: "Técnico en Servicios en Restauración (FP de Grado Medio)", school: "Escuela de Hostelería de Málaga", city: "Málaga", start: "2017", end: "2019", desc: "" }
      ],
      skills: "Servicio de sala, Barra y coctelería básica, Atención al cliente, Manejo de TPV, Carta de vinos, Trabajo en equipo",
      languages: [{ name: "Español", level: "Nativo" }, { name: "Inglés", level: "B2 (intermedio alto)" }],
      extra: "Formación en manipulación de alimentos y alérgenos. Disponibilidad para fines de semana y festivos."
    }
  },
  {
    slug: "dependiente",
    pair: "vendeur",
    label: "Dependiente/a",
    subject: "de dependiente/a",
    title: "Currículum de dependiente/a: ejemplo y consejos gratis",
    description: "Ejemplo de currículum de dependienta o dependiente de tienda, con consejos para destacar en comercio. Cámbialo gratis y descárgalo en PDF.",
    h1: "Ejemplo de currículum de dependiente/a",
    intro: "En una tienda, el encargado quiere saber si sabes vender, si te manejas en caja y si tratas bien a los clientes. Este ejemplo de currículum de dependienta lo deja claro desde la primera línea, y sirve igual para moda, alimentación o electrónica.",
    template: "moderna",
    accent: "#8b3a62",
    tips: [
      ["Habla de resultados de venta.", "Objetivos cumplidos, ventas por hora o tique medio. Si no tienes cifras, explica qué hacías para vender más."],
      ["Nombra las tareas concretas.", "Caja, reposición, inventario, probadores, escaparates, pedidos: son las palabras que buscan las empresas."],
      ["Adapta el perfil a cada tienda.", "Moda, deporte, alimentación o tecnología valoran cosas distintas. Cambia dos o tres palabras del perfil para cada oferta."],
      ["Incluye las campañas.", "Navidad, rebajas o vuelta al cole demuestran que aguantas los momentos de más trabajo."],
      ["Di tu disponibilidad horaria.", "En comercio los turnos rotativos y los sábados son habituales: si puedes, dilo claramente."]
    ],
    cv: {
      personal: { name: "Lucía Martín Herrera", title: "Dependienta de comercio", email: "lucia.martin@ejemplo.com", phone: "600 222 333", location: "Madrid", link: "" },
      summary: "Dependienta con 4 años de experiencia en tiendas de moda y supermercados. Me gusta asesorar al cliente, cumplo los objetivos de venta y me encargo con soltura de la caja, la reposición y los escaparates. Busco un puesto en tienda con posibilidad de crecer.",
      experience: [
        { role: "Dependienta", company: "Nórdica Moda", city: "Madrid", start: "09/2022", end: "Actualidad", desc: "- Asesoramiento a clientes y venta de complementos\n- Objetivo mensual de ventas cumplido 18 meses seguidos\n- Cierre de caja, devoluciones y control de stock\n- Montaje de escaparates según las pautas de la marca" },
        { role: "Reponedora y cajera", company: "Supermercados Sol", city: "Madrid", start: "06/2020", end: "08/2022", desc: "- Reposición de lineales y control de fechas de caducidad\n- Atención en caja a más de 200 clientes por turno" }
      ],
      education: [
        { degree: "Técnico en Actividades Comerciales (FP de Grado Medio)", school: "Instituto de Comercio de Madrid", city: "Madrid", start: "2018", end: "2020", desc: "" }
      ],
      skills: "Venta y asesoramiento, Caja y TPV, Visual merchandising, Gestión de stock, Atención al cliente, Resolución de reclamaciones",
      languages: [{ name: "Español", level: "Nativo" }, { name: "Inglés", level: "B1 (intermedio)" }],
      extra: "Disponibilidad para turnos rotativos y fines de semana."
    }
  },
  {
    slug: "administrativo",
    pair: "assistant-administratif",
    label: "Administrativo/a",
    subject: "de administrativo/a",
    title: "Currículum de administrativo/a: ejemplo y consejos gratis",
    description: "Ejemplo de currículum de administrativo con las palabras clave que piden las empresas (Excel, SAP, facturación). Edítalo gratis y descárgalo en PDF.",
    h1: "Ejemplo de currículum de administrativo/a",
    intro: "El currículum de un administrativo tiene que transmitir orden, precisión y soltura con los programas informáticos. Fíjate en cómo este ejemplo concreta cada tarea con datos y nombra las herramientas que aparecen en las ofertas de empleo.",
    template: "compacta",
    accent: "#2f6f4f",
    tips: [
      ["Nombra los programas que usas.", "Excel, SAP, A3, Sage, Holded… Son las palabras clave que más filtran los programas de selección (ATS)."],
      ["Concreta volúmenes.", "Cuántas facturas, clientes o proveedores gestionabas al mes. Los números dan credibilidad."],
      ["Cuenta las mejoras que hiciste.", "Digitalizar el archivo, reducir errores o acortar plazos es lo que diferencia tu currículum de los demás."],
      ["Explica tu nivel de Excel.", "En vez de «Excel avanzado» a secas, añade ejemplos: tablas dinámicas, BUSCARV, macros."],
      ["Revisa la ortografía dos veces.", "En un puesto administrativo, una falta en el currículum pesa el doble."]
    ],
    cv: {
      personal: { name: "Sergio Navarro Gil", title: "Administrativo", email: "sergio.navarro@ejemplo.com", phone: "600 333 444", location: "Zaragoza", link: "linkedin.com/in/sergionavarro" },
      summary: "Administrativo con 7 años de experiencia en gestión documental, facturación y relación con proveedores. Domino Excel y los programas de gestión más usados, y me organizo bien con varias tareas a la vez. Busco incorporarme al departamento de administración de una empresa estable.",
      experience: [
        { role: "Administrativo", company: "Transportes Ebro Logística", city: "Zaragoza", start: "01/2020", end: "Actualidad", desc: "- Facturación mensual de unos 250 clientes y control de cobros\n- Gestión de pedidos y proveedores con SAP\n- Digitalización del archivo de albaranes: un 70 % menos de papel\n- Apoyo en nóminas y altas en la Seguridad Social" },
        { role: "Auxiliar administrativo", company: "Gestoría Pilar Asesores", city: "Zaragoza", start: "03/2017", end: "12/2019", desc: "- Atención telefónica y presencial a clientes\n- Preparación de documentación fiscal y laboral" }
      ],
      education: [
        { degree: "Técnico Superior en Administración y Finanzas", school: "Centro de FP Ebro", city: "Zaragoza", start: "2015", end: "2017", desc: "" }
      ],
      skills: "Excel avanzado (tablas dinámicas, BUSCARV), SAP, A3 Software, Facturación, Gestión de proveedores, Gestión documental, Atención al cliente",
      languages: [{ name: "Español", level: "Nativo" }, { name: "Inglés", level: "B2 (intermedio alto)" }],
      extra: "Carné de conducir B. Mecanografía: 300 pulsaciones por minuto."
    }
  },
  {
    slug: "auxiliar-enfermeria",
    pair: "aide-soignant",
    label: "Auxiliar de enfermería (TCAE)",
    subject: "de auxiliar de enfermería",
    title: "Currículum de auxiliar de enfermería (TCAE): ejemplo gratis",
    description: "Ejemplo de currículum de auxiliar de enfermería (TCAE) para hospital o residencia, con consejos prácticos. Edítalo gratis y descárgalo en PDF.",
    h1: "Ejemplo de currículum de auxiliar de enfermería (TCAE)",
    intro: "Para un puesto de auxiliar de enfermería, los hospitales y residencias buscan la titulación oficial, experiencia en cuidados y una actitud tranquila y cercana con el paciente. Este ejemplo de currículum de TCAE muestra cómo contarlo de forma clara y ordenada.",
    template: "clasica",
    accent: "#1f6f8b",
    tips: [
      ["Escribe tu título completo.", "«Técnico en Cuidados Auxiliares de Enfermería», con el centro y el año: es lo primero que se comprueba."],
      ["Separa los servicios.", "Planta, urgencias, quirófano, residencia, ayuda a domicilio… Cada uno demuestra habilidades distintas."],
      ["Añade cursos recientes.", "Soporte vital básico, movilización de pacientes, demencias o prevención de riesgos, con su año."],
      ["Indica qué turnos puedes hacer.", "Mañana, tarde, noche y fines de semana. En sanidad, la disponibilidad abre muchas puertas."],
      ["Menciona las bolsas de empleo.", "Si estás inscrita en la bolsa de tu servicio de salud, ponlo en «Otros datos»."]
    ],
    cv: {
      personal: { name: "Rocío Jiménez Vega", title: "Técnica en Cuidados Auxiliares de Enfermería (TCAE)", email: "rocio.jimenez@ejemplo.com", phone: "600 444 555", location: "Sevilla", link: "" },
      summary: "TCAE con 5 años de experiencia en hospital y en residencia de mayores. Cuidadosa con la higiene y el confort del paciente, trabajo bien en equipo con enfermería y mantengo la calma en situaciones de urgencia. Busco un puesto en hospital o centro sociosanitario.",
      experience: [
        { role: "TCAE en planta de medicina interna", company: "Hospital San Lucas", city: "Sevilla", start: "06/2021", end: "Actualidad", desc: "- Higiene, movilización y alimentación de pacientes\n- Toma de constantes y registro en la historia clínica\n- Reposición de material y esterilización\n- Apoyo al equipo de enfermería en ingresos y altas" },
        { role: "Auxiliar de enfermería", company: "Residencia Los Naranjos", city: "Sevilla", start: "09/2019", end: "05/2021", desc: "- Cuidado diario de 15 residentes dependientes\n- Prevención de úlceras por presión y de caídas" }
      ],
      education: [
        { degree: "Técnico en Cuidados Auxiliares de Enfermería (FP de Grado Medio)", school: "Instituto de FP Sanitaria de Sevilla", city: "Sevilla", start: "2017", end: "2019", desc: "" }
      ],
      skills: "Higiene del paciente, Movilización y transferencias, Toma de constantes, Prevención de úlceras, Esterilización, Trabajo en equipo, Empatía",
      languages: [{ name: "Español", level: "Nativo" }, { name: "Inglés", level: "A2 (básico)" }],
      extra: "Curso de soporte vital básico (2024). Inscrita en la bolsa de empleo del servicio de salud. Disponibilidad para turnos de noche."
    }
  },
  {
    slug: "enfermero",
    pair: "infirmier",
    label: "Enfermero/a",
    subject: "de enfermero/a",
    title: "Currículum de enfermero/a: ejemplo y consejos gratis",
    description: "Ejemplo de currículum de enfermería para hospital o atención primaria, con consejos sobre colegiación y formación. Edítalo gratis y descárgalo en PDF.",
    h1: "Ejemplo de currículum de enfermero/a",
    intro: "En el currículum de enfermería lo importante es demostrar tu experiencia clínica, los servicios en los que has trabajado y tu formación continua. Este ejemplo está pensado para destacar en procesos de selección de hospitales y centros de salud.",
    template: "moderna",
    accent: "#0f766e",
    tips: [
      ["Indica tu colegiación.", "Estar colegiado es obligatorio para ejercer: pon el colegio (y el número, si la oferta lo pide)."],
      ["Ordena la experiencia por servicios.", "Urgencias, UCI, planta, quirófano, primaria… y nombra técnicas concretas que dominas."],
      ["Pon la formación continua con su año.", "Másteres, títulos de experto, cursos de soporte vital avanzado o de heridas."],
      ["Destaca la lengua cooficial.", "Catalán, euskera, gallego o valenciano, con su nivel: puntúa en muchas bolsas públicas."],
      ["Menciona la docencia.", "Ser tutor de alumnos en prácticas demuestra experiencia y sentido de la responsabilidad."]
    ],
    cv: {
      personal: { name: "Daniel Ruiz Castillo", title: "Enfermero", email: "daniel.ruiz@ejemplo.com", phone: "600 555 666", location: "Bilbao", link: "linkedin.com/in/danielruizenfermero" },
      summary: "Enfermero con 6 años de experiencia en urgencias hospitalarias y atención primaria. Rápido en la valoración del paciente, riguroso con los protocolos y con buena comunicación con pacientes y familias. Busco una plaza en un servicio de urgencias o de cuidados críticos.",
      experience: [
        { role: "Enfermero de urgencias", company: "Hospital Universitario Ría", city: "Bilbao", start: "02/2021", end: "Actualidad", desc: "- Triaje y atención a pacientes críticos\n- Administración de medicación y canalización de vías\n- Miembro del equipo de reanimación del hospital\n- Tutor de alumnos de prácticas del Grado en Enfermería" },
        { role: "Enfermero de atención primaria", company: "Centro de Salud Deusto", city: "Bilbao", start: "09/2018", end: "01/2021", desc: "- Consulta de pacientes crónicos, curas y vacunación\n- Educación sanitaria a pacientes con diabetes" }
      ],
      education: [
        { degree: "Grado en Enfermería", school: "Universidad del País Vasco", city: "Leioa", start: "2014", end: "2018", desc: "" }
      ],
      skills: "Triaje, Soporte vital avanzado, Canalización de vías, Curas y heridas crónicas, Administración de medicación, Historia clínica electrónica, Educación sanitaria",
      languages: [{ name: "Español", level: "Nativo" }, { name: "Euskera", level: "B2 (intermedio alto)" }, { name: "Inglés", level: "B2 (intermedio alto)" }],
      extra: "Colegiado en el Colegio Oficial de Enfermería de Bizkaia. Curso de soporte vital avanzado (2025)."
    }
  },
  {
    slug: "profesor",
    pair: "enseignant",
    label: "Profesor/a",
    subject: "de profesor/a",
    title: "Currículum de profesor/a: ejemplo y consejos gratis",
    description: "Ejemplo de currículum de profesor o profesora de secundaria, con consejos para colegios y academias. Edítalo gratis y descárgalo en PDF.",
    h1: "Ejemplo de currículum de profesor/a",
    intro: "El currículum de un profesor debe mostrar tu especialidad, los niveles en los que has dado clase y cómo trabajas en el aula. En este ejemplo verás cómo presentar la docencia, la tutoría y los resultados de tus alumnos sin alargarte.",
    template: "clasica",
    accent: "#5b3a8b",
    tips: [
      ["Empieza por tu especialidad y los niveles.", "Infantil, primaria, ESO, bachillerato, FP o adultos: que se vea a la primera."],
      ["Incluye el Máster de Profesorado.", "Si optas a secundaria o FP, es un requisito en España (o el antiguo CAP, si lo tienes)."],
      ["Da algún resultado.", "Aprobados en exámenes oficiales, proyectos premiados o mejora de las notas del grupo."],
      ["Nombra las herramientas digitales.", "Google Classroom, Moodle, Genially, pizarra digital… Los centros las valoran cada vez más."],
      ["Recuerda el certificado de delitos sexuales.", "Es obligatorio para trabajar con menores: indica que lo tienes en «Otros datos»."]
    ],
    cv: {
      personal: { name: "Marta Sánchez López", title: "Profesora de Inglés de Secundaria", email: "marta.sanchez@ejemplo.com", phone: "600 666 777", location: "Valladolid", link: "" },
      summary: "Profesora de inglés con 8 años de experiencia en secundaria y bachillerato. Preparo clases dinámicas con recursos digitales, atiendo a la diversidad del aula y mantengo una relación cercana con las familias. Busco incorporarme a un centro con proyecto bilingüe.",
      experience: [
        { role: "Profesora de Inglés", company: "Colegio Río Pisuerga", city: "Valladolid", start: "09/2019", end: "Actualidad", desc: "- Docencia en 3.º y 4.º de ESO y en 1.º de Bachillerato\n- Coordinación del programa bilingüe del centro\n- Preparación de exámenes de Cambridge: 92 % de aprobados\n- Tutora de un grupo de 28 alumnos" },
        { role: "Profesora de Inglés", company: "Academia Idiomas Plus", city: "Valladolid", start: "09/2016", end: "06/2019", desc: "- Clases a grupos de niños y adultos, del nivel A1 al C1\n- Diseño de materiales y pruebas de nivel" }
      ],
      education: [
        { degree: "Máster en Profesorado de Educación Secundaria (Inglés)", school: "Universidad de Valladolid", city: "Valladolid", start: "2015", end: "2016", desc: "" },
        { degree: "Grado en Estudios Ingleses", school: "Universidad de Valladolid", city: "Valladolid", start: "2011", end: "2015", desc: "" }
      ],
      skills: "Programación didáctica, Atención a la diversidad, Google Classroom, Aprendizaje cooperativo, Evaluación por competencias, Tutoría y orientación",
      languages: [{ name: "Español", level: "Nativo" }, { name: "Inglés", level: "C2 (dominio)" }, { name: "Francés", level: "B1 (intermedio)" }],
      extra: "Habilitación para la enseñanza bilingüe. Certificado negativo del Registro Central de Delincuentes Sexuales."
    }
  },
  {
    slug: "cocinero",
    pair: "cuisinier",
    label: "Cocinero/a",
    subject: "de cocinero/a",
    title: "Currículum de cocinero/a: ejemplo y consejos gratis",
    description: "Ejemplo de currículum de cocinero o ayudante de cocina, con consejos de jefes de cocina. Edítalo gratis y descárgalo en PDF sin registro.",
    h1: "Ejemplo de currículum de cocinero/a",
    intro: "Un jefe de cocina mira tu currículum buscando tres cosas: en qué partidas sabes trabajar, cuánto volumen has llevado y si cumples las normas de higiene. Este ejemplo de currículum de cocinero responde a las tres en una sola página.",
    template: "moderna",
    accent: "#b45309",
    tips: [
      ["Indica las partidas que dominas.", "Caliente, frío, plancha, pastelería… y el tipo de cocina: mediterránea, de mercado, asiática, colectividades."],
      ["Da el volumen de los servicios.", "El número de comensales o cubiertos por turno demuestra que sabes trabajar bajo presión."],
      ["Menciona la higiene alimentaria.", "APPCC, alérgenos y manipulación de alimentos son obligatorios en cualquier cocina."],
      ["Cuenta si has asumido responsabilidad.", "Diseñar menús, hacer escandallos o llevar a ayudantes te acerca al puesto de jefe de partida."],
      ["Enseña tus platos.", "Si tienes un Instagram profesional con fotos de tu cocina, ponlo en el campo «LinkedIn o web»."]
    ],
    cv: {
      personal: { name: "Andrés Molina Prieto", title: "Cocinero, jefe de partida", email: "andres.molina@ejemplo.com", phone: "600 777 888", location: "Valencia", link: "instagram.com/andresmolinacocina" },
      summary: "Cocinero con 6 años de experiencia en restaurantes de cocina mediterránea y de mercado. Domino las partidas de caliente y plancha, cuido la higiene y la presentación, y sé trabajar a buen ritmo en servicios de mucho volumen. Busco un puesto de cocinero o jefe de partida.",
      experience: [
        { role: "Jefe de partida", company: "Restaurante Mar de Cañas", city: "Valencia", start: "03/2022", end: "Actualidad", desc: "- Responsable de la partida de caliente en servicios de hasta 150 comensales\n- Arroces, fondos, mise en place y control de mermas\n- Aplicación del sistema APPCC y registro de temperaturas\n- Coordinación de 2 ayudantes de cocina" },
        { role: "Ayudante de cocina", company: "Hotel Turia Playa", city: "Valencia", start: "04/2019", end: "02/2022", desc: "- Preparación de desayunos tipo bufé para 200 clientes\n- Apoyo en cuarto frío y pastelería" }
      ],
      education: [
        { degree: "Técnico en Cocina y Gastronomía (FP de Grado Medio)", school: "Escuela de Hostelería de Valencia", city: "Valencia", start: "2017", end: "2019", desc: "" }
      ],
      skills: "Cocina mediterránea, Arroces, Partida de caliente, Plancha y parrilla, APPCC, Control de mermas, Mise en place, Trabajo bajo presión",
      languages: [{ name: "Español", level: "Nativo" }, { name: "Valenciano", level: "B2 (intermedio alto)" }, { name: "Inglés", level: "A2 (básico)" }],
      extra: "Formación en manipulación de alimentos y alérgenos. Carné de conducir B."
    }
  },
  {
    slug: "mozo-almacen",
    pair: "preparateur-commandes",
    label: "Mozo/a de almacén",
    subject: "de mozo/a de almacén",
    title: "Currículum de mozo/a de almacén: ejemplo y consejos gratis",
    description: "Ejemplo de currículum de mozo de almacén y carretillero, con consejos para el sector de la logística. Edítalo gratis y descárgalo en PDF.",
    h1: "Ejemplo de currículum de mozo/a de almacén",
    intro: "En logística se valoran la rapidez, la seguridad y saber manejar la maquinaria. Este ejemplo de currículum de mozo de almacén muestra cómo destacar tu productividad y tus carnés para que la empresa te llame primero a ti.",
    template: "compacta",
    accent: "#475569",
    tips: [
      ["Que se vean tus carnés.", "Carretillero, puente grúa, carné de conducir B o C: ponlos en el perfil o en «Otros datos», con el año."],
      ["Habla de productividad con números.", "Pedidos o líneas por hora, palés movidos, camiones cargados por turno."],
      ["Nombra los equipos y programas.", "PDA, radiofrecuencia, picking por voz, SAP o el programa de gestión del almacén (SGA)."],
      ["Menciona la prevención de riesgos.", "Trabajar sin accidentes y con los cursos de PRL al día es un punto muy valorado."],
      ["Las ETT también cuentan.", "Si trabajaste a través de una empresa de trabajo temporal, pon la empresa donde estuviste: es experiencia real."]
    ],
    cv: {
      personal: { name: "Iván Torres Medina", title: "Mozo de almacén y carretillero", email: "ivan.torres@ejemplo.com", phone: "600 888 999", location: "Getafe (Madrid)", link: "" },
      summary: "Mozo de almacén con 5 años de experiencia en logística y preparación de pedidos. Tengo carné de carretillero, manejo la PDA y los programas de gestión de almacén, y cumplo los objetivos de productividad sin descuidar la seguridad. Busco un puesto estable en un centro logístico.",
      experience: [
        { role: "Mozo de almacén y carretillero", company: "Centro Logístico Sur", city: "Getafe", start: "10/2021", end: "Actualidad", desc: "- Preparación de unos 180 pedidos por turno con PDA y radiofrecuencia\n- Carga y descarga de camiones con carretilla frontal y retráctil\n- Ubicación de mercancía e inventarios cíclicos\n- Ningún accidente de trabajo en 3 años" },
        { role: "Mozo de almacén (a través de ETT)", company: "Distribuciones Henares", city: "Alcalá de Henares", start: "03/2019", end: "09/2021", desc: "- Picking y empaquetado en campañas de mucha demanda\n- Control de entradas y salidas en el programa de gestión" }
      ],
      education: [
        { degree: "Certificado de profesionalidad: Actividades auxiliares de almacén", school: "Centro de Formación para el Empleo", city: "Madrid", start: "2018", end: "2019", desc: "" },
        { degree: "Graduado en ESO", school: "IES Getafe Norte", city: "Getafe", start: "2012", end: "2016", desc: "" }
      ],
      skills: "Preparación de pedidos (picking), Carretilla elevadora, PDA y radiofrecuencia, Programa de gestión de almacén (SGA), Carga y descarga, Inventarios, Prevención de riesgos laborales",
      languages: [{ name: "Español", level: "Nativo" }, { name: "Inglés", level: "A2 (básico)" }],
      extra: "Carné de carretillero (2023). Carné de conducir B y vehículo propio. Disponibilidad para turnos rotativos y de noche."
    }
  },
  {
    slug: "repartidor",
    pair: "chauffeur-livreur",
    label: "Conductor/a repartidor/a",
    subject: "de repartidor/a",
    title: "Currículum de repartidor/a: ejemplo y consejos gratis",
    description: "Ejemplo de currículum de conductor repartidor con furgoneta, con consejos sobre carnés y CAP. Edítalo gratis y descárgalo en PDF.",
    h1: "Ejemplo de currículum de conductor/a repartidor/a",
    intro: "Para un puesto de reparto, la empresa quiere saber qué carnés tienes, si conoces la zona y si eres puntual. Este ejemplo de currículum de repartidor lo cuenta todo en una sola página, con datos concretos.",
    template: "moderna",
    accent: "#1d4ed8",
    tips: [
      ["Pon todos tus permisos.", "B, C1, C o C+E, y si tienes el CAP y la tarjeta de tacógrafo en vigor."],
      ["Di que conservas los puntos.", "Si no has perdido puntos del carné, menciónalo: da mucha confianza."],
      ["Usa cifras.", "Paquetes al día, kilómetros por jornada o porcentaje de entregas a tiempo."],
      ["Menciona las zonas que conoces.", "Conocer bien la ciudad y los polígonos ahorra tiempo de formación a la empresa."],
      ["Destaca el trato al cliente.", "Eres la cara de la empresa en cada entrega: la amabilidad también se valora."]
    ],
    cv: {
      personal: { name: "Raúl Domínguez Sanz", title: "Conductor repartidor", email: "raul.dominguez@ejemplo.com", phone: "600 999 000", location: "Murcia", link: "" },
      summary: "Conductor repartidor con 6 años de experiencia en paquetería y distribución de alimentación. Conozco bien Murcia y su área metropolitana, organizo la ruta para cumplir los horarios y trato con amabilidad a los clientes. Busco un puesto de reparto con contrato estable.",
      experience: [
        { role: "Conductor repartidor", company: "Paquetería Exprés Levante", city: "Murcia", start: "05/2021", end: "Actualidad", desc: "- Reparto diario de 120 a 150 paquetes con furgoneta\n- Planificación de rutas con GPS\n- Gestión de cobros e incidencias con la aplicación de la empresa\n- 99 % de entregas a tiempo en 2025" },
        { role: "Repartidor", company: "Distribuciones Segura", city: "Murcia", start: "02/2019", end: "04/2021", desc: "- Reparto de bebidas y alimentación a bares y restaurantes\n- Carga y descarga de mercancía y control de albaranes" }
      ],
      education: [
        { degree: "Graduado en ESO", school: "IES Infante Juan Manuel", city: "Murcia", start: "2010", end: "2014", desc: "" }
      ],
      skills: "Conducción de furgoneta, Planificación de rutas, GPS y aplicaciones de reparto, Atención al cliente, Carga y descarga, Gestión de albaranes, Puntualidad",
      languages: [{ name: "Español", level: "Nativo" }, { name: "Inglés", level: "A2 (básico)" }],
      extra: "Carné de conducir B y C1, con todos los puntos. CAP de mercancías en vigor. Disponibilidad inmediata."
    }
  },
  {
    slug: "recepcionista",
    pair: "receptionniste",
    label: "Recepcionista",
    subject: "de recepcionista",
    title: "Currículum de recepcionista: ejemplo y consejos gratis",
    description: "Ejemplo de currículum de recepcionista de hotel, con consejos sobre idiomas y programas de reservas. Edítalo gratis y descárgalo en PDF.",
    h1: "Ejemplo de currículum de recepcionista",
    intro: "El currículum de recepcionista debe reflejar tu don de gentes, tus idiomas y tu manejo de los programas de reservas. Este ejemplo está pensado para hoteles, pero también te sirve para la recepción de oficinas, clínicas o gimnasios.",
    template: "clasica",
    accent: "#0e7490",
    tips: [
      ["Pon los idiomas con su nivel real.", "Usa la escala A1–C2. En recepción, los idiomas son lo primero que se mira."],
      ["Nombra el programa de gestión hotelera.", "Opera, Protel, Mews, Ulysses… Si el hotel usa el mismo, empiezas con ventaja."],
      ["Incluye las valoraciones de clientes.", "Una buena nota en Booking o TripAdvisor, o un reconocimiento interno, demuestra tu trato."],
      ["Explica cómo resuelves problemas.", "Overbooking, quejas o cambios de última hora: una línea sobre cómo los gestionas vale mucho."],
      ["Adapta el currículum si no es un hotel.", "Para oficinas o clínicas, destaca la centralita, la agenda de citas y la atención telefónica."]
    ],
    cv: {
      personal: { name: "Elena Castro Rubio", title: "Recepcionista de hotel", email: "elena.castro@ejemplo.com", phone: "611 111 222", location: "Palma", link: "linkedin.com/in/elenacastro" },
      summary: "Recepcionista con 5 años de experiencia en hoteles de cuatro estrellas. Me ocupo con soltura del check-in, las reservas y la facturación, hablo cuatro idiomas y resuelvo las incidencias con calma y una sonrisa. Busco un puesto de recepcionista o de jefa de recepción.",
      experience: [
        { role: "Recepcionista", company: "Hotel Bahía Azul ****", city: "Palma", start: "03/2022", end: "Actualidad", desc: "- Check-in y check-out de hasta 90 habitaciones al día\n- Gestión de reservas y tarifas con Opera PMS\n- Atención a clientes en español, catalán, inglés y alemán\n- Gestión de quejas: valoración media de 9,2 en Booking" },
        { role: "Recepcionista de noche", company: "Hotel Ciudad de Palma", city: "Palma", start: "05/2019", end: "02/2022", desc: "- Auditoría nocturna y cierre de caja\n- Atención telefónica y venta de excursiones" }
      ],
      education: [
        { degree: "Técnico Superior en Gestión de Alojamientos Turísticos", school: "Escuela de Turismo de Baleares", city: "Palma", start: "2017", end: "2019", desc: "" }
      ],
      skills: "Check-in y check-out, Opera PMS, Gestión de reservas, Facturación y caja, Atención telefónica, Resolución de quejas, Venta de servicios adicionales",
      languages: [{ name: "Español", level: "Nativo" }, { name: "Catalán", level: "C1 (avanzado)" }, { name: "Inglés", level: "C1 (avanzado)" }, { name: "Alemán", level: "B2 (intermedio alto)" }],
      extra: "Disponibilidad para turnos rotativos, incluidos noches y festivos."
    }
  },
  {
    slug: "atencion-cliente",
    pair: "conseiller-clientele",
    label: "Atención al cliente / Teleoperador/a",
    subject: "de atención al cliente",
    title: "Currículum de atención al cliente: ejemplo y consejos gratis",
    description: "Ejemplo de currículum de teleoperador o agente de atención al cliente, con cifras y programas que piden las empresas. Edítalo gratis en PDF.",
    h1: "Ejemplo de currículum de atención al cliente (teleoperador/a)",
    intro: "Las empresas de atención al cliente buscan personas que se expresen bien, que tengan paciencia y que cumplan los indicadores de calidad. Este ejemplo de currículum de teleoperadora muestra cómo convertir tu día a día en logros medibles.",
    template: "moderna",
    accent: "#be123c",
    tips: [
      ["Da cifras.", "Llamadas al día, tiempo medio por llamada, satisfacción del cliente o ventas conseguidas."],
      ["Nombra los programas.", "Salesforce, Zendesk, Genesys, Avaya… Son palabras clave que buscan los programas de selección."],
      ["Indica los canales.", "Teléfono, chat, correo electrónico o redes sociales: cuantos más domines, mejor."],
      ["Cuenta si has teletrabajado.", "Muchas ofertas son en remoto: di si tienes experiencia, equipo propio y buena conexión."],
      ["Los idiomas abren puertas.", "En este sector hay muchas ofertas para clientes de otros países: pon cada idioma con su nivel."]
    ],
    cv: {
      personal: { name: "Paula Ortega Fuentes", title: "Agente de atención al cliente", email: "paula.ortega@ejemplo.com", phone: "611 222 333", location: "A Coruña", link: "" },
      summary: "Agente de atención al cliente con 4 años de experiencia en centros de llamadas de telefonía y energía. Resuelvo consultas y reclamaciones por teléfono, chat y correo, cumplo los indicadores de calidad y tengo facilidad para la venta. Busco un puesto presencial o en remoto.",
      experience: [
        { role: "Teleoperadora de atención al cliente", company: "Contact Center Atlántico", city: "A Coruña", start: "01/2022", end: "Actualidad", desc: "- Atención de unas 70 llamadas diarias de clientes de telefonía\n- Gestión de incidencias y reclamaciones en Salesforce\n- Satisfacción del cliente siempre por encima del objetivo del equipo\n- Venta de mejoras de tarifa: un 15 % más que la media" },
        { role: "Agente de atención al cliente", company: "Energía Norte", city: "A Coruña", start: "06/2020", end: "12/2021", desc: "- Atención por chat y correo electrónico\n- Altas, bajas y cambios de titular" }
      ],
      education: [
        { degree: "Curso de atención al cliente y gestión de reclamaciones (60 h)", school: "Cámara de Comercio de A Coruña", city: "A Coruña", start: "2020", end: "2020", desc: "" },
        { degree: "Bachillerato de Humanidades y Ciencias Sociales", school: "IES Atlántico", city: "A Coruña", start: "2016", end: "2018", desc: "" }
      ],
      skills: "Atención telefónica, Gestión de reclamaciones, Salesforce, Zendesk, Venta telefónica, Escucha activa, Mecanografía rápida",
      languages: [{ name: "Español", level: "Nativo" }, { name: "Gallego", level: "C1 (avanzado)" }, { name: "Inglés", level: "B2 (intermedio alto)" }],
      extra: "Experiencia en teletrabajo. Equipo propio y conexión de fibra."
    }
  },
  {
    slug: "sin-experiencia",
    pair: "sans-experience",
    label: "Sin experiencia (primer empleo)",
    subject: "sin experiencia",
    title: "Currículum sin experiencia: ejemplo para tu primer empleo",
    description: "¿Buscas tu primer trabajo? Ejemplo de currículum sin experiencia laboral y consejos para destacar con tus estudios y prácticas. Gratis en PDF.",
    h1: "Ejemplo de currículum sin experiencia laboral",
    intro: "¿Buscas tu primer trabajo y no sabes qué poner en el currículum? No tener experiencia laboral no significa no tener nada que contar: las prácticas, los estudios, el voluntariado y los trabajos de verano también cuentan. Este ejemplo te enseña a presentarlos.",
    template: "clasica",
    accent: "#1f5f8b",
    tips: [
      ["Cuenta tus prácticas como experiencia.", "Van en «Experiencia laboral», con sus tareas y algún logro, igual que un empleo."],
      ["Incluye trabajos cortos o informales.", "Monitor de campamento, clases particulares, campañas de verano o de Navidad: todo demuestra responsabilidad."],
      ["Aprovecha tus estudios.", "Si tu trabajo de fin de grado o un proyecto tiene que ver con el puesto, explícalo en una línea."],
      ["Pon el voluntariado.", "En «Otros datos»: demuestra compromiso y te da temas de conversación en la entrevista."],
      ["Escribe un perfil concreto.", "Di qué buscas y qué puedes aportar. Evita frases vacías como «persona responsable y trabajadora» si no das un ejemplo."]
    ],
    cv: {
      personal: { name: "Alba Romero Díaz", title: "Graduada en Administración y Dirección de Empresas", email: "alba.romero@ejemplo.com", phone: "611 333 444", location: "Granada", link: "linkedin.com/in/albaromero" },
      summary: "Recién graduada en Administración y Dirección de Empresas, con prácticas en el departamento de marketing de una empresa local. Aprendo rápido, me organizo bien y me gusta trabajar en equipo. Busco mi primer empleo en marketing o atención al cliente.",
      experience: [
        { role: "Prácticas de marketing", company: "Aceites del Genil", city: "Granada", start: "02/2026", end: "06/2026", desc: "- Publicaciones en redes sociales: los seguidores de Instagram crecieron un 30 %\n- Apoyo en la organización de 2 ferias del sector\n- Informes semanales de ventas en Excel" },
        { role: "Monitora de campamento de verano", company: "Campamento Sierra Nevada", city: "Granada", start: "07/2024", end: "08/2024", desc: "- Organización de actividades para grupos de 15 niños" }
      ],
      education: [
        { degree: "Grado en Administración y Dirección de Empresas", school: "Universidad de Granada", city: "Granada", start: "2022", end: "2026", desc: "Trabajo de fin de grado: plan de marketing digital para una cooperativa (nota: 9)" }
      ],
      skills: "Excel, Canva, Redes sociales, Google Workspace, Trabajo en equipo, Comunicación, Organización",
      languages: [{ name: "Español", level: "Nativo" }, { name: "Inglés", level: "B2 (intermedio alto)" }, { name: "Francés", level: "A2 (básico)" }],
      extra: "Voluntaria en el banco de alimentos de mi barrio (2023–2025). Carné de conducir B. Disponibilidad inmediata."
    }
  }
];

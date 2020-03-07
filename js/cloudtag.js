var word_arrays = [
  { text: "IPO", weight: 5758,link: "#"},
  { text: "Arquitecturas cognitivas", weight: 4788,link: "arquitectura.html"},
  { text: "SOAR", weight: 3000,link: "arquitectura.html#soar"},
  { text: "GOMS", weight: 2700,link: "arquitectura.html#soar-goms"},
  { text: "Sensación", weight: 4788,link: "sensacion.html"},
  { text: "Sistema visual", weight: 4200,link: "sensacion.html#visual"},
  { text: "Sistema auditivo", weight: 4200,link: "sensacion.html#auditivo"},

  { text: "Memoria", weight: 4788,link: "memoria.html"},
  { text: "Memoria a Largo Plazo", weight: 3000,link: "memoria.html#largoPlazo"},
  { text: "Memoria Operativa", weight: 3000,link: "memoria.html#operativa"},
  { text: "Memoria Sensorial", weight: 3000,link: "memoria.html#sensorial"},

  { text: "Percepción", weight: 4788,link: "percepcion.html"},

  { text: "Organización Perceptual", weight: 3000,link: "percepcion.html#organizacionPerceptual"},
  { text: "Profundidad", weight: 3000,link: "percepcion.html#profundidad"},
  { text: "Reconocimiento de objetos", weight: 3000,link: "percepcion.html#reconocimientoDeObjetos"},
  { text: "Atención", weight: 3000,link: "percepcion.html#atencion"},
  { text: "Acceso al conocimiento", weight: 3000,link: "percepcion.html#accesoAlConocimiento"},
  { text: "Iconos", weight: 2700,link: "percepcion.html#accesoAlConocimiento-iconos"},
  { text: "Affordance", weight: 2700,link: "percepcion.html#accesoAlConocimiento-affordance"}
];

$('#wordCloud').jQCloud(word_arrays,{
  width: 500,
  height: 350});    
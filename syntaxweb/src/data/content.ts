import type {
  Slide,
  Promise as LovePromise,
  News,
  Track,
  Events,
  TimelineEvent,
  Tale,
} from '../types';

export const END_DATE = new Date('2026-12-18T00:00:00');

export const CORRECT_PASSWORD = 'syntax-downpour-contact-avatar-zero-paranoid-manifesto'

import slider1 from '../assets/slider1.avif'
import slider2 from '../assets/slider2.avif'
import slider3 from '../assets/Syntax_Logo_Perfil.avif'


import news1 from '../assets/786916426_937135142112447_7931644304091578690_n.jpg'
import news2 from '../assets/779004586_1080238814654918_7701303452473878079_n.jpg'
import news3 from '../assets/784181934_2258797541631951_3274197800787725644_n.jpg'


import cover1 from '../assets/Syntax_Logo_Perfil.avif'
import acyl from '../assets/pink-floyd-any-colour-you-like-2023-remaster-fgn-212.opus'
import megalomaniac from '../assets/kmfdm-megalomaniac-u-3-edqb.opus'
import itabyatt from '../assets/deftones-i-think-about-you-all-the-time-visualizer-z-1-xtda.opus'
import xtal from '../assets/aphex-twin-xtal-hq-224-zbb.opus'
import ups from '../assets/un-poco-de-sangre-pcchz-4.opus'
import flaco from '../assets/mon-laferte-flaco-audio-zaegvo.opus'

export const slides: Slide[] = [
  {
    id: 1,
    image:
      slider1,
    fallback: 'https://placehold.co/800x600/1a1a1a/e60012?text=Amor+1',
    alt: 'Momento 1',
    fileTag: 'Archivo #01',
    title: 'Pi-ka-chu',
  },
  {
    id: 2,
    image:
      slider2,
    fallback: 'https://placehold.co/800x600/1a1a1a/e60012?text=Amor+2',
    alt: 'Momento 2',
    fileTag: 'Archivo #02',
    title: 'Hey Baby Girl',
  },
  {
    id: 3,
    image:
      slider3,
    fallback: 'https://placehold.co/800x600/1a1a1a/e60012?text=Amor+3',
    alt: 'Momento 3',
    fileTag: 'Archivo #03',
    title: 'Bajo Las Estrellas',
  },
];

export const loveNotes: string[] = [
  "Confía en tu capacidad para aprender: cada bug que resuelves te hace más fuerte como ingeniero.",
    "No temas cometer errores; son los tests fallidos de hoy los que te enseñan a escribir mejor código mañana.",
    "Tu valor no está en saber todo, sino en saber investigar, preguntar y seguir mejorando.",
    "Cuando te sientas atascado, recuerda: hasta el sistema más complejo se construye función por función.",
    "Eres más que tu código: tu creatividad, tu curiosidad y tu perseverancia son tu verdadero stack tecnológico.",
    "Cada proyecto, por pequeño que sea, es un paso más hacia el ingeniero de software en que te estás convirtiendo.",
    "No subestimes lo que ya sabes: hoy dominas herramientas que hace meses ni imaginabas usar.",
    "La ingeniería en software es un maratón, no un sprint: avanza a tu ritmo, pero no te detengas.",
    "Tu mente está entrenada para resolver problemas: si puedes entender un sistema, puedes mejorarlo.",
    "Cuando dudes de ti, piensa en todo lo que ya has logrado construir, aprender y superar.",
    "01000011 01101111 01101110 01110100 01110010 01100001 01110011 01100101 11000011 10110001 01100001 00100000 01100010 01101001 01101110 01100001 01110010 01101001 01100001",
    "01010100 01100101 00100000 01100001 01101101 01101111",
];

export const promises: LovePromise[] = [
  {
    number: '01',
    icon: 'fa-solid fa-shield-heart',
    title: '1. Compromiso con el Aprendizaje Continuo y Actualizado',
    text: 'Prometemos mantener un ecosistema de conocimiento vivo donde la tecnología nunca se quede obsoleta. Nos comprometemos a organizar talleres prácticos, hackathons y sesiones de revisión de código con las últimas tendencias (IA, blockchain, cloud computing) para asegurar que cada miembro esté preparado para los desafíos reales de la industria actual.',
  },
  {
    number: '02',
    icon: 'fa-solid fa-face-smile-beam',
    title: '2. Garantía de Inclusión y Apoyo Técnico',
    text: 'Juramos crear un espacio seguro y libre de sesgos donde el error sea visto como parte del proceso de aprendizaje. Ofreceremos un sistema de mentoring par a par, donde los estudiantes más experimentados guiarán a los nuevos, asegurando que nadie se quede atrás sin importar su nivel de partida o su',
  },
  {
    number: '03',
    icon: 'fa-solid fa-infinity',
    title: '3. Diversión',
    text: 'El software es libre, por lo tanto debe ser divertido. Nos comprometemos a fomentar un ambiente donde aprender y aplicar lo aprendido sea divertido y beneficioso para todas las partes.',
  },
];

export const news: News[] = [
  {
    image:news1,
    fallback: 'https://placehold.co/600x400/111/e60012?text=Cine+1',
    title: 'Tramita tu seguro facultativo',
    genre: '25 de Agosto',
    quote:
      `Recuerda que como estudiante, tienes derecho a un seguro facultativo IMSS, el cual cubre las necesidades de atención médica, farmacéutica, hospitalaria, laboratorio y servicio de odontología. 👩‍⚕️🧑‍⚕️🏥

Las fechas para tramitarlo este semestre, estando inscrito en Licenciatura o Profesional Asociado, son del 24 de agosto al 11 de septiembre del 2026.`,
  },
  {
    image:news2,
    fallback: 'https://placehold.co/600x400/111/e60012?text=Cine+2',
    title: 'Camión Ruta ITSON',
    genre: '21 de Agosto',
    quote:
      `Se informa que el lunes 24 de agosto el servicio de transporte urbano por parte de la empresa Grupo TEGSA, ruta ITSON, brindará el servicio a partir de las 6:20 a. m., saliendo de la Plaza de los Tres Presidentes.

HORARIOS:

Salida del centro: 6:20 a. m.
Llegada a ITSON: 7:00 a. m.

Salidas: Cada hora (6:20, 7:20, 8:20, 9:20, etc.)
Última salida de ITSON hacia el centro de Guaymas: 7:00 p. m.

NOTA: Uno de los camiones entrará a Guaymas Norte solo en el horario de las 7:00 a. m. y 8:00 a. m. El resto de los horarios pasarán frente a la Comandancia Municipal.

Las paradas del camión son las siguientes:

Plaza de los Tres Presidentes
Calle 19 (Mercado Municipal)
Espaldas de Parisina
Espaldas de Casa de la Cultura
Atrás de China City
Frente a la Escuela Regional en calle 9, a un costado del Hotel San Enrique
Hotel Armida
Frente a TUFESA
Preparatoria KINO
Ley El Vigía
Walmart
Hotel Flamingo
Mercado Los Johnnys
Farmacia Guadalajara
Ley Express
Por último, en Abarrey
Llegada a ITSON`,
  },
  {
    image:news3,
    fallback: 'https://placehold.co/600x400/111/e60012?text=NoDisponible',
    title: 'Regreso a Clases',
    genre: '24 de Agosto',
    quote:
      `¡Bienvenidos a un nuevo semestre Agosto - Diciembre 2026 en ITSON Guaymas!
Este 24 de agosto, alrededor de 2,900 estudiantes de todos los semestres regresaron a las aulas para dar inicio a un nuevo periodo académico en ITSON Unidad Guaymas. `,
  }
];

export const tracks: Track[] = [
  {
    title: 'Any Colour You Like',
    artist: 'Pink Floyd',
    src: acyl,
    label: 'Disco 01 • Lado A',
    vinylColor: cover1,
    note: 'Para diseñar; escoge el color que quieras ;)',
    cover: cover1
  },
  {
    title: 'Megalomaniac',
    artist: 'KMFDM',
    src: megalomaniac,
    label: 'Disco 01 • Lado A',
    vinylColor: cover1,
    note: '¿Necesitas un subidón? deja que esta canción te haga sentir como un megalomaniaco',
    cover: cover1
  },
  {
    title: 'I Think About You All The Time',
    artist: 'Deftones',
    src: itabyatt,
    label: 'Disco 01 • Lado A',
    vinylColor: cover1,
    note: 'Siempre estoy pensando en ti SyntaxError in line 943...',
    cover: cover1
  },
  {
    title: 'Xtal',
    artist: 'Aphex Twin',
    src: xtal,
    label: 'Disco 01 • Lado B',
    vinylColor: cover1,
    note: 'Esta canción es como hacer un código sin errores A LA PRIMERA',
    cover: cover1
  },
  {
    title: 'Un Poco de Sangre',
    artist: 'La Maldita Vecindad y los Hijos del Quinto Patio',
    src: ups,
    label: 'Disco 01 • Lado B',
    vinylColor: cover1,
    note: 'No está probado que sangrar vaya a mejorar tu software... Lo siento',
    cover: cover1
  },
  {
    title: 'Flaco',
    artist: 'Mon Laferte',
    src: flaco,
    label: 'Disco 01 • Lado B',
    vinylColor: cover1,
    note: 'Dedicada a todos esos proyectos que dejamos sin acabar. Siempre pienso en ellos antes de dormir',
    cover: cover1
  },
];

export const events: Events[] = [
  {
    number: '01',
    icon: 'fa-solid fa-music',
    title: 'Rompe Hielo',
    quote:
      'Un evento que viene a romperla, posiblemente uno de los más elaborados que se hayan realizado para la carrera con dos actividades importantes',
    status: 'Estado: EN PROCESO',
    date: 'SEPTIEMBRE'
  },
  {
    number: '02',
    icon: 'fa-solid fa-guitar',
    title: 'Semana ISW',
    quote:
      'Un periodo REPLETO de actividades y sorpresas a tener en cuenta',
    status: 'Estado: PLANEACIÓN',
    date: 'CLASIFICADO'
  },
];

export const timelineEvents: TimelineEvent[] = [
  {
    dateLabel: 'Día 01 • El Inicio',
    title: 'Nuestra Primera Conversación',
    text: 'Bajo las luces titilantes de la ciudad, un saludo casual desató una charla interminable que cambió nuestros destinos para siempre.',
  },
  {
    dateLabel: 'Mes 03 • El Salto',
    title: 'La Primera Cita Oficial',
    text: 'Nervios, sonrisas cómplices y un café que se prolongó por horas mientras descubríamos cuánto teníamos en común.',
  },
  {
    dateLabel: 'Año 01 • Consolidación',
    title: 'Nuestro Primer Viaje Juntos',
    text: 'Maletas listas, mapas explorados y la certeza absoluta de que quiero viajar contigo a cualquier rincón del mundo.',
  },
];

export const tales: Tale[] = [
  {
    universe: 'Tercer sábado de septiembre',
    title: 'Día del Software Libre',
    text: 'Se conmemora el tercer sábado de septiembre (por ejemplo, el 20 de septiembre en 2025), fecha elegida por su simetría visual (3.14, la primera cifra de Pi) en honor al Día del Programador. ',
    reality: '#01',
  },
  {
    universe: '27 de septiembre de 1983',
    title: 'Anuncio del Proyecto GNU',
    text: 'El 27 de septiembre de 1983, Richard Stallman anunció el proyecto GNU en la lista de correo net.unix-wizards, marcando el inicio formal del movimiento por el software libre y el desarrollo del kernel Linux años después.',
    reality: '#02',
  },
  {
    universe: '17 de septiembre de 1991',
    title: 'Lanzamiento de Linux:',
    text: 'Linus Torvalds liberó la versión 0.01 del kernel de Linux, el sistema operativo de código abierto más influyente de la historia.',
    reality: '#01',
  },
  {
    universe: '4 de septiembre de 1998',
    title: 'Creación de Google',
    text: 'Larry Page y Sergey Brin fundaron oficialmente Google Inc., revolucionando la búsqueda de información en la web. ',
    reality: '#01',
  },
  {
    universe: '9 de septiembre',
    title: 'Día del Tester de Software',
    text: 'Se celebra internacionalmente para destacar la importancia de la calidad y las pruebas en el ciclo de desarrollo de software. ',
    reality: '#01',
  },
  {
    universe: '18 de septiembre de 1959',
    title: 'Nacimiento de COBOL',
    text: 'El 18 de septiembre de 1959 se estableció formalmente el estándar COBOL, uno de los lenguajes de programación más antiguos y utilizados en el sector financiero y gubernamental.',
    reality: '#01',
  },
];

export const navLinks: { href: string; label: string }[] = [
  { href: '#hero', label: 'Inicio' },
  { href: '#lovenotes', label: 'Consejos' },
  { href: '#promises', label: 'Promesas' },
  { href: '#news', label: 'Noticias' },
  { href: '#vinyls', label: 'Tocadiscos' },
  { href: '#dedications', label: 'Eventos proximos' },
  //{ href: '#timeline', label: 'Línea de Tiempo' },
  { href: '#tales', label: 'Efemerides' },
];

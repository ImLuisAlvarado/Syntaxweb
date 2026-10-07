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

import slider1 from '../assets/Syntax_Logo_Perfil.avif'
import slider2 from '../assets/WhatsApp Image 2026-10-07 at 13.27.27.jpeg'
import slider3 from '../assets/1773172061874.jpg'


import news1 from '../assets/786916426_937135142112447_7931644304091578690_n.jpg'
import news2 from '../assets/779004586_1080238814654918_7701303452473878079_n.jpg'
import news3 from '../assets/784181934_2258797541631951_3274197800787725644_n.jpg'


import cover1 from '../assets/tdsofm.avif'
import cover2 from '../assets/megalomaniac.avif'
import cover3 from '../assets/Deftones_-_private_music.avif'
import cover4 from '../assets/capa-66.avif'
import cover5 from '../assets/maldita-vecindad-y-los-hijos-del-quinto-patio-el-circo.avif'
import cover6 from '../assets/Mon_Laferte-La_Trenza.avif'

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
    title: 'Sociedad SYNTAX',
  },
  {
    id: 2,
    image:
      slider2,
    fallback: 'https://placehold.co/800x600/1a1a1a/e60012?text=Amor+2',
    alt: 'Momento 2',
    fileTag: 'Archivo #02',
    title: 'Evento de Clash Royale',
  },
  {
    id: 3,
    image:
      slider3,
    fallback: 'https://placehold.co/800x600/1a1a1a/e60012?text=Amor+3',
    alt: 'Momento 3',
    fileTag: 'Archivo #03',
    title: 'Curso de Desarrolo con IA',
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
    vinylColor: cover2,
    note: '¿Necesitas un subidón? deja que esta canción te haga sentir como un megalomaniaco',
    cover: cover2
  },
  {
    title: 'I Think About You All The Time',
    artist: 'Deftones',
    src: itabyatt,
    label: 'Disco 01 • Lado A',
    vinylColor: cover3,
    note: 'Siempre estoy pensando en ti SyntaxError in line 943...',
    cover: cover3
  },
  {
    title: 'Xtal',
    artist: 'Aphex Twin',
    src: xtal,
    label: 'Disco 01 • Lado B',
    vinylColor: cover4,
    note: 'Esta canción es como hacer un código sin errores A LA PRIMERA',
    cover: cover4
  },
  {
    title: 'Un Poco de Sangre',
    artist: 'La Maldita Vecindad y los Hijos del Quinto Patio',
    src: ups,
    label: 'Disco 01 • Lado B',
    vinylColor: cover5,
    note: 'No está probado que sangrar vaya a mejorar tu software... Lo siento',
    cover: cover5
  },
  {
    title: 'Flaco',
    artist: 'Mon Laferte',
    src: flaco,
    label: 'Disco 01 • Lado B',
    vinylColor: cover6,
    note: 'Dedicada a todos esos proyectos que dejamos sin acabar.',
    cover: cover6
  },
];

export const events: Events[] = [
  {
    number: '01',
    icon: 'fa-solid fa-guitar',
    title: 'Semana ISW',
    quote:
      'Un periodo REPLETO de actividades y sorpresas a tener en cuenta',
    status: 'Estado: PLANEACIÓN',
    date: 'CLASIFICADO'
  },
];

export const timelineEvents: TimelineEvent[] = [
];

export const tales: Tale[] = [
  {
    universe: '11 de octubre de 1968',
    title: 'Nacimiento del término "Ingeniería de Software"',
    text: 'El informático alemán Fritz Bauer utiliza por primera vez el término "Ingeniería de Software" durante una conferencia de la OTAN, estableciendo la disciplina formal para el desarrollo de software confiable y eficiente. ',
    reality: '#01',
  },
  {
    universe: '11 de octubre de 1979',
    title: 'Lanzamiento de VisiCalc',
    text: 'Dan Bricklin y Bob Frankston lanzan VisiCalc, la primera hoja de cálculo electrónica para computadoras personales (Apple II), considerada la primera "killer app" que transformó las PC en herramientas empresariales esenciales. ',
    reality: '#02',
  },
  {
    universe: '14 de octubre de 1985',
    title: 'Publicación de "The C++ Programming Language"',
    text: 'Bjarne Stroustrup publica el libro "The C++ Programming Language", ayudando a popularizar el lenguaje y sus mejoras en programación orientada a objetos. ',
    reality: '#03',
  },
  {
    universe: '21 de octubre de 2008',
    title: 'Creación de Android',
    text: 'Google lanza oficialmente Android, su sistema operativo móvil basado en Linux, marcando el inicio de su dominio en el mercado de dispositivos móviles.',
    reality: '#04',
  },
  {
    universe: '12 de octubre',
    title: 'Día Internacional contra la Gestión Digital de Restricciones (DRM)',
    text: ' Se observa el Día Internacional contra la Gestión Digital de Restricciones (DRM), una efeméride dedicada a visibilizar las limitaciones que esta tecnología impone a los usuarios de contenido multimedia digital',
    reality: '#05',
  },
  {
    universe: '11 de Octubre',
    title: 'Día Internacional de Ada Lovelace',
    text: 'Se conmemora el Día Internacional de Ada Lovelace, fundado en 2009 para honrar a la primera programadora de la historia y promover la participación de las mujeres en carreras STEM.',
    reality: '#06',
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

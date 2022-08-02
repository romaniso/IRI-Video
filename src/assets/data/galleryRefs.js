import { v4 as uuidv4 } from "uuid";

const galleryRefs = [
  {
    id: uuidv4(),
    title:
      "Frank Onorati - Piccola a fragile (cover) Video di Irina Zinchenko 🎬",
    des: "Frank Onorati - Piccola a fragile (cover)…",
    source: {
      type: "video/youtube",
      src: "https://www.youtube.com/embed/ed2z3UlUTXY",
    },
  },
  {
    id: uuidv4(),
    title: "Frank Onorati e Franca Campoli - Shallow (cover) 😍…",
    des: "",
    source: {
      type: "video/youtube",
      src: "https://www.youtube.com/embed/kcha9Q-I27Q",
    },
  },
  {
    id: uuidv4(),
    title: `Elena Martemianova in ''Vissi d'arte, vissi d'amore'', famoso brano della "Tosca''`,
    des: "Video di Iryna Zinchenko in collaborazione con Gianmarco Costa.",
    source: {
      type: "video/youtube",
      src: "https://www.youtube.com/embed/SpucApT7fmY",
    },
  },
  {
    id: uuidv4(),
    title: `kitesurf#lago di bracciano#video#love`,
    des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi tempore dolorem explicabo veritatis architecto, quidem quibusdam soluta id, corrupti excepturi unde veniam. Officia quae similique reiciendis, illo rerum dolorum eum.",
    source: {
      type: "video/youtube",
      src: "https://www.youtube.com/embed/ihfDk4M4-sk",
    },
  },
  {
    id: uuidv4(),
    title: `“Omaggio al musical ''Notre Dame de Paris'' di Riccardo Cocciante. Bella - Frank Onorati (cover)`,
    des: "🎥 Video a cura di Iryna Zinchenko in collaborazione con Gianmarco Costa e Alfredo Longo.",
    source: {
      type: "video/youtube",
      src: "https://www.youtube.com/embed/VrBAKInGJC0",
    },
  },
  {
    id: uuidv4(),
    title: `La porta aperta Frank e Masa`,
    des: "",
    source: {
      type: "video/youtube",
      src: "https://www.youtube.com/embed/Z5DYeo_ljeQ",
    },
  },
  {
    id: uuidv4(),
    title: `kaitserf`,
    des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi tempore dolorem explicabo veritatis architecto, quidem quibusdam soluta id, corrupti excepturi unde veniam. Officia quae similique reiciendis, illo rerum dolorum eum.",
    source: {
      type: "video/youtube",
      src: "https://www.youtube.com/embed/U_d8rtJUo8c",
    },
  },
  {
    id: uuidv4(),
    title: `kaitserf 2`,
    des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi tempore dolorem explicabo veritatis architecto, quidem quibusdam soluta id, corrupti excepturi unde veniam. Officia quae similique reiciendis, illo rerum dolorum eum.",
    source: {
      type: "video/youtube",
      src: "https://www.youtube.com/embed/nBiGrXgPgIw",
    },
  },
  {
    id: uuidv4(),
    title: `kaitserf 3`,
    des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi tempore dolorem explicabo veritatis architecto, quidem quibusdam soluta id, corrupti excepturi unde veniam. Officia quae similique reiciendis, illo rerum dolorum eum.",
    source: {
      type: "video/youtube",
      src: "https://www.youtube.com/embed/FHA3QmtHbfo",
    },
  },
  {
    id: uuidv4(),
    title: `Un viaggio di lavoro meraviglioso ad Amalfi`,
    des: "Un viaggio di lavoro meraviglioso ad Amalfi. Amo il mio lavoro 🥰",
    source: {
      type: "video/youtube",
      src: "https://www.youtube.com/watch?v=2Moin2YIV2g&t=166s&ab_channel=IRIProductionRoma",
    },
  },
  {
    id: uuidv4(),
    title: `kkk vsem`,
    des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi tempore dolorem explicabo veritatis architecto, quidem quibusdam soluta id, corrupti excepturi unde veniam. Officia quae similique reiciendis, illo rerum dolorum eum.",
    source: {
      type: "video/youtube",
      src: "https://www.youtube.com/watch?v=f_5A6rkstiY&ab_channel=IRIProductionRoma",
    },
  },
  {
    id: uuidv4(),
    title: `koncert izola tiberina Paolo Vivaldi`,
    des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi tempore dolorem explicabo veritatis architecto, quidem quibusdam soluta id, corrupti excepturi unde veniam. Officia quae similique reiciendis, illo rerum dolorum eum.",
    source: {
      type: "video/youtube",
      src: "https://www.youtube.com/watch?v=6UaAYwJzeII&ab_channel=IRIProductionRoma",
    },
  },
  {
    id: uuidv4(),
    title: `Le isole pontine sono meravigliose Ponza ❤`,
    des: "",
    source: {
      type: "video/youtube",
      src: "https://www.youtube.com/watch?v=0gv7Saf0ivQ&t=17s&ab_channel=IRIProductionRoma",
    },
  },
  {
    id: uuidv4(),
    title: `Work in progress con Estate Agency`,
    des: "Work in progress con Estate Agency. Video di Iryna Zinchenko",
    source: {
      type: "video/youtube",
      src: "https://www.youtube.com/watch?v=6SLh3_HtllE&ab_channel=IRIProductionRoma",
    },
  },
  {
    id: uuidv4(),
    title: `Casa in montagna`,
    des: "Lavorare in un paese come l'Italia e' meraviglioso, luoghi incantevoli e con tanta storia ❤",
    source: {
      type: "video/youtube",
      src: "https://www.youtube.com/watch?v=w6wa7fEPT1M&ab_channel=IRIProductionRoma",
    },
  },
  {
    id: uuidv4(),
    title: `Uno dei tanti lavori realizzati per una importante agenzia immobiliare di Roma.`,
    des: "Uno dei tanti lavori realizzati per una importante agenzia immobiliare di Roma. La casa e' meravigliosa 🥳Video di Iryna Zinchenko",
    source: {
      type: "video/youtube",
      src: "https://www.youtube.com/watch?v=u1CSaCL1E0k&ab_channel=IRIProductionRoma",
    },
  },
  {
    id: uuidv4(),
    title: `La FESTA delle 7 ARTI per la Pace ,la Natura e la Salute sull'Isola Tiberina`,
    des: "La FESTA delle 7 ARTI per la Pace ,la Natura e la Salute sull'Isola Tiberina. Video di Iryna Zinchenko 🎥",
    source: {
      type: "video/youtube",
      src: "https://www.youtube.com/watch?v=CXxPgV8DxJQ&ab_channel=IRIZinchenko",
    },
  },
  {
    id: uuidv4(),
    title: `Estratto dal concerto ''Omaggio a Franco Califano e Gabriella Ferri'' di Frank Onorati.`,
    des: "",
    source: {
      type: "video/youtube",
      src: "https://www.youtube.com/watch?v=n31copO4ASs&ab_channel=IRIZinchenko",
    },
  },
  {
    id: uuidv4(),
    title: `Kitesurfing - Solo grandi emozioni Parte 4`,
    des: "",
    source: {
      type: "video/youtube",
      src: "https://www.youtube.com/watch?v=yMxfxPmqKDI&ab_channel=IRIZinchenko",
    },
  },
  {
    id: uuidv4(),
    title: `Uno splendido concerto eseguito da Paolo Vivaldi e musicisti di grande talento del Colosseo`,
    des: "",
    source: {
      type: "video/youtube",
      src: "https://www.youtube.com/watch?v=dptZEZgSebA&ab_channel=IRIZinchenko",
    },
  },
  {
    id: uuidv4(),
    title: `Concerto eseguito da Paolo Vivaldi e musicisti di gran talento nell'antico luogo del Colosseo 2`,
    des: "",
    source: {
      type: "video/youtube",
      src: "https://www.youtube.com/watch?v=oTZHQ2oI8qY&ab_channel=IRIZinchenko",
    },
  },
];

export default galleryRefs;

import { v4 as uuidv4 } from "uuid";

//GIFS for video thumbnails
import DiversoSaloni from "../images/gifs/Diverso Saloni - Roma Tiburtina.gif";
import BellaOlga from "../images/gifs/Bella Olga.gif";
//import DiversoSaloni2 from "../images/gifs/Diverso Saloni - Roma Tiburtina Part 2.gif";
import DiversoSaloni3 from "../images/gifs/Diverso Saloni - Roma Tiburtina Part 3.gif";
import EnergyClubPalestra from "../images/gifs/Energy Club - Palestra.gif";
import FieraDiSposa from "../images/gifs/Fiera di sposa.gif";
import TitanicByFranca from "../images/gifs/Titanic by Franca.gif";
import VideoConLaDrone from "../images/gifs/VIDEO CON LA DRONE 1.gif";
import VideoConLaDrone3 from "../images/gifs/VIDEO CON LA dron Part 3.gif";
import Wedding from "../images/gifs/Wedding.gif";
//import DiversoSaloni2 from "../images/gifs/Diverso saloni Part 2.gif";
import PiccolaAFragile from "../images/gifs/Piccola a fragile.gif";
import NataleInFioreARoma from "../images/gifs/Natale in fiore a Roma.gif";
import Franca from "../images/gifs/Franca.gif";
import LaNatura from "../images/gifs/La natura, liberta a amore.gif";
import NotreDameDeParis from "../images/gifs/NotreDameDeParis.gif";
import Concerto from "../images/gifs/concerto.gif";
import ArtEvent from "../images/gifs/ArtEvent.gif";

const galleryRefs = [
  {
    id: uuidv4(),
    title: "Diverso Saloni - Roma Tiburtina",
    des: "",
    gif: DiversoSaloni,
    source: {
      type: "video/youtube",
      src: "https://www.youtube.com/embed/ImZwWtOJL-Q",
    },
  },
  {
    id: uuidv4(),
    title: `Art Event`,
    des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi tempore dolorem explicabo veritatis architecto, quidem quibusdam soluta id, corrupti excepturi unde veniam. Officia quae similique reiciendis, illo rerum dolorum eum.",
    gif: ArtEvent,
    source: {
      type: "video/youtube",
      src: "https://www.youtube.com/embed/f_5A6rkstiY",
    },
  },

  {
    id: uuidv4(),
    title: `“Omaggio al musical ''Notre Dame de Paris'' di Riccardo Cocciante. Bella - Frank Onorati (cover)`,
    des: "🎥 Video a cura di Iryna Zinchenko in collaborazione con Gianmarco Costa e Alfredo Longo.",
    gif: NotreDameDeParis,
    source: {
      type: "video/youtube",
      src: "https://www.youtube.com/embed/VrBAKInGJC0",
    },
  },
  {
    id: uuidv4(),
    title: "Titanic by Franca",
    des: "",
    gif: TitanicByFranca,
    source: {
      type: "video/youtube",
      src: "https://www.youtube.com/embed/Jt-Cdfz3Jck",
    },
  },
  {
    id: uuidv4(),
    title: "Bella Olga",
    des: "",
    gif: BellaOlga,
    source: {
      type: "video/youtube",
      src: "https://www.youtube.com/embed/ni-OECxQiiE",
    },
  },
  {
    id: uuidv4(),
    title:
      "Frank Onorati - Piccola a fragile (cover) Video di Irina Zinchenko 🎬",
    des: "Frank Onorati - Piccola a fragile (cover)…",
    gif: PiccolaAFragile,
    source: {
      type: "video/youtube",
      src: "https://www.youtube.com/embed/ed2z3UlUTXY",
    },
  },

  {
    id: uuidv4(),
    title: "Energy Club - Palestra",
    gif: EnergyClubPalestra,
    des: "",
    source: {
      type: "video/youtube",
      src: "https://www.youtube.com/embed/kQk8dgEOjQg",
    },
  },
  {
    id: uuidv4(),
    title: "VIDEO CON LA dron Part 3",
    gif: VideoConLaDrone3,
    des: "",
    source: {
      type: "video/youtube",
      src: "https://www.youtube.com/embed/XZlnaongDZc",
    },
  },
  {
    id: uuidv4(),
    title: "VIDEO CON LA DRONE",
    des: "",
    gif: VideoConLaDrone,
    source: {
      type: "video/youtube",
      src: "https://www.youtube.com/embed/s4yBssN_QHo",
    },
  },
  {
    id: uuidv4(),
    title: "Wedding",
    des: "",
    gif: Wedding,
    source: {
      type: "video/youtube",
      src: "https://www.youtube.com/embed/q7a8u60Qucs",
    },
  },
  {
    id: uuidv4(),
    title: "Fiera di sposa",
    des: "",
    gif: FieraDiSposa,
    source: {
      type: "video/youtube",
      src: "https://www.youtube.com/embed/isn4OMrESTI",
    },
  },
  {
    id: uuidv4(),
    title: "Natale in fiore a Roma",
    des: "",
    gif: NataleInFioreARoma,
    source: {
      type: "video/youtube",
      src: "https://www.youtube.com/embed/z4bCqgWeLoo",
    },
  },

  {
    id: uuidv4(),
    title: "Franca",
    des: "",
    gif: Franca,
    source: {
      type: "video/youtube",
      src: "https://www.youtube.com/embed/r4Y_QGI0ZmE",
    },
  },
  {
    id: uuidv4(),
    title: "La natura, liberta a amore",
    des: "",
    gif: LaNatura,
    source: {
      type: "video/youtube",
      src: "https://www.youtube.com/embed/26QHrDpnsYs",
    },
  },
  {
    id: uuidv4(),
    title: "Diverso Saloni - Roma Tiburtina Part 3",
    des: "",
    gif: DiversoSaloni3,
    source: {
      type: "video/youtube",
      src: "https://www.youtube.com/embed/mcR8UEFrWrQ",
    },
  },
  {
    id: uuidv4(),
    title:
      "Uno splendido concerto eseguito da Paolo Vivaldi e musicisti di grande talento del Colosseo",
    des: "",
    gif: Concerto,
    source: {
      type: "video/youtube",
      src: "https://www.youtube.com/embed/dptZEZgSebA",
    },
  },
  //  {
  //    id: uuidv4(),
  //    title: "Diverso Saloni - Roma Tiburtina Part 2",
  //    des: "",
  //    gif: DiversoSaloni2,
  //    source: {
  //      type: "video/youtube",
  //      src: "https://www.youtube.com/embed/HSHHgAGE4Fc",
  //    },
  //  },
  // {
  //    id: uuidv4(),
  //    title:
  //      "Concerto eseguito da Paolo Vivaldi e musicisti di gran talento nell'antico luogo del Colosseo part 2",
  //    des: "",
  //    source: {
  //      type: "video/youtube",
  //      src: "https://www.youtube.com/embed/oTZHQ2oI8qY",
  //    },
  //  },
  //  {
  //    id: uuidv4(),
  //    title: "Diverso saloni",
  //    des: "",
  //    source: {
  //      type: "video/youtube",
  //      src: "https://www.youtube.com/embed/kmGAhrEyE98",
  //    },
  //  },
  //  {
  //    id: uuidv4(),
  //    title: "Kitesurfing - Solo grandi emozioni Parte 4",
  //    des: "",
  //    source: {
  //      type: "video/youtube",
  //      src: "https://www.youtube.com/embed/yMxfxPmqKDI",
  //    },
  //  },

  //  {
  //    id: uuidv4(),
  //    title: "Frank Onorati e Franca Campoli - Shallow (cover) 😍…",
  //    des: "",
  //    source: {
  //      type: "video/youtube",
  //      src: "https://www.youtube.com/embed/kcha9Q-I27Q",
  //    },
  //  },
  //  {
  //    id: uuidv4(),
  //    title: `Elena Martemianova in ''Vissi d'arte, vissi d'amore'', famoso brano della "Tosca''`,
  //    des: "Video di Iryna Zinchenko in collaborazione con Gianmarco Costa.",
  //    source: {
  //      type: "video/youtube",
  //      src: "https://www.youtube.com/embed/SpucApT7fmY",
  //    },
  //  },
  //  {
  //    id: uuidv4(),
  //    title: `kitesurf#lago di bracciano#video#love`,
  //    des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi tempore dolorem explicabo veritatis architecto, quidem quibusdam soluta id, corrupti excepturi unde veniam. Officia quae similique reiciendis, illo rerum dolorum eum.",
  //    source: {
  //      type: "video/youtube",
  //      src: "https://www.youtube.com/embed/ihfDk4M4-sk",
  //    },
  //  },

  //  {
  //    id: uuidv4(),
  //    title: `La porta aperta Frank e Masa`,
  //    des: "",
  //    source: {
  //      type: "video/youtube",
  //      src: "https://www.youtube.com/embed/Z5DYeo_ljeQ",
  //    },
  //  },
  //  {
  //    id: uuidv4(),
  //    title: `kaitserf`,
  //    des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi tempore dolorem explicabo veritatis architecto, quidem quibusdam soluta id, corrupti excepturi unde veniam. Officia quae similique reiciendis, illo rerum dolorum eum.",
  //    source: {
  //      type: "video/youtube",
  //      src: "https://www.youtube.com/embed/U_d8rtJUo8c",
  //    },
  //  },
  //  {
  //    id: uuidv4(),
  //    title: `kaitserf 2`,
  //    des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi tempore dolorem explicabo veritatis architecto, quidem quibusdam soluta id, corrupti excepturi unde veniam. Officia quae similique reiciendis, illo rerum dolorum eum.",
  //    source: {
  //      type: "video/youtube",
  //      src: "https://www.youtube.com/embed/nBiGrXgPgIw",
  //    },
  //  },
  //  {
  //    id: uuidv4(),
  //    title: `kaitserf 3`,
  //    des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi tempore dolorem explicabo veritatis architecto, quidem quibusdam soluta id, corrupti excepturi unde veniam. Officia quae similique reiciendis, illo rerum dolorum eum.",
  //    source: {
  //      type: "video/youtube",
  //      src: "https://www.youtube.com/embed/FHA3QmtHbfo",
  //    },
  //  },
  //  {
  //    id: uuidv4(),
  //    title: `Un viaggio di lavoro meraviglioso ad Amalfi`,
  //    des: "Un viaggio di lavoro meraviglioso ad Amalfi. Amo il mio lavoro 🥰",
  //    source: {
  //      type: "video/youtube",
  //      src: "https://www.youtube.com/embed/2Moin2YIV2g",
  //    },
  //  },

  //  {
  //    id: uuidv4(),
  //    title: `koncert izola tiberina Paolo Vivaldi`,
  //    des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi tempore dolorem explicabo veritatis architecto, quidem quibusdam soluta id, corrupti excepturi unde veniam. Officia quae similique reiciendis, illo rerum dolorum eum.",
  //    source: {
  //      type: "video/youtube",
  //      src: "https://www.youtube.com/embed/6UaAYwJzeII",
  //    },
  //  },
  //  {
  //    id: uuidv4(),
  //    title: `Le isole pontine sono meravigliose Ponza ❤`,
  //    des: "",
  //    source: {
  //      type: "video/youtube",
  //      src: "https://www.youtube.com/embed/0gv7Saf0ivQ",
  //    },
  //  },
  //  {
  //    id: uuidv4(),
  //    title: `Work in progress con Estate Agency`,
  //    des: "Work in progress con Estate Agency. Video di Iryna Zinchenko",
  //    source: {
  //      type: "video/youtube",
  //      src: "https://www.youtube.com/embed/6SLh3_HtllE",
  //    },
  //  },
  //  {
  //    id: uuidv4(),
  //    title: `Casa in montagna`,
  //    des: "Lavorare in un paese come l'Italia e' meraviglioso, luoghi incantevoli e con tanta storia ❤",
  //    source: {
  //      type: "video/youtube",
  //      src: "https://www.youtube.com/embed/w6wa7fEPT1M",
  //    },
  //  },
  //  {
  //    id: uuidv4(),
  //    title: `Uno dei tanti lavori realizzati per una importante agenzia immobiliare di Roma.`,
  //    des: "Uno dei tanti lavori realizzati per una importante agenzia immobiliare di Roma. La casa e' meravigliosa 🥳Video di Iryna Zinchenko",
  //    source: {
  //      type: "video/youtube",
  //      src: "https://www.youtube.com/embed/u1CSaCL1E0k",
  //    },
  //  },
  //  {
  //    id: uuidv4(),
  //    title: `La FESTA delle 7 ARTI per la Pace ,la Natura e la Salute sull'Isola Tiberina`,
  //    des: "La FESTA delle 7 ARTI per la Pace ,la Natura e la Salute sull'Isola Tiberina. Video di Iryna Zinchenko 🎥",
  //    source: {
  //      type: "video/youtube",
  //      src: "https://www.youtube.com/embed/CXxPgV8DxJQ",
  //    },
  //  },
  //  {
  //    id: uuidv4(),
  //    title: `Estratto dal concerto ''Omaggio a Franco Califano e Gabriella Ferri'' di Frank Onorati.`,
  //    des: "",
  //    source: {
  //      type: "video/youtube",
  //      src: "https://www.youtube.com/embed/n31copO4ASs",
  //    },
  //  },
  //  {
  //    id: uuidv4(),
  //    title: `Kitesurfing - Solo grandi emozioni Parte 4`,
  //    des: "",
  //    source: {
  //      type: "video/youtube",
  //      src: "https://www.youtube.com/embed/yMxfxPmqKDI",
  //    },
  //  },
  //  {
  //    id: uuidv4(),
  //    title: `Uno splendido concerto eseguito da Paolo Vivaldi e musicisti di grande talento del Colosseo`,
  //    des: "",
  //    source: {
  //      type: "video/youtube",
  //      src: "https://www.youtube.com/embed/dptZEZgSebA",
  //    },
  //  },
  //  {
  //    id: uuidv4(),
  //    title: `Concerto eseguito da Paolo Vivaldi e musicisti di gran talento nell'antico luogo del Colosseo 2`,
  //    des: "",
  //    source: {
  //      type: "video/youtube",
  //      src: "https://www.youtube.com/embed/oTZHQ2oI8qY",
  //    },
  //  },
];

export default galleryRefs;

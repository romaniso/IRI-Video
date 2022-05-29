import { createGlobalStyle } from "styled-components";
import ParisienneRegular from "../assets/fonts/Parisienne-Regular.ttf";
import PrataRegular from "../assets/fonts/Prata-Regular.ttf";
import SolwayMedium from "../assets/fonts/Solway-Medium.ttf";
import SolwayBold from "../assets/fonts/Solway-Bold.ttf";

const Typography = createGlobalStyle`
  @font-face {
    font-family: 'Parisienne Regular';
    src: url(${ParisienneRegular});
    font-style: normal;
  }
  @font-face {
    font-family: 'Prata Regular';
    src: url(${PrataRegular});
    font-style: normal;
  }
  @font-face {
    font-family: 'Solway Medium';
    src: url(${SolwayMedium});
    font-style: normal;
  }
  @font-face {
    font-family: 'Solway Bold';
    src: url(${SolwayBold});
    font-style: bold;
  }
  html{
    font-family: 'Prata Regular';
    // color: var(--gray-1);
  }
  *{
    font-family: 'Prata Regular';
    // color: var(--gray-1);
  }
  h1,h2,h3,h4,h5,h6{
    font-family: 'Prata Regular';
    color: var(--highlight)
  }
`;

export default Typography;

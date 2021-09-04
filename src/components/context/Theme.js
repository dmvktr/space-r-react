import { createGlobalStyle } from "styled-components";
import BlueLogo from "../../static/img/logo/logo_darkblue_transparent.png";
// import YellowLogo from "../../static/img/logo/logo_yellow_transparent.png";
import SpacerLogo from "../../static/img/logo/spacer_logo.png";
import LightBlueLogo from "../../static/img/logo/logo_lightblue_transparent.png";
import {
  faSun,
  faMoon,
    faAtom
} from "@fortawesome/free-solid-svg-icons";
// background-color: ${(props) => props.theme.bodyColor};

export const lightTheme = {
  logo: BlueLogo,
  logoWidth: '5rem',
  logoHeight: "3.4rem",
  logoMargin: "0",
  themeLogo: faSun,
  textColor: "black",
  headerBgColor: "white",
  headerFontColor: "black",
  bodyColor: "#0c0f1a;",
  borderColor: "black",
  textStroke: "1px #100d80",
  pageTitleColor: "white",
  article : {
    articleBgColor: "#d2d2d2",
    articleBorderColor: "white",
    subTitleColor: "lightblue;",
  },
  modal : {
    modalSummaryBg: "#d2d2d2",
    modalTitleFontColor: "#d2d2d2",
    modalSummaryFontColor: "black",
    modalbackground: "linear-gradient(180deg, #6b7b83bf, #101115e0 30%, #1d1f307a)",
    modalFontcolor: "white",
    modalBorder : "1px solid rgba(0, 0, 0, 0.4)",
  },
  event : {
    singleEventContainer: "white",
    singleEventContainerBorder: "2px solid black",
    singleEventContainerTextColor: "black",
    titleColor: "rgb(60 72 88)",
    descriptionColor: "rgb(153 153 153)",
    locationColor: "white",
    locationBgColor: "rgb(33 150 243)",
    eventIdColor: "cornflowerblue",
    thumbnailImgBorder: "2px solid rgba(0, 0, 0, 0.3)",
  },


};

export const darkTheme = {
  logo: LightBlueLogo,
  logoWidth: "6rem",
  logoHeight: "3.7rem",
  logoMargin: ".1rem 0 0 0",
  themeLogo: faMoon,
  textColor: "white",
  headerBgColor: "black",
  headerFontColor: "white",
  bodyColor: "linear-gradient(to bottom, rgb(10, 10, 30), rgb(11, 00, 30))",
  borderColor: "white",
  textStroke: "0.3px lightblue",
  pageTitleColor: "white",
  article : {
    articleBgColor: "#1f4287",
    articleBorderColor: "#002651",
    subTitleColor: "#ff304f",
  },
  modal : {
    modalSummaryBg: "black",
    modalTitleFontColor: "#ff304f",
    modalSummaryFontColor: "white",
    modalbackground: "linear-gradient(180deg, #071e3d, #101115e0 50%, #1d1f307a)",
    modalFontcolor: "#1f4287",
    modalBorder : "3px solid rgba(100, 100, 100, 0.35)",
  },
  event : {
    singleEventContainer: "black",
    singleEventContainerBorder: "2px solid white",
    singleEventContainerTextColor: "#ff304f",
    titleColor: "#1f4287",
    descriptionColor: "white",
    locationColor: "#ff304f",
    locationBgColor: "#002651",
    eventIdColor: "cornflowerblue",
    thumbnailImgBorder: "4px solid rgba(100, 0, 0, 0.5)",
  },

};

export const alien = {
  logo: SpacerLogo,
  logoWidth: "7rem",
  logoHeight: "3.6rem",
  logoMargin: ".3rem 0 0 0",
  themeLogo: faAtom,
  textColor: "black",
  headerBgColor: "#a7ff83",
  headerFontColor: "#071a52",
  bodyColor: "linear-gradient(to bottom, rgb(10, 10, 30), rgb(11, 00, 30))",
  borderColor: "#17b978",
  textStroke: "0.3px #17b978",
  pageTitleColor: "white",
  article : {
    articleBgColor: "#83e85a",
    articleBorderColor: "#002651",
    subTitleColor: "#ff304f",
  },
  modal : {
    modalSummaryBg: "#086972",
    modalTitleFontColor: "#071a52",
    modalSummaryFontColor: "white",
    modalbackground: "linear-gradient(180deg, #17b978, #83e85a 50%, #83e85a)",
    modalFontcolor: "#1f4287",
    modalBorder : "3px solid rgba(100, 100, 100, 0.35)",
  },
  event : {
    singleEventContainer: "#1f4287",
    singleEventContainerBorder: "2px solid black",
    singleEventContainerTextColor: "#17b978",
    titleColor: "#a7ff83",
    descriptionColor: "rgb(153 153 153)",
    locationColor: "#ff304f",
    locationBgColor: "rgb(33 150 243)",
    eventIdColor: "#ff304f",
    thumbnailImgBorder: "2px solid rgba(0, 0, 0, 0.3)",
  },
};


export const GlobalStyles = createGlobalStyle`
:root {
  --green-primary: rgb(7, 112, 89);
  --grey-card-top-primary: #d2d2d2;
}
body {
  background: ${(props) => props.theme.bodyColor};
  overflow-x: hidden;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html {
  scroll-behavior: smooth;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}

* {
  max-width: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
}
a:active,
a:link,
a:visited {
  color: inherit;
  text-decoration: none;
}
video {
  right: 0;
  top: 0;
  min-width: 100vw;
  position: absolute;
}

#astronautName {
  margin-top: 6rem;
}

#astronautCard:hover #astronautName::after {
  transform: scaleX(1);
}

.left {
  text-align: left !important;
}

.underline-padding {
  border-bottom: 2px solid blanchedalmond;
  padding: 10px;
}

h5 {
  padding-bottom: 2vh;
}
`;

import { createGlobalStyle } from "styled-components";
import BlueLogo from "../../static/img/logo/logo_darkblue_transparent.png";
import YellowLogo from "../../static/img/logo/logo_yellow_transparent.png";

export const lightTheme = {
  logo: BlueLogo,
  textColor: "black",
  headerBgColor: "white",
  headerFontColor: "black",
  borderColor: "black"

};

export const darkTheme = {
  logo: YellowLogo,
  textColor: "white",
  headerBgColor: "black",
  headerFontColor: "white",
  borderColor: "white"
};

export const GlobalStyles = createGlobalStyle`
:root {
  --green-primary: rgb(7, 112, 89);
  --grey-card-top-primary: #d2d2d2;
}

* {
  max-width: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
}

video {
  right: 0;
  bottom: 0;
  min-width: 100vw;
  width: 100vw;
  z-index: -100;
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

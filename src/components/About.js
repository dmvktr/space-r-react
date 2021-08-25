import React from "react";
import { Footer,
    AboutTextContainer,
    FooterParagraph } from './layout/FooterElements';

const About = () => {
  return (
  <Footer>
    <AboutTextContainer>
      <FooterParagraph>A project designed by : Team Space-R</FooterParagraph>
      <FooterParagraph>Norbert Ruff | Viktor Döme | Ferenc Kárpáti </FooterParagraph>
    </AboutTextContainer>
  </Footer>);
};

export default About;

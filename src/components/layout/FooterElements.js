import styled from "styled-components";

export const AboutTextContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: row;
  width: 100vw;
  justify-content: space-around;
  align-items: center;
  border-top: 3px solid white;
`;

export const FooterParagraph = styled.p`
   color: white;
   justify-content: center;
   font-size: clamp(0.6rem, 2.0vw, 1rem);
   margin: 1rem 0;
   font-weight: 450;
`;

export const Footer = styled.footer`
  display: flex;
  padding: 1rem 0;
  grid-area: footer;
  background-color: black;
  width: 100vw;
`;
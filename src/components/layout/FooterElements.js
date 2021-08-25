import styled from "styled-components";

export const AboutTextContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100vw;
  justify-content: space-around;
  align-items: center;
  border-top: 3px solid white;
`;

export const FooterParagraph = styled.p`
   color: white;
   justify-content: center;
   font-size: 20px;
   margin: 15px 0;
   font-weight: 450;
`;

export const Footer = styled.footer`
  display: flex;
  padding: 20px 0px;
  grid-area: footer;
  background-color: black;
  width: 100vw;
`;
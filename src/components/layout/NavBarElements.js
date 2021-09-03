import styled, {keyframes} from "styled-components";
import { NavLink as Link } from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const NavContainer = styled.div`
  display: grid;
  grid-template-columns: 10% 80% 10%;
  max-width: 150rem;
  grid-area: header;
  border-bottom: 3px solid ${(props) => props.theme.borderColor};
  border-radius: 0 0 10px 10px;
  background-color: ${(props) => props.theme.headerBgColor};
  margin: 0 0.5vw;
  color: ${(props) => props.theme.headerFontColor};
  z-index: 10;

  @media (max-width: 64em){
    grid-template-columns: 20% 50% 30%;
  }
`;

export const Logo = styled.div`
  width: 5rem;
  margin-left: .2rem;
  height: 65px;
  background-image: url(${(props) => props.theme.logo});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  text-align: center;
`;

export const LogoContainer = styled(Link)`
  font-size: 1.3rem;
`;

export const NavbarOption = styled(Link)`
  font-size: 1.3rem;
  font-weight: 470;
  color: ${(props) => props.theme.headerFontColor};
  -webkit-text-stroke: ${(props) => props.theme.textStroke};
  letter-spacing: 1px;
  transition: font-size 1s ease;

  @media (max-width: 80em){
   font-size: 1.1rem;
  }

  @media (max-width: 64em){
   display: none;
  }

`;

export const ThemeChangeButton = styled(FontAwesomeIcon)`
  font-size: 2rem;
  width: 3rem;
  height: 3rem;
  cursor: pointer;
  color: ${(props) => props.theme.headerFontColor};

  @media (max-width: 80em){
    width: 1rem;
  }
`;

export const ThemeButton = styled(FontAwesomeIcon)`
  width: 30px !important;
  height: 50px;
  color: ${(props) => props.theme.headerFontColor};
  cursor: pointer;
`;

export const HamburgerMenu = styled(FontAwesomeIcon)`
  width: 2rem !important;
  height: 2rem;
  color: ${(props) => props.theme.headerFontColor};
  cursor: pointer;
  display: none;

  @media (max-width: 64em){
   display: inline-block;
  }

`;

const dropAnim = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-60px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;


export const DropdownMenu = styled.div`
  position: absolute;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  top: 4rem; 
  z-index: 100;
  padding:10px;
  flex-direction: column;
  background-color: ${(props) => props.theme.headerBgColor};
  border: 2px solid black;
  border-radius: 10px;
  animation: ${dropAnim} 300ms ease-in-out forwards ;
`;


export const ThemeChangeDiv = styled.div`
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const Links = styled.div`
  display: flex;
  gap: 4rem;
  justify-content: space-around;
  align-items: center;
`;


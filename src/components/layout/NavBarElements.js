import styled, {keyframes} from "styled-components";
import { NavLink as Link } from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const NavContainer = styled.div`
  position: relative;
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

  @media (max-width: 65em){
    grid-template-columns: 20% 50% 30%;
  }
`;

export const Logo = styled.div`
  width: 100%;
  margin-left: .2rem;
  height: ${(props) => props.theme.logoHeight};
  background-image: url(${(props) => props.theme.logo});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  text-align: center;
`;

export const LogoContainer = styled(Link)`
  width: ${(props) => props.theme.logoWidth};
  margin: ${(props) => props.theme.logoMargin};
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

  @media (max-width: 65em){
    margin-bottom: .5rem;
  }

`;

export const ThemeChangeButton = styled(FontAwesomeIcon)`
  font-size: 2rem;
  position: absolute;
  top: 1rem;
  right: 4rem;
  width: 2rem;
  height: 2rem;
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
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 2rem !important;
  height: 2rem;
  color: ${(props) => props.theme.headerFontColor};
  cursor: pointer;
  display: none;

  @media (max-width: 68em){
   display: flex;
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
  right: 3rem;
  z-index: 100;
  padding:10px;
  flex-direction: column;
  background-color: ${(props) => props.theme.headerBgColor};
  border: 2px solid black;
  border-radius: 10px;
  animation: ${dropAnim} 300ms ease-in-out forwards ;
`;


export const ThemeChangeDiv = styled.div`
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

export const ResponsiveLinks = styled.div`
  --navbar-grid-height: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  gap: unset;
  top: var(--navbar-grid-height);
  right: 0;
  z-index: 100;
  padding:10px;
  background-color: ${(props) => props.theme.headerBgColor};
  border: 2px solid black;
  border-radius: 10px;
  animation: ${dropAnim} 300ms ease-in-out forwards ;
  display: ${(props) => props.display ? 'flex' : 'none'};
`;


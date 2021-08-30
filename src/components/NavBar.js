import React, { useState } from "react";
import { NavContainer } from "./layout/NavBarElements";
import styled, {keyframes} from "styled-components";
import { NavbarOption, Logo } from "./layout/NavBarElements";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faAtom, faMoon, faSun, faUserSecret} from "@fortawesome/free-solid-svg-icons";
const NavBar = (props) => {
  const [showMenu, setShowMenu] = useState(false);

  const dropMenu = () => {
    if (showMenu) {
      setShowMenu(false);
    } else {
      setShowMenu(true);
    }
  };

  const changeTheme = (choosenTheme) => {
    switch (choosenTheme) {
      case "light":
        props.setTheme("light");
        dropMenu()
        break;
      case "dark":
        props.setTheme("dark");
        dropMenu()
        break;
      case "alien":
        props.setTheme("alien");
        dropMenu()
        break;
      default:
        props.setTheme("light");
        dropMenu()
    }
  };
  return (
    <NavContainer>
      <NavbarOption to="/" title="Home">
        <Logo />
      </NavbarOption>
      <Links>
        <NavbarOption to="/" title="Home">
          Home
        </NavbarOption>

        <NavbarOption to="/news" title="News">
          News
        </NavbarOption>

        <NavbarOption to="/gallery" title="Gallery">
          Gallery
        </NavbarOption>

        <NavbarOption to="/spacecrafts" title="Spacecrafts">
          Spacecrafts
        </NavbarOption>

        <NavbarOption to="/astronauts" title="Astronauts">
          Astronauts
        </NavbarOption>
        <NavbarOption to="/events" title="Events">
          Events
        </NavbarOption>

        <NavbarOption to="/locations" title="Locations">
          Locations
        </NavbarOption>
      </Links>
      <ThemeChangeDiv>
        <ThemeChangeButton icon={faUserSecret} onClick={dropMenu}>
        </ThemeChangeButton>
        {showMenu ? (
          <DropdownMenu>
            <ThemeButton icon={faSun} onClick={() => changeTheme("light")}>
              {" "}
              Light{" "}
            </ThemeButton>
            <ThemeButton icon={faMoon} onClick={() => changeTheme("dark")}>
              {" "}
              Dark{" "}
            </ThemeButton>
            <ThemeButton
              icon={faAtom}
              onClick={() => changeTheme("alien")}
            >
              {" "}
              Alien{" "}
            </ThemeButton>
          </DropdownMenu>
        ) : null}
      </ThemeChangeDiv>
    </NavContainer>
  );
};

const ThemeChangeButton = styled(FontAwesomeIcon)`
  font-size: 3rem;
  width: 3rem;
  height: 3rem;
  cursor: pointer;
  color: ${(props) => props.theme.headerFontColor};
`;

const ThemeButton = styled(FontAwesomeIcon)`
  width: 30px !important;
  height: 50px;
  color: ${(props) => props.theme.headerFontColor};;
  cursor: pointer;
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

const DropdownMenu = styled.div`
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


const ThemeChangeDiv = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Links = styled.div`
  display: flex;
  gap: 4rem;
  justify-content: space-evenly;
  align-items: center;
`;

export default NavBar;

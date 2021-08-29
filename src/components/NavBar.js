import React, { useState } from "react";
import { NavContainer } from "./layout/NavBarElements";
import styled from "styled-components";
import { NavbarOption, Logo } from "./layout/NavBarElements";
import {
  faSun,
  faMoon,
  faUserAstronaut,
  faCompressArrowsAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
        break;
      case "dark":
        props.setTheme("dark");
        break;
      case "alien":
        props.setTheme("alien");
        break;
      default:
        props.setTheme("light");
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
        <ThemeChangeButton icon={faCompressArrowsAlt} onClick={dropMenu}>
          Change Theme
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
              icon={faUserAstronaut}
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

const ThemeChangeButton = styled.div`
  display: flex;
  width: 60px;
  height: 60px;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: black;
  cursor: pointer;
  border-radius: 20px;
  border: 1px solid black;
`;
const ThemeButton = styled(FontAwesomeIcon)`
  width: 30px !important;
  height: 50px;
  color: white;
  outline: red;
  -webkit-text-stroke: 1px solid red;
  cursor: pointer;
`;
const DropdownMenu = styled.div`
  position: absolute;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  top: 50px;
  width: 80px;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.5);
  border: 2px solid black;
  border-radius: 10px;
  color: red;
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

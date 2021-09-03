import React, { useState } from "react";
import {
  DropdownMenu,
  Links,
  NavContainer,
  ThemeButton,
  ThemeChangeButton,
  ThemeChangeDiv,
  LogoContainer,
  HamburgerMenu
} from "./layout/NavBarElements";
import { NavbarOption, Logo } from "./layout/NavBarElements";
import {faAtom, faMoon, faSun, faUserSecret, faBars} from "@fortawesome/free-solid-svg-icons";
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
      <LogoContainer to="/" title="Home">
        <Logo />
      </LogoContainer>
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
        <HamburgerMenu icon={faBars}>
          
        </HamburgerMenu>
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

export default NavBar;

import React, { useState } from "react";
import {
  Logo,
  DropdownMenu,
  Links,
  NavContainer,
  ThemeButton,
  ThemeChangeButton,
  ThemeChangeDiv,
  LogoContainer,
  ResponsiveLinks
} from "./layout/NavBarElements";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import DropdownRoutes from "./DropdownRoutes";
import NavLinks from "./NavLinks";
import {faAtom, faMoon, faSun, faUserSecret, faBars} from "@fortawesome/free-solid-svg-icons";
const NavBar = (props) => {
  const [showMenu, setShowMenu] = useState(false);
  const [isToggled, setIsToggled] = useState(false);
  

  const doesMatchScreenWidth = useMediaQuery('(max-width: 68em)');

  const toggleNavDropdown = (isToggled) => {
    if(showMenu){
      setShowMenu(false);
    }
    setIsToggled(!isToggled);
  };

  const dropMenu = () => {
    if (showMenu) {
      setShowMenu(false);
    } else if(isToggled){
      setIsToggled(false);
      setShowMenu(true);
    } else{
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
      {doesMatchScreenWidth ? (<ResponsiveLinks display={isToggled}>
        <NavLinks />
      </ResponsiveLinks>) :
      <Links>
        <NavLinks />
      </Links>
      }
      <ThemeChangeDiv>
        <DropdownRoutes icon={faBars} onClick={toggleNavDropdown} display={isToggled} />
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

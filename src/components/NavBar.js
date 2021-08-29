import React from "react";
import { NavContainer } from "./layout/NavBarElements";
import styled from "styled-components";
import { NavbarOption, Logo } from "./layout/NavBarElements";

const NavBar = (props) => {
  const changeTheme = () => {
    if (props.theme === "light") {
      props.setTheme("dark");
    } else {
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
        <ThemeChangeButton onClick={changeTheme}>
          {props.theme} mode
        </ThemeChangeButton>
      </ThemeChangeDiv>
    </NavContainer>
  );
};

const ThemeChangeButton = styled.button``;
const ThemeChangeDiv = styled.div``;

const Links = styled.div`
  display: flex;
  gap: 4rem;
  justify-content: space-evenly;
  align-items: center;
`;

export default NavBar;

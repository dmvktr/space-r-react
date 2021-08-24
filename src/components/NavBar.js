import React from "react";
import { NavContainer } from "./layout/NavBarElements";
import styled from "styled-components";
import { NavbarOption } from "./layout/NavBarElements";
function NavBar() {
  return (
    <NavContainer>
      <Logo />
      <Links>
        <NavbarOption to="/" title="Home" theme={""}>
          Home
        </NavbarOption>

        <NavbarOption to="/news" title="News" theme={""}>
          News
        </NavbarOption>

        <NavbarOption to="/gallery" title="Gallery" theme={""}>
          Gallery
        </NavbarOption>

        <NavbarOption to="/astronauts" title="Astronauts" theme={""}>
          Astronauts
        </NavbarOption>

        <NavbarOption to="/locations" title="Locations" theme={""}>
          Locations
        </NavbarOption>
      </Links>
    </NavContainer>
  );
}

const Logo = styled.div``;
const Links = styled.div`
  display: flex;
  gap: 4rem;
  justify-content: space-evenly;
  align-items: center;
`;

export default NavBar;
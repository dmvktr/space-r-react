import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const NavContainer = styled.div`
  display: grid;
  grid-template-columns: 10% 80% 10%;
  grid-area: header;
  border-bottom: 3px solid black;
`;

export const NavbarOption = styled(Link)``;

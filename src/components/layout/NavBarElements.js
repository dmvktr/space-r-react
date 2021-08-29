import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const NavContainer = styled.div`
  display: grid;
  grid-template-columns: 10% 80% 10%;
  grid-area: header;
  border-bottom: 3px solid ${(props) => props.theme.borderColor};
  border-radius: 0 0 10px 10px;
  background-color: ${(props) => props.theme.headerBgColor};
  margin: 0 0.5vw;
`;

export const Logo = styled.div`
  width: 95px;
  margin-left: 20px;
  height: 65px;
  background-image: url(${(props) => props.theme.logo});
  background-size: contain;
  text-align: center;
`;

export const NavbarOption = styled(Link)`
  font-size: 20px;
  font-weight: 370;
  color: ${(props) => props.theme.textColor};
  -webkit-text-stroke: 1px #100d80;
  letter-spacing: 1px;
`;

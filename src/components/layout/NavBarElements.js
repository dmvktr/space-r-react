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
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  text-align: center;
`;

export const NavbarOption = styled(Link)`
  font-size: 22px;
  font-weight: 470;
  color: ${(props) => props.theme.headerFontColor};
  -webkit-text-stroke: ${(props) => props.theme.textStroke};
  letter-spacing: 1px;
`;

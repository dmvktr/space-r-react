import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import logo from '../../static/img/logo/logo_white.png';

export const NavContainer = styled.div`
  display: grid;
  grid-template-columns: 10% 80% 10%;
  grid-area: header;
  border-bottom: 3px solid black;
  border-radius: 0 0 10px 10px;
  background-color: white;
  margin: 0 0.5vw;
`;

export const Logo = styled.img`
  width: 95px;
  margin-left: 20px;
  height: 65px;
  content:url(${logo});
  text-align: center
`;

export const NavbarOption = styled(Link)`
  font-size: 20px;
  font-weight: 370;
  color: #100D80;
  -webkit-text-stroke: 1px #100D80;
`;

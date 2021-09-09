import styled, { keyframes } from "styled-components";
import LoadingAnim from "../../static/img/loading.gif";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1000px){
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  @media (max-width: 800px){
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (max-width: 500px ){
    grid-template-columns: 1fr;
  }
`;

export const GalleryPageContainer = styled.div`
  display: flex;
  grid-area: content;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 100vw;
`;

const FocusAnim = keyframes`
  0% {
    filter: blur(12px);
    opacity: 0;
  }
  100% {
    filter: blur(0px);
    opacity: 1;
  }
`;

export const Thumbnail = styled.div`
  background-image: url(${(props) => props.picture});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
`;


export const CloseButton = styled(FontAwesomeIcon)`
  position: absolute;
  right: 2rem;
    color: ${(props) => props.theme.modal.modalFontcolor};
    font-size: 3rem;
    font-weight: 800;
    width: 3rem;
    height: 3rem;
    cursor: pointer;
`;

export const Title = styled.h4`
  opacity: 0;
  text-align: center;
  position: relative;
  height: 100%;
  min-height: 1em;
  max-height: 2em;
  top: calc(-1 * 15vh / 2);
  z-index: 40;
  font-size: 20px;
  color: white;
`;

export const Card = styled.div`
  width: auto;
  height: 15vh;
  &:hover ${Title} {
    opacity: 100;
    animation: ${FocusAnim} 0.5s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
  }
  cursor: pointer;
  background-image: url(${LoadingAnim});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
export const HdImg = styled.img`
  width: 100vw;
  height: auto;
`;
export const Date = styled.h3``;

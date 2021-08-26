import styled, { keyframes } from "styled-components";
import LoadingAnim from "../../static/img/loading.gif";

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  justify-content: space-between;
  align-items: center;
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
export const CloseButton = styled.button`
  float: right;
  color: white;
  font-size: 2rem;
  font-weight: 800;
  background-color: black;
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  border: 2px solid cornflowerblue;
`;
export const Title = styled.h4`
  opacity: 0;
  text-align: center;
  position: relative;
  height: 1em;
  top: -30px;
  z-index: 40;
  font-size: 20px;
  color: white;
  overflow: hidden;
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
export const HdImg = styled.div`
  background-image: url(${(props) => props.picture});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 90vw;
  height: 90vh;
`;
export const Date = styled.h3``;

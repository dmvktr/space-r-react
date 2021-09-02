import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const MainContainer = styled.div`
  display: grid;
  width: 100vw;
  max-width: 100%;
  height: 100vh;
  grid-template-columns: 5% 90% 5%;
  grid-template-rows: 73px auto 75px;
  grid-template-areas:
    "header header header"
    "content content content"
    "footer footer footer";
`;

export const MainContentContainer = styled.div`
  grid-area: content;
  display: flex;
  flex-direction: column;
`;

export const NewsPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 100vw;
`;

export const NewsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  flex-direction: column;
  color: black;
  background-color: #0c0f1a;
  padding: 0 2vw;
  gap: 2vh 2vw;
`;

export const VideoContainer = styled.div`
  width: 100vw;
  height: 90vh;
`;

export const SlideContainer = styled.div`
  width: 100vw;
  display: flex;
`;

export const ScrollToTopButton = styled(FontAwesomeIcon)`
  position: relative;
  right: 40px;
  top: -80px;
  width: 200px !important;
  color: white;
  height: 70px;
  cursor: pointer;
`;

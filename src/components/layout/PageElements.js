import styled from "styled-components";

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
  display: flex;
  flex-direction: column;
`;

export const NewsContainer = styled.div`
  grid-area: content;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  flex-direction: column;
  border: 3px solid black;
  color: black;
  background-color: #0c0f1a;
  padding: 2vw;
  gap: 1vw;
`;

export const VideoContainer = styled.div`
    width: 100vw;
`;

export const SlideContainer = styled.div`
    width: 100vw;
    display: flex;
`;

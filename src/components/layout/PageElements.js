import styled from "styled-components";

export const MainContainer = styled.div`
  display: grid;
  width: 100vw;
  height: 100vh;
  grid-template-columns: 5% 90% 5%;
  grid-template-rows: 5% 90% 5%;
  grid-template-areas:
    "header header header"
    "content content content"
    "footer footer footer";
`;

export const MainContentContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const NewsContainer = styled.div`
    grid-area: content;
    text-align: center;
`;

export const VideoContainer = styled.div`
    width: 100vw;
`

export const SlideContainer = styled.div`
    width: 100vw;
    display: flex;
`
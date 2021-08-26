import styled from "styled-components";

export const ArticleNewsSite = styled.p`
  color: lightblue;
  font-size: 1.4rem;
  -webkit-text-stroke: 0.5px black;
  font-weight: 600;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const ArticleSummary = styled.div`
  grid-area: summary;
  font-weight: 600;
  padding: 40px;
  font-size: 1.5rem;
`;

export const ArticleTitle = styled.h3`
  height: 80px;
  background: #d2d2d2;
  border-radius: 10 10 0 0;
  padding: 20px;
  text-align: center;
  color: black;
`;

export const ModalTitle = styled.h2`
  height: 80px;
  background: #d2d2d2;
  border-radius: 11px 11px 0 0;
  grid-area: title;
  font-weight: 600;
  font-size: 2rem;
  padding: 20px;
  background-color: black;
  color: white;
`;

export const ArticleStats = styled.div`
  grid-area: stats;
  padding: 20px;
`;

export const ModalContainer = styled.div`
  display: grid;
  grid-template-columns: 50% auto 10%;
  grid-template-rows: 10% 60% 20% 10%;
  width: 80vw;
  height: 95vh;
  justify-content: center;
  grid-template-areas:
    "title title title"
    "summary picture picture"
    "url picture picture"
    "stats stats stats";
  background-color: white;
  border-radius: 30px;
  border: 1px solid black;
`;

export const ArticleContainer = styled.div`
  background-image: url(${(props) => props.picture});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
`;

export const ArticleUrl = styled.a`
  grid-area: url;
  src: ${(props) => props.src};
  padding: 30px;
  width: 100%;
  height: 100%;
`;

export const SingleNewsELement = styled.div`
  border-radius: 11px 11px 0 0;
  background-image: url(${(props) => props.picture});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  width: 100%;
  height: 20vw;
  border: 3px solid white;
  color: white;
  display: grid;
  grid-template-rows: 20% 80%;
  flex: 1;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 3vh;
  right: 2vw;

  grid-area: close;
  color: white;
  font-size: 2rem;
  font-weight: 800;
  background-color: black;
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  border: 2px solid cornflowerblue;
`;

export const HdImg = styled.div`
  grid-area: picture;
  content: url(${(props) => props.picture});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: auto;
  height: 100%;
`;

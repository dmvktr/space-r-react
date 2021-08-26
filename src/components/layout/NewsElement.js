import styled from "styled-components";

export const ArticleNewsSite = styled.p`
  color: lightblue;
  font-size: 1.4rem;
  -webkit-text-stroke: 0.5px black;
  font-weight: 600;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const ArticleSummary = styled.div`
  display: flex;
  align-items: center;
  grid-area: summary;
  background: #d2d2d2;
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
  background: #d2d2d2;
  border-radius: 11px 0 0 0;
  grid-area: title;
  font-weight: 600;
  font-size: 2rem;
  padding: 15px;
  background-color: black;
  color: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.4); ;
`;

export const ArticleStats = styled.div`
  grid-area: stats;
  background: #d2d2d2;
  padding: 20px;
  border: 1px solid rgba(0, 0, 0, 0.4);
  border-radius: 0 0 11px 11px;
`;

export const ModalContainer = styled.div`
  display: grid;
  grid-template-columns: 50% auto 5%;
  grid-template-rows: 12% 65% 15% 8%;
  width: 80vw;
  height: 95vh;
  justify-content: center;
  grid-template-areas:
    "title title close"
    "summary picture picture"
    "url url url"
    "stats stats stats";

  border-radius: 30px;
  border: 5px solid black;
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
  color: white;
  font-size: 1.2em;
  background-color: #0c0f1a;
  grid-area: url;
  src: ${(props) => props.src};
  padding: 2%;
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

export const CloseDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: black;
  border-radius: 0 11px 0 0;
  grid-area: close;
`;

export const CloseButton = styled.button`
  color: white;
  font-size: 2rem;
  font-weight: 800;
  background-color: black;
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  border: 2px solid rgba(0, 200, 200, 0.4);
`;

export const HdImg = styled.div`
  display: flex;
  grid-area: picture;
  content: url(${(props) => props.picture});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  margin: auto;
  border: 2px solid rgba(0, 0, 0, 0.3);
`;

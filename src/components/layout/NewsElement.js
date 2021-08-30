import styled, { keyframes } from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ScaleUp = keyframes`
  0%{transform: scale(1)}
  100% {transform: scale(1.02)}

`;

export const ModalCustomStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        margin: "0",
        transform: "translate(-50%, -50%)",
        background: "#0c0f1a",
        backgroundRepeat: "no-repeat",
        backgroundSize: "50%",
        backgroundPosition: "center",
        borderRadius: "20px",
        border: "3px solid white",
        padding: "10px"
    },
};
export const SingleNewsELement = styled.div`
  border-radius: 11px;
  background-image: url(${(props) => props.picture});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 10px;
  width: 100%;
  height: 20vw;
  border: 3px solid ${(props) => props.theme.article.borderColor};
  color: white;
  display: grid;
  grid-template-rows: 20% 80%;
  flex: 1;
  box-shadow: rgb(233 219 219 / 0%) -15px 20px 13px,
    rgb(167 68 68 / 0%) -12px 13px 6px 0px;
  transition: box-shadow 0.2s ease-in-out;

  :hover {
    box-shadow: rgba(0, 0, 0, 0.76) 0px 1px 8px,
      rgb(150, 150, 150) 0px 0px 0px 8px;
    animation: ${ScaleUp} 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  }
`;

export const ArticleNewsSite = styled.p`
  color: ${(props) => props.theme.article.subTitleColor};
  font-size: 1.4rem;
  -webkit-text-stroke: 0.5px black;
  font-weight: 600;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const ArticleTitle = styled.h3`
  height: 80px;
  background: ${(props) => props.theme.article.articleBgColor};
  border-radius: 10px 10px 0 0;
  padding: 0.3rem;
  overflow: hidden;
  text-align: center;
  color: ${(props) => props.theme.textColor};
`;

export const ArticleContainer = styled.div`
  background-image: url(${(props) => props.picture});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
`;


export const ModalArticleSummary = styled.div`
  display: flex;
  align-items: center;
  grid-area: summary;
  background: ${(props) => props.theme.modal.modalSummaryBg};
  color: ${(props) => props.theme.modal.modalSummaryFontColor};
  font-weight: 600;
  padding: 30px;
  font-size: 1.5rem;
`;


export const ModalTitle = styled.h2`
  border-radius: 11px 0 0 0;
  grid-area: title;
  text-align: center;
  font-weight: 600;
  font-size: 2rem;
  padding: 0.3em;
  background: ${(props) => props.theme.modal.modalbackground};
  color: ${(props) => props.theme.modal.modalTitleFontColor};
  border-bottom:${(props) => props.theme.modal.modalBorder};
`;

export const ModalArticleStats = styled.div`
  grid-area: stats;
  text-align: center;
  background: ${(props) => props.theme.modal.modalFontcolor};
  padding: 0.5em;
  border: ${(props) => props.theme.modal.modalBorder};
  color: ${(props) => props.theme.modal.modalTextColor};
  border-radius: 0 0 11px 11px;
`;

export const ModalContainer = styled.div`
  display: grid;
  grid-template-columns: 50% auto 5%;
  grid-template-rows: 12% 65% 15% 8%;
  width: 80vw;
  height: 80vh;
  background: ${(props) => props.theme.modal.modalSummaryBg};
  justify-content: center;
  grid-template-areas:
    "title title close"
    "summary picture picture"
    "url url url"
    "stats stats stats";
  border-radius: 30px;
  border: 1px solid black;
`;



export const ModalArticleUrl = styled.a`
  color: ${(props) => props.theme.modal.modalFontcolor};
  font-size: 1.2em;
  background-color: black;
  grid-area: url;
  padding: 10px;
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme.modal.modalbackground};
  border: ${(props) => props.theme.modal.modalBorder};
`;

export const ModalCloseDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.modal.modalbackground};
  border-radius: 0 11px 0 0;
  border-bottom:${(props) => props.theme.modal.modalBorder};
  grid-area: close;
`;

export const ModalCloseButton = styled(FontAwesomeIcon)`
  color: ${(props) => props.theme.modal.modalFontcolor};
  font-size: 3rem;
  font-weight: 800;
  width: 3rem;
  height: 3rem;
  cursor: pointer;
`;


export const ModalHdImg = styled.img`
  display: flex;
  grid-area: picture;
  width: 100%;
  height: 100%;
  border: 2px solid rgba(0, 0, 0, 0.3);

`;

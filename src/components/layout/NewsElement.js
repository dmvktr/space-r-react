import styled, {keyframes} from "styled-components";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

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
        borderRadius: "15px",
        border: "3px solid white",
        padding: "0.5rem",
        zIndex: "50"
    },
    overlay: {
        backgroundColor: "rgba(0,0,0,0.8)"
    }
};

export const SingleNewsElement = styled.div`
  border-radius: 1vw;
  background-image: url(${(props) => props.picture});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 0.3rem;
  width: 100%;
  min-height: 40vh;
  min-width: 20rem;
  border: 3px solid ${(props) => props.theme.article.borderColor};
  color: white;
  display: flex;
  flex: 1;
  flex-direction: column;
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
  min-height: 4rem;
  background: ${(props) => props.theme.article.articleBgColor};
  border-radius: 10px 10px 0 0;
  vertical-align: middle;
  padding: 0.3rem;
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
  height:100%;
  background: ${(props) => props.theme.modal.modalSummaryBg};
  color: ${(props) => props.theme.modal.modalSummaryFontColor};
  font-weight: 600;
  padding: 1rem;
  font-size: clamp(1rem, 2.0vw, 1.4rem);
  overflow-x: auto;
`;


export const ModalTitle = styled.h2`
  border-radius: 0.8rem 0 0 0;
  grid-area: title;
  text-align: center;
  font-weight: 600;
  vertical-align: middle;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: clamp(1.2rem, 2.0vw, 1.7rem);
  padding: 0.2rem;
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
  width: 80vw;
  height: 80vh;
  grid-template-rows: auto 60% 15% 10%;
  background: ${(props) => props.theme.modal.modalSummaryBg};
  grid-template-areas:
    "title title close"
    "summary picture picture"
    "url url url"
    "stats stats stats";
  border-radius: 0.8rem;
  border: 1px solid black;
  @media (max-width: 800px) {
    grid-template-areas:
    "title title close"
    "picture picture picture"
    "summary summary summary"
    "url url url"
    "stats stats stats";
    grid-template-rows: auto 40% 20% 15% 10%;

  }
`;



export const ModalArticleUrl = styled.a`
  color: ${(props) => props.theme.modal.modalTitleFontColor} !important;
  font-size: clamp(0.8rem, 2.0vw, 1.2rem);
  grid-area: url;
  padding: 0.5rem;
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme.modal.modalbackground};
  border: ${(props) => props.theme.modal.modalBorder};
`;

export const ModalCloseDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 5vw;
  background: ${(props) => props.theme.modal.modalbackground};
  border-radius: 0 11px 0 0;
  border-bottom:${(props) => props.theme.modal.modalBorder};
  grid-area: close;
`;

export const ModalCloseButton = styled(FontAwesomeIcon)`
  color: ${(props) => props.theme.modal.modalFontcolor};
  font-size: 2rem;
  font-weight: 500;
  width: 3rem;
  height: 3rem;
  cursor: pointer;
`;


export const ModalImageDiv = styled.div`
  display: flex;
  grid-area: picture;
  justify-content: center;
  align-content: center;
  width: auto;
  height: auto;
  border: 2px solid rgba(0, 0, 0, 0.3);

`;

export const ModalHdImg = styled.img`
  display: flex;
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  border: 2px solid rgba(0, 0, 0, 0.3);

`;

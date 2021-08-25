import React, { useState } from "react";
import styled from "styled-components";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    margin: "0",
    transform: "translate(-50%, -50%)",
    backgroundColor: "black",
    backgroundRepeat: "no-repeat",
    backgroundSize: "50%",
    backgroundPosition: "center",
  },
};
const Articles = (props) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  console.log(props.article);
  return (
    <React.Fragment>
      <SingleNewsELement onClick={openModal}>
        <H3>{props.article.title}</H3>
        <ArticleContainer picture={props.article.imageUrl}>
          <H4>{props.article.newsSite}</H4>
        </ArticleContainer>
      </SingleNewsELement>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Modal"
        onClick={closeModal}
      >
        <ModalContainer>
          <H2>{props.article.title}</H2>
          <CloseButton onClick={closeModal}>X</CloseButton>
          <Summary>{props.article.summary}</Summary>
          <HdImg picture={props.article.imageUrl} onClick={closeModal} />
          <Stats>
            {props.article.publishedAt} <br />
            {props.article.newsSite}
            <br />
            {props.article.url}
          </Stats>
        </ModalContainer>
      </Modal>
    </React.Fragment>
  );
};

const H4 = styled.p`
  color: red;
  font-weight: 600;
  background-color: rgba(0, 0, 0, 0.4);
`;

const Summary = styled.div`
  grid-area: summary;
  font-weight: 600;
  padding: 40px;
  font-size: 1.5rem;
`;

const H3 = styled.h3`
  background-color: black;
`;

const H2 = styled.h2`
  grid-area: title;
  font-weight: 600;
  font-size: 2rem;
  padding: 20px;
  background-color: black;
  color: white;
`;

const Stats = styled.div`
  grid-area: stats;
  padding: 20px;
`;

const ModalContainer = styled.div`
  display: grid;
  grid-template-columns: 50% auto 10%;
  grid-template-rows: 20% 70% 10%;
  width: 80vw;
  height: 95vh;
  justify-content: center;
  align-items: center;
  grid-template-areas:
    "title title title"
    "summary picture picture"
    "stats stats stats";
  background-color: white;
`;

const ArticleContainer = styled.div`
  background-image: url(${(props) => props.picture});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
`;

const SingleNewsELement = styled.div`
  background-image: url(${(props) => props.picture});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 20vw;
  border: 3px solid white;
  color: white;
  display: grid;
  grid-template-rows: 30% 70%;
  flex: 1;
`;

const CloseButton = styled.button`
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

const HdImg = styled.div`
  grid-area: picture;
  content: url(${(props) => props.picture});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: auto;
  height: 100%;
`;
export default Articles;

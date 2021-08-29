import React, { useState } from "react";
import Modal from "react-modal";
import Moment from "react-moment";
import {
  ArticleNewsSite,
  ArticleContainer,
  ModalArticleSummary,
  ArticleTitle,
  ModalArticleStats,
  ModalArticleUrl,
  ModalTitle,
  ModalContainer,
  SingleNewsELement,
  ModalCloseButton,
  ModalCloseDiv,
  ModalHdImg,
} from "./layout/NewsElement";

const customStyles = {
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


  return (
    <React.Fragment>
      <SingleNewsELement onClick={openModal}>
        <ArticleTitle>{props.article.title}</ArticleTitle>
        <ArticleContainer picture={props.article.imageUrl}>
          <ArticleNewsSite>{props.article.newsSite}</ArticleNewsSite>
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
          <ModalTitle>{props.article.title}</ModalTitle>
          <ModalCloseDiv>
            <ModalCloseButton onClick={closeModal}>X</ModalCloseButton>
          </ModalCloseDiv>

          <ModalArticleSummary>{props.article.summary}</ModalArticleSummary>
          <ModalArticleUrl href={props.article.url}>
            Source:
            <br />
            <br />
            {props.article.url}
          </ModalArticleUrl>
          <ModalHdImg picture={props.article.imageUrl} onClick={closeModal} />
          <ModalArticleStats>
            <Moment>{props.article.publishedAt}</Moment> <br />
            {props.article.newsSite}
          </ModalArticleStats>
        </ModalContainer>
      </Modal>
    </React.Fragment>
  );
};

export default Articles;

import React, { useState } from "react";
import Modal from "react-modal";
import {
  ArticleNewsSite,
  ArticleContainer,
  ArticleSummary,
  ArticleTitle,
  ArticleStats,
  ArticleUrl,
  ModalTitle,
  ModalContainer,
  SingleNewsELement,
  CloseButton,
  HdImg,
} from "./layout/NewsElement";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    margin: "0",
    transform: "translate(-50%, -50%)",
    background: "rgb(64,64,64)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "50%",
    backgroundPosition: "center",
    borderRadius: "30px",
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
          <CloseButton onClick={closeModal}>X</CloseButton>
          <ArticleSummary>{props.article.summary}</ArticleSummary>
          <ArticleUrl href={props.article.url}>
            Source:
            <br />
            <br />
            {props.article.url}
          </ArticleUrl>
          <HdImg picture={props.article.imageUrl} onClick={closeModal} />
          <ArticleStats>
            {props.article.publishedAt} <br />
            {props.article.newsSite}
          </ArticleStats>
        </ModalContainer>
      </Modal>
    </React.Fragment>
  );
};

export default Articles;

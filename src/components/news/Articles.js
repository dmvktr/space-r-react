import React, { useState } from "react";
import Modal from "react-modal";
import Moment from "react-moment";
import {
  faTimes
} from "@fortawesome/free-solid-svg-icons";
import {
  ModalCustomStyles,
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
} from "../layout/NewsElement";

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
        style={ModalCustomStyles}
        contentLabel="Modal"
        onClick={closeModal}
      >
        <ModalContainer>
          <ModalTitle>{props.article.title}</ModalTitle>
          <ModalCloseDiv>
            <ModalCloseButton icon={faTimes} onClick={closeModal}>X</ModalCloseButton>
          </ModalCloseDiv>

          <ModalArticleSummary>{props.article.summary}</ModalArticleSummary>
          <ModalArticleUrl href={props.article.url}>
            Source:
            <br />
            <br />
            {props.article.url}
          </ModalArticleUrl>
          <ModalHdImg src={props.article.imageUrl} onClick={closeModal} />
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

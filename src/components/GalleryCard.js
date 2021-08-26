import React, { useState } from "react";
import {
  Thumbnail,
  Title,
  Card,
  Date,
  CloseButton,
  HdImg,
} from "./layout/GalleryElements";

import Modal from "react-modal";
import LoadingAnim from "../static/img/loading.gif";

Modal.setAppElement("#root");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    margin: "0",
    transform: "translate(-50%, -50%)",
    backgroundColor: "black",
    backgroundImage: `url(${LoadingAnim})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "50%",
    backgroundPosition: "center",
  },
};
const GalleryCard = (props) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <React.Fragment>
      <Card onClick={openModal}>
        <Thumbnail picture={props.picture.url} />
        <Title>{props.picture.title}</Title>
        <Date date={props.picture.date} />
      </Card>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Modal"
        onClick={closeModal}
      >
        <CloseButton onClick={closeModal}>X</CloseButton>
        <HdImg picture={props.picture.hdurl} onClick={closeModal} />
        <Title>{props.picture.title}</Title>
        <Date date={props.picture.date} />
      </Modal>
    </React.Fragment>
  );
};

export default GalleryCard;

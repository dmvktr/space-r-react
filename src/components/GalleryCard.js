import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import Modal from "react-modal";

Modal.setAppElement("#root");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
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
        <HdImg picture={props.picture.hdurl} onClick={closeModal} />
        <Title>{props.picture.title}</Title>
        <Date date={props.picture.date} />
      </Modal>
    </React.Fragment>
  );
};

const FocusAnim = keyframes`
  0% {
    filter: blur(12px);
    opacity: 0;
  }
  100% {
    filter: blur(0px);
    opacity: 1;
  }
`;

const Thumbnail = styled.div`
  background-image: url(${(props) => props.picture});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
`;

const Title = styled.h4`
  opacity: 0;
  text-align: center;
  position: relative;
  height: 1em;
  top: -30px;
  z-index: 40;
  font-size: 20px;
  color: white;
  overflow: hidden;
`;

const Card = styled.div`
  width: auto;
  height: 15vh;
  &:hover ${Title} {
    opacity: 100;
    animation: ${FocusAnim} 0.5s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
  }
  cursor: pointer;
`;
const HdImg = styled.div`
  background-image: url(${(props) => props.picture});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 90vw;
  height: 90vh;
`;
const Date = styled.h3``;

export default GalleryCard;

import React, {useState} from "react";
import {Card, CloseButton, Date, HdImg, Thumbnail, Title,} from "../layout/GalleryElements";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import Modal from "react-modal";
import LoadingAnim from "../../static/img/loading.gif";

Modal.setAppElement('#root');

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
    backgroundSize: "100%",
    backgroundPosition: "center",
    padding: "10px",
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.8)"
  }
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
      <Card >
        <Thumbnail onClick={openModal} picture={props.picture.url} />
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
        <CloseButton icon={faTimes} onClick={closeModal}>X</CloseButton>
        <HdImg src={props.picture.hdurl} onClick={closeModal} />
        <Title>{props.picture.title}</Title>
        <Date date={props.picture.date} />
      </Modal>
    </React.Fragment>
  );
};

export default GalleryCard;

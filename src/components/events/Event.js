import React, {useState} from "react";
import Moment from "react-moment";
import Modal from "react-modal";
import ReactPlayer from "react-player";

import {
  DateContainer,
  Description,
  EventId,
  EventUrl,
  Location,
  SingleEventContainer,
  ThumbnailImg,
  Title,
} from "../layout/EventsElements";
import {ModalStyle} from "../layout/PageElements";

const Event = (props) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <React.Fragment>
      <SingleEventContainer onClick={openModal}>
        <ThumbnailImg src={props.event.feature_image}/>
        <EventId>#00{props.event.id}</EventId>
        <Title>{props.event.name}</Title>
        <Description>{props.event.description}</Description>
        <Location>{props.event.location}</Location>
        <DateContainer>
          <Moment>{props.event.date}</Moment>
        </DateContainer>
        <EventUrl href={props.event.video_url}>
          {props.event.video_url}
        </EventUrl>
      </SingleEventContainer>
      <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={ModalStyle}
          contentLabel="Modal"
          onClick={closeModal}
      >
        <ReactPlayer url={props.event.video_url} />
      </Modal>
    </React.Fragment>
  );
};

export default Event;

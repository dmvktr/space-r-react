import React from "react";
import { VideoContainer, MainContentContainer } from "./layout/PageElements";
import video from "../../src/static/Artemis-logo-reveal-1080p.mp4";
import Content from "./Content";
import { SlideMainContainer } from "./layout/SlidePageElements";
import styled from "styled-components";
import Background1 from "../../src/static/img/bg1.jpg";
import Background2 from "../../src/static/img/bg2.jpg";
import Background3 from "../../src/static/img/bg3.jpg";
import Background4 from "../../src/static/img/bg4.jpg";

const Home = () => {
  return (
    <>
      <MainContentContainer>
        <VideoContainer>
          <video autoPlay muted>
            <source src={video} type="video/mp4"></source>
          </video>
        </VideoContainer>
        <SlideMainContainer>
          <Content />
        </SlideMainContainer>
        <SlideMainContainer>
          <PictureElement image={Background1} />
        </SlideMainContainer>
        <SlideMainContainer>
          <Content />
        </SlideMainContainer>
        <SlideMainContainer>
          <PictureElement image={Background2} />
        </SlideMainContainer>
        <SlideMainContainer>
          <Content />
        </SlideMainContainer>
        <SlideMainContainer>
          <PictureElement image={Background3} />
        </SlideMainContainer>
        <SlideMainContainer>
          <Content />
        </SlideMainContainer>
        <SlideMainContainer>
          <PictureElement image={Background4} />
        </SlideMainContainer>
        <SlideMainContainer>
          <Content />
        </SlideMainContainer>
      </MainContentContainer>
    </>
  );
};

const PictureElement = styled.div`
  background-image: url(${(props) => props.image});
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  min-width: 100vw;
  min-height: 60vh;
  margin: auto;
`;

export default Home;

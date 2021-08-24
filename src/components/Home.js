import React from "react";
import { VideoContainer, MainContentContainer } from "./layout/PageElements";
import video from '../../src/static/Artemis-logo-reveal-1080p.mp4';
import Content from "./Content";
import { SlideMainContainer } from "./layout/SlidePageElements";


const Home = () => {
  return (
    <MainContentContainer>
      <VideoContainer>
        <video autoPlay muted>
          <source src={video} type="video/mp4"></source>
        </video>
      </VideoContainer>
      <SlideMainContainer >
        <Content />
      </SlideMainContainer>
    </MainContentContainer>
  );
};

export default Home;

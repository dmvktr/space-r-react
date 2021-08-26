import React from "react";
import { VideoContainer, MainContentContainer } from "./layout/PageElements";
import video from "../../src/static/anim.mp4";
import Content from "./Content";
import { SlideMainContainer } from "./layout/SlidePageElements";
import styled, { keyframes } from "styled-components";
import Background1 from "../../src/static/img/bg1.jpg";
import Background2 from "../../src/static/img/bg2.jpg";
import Background3 from "../../src/static/img/bg3.jpg";
import Background4 from "../../src/static/img/bg4.jpg";
import logo from "../../src/static/img/logo/Spacer-Logo.png";

const Home = () => {
  return (
    <>
      <MainContentContainer>
        <VideoContainer>
          <Logo src={logo} />
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
const Logo = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 50vw;
  height: auto;
  /* bring your own prefixes */
  transform: translate(-50%, -50%);
  animation: ${FocusAnim} 3s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
  -webkit-filter: drop-shadow(5px 5px 5px white);
  filter: drop-shadow(5px 5px 5px white);
`;

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

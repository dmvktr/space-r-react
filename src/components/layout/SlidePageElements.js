import styled from "styled-components";

export const SlideMainContainer = styled.div`
  display: flex;
  width: 100vw;
  min-height: 60vh;
`;

export const SlidePresentationContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  border-top: 1px solid rgba(0, 0, 0, 0.5);
  margin: 0 10px;
`;

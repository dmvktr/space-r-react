import styled from "styled-components";

export const SlideMainContainer = styled.div`
    display: flex;
    min-width: 100vw;
    min-height: 40vh;
    max-height: 80vh;
    height: 80vh;
`;

export const SlideContainer = styled.div`
  width: 100vw;
  display: flex;
  content: '';
  background-image: url(${(props)=> props.image});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;
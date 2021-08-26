import React from "react";
import styled from "styled-components";
import { SlideContainer } from "./layout/SlidePageElements";
import { SlideMainContainer } from "./layout/SlidePageElements";

const Content = (props) => {
  return (
    <>
      <PageContent>
        <SlideMainContainer>
          <SlideContainer image={props.image} />
        </SlideMainContainer>
      </PageContent>
    </>
  );
};

const PageContent = styled.div`
  grid-area: content;
  margin: 1vh 0;
  width: 100vw;
`;
export default Content;

import React from "react";
import styled from "styled-components";
import { SlideMainContainer } from "./layout/SlidePageElements";

const Content = () => {
  return (
        <>
        <PageContent>
            <SlideMainContainer >
                <h1>Test</h1>
            </SlideMainContainer>
        </PageContent>
        </>
    );
};

const PageContent = styled.div`
  grid-area: content;
`;
export default Content;

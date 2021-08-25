import React from "react";
import styled from "styled-components";
import { SlideMainContainer } from "./layout/SlidePageElements";

const Content = () => {
  return (
    <>
      <PageContent>
        <SlideMainContainer>
          <h1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id
            felis sit amet nisi vulputate vehicula. Suspendisse eget imperdiet
            tortor, ut suscipit diam. Integer blandit interdum eros, vel
            tincidunt nulla. Aenean semper faucibus sapien sed sollicitudin.
            Mauris fermentum urna sit amet molestie tempus. Sed fringilla nisi
            id eros feugiat aliquet. Pellentesque condimentum neque sed enim
            aliquam vehicula. Suspendisse placerat risus velit, a dictum ligula
            interdum nec. Integer hendrerit velit sed cursus egestas. Vestibulum
            lacus arcu, auctor eu iaculis sit amet, egestas id nibh. Etiam eget
            sem libero. Etiam id mattis eros. Proin eu nisi quis libero dictum
            consequat quis id sem. Ut nec lacus dolor.{" "}
          </h1>
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

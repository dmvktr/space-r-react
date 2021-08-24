import styled from "styled-components";


export const MainContainer = styled.div`
    display: grid;
    width: 100vw;
    grid-template-columns: 5% 90% 5%;
    grid-template-rows: 20% 40% 39%;
    grid-template-areas:
        "header header header"
        ". content ."
        ". content . ";
`
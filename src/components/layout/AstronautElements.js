import styled from "styled-components";

export const AstronautsPageText = styled.div`
    min-width: 90vw;
    min-height: 5vh;
    color: white;
    text-align: center;
    font-size: 25px;
    font-weight: 370;
    -webkit-text-stroke: 0.8px #100D80;
    letter-spacing: 1px;
`;

export const AstronautMainContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-width: 100vw;
`;

export const AstronautCardsMainContainer = styled.div`
    display: grid;
    border-radius: 10px;
    background-color: #0c0f1a;
    min-width: 65vw;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 1.2vw;
    min-height: 60vh;
`;

export const AstronautCardContainer = styled.div`
    min-height: fit-content;
    background-color: #0c0f1a;
    
`;

export const CardTop = styled.div`
    height: 80px;
    background: #d2d2d2;
    border-radius: 11px 11px 0 0;
`;
export const CardImageContainer = styled.div`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background: white;
    overflow: hidden;
    align-self: center;
    position: relative;
    top: -7vh;
`;

export const CardPersonalDetail = styled.div`
    color:white;
    font-size: 20px;
    font-weight: 450;
    text-align: center;
    letter-spacing: 2px;
    margin: 0.5vh
`;

export const Card = styled.div`
    display: flex;
    border-radius: 11px;
    flex-direction: column;
    background-color: #0f101ae0;
    border: 2px solid white;
    min-height: 70vh;
    max-height: 70vh;
`;

export const CardBio = styled.div`
    border-radius: 10px;
    background-color: white;
    color: black;
    margin-bottom: 2px;
    min-height: 10vh;
    padding: 5px;
    margin: 7vh 3vh 3vh 3vh;
    max-width: fit-content;
    padding: 15px;
    font-weight: 450;
    letter-spacing: 1px;
`;

export const Error = styled.div`
    font-size: 30px;
    font-weight: 450;
    color: red;
`
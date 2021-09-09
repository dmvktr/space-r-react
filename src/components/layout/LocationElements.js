import styled from "styled-components";

export const LocationMainContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 100vw;
`;

export const LocationsContainer = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 1rem;
    color: white;
`;

export const LocationContainer = styled.div`
    border: 5px solid #96c6ff;
    text-align: center;
    height: auto;
    border-radius: 10px;
    background-color: #d0d5db;
    color: #000b45;
`;

export const LocationCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

export const LocationPads = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: left;
`;

export const PadContainer = styled.div`
    color: whitesmoke;
`;

export const PadsContainer = styled.div`
    min-height: 1rem;
    position: relative;
    text-align: center;
    font-size: 20px;
    margin: 20px;
`;

export const PadCard = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    min-height: 32vh;
`;

export const Error = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    font-weight: 450;
    color: red;
`;

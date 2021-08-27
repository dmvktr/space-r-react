import styled from "styled-components";

export const LocationMainContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: top;
    align-items: space-around;
    min-width: 100vw;
`;

export const LocationsContainer = styled.div`
    display: flex;
    justify-content: space-around;
    alignItems: center;
    margin-top: 50px;
    color: white;
`;

export const LocationContainer = styled.div`
    border: 5px solid;
    border-color: #96c6ff;
    text-align: center;
    height: 380px;
    border-radius: 10px;
    background-color: #d0d5db;
    color: #000b45;
`;

export const LocationCard = styled.div`
    display: 'flex';
    flexDirection: 'column';
    justifyContent: 'space-around';
    alignItems: 'center';
`;

export const LocationPads = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: space-between;
`;

export const PadContainer = styled.div`
    color: whitesmoke;
`;

export const PadsContainer = styled.div`
    min-height: 30px;
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
    align-items: space-around;
    font-size: 30px;
    font-weight: 450;
    color: red;
`;

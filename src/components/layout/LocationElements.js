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
    border: 2px solid;
    text-align: center;
    color: white;
    height: 380px;
    border-radius: 1px;
`;

export const LocationCard = styled.div`
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
`;

export const PadsContainer = styled.div`
position: absolute;
margin: 20px;
padding: 20px;
text-align: right;
color: white;
`;

export const PadContainer = styled.div`
    max-width: 450px
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: space-around;
    text-align: left;
    color: white;
`;

export const Error = styled.div`
    display: flex;
    justify-content: center;
    align-items: space-around;
    font-size: 30px;
    font-weight: 450;
    color: red;
`;


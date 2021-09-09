import styled from "styled-components";

export const LocationMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 100vw;
`;

export const LocationsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 2vw;
  color: white;
  flex-direction: row;
  max-width:  50vw;
  margin: auto;
  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
  }
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
  justify-content: center;
  align-items: center;
  width: 30vw;
  min-width: 30vw;
  margin:auto;
`;

export const LocationPads = styled.div`
  display: flex;
  flex-direction: column;

`;

export const PadContainer = styled.div`
  color: whitesmoke;
`;

export const Error = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  font-weight: 450;
  color: red;
`;

import styled from "styled-components";

export const LocationMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 100vw;

`;

export const LocationsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 2vw;
  color: white;
  flex: 1;
  flex-wrap: wrap;
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
`;
export const Name = styled.h4`
  font-size: clamp(0.8rem, 2.0vw, 1rem);
`;
export const Country = styled.h3`
  font-size: clamp(0.8rem, 2.0vw, 1rem);
`;
export const Details = styled.p`
  font-size: clamp(0.8rem, 2.0vw, 1rem);
`;

export const LocationImage = styled.img`
  max-width: 40vh;
  min-width: 100%;
  height: auto;

`;


export const Error = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  font-weight: 450;
  color: red;
`;

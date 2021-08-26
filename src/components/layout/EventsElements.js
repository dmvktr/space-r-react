import styled, { keyframes } from "styled-components";

export const EventsPageContainer = styled.div`
  display: flex;
  grid-area: content;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
`;

export const EventsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  width: 70vw;
  gap: 2vw;
`;

const ScaleUp = keyframes`
  0%{transform: scale(1)}
  100% {transform: scale(1.02)}

`;

const ScaleDown = keyframes`
  0%{transform: scale(1.02)}
  100% {transform: scale(1)}

`;

export const SingleEventContainer = styled.div`
  display: grid;
  grid-template-columns: 1.4fr 0.6fr 1fr 1fr;
  grid-template-rows: 10% 15% auto 20%;
  background: white;
  border: 2px solid black;
  gap: 0.5rem;
  border-radius: 20px;
  color: black;
  transition: ${ScaleDown} 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  -webkit-transition: ${ScaleDown} 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  grid-template-areas:
    "picture date date id"
    "picture title title title"
    "picture description description description"
    "picture location url url";

  :hover {
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
      rgba(0, 0, 0, 0.22) 0px 15px 12px;
    animation: ${ScaleUp} 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  }
  cursor: pointer;
`;

export const DateContainer = styled.h3`
  grid-area: date;
  font-size: 0.75rem;
  text-transform: uppercase;
  font-weight: 500;
  padding: 1rem;
`;
export const Title = styled.h3`
  grid-area: title;
  color: rgb(60 72 88);
  padding: 1.4rem;
  font-size: 1.5rem;
`;
export const Description = styled.h3`
  grid-area: description;
  color: rgb(153 153 153);
  font-size: 1.2rem;
  font-weight: 700;
  font-family: "Roboto Slab", "Times New Roman", serif;
  padding: 1rem;
  max-height: 20vh;
  overflow: hidden;
`;
export const Location = styled.h3`
  grid-area: location;
  display: flex;
  align-items: center;
  color: white;
  padding: 4px;
  text-transform: uppercase;
  font-size: 10px;
  background-color: rgb(33 150 243);
`;
export const EventId = styled.h3`
  grid-area: id;
  display: flex;
  justify-content: flex-end;
  color: cornflowerblue;
  padding: 0.55rem 1rem;
`;
export const EventUrl = styled.a`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  grid-area: url;
  padding: 0.25rem 1rem;
`;

export const ThumbnailImg = styled.div`
  display: flex;
  grid-area: picture;
  align-items: center;
  content: url(${(props) => props.picture});
  background-size: 40vw auto;
  margin: auto;
  background-position: center;
  background-repeat: no-repeat;
  padding: 0.4rem;
  border: 2px solid rgba(0, 0, 0, 0.3);
  border-radius: 20px;
`;

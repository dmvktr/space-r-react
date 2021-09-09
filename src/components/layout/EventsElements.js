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

  background: ${(props) => props.theme.event.singleEventContainer};
  border: ${(props) => props.theme.event.singleEventContainerBorder};
  gap: 0.5rem;
  border-radius: 20px;
  color: ${(props) => props.theme.event.singleEventContainerTextColor};
  transition: ${ScaleDown} 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  -webkit-transition: ${ScaleDown} 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  grid-template-areas:
    "picture date date id"
    "picture title title title"
    "picture description description description"
    "picture location url url";

  @media (max-width:800px){
    display: flex;
    flex-direction: column;
    grid-template-rows: auto auto auto auto;
  }
  
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
  color: ${(props) => props.theme.event.titleColor};
  padding: 1rem;
  font-size: clamp(0.7rem, 2.0vw, 1.4rem);
`;
export const Description = styled.h3`
  grid-area: description;
  color: ${(props) => props.theme.event.descriptionColor};
  font-size: clamp(1rem, 2.0vw, 1.2rem);
  font-weight: 700;
  font-family: "Roboto Slab", "Times New Roman", serif;
  padding: 1rem;
  min-height: 30vh;
 
`;
export const Location = styled.h3`
  grid-area: location;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.event.locationColor};
  padding: 0.4rem;
  text-transform: uppercase;
  font-size: clamp(0.5rem, 2.0vw, 0.8rem);
  background-color: ${(props) => props.theme.event.locationBgColor};
`;
export const EventId = styled.h3`
  grid-area: id;
  display: flex;
  justify-content: flex-end;
  color: ${(props) => props.theme.event.eventIdColor};
  padding: 0.55rem 1rem;
`;
export const EventUrl = styled.a`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  grid-area: url;
  padding: 0.25rem 1rem;
`;

export const ThumbnailImg = styled.img`
  display: flex;
  grid-area: picture;
  align-items: center;
  margin: auto;
  background-position: center;
  background-repeat: no-repeat;
  padding: 0.4rem;
  border: ${(props) => props.theme.event.thumbnailImgBorder};
  border-radius: 20px;
`;

import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleLeft, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';


export const AstronautMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  min-width: 100vw;
`;

export const AstronautCardsMainContainer = styled.div`
  display: grid;
  border-radius: 10px;
  background-color: ${(props) => props.theme.bodyColor};
  min-width: 70vw;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 1.8vw;
  min-height: 60vh;
  max-width: 80vw;
  

  @media (min-width: 320px) and (max-width: 1050px){
    min-width: 80vw;
  }
  
  @media (max-width: 1050px){
    grid-template-columns: 1fr;
    gap: 4rem;
  }
`;

export const CardTop = styled.div`
  min-height: 5rem;
  background: #d2d2d2;
  border-radius: 11px 11px 0 0;
`;

export const AstronautCardContainer = styled.div` 
  position: relative;  
  min-height: fit-content;
  border-radius: 11px;
  background-color: ${(props) => props.theme.bodyColor};
  box-shadow: rgb(233 219 219 / 0%) -18px 20px 13px,
    rgb(167 68 68 / 0%) -14px 13px 6px 0px;
  transition: box-shadow 0.8s ease-in-out;
  :hover {
    box-shadow: rgb(233 219 219 / 31%) -18px 20px 13px,
      rgb(167 68 68 / 11%) -14px 13px 6px 0px;
  }
`;


export const CardImageContainer = styled.div`
    --card-width: 173px;
    --card-top-height: 80px;
    --img-width-height: 120px;
    position: absolute;
    border: 5px solid #d2d2d2;
    left: 50%;
    top: calc(var(--card-top-height));
    margin-top: calc(-1 * var(--img-width-height) / 2);
    width: var(--img-width-height);
    margin-left: calc(-1 * var(--img-width-height) / 2);
    height: var(--img-width-height);
    border-radius: 50%;
    background: white;
    overflow: hidden;
    -webkit-filter: drop-shadow(1px 6px 17px rgba(153,172,199,0.7));
    filter: drop-shadow(1px 6px 17px rgba(153,172,199,0.7));

    @media (max-width: 400px){
      min-height: 3rem;
    }
`;

export const AstronautImage = styled.div`
    width: 100%;
    height: 100%;
    object-fit: cover;
    content:url(${(props) => props.picture});
`;

export const CardPersonalDetail = styled.div`
  color: white;
  color: ${(props) => props.color};
  font-size: 20px;
  font-weight: 450;
  text-align: center;
  letter-spacing: 2px;
  margin: 0.5vh;
  transition: font-size 1s;

  @media (max-width: 400px){
    font-size: 1.1rem;
  }
`;

export const Card = styled.div`
  display: flex;
  border-radius: 11px;
  flex-direction: column;
  background: linear-gradient(152deg, #6b7b83bf, #101115e0 30%, #1d1f307a);
  border: 2px solid white;
  min-height: 70vh;
  max-height: 70vh;
`;

export const CardBio = styled.div`
    border-radius: 10px;
    background-color: white;
    color: black;
    margin-bottom: 2px;
    padding: 5px;
    margin: 7vh 3vh 3vh 3vh;
    max-width: fit-content;
    padding: 15px;
    font-weight: 450;
    letter-spacing: 1px;
    overflow: auto;
    transition: margin 1s;

    @media (max-width: 400px){
      margin: 1.7rem 1rem 2rem 1rem;
    }
`;

export const Error = styled.div`
  font-size: 30px;
  font-weight: 450;
  color: red;

`;

export const AstronautName = styled.div`
  --elem-width: 17rem;
  font-size: 1.7rem;
  position: relative;
  color: white;
  width: 100%;
  text-align: center;
  align-self: center;
  ::after {
    transform: scaleX(0);
    content: "";
    height: 2px;
    background: var(--grey-card-top-primary);
    width: calc(var(--elem-width));
    position: absolute;
    left: 0;
    bottom: 0;
    transform-origin: left;

    transition: transform 800ms ease, width 1s;
    }
    ::after
    ${Card}:hover{
        transform: scaleX(1);
    }

    @media (max-width: 400px){
      --elem-width: 13rem;
      font-size: 1.4rem;
      
    }

    @media (min-width: 400px) and (max-width: 500px){
      --elem-width: 17rem;
    }

    @media (min-width: 500px) and (max-width: 600px){
      --elem-width: 21rem;
    }

    @media (min-width: 550px) and (max-width: 650px){
      --elem-width: 23rem;
    }

    @media (min-width: 650px) and (max-width: 880px){
      --elem-width: 27rem;
    }

    @media (min-width: 880px) and (max-width: 1050px){
      --elem-width: 27rem;
    }

    @media (min-width: 1300px){
      --elem-width: 20rem;
    }

    
`;

export const PaginationIcon = styled(FontAwesomeIcon)`
    width: 80px !important;
    color: white;
    height: 50px;
    position: absolute;
    right: ${(props) => props.icon === faAngleDoubleRight ? 0 : 'unset'};
    left: ${(props) => props.icon === faAngleDoubleLeft ? 0 : 'unset'};
    transition: width 1s, height 1s;

    @media (max-width: 550px){
      width: 50px !important;
      height: 40px;
    }
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

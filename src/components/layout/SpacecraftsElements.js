import styled from "styled-components";


export const SpacecraftsMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 100vw;
  background: ${(props) => props.theme.bodyColor};
`;

export const SpacecraftsCardsMainContainer = styled.div`
  display: flex;
  background-color: #0c0f1a;
  justify-content: space-evenly;
  max-width: 90vw;
  flex-wrap: wrap;
  gap: 2rem;
`;

export const SpacecraftsCardContainer = styled.div`
  border-radius: 11px;
  background-color: #0c0f1a;
  box-shadow: rgb(233 219 219 / 0%) -18px 20px 13px, rgb(167 68 68 / 0%) -14px 13px 6px 0px;
  transition: box-shadow 0.8s ease-in-out;

  :hover {
    box-shadow: rgb(233 219 219 / 31%) -18px 20px 13px, rgb(167 68 68 / 11%) -14px 13px 6px 0px;
  }
  max-width: 35vw;
  min-width: 50vh;
`;

export const Card = styled.div`
  display: flex;
  border-radius: 11px;
  flex-direction: column;
  background: linear-gradient(152deg, #6b7b83bf, #101115e0 30%, #1d1f307a);
  min-height: 80vh;
  box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 20%), 0 1px 5px 0 rgb(0 0 0 / 12%);
`;

export const SpacecraftImageContainer = styled.div`
  max-height: 35%;
  min-height: 30%;
  height: 100%;
  padding: 1rem;
`;

export const SpacecraftImage = styled.img`
  object-fit: cover;
  width: 100%;
  max-height: 35vh;
  content: url(${(props) => props.image});
`;

export const CardBody = styled.div`
  padding: .9rem 1.3rem;
  color: whitesmoke;
  text-align: center;
  max-height: 70%;

`

export const CardPersonalDetail = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  color: whitesmoke;
  font-size: clamp(0.8rem, 2.0vw, 0.9rem);
  font-weight: 450;
  text-align: center;
  letter-spacing: 1px;
`;

export const SpacecraftAttributeSpan = styled.span`
  padding: 5px 15px;
  text-transform: uppercase;
  font-size: 10px;
  color: #fff;
  background: ${(props) => props.detail === 'inactive' ? 'red'
          : props.detail === 'active' ? 'green'
                  : props.detail === 'cargo' ? 'peru'
                          : props.detail === 'human rated' ? 'green' : 'teal'};
  font-weight: 600;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: .25rem;
`;
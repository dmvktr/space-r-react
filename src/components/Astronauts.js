import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { AstronautMainContainer,
    AstronautCardContainer,
    AstronautCardsMainContainer,
    AstronautsPageText,
    CardTop,
    CardImageContainer,
    CardPersonalDetail,
    Card,
    AstronautImage,
    CardBio } from "./layout/AstronautElements";

const Astronauts = () => {
  const baseEndpoint = "https://ll.thespacedevs.com/2.2.0/astronaut/";
  const fetchLimit = 2;
  const offset = 0;

//   const [astronauts, setAstronauts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

  
//   const fetchData = () => {
//     axios
//         .get(`${baseEndpoint}order=${fetchLimit}&offset=${offset}`)
//         .then((res) => {
//           setAstronauts(res.data.results);
//         })
//         .catch((err) => {
//             setError(err);
//         })
//         .finally(() => {
//             setLoading(false);
//         });
// };

// useEffect(() => {
//     fetchData()
//   }, [])

  return (
    <>
      <AstronautMainContainer>
      <AstronautsPageText>
        Astronauts
      </AstronautsPageText>
        <AstronautCardsMainContainer>
          <AstronautCardContainer>
            <Card id="card">
              <CardTop />
              <CardImageContainer>
                <AstronautImage />
              </CardImageContainer>
              <CardPersonalDetail id="astronautName">
                Albert Woofers
              </CardPersonalDetail>
              <CardPersonalDetail>
                Date of birth: 2000.11.01
              </CardPersonalDetail>
              <CardPersonalDetail>
                Nationality: ENG
              </CardPersonalDetail> 
              <CardPersonalDetail>
                Mission: ???
              </CardPersonalDetail>
              <CardBio>
                Lorem ipsum dolor sit amet ......
              </CardBio>
            </Card>
            </AstronautCardContainer>
            <AstronautCardContainer>
            <Card id="card">
              <CardTop />
              <CardImageContainer>
                <AstronautImage />
              </CardImageContainer>
              <CardPersonalDetail id="astronautName">
                Moofers McGoofers
              </CardPersonalDetail>
              <CardPersonalDetail>
                Date of birth: 1980.01.01
              </CardPersonalDetail>
              <CardPersonalDetail>
                Nationality: AUT
              </CardPersonalDetail> 
              <CardPersonalDetail>
                Mission: Soyuz-U2
              </CardPersonalDetail>
              <CardBio>
                Lorem ipsum dolor sit amet ......
              </CardBio>
            </Card>
          </AstronautCardContainer>
          <AstronautCardContainer />
          <AstronautCardContainer />
        </AstronautCardsMainContainer>
      </AstronautMainContainer>
    </>
  );
};

export default Astronauts;

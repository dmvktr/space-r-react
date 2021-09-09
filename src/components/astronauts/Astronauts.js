import React from "react";
import {useState, useEffect} from "react";
import {useMediaQuery} from "@material-ui/core";
import Astronaut from "./Astronaut";
import Pagination from "../Pagination";
import {PageTitle} from "../layout/PageElements";
import {
    AstronautMainContainer,
    AstronautCardContainer,
    AstronautCardsMainContainer,
    PaginationContainer,
    Error
} from "../layout/AstronautElements";
import {faAngleDoubleLeft, faAngleDoubleRight} from '@fortawesome/free-solid-svg-icons';
import {dataHandler} from "../data_handler";


const Astronauts = (props) => {
    // const [url, setUrl] = useState("https://lldev.thespacedevs.com/2.2.0/astronaut/?limit=2");
    const [url, setUrl] = useState("http://localhost:8080/astronauts");
    const [astronauts, setAstronauts] = useState({
        next: null,
        previous: null,
        results: [],
    });
    const [error, setError] = useState('');
    const isMatchingLayoutChangeThreshold = useMediaQuery('(max-width: 1050px)');


    const handleClick = (url) => {
        if (url !== null) {
            setUrl(url);
        }
    }

    useEffect(() => {
        dataHandler._api_get(url, setAstronauts, setError)
    }, [url]);

    return (
        <AstronautMainContainer>
            {error ? (
                <Error>
                    An error occured while fetching the astronauts information. Please try
                    again later!
                </Error>
            ) : (
                <>
                    {isMatchingLayoutChangeThreshold ? (
                            <PaginationContainer>
                                <PageTitle>Astronauts</PageTitle>
                                <Pagination icon={faAngleDoubleLeft} url={astronauts.previous} onClick={handleClick}/>
                                <Pagination icon={faAngleDoubleRight} url={astronauts.next} onClick={handleClick}/>
                            </PaginationContainer>
                        ) :
                        <React.Fragment>
                            <Pagination icon={faAngleDoubleLeft} url={astronauts.previous} onClick={handleClick}/>
                            <Pagination icon={faAngleDoubleRight} url={astronauts.next} onClick={handleClick}/>
                        </React.Fragment>}
                    <AstronautCardsMainContainer>
                        {astronauts.results.map((astronaut) => (
                            <AstronautCardContainer key={astronaut.id}>
                                <Astronaut
                                    key={astronaut.id}
                                    name={astronaut.name}
                                    picture={astronaut.profile_image_thumbnail}
                                    theme={props.theme}
                                    dob={astronaut.date_of_birth}
                                    nationality={astronaut.nationality}
                                    status={astronaut.status.name}
                                    bio={astronaut.bio}
                                    id="card"
                                />
                            </AstronautCardContainer>
                        ))}
                    </AstronautCardsMainContainer>
                </>
            )}
        </AstronautMainContainer>
    );
};

export default Astronauts;

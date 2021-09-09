import React, {useEffect, useState} from "react";
import Event from "./Event";
import {Error} from "../layout/ErrorElements"
import {PageTitle} from "../layout/PageElements"
import {EventsContainer, EventsPageContainer,} from "../layout/EventsElements.js";
import {dataHandler} from "../data_handler";

const Events = (props) => {
  // const url = "https://lldev.thespacedevs.com/2.2.0/event/?limit=20";
  const url = "http://localhost:8080/events";
  const [events, setEvents] = useState({
    next: null,
    previous: null,
    results: [],
  });
  const [error, setError] = useState("");

  useEffect(() => {
    dataHandler._api_get(url, setEvents, setError);
  }, [url]);
  return (
    <EventsPageContainer>
      <PageTitle data-testid="events-header">Events</PageTitle>
      {error ? (
        <Error>
          An error occured, while fetching the astronauts information. Please
          try again later!
        </Error>
      ) : (
        <EventsContainer>
          {events.results.map((event) => (
            <Event key={event.id} event={event} theme={props.theme}></Event>
          ))}
        </EventsContainer>
      )}
      </EventsPageContainer>

  );
};

export default Events;

import React, { useState, useEffect } from "react";
import Event from "./Event";
import axios from "axios";
import {Error} from "./layout/ErrorElements"
import {PageTitle} from "./layout/PageElements"
import {
  EventsPageContainer,
  EventsContainer,
} from "./layout/EventsElements.js";

const Events = (props) => {
  const url = "https://lldev.thespacedevs.com/2.2.0/event/?limit=20";
  const [events, setEvents] = useState({
    next: null,
    previous: null,
    results: [],
  });
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setEvents({
          next: res.data.next,
          previous: res.data.previous,
          results: res.data.results,
        });
      })
      .catch((error) => {
        setError(error.message);
        console.error(
          `The request was made and the server responded
        with a status code that falls out of the range of 2xx ` + error.message
        );
      });
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

import React, { useState, useEffect } from "react";
import { NewsContainer, NewsPageContainer, PageTitle} from "./layout/PageElements";
import Articles from "./Articles";
import axios from "axios";
import {Error} from "./layout/ErrorElements"

const AllNews = (props) => {
  const url = "https://api.spaceflightnewsapi.net/v3/articles?_limit=15";

  const [news, setNews] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setNews(res.data);
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
    <NewsPageContainer>
      <PageTitle>News</PageTitle>
      {error ? (
        <Error>
          An error occured, while fetching the astronauts information. Please
          try again later!
        </Error>
      ) : (
        <NewsContainer>
          {news.map((article) => (
            <Articles
    key={article.id}
    article={article}
    theme={props.theme}
    />
          ))}
        </NewsContainer>
      )}
    </NewsPageContainer>
  );
};

export default AllNews;

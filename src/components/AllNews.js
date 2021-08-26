import React, { useState, useEffect } from "react";
import { NewsContainer, NewsPageContainer } from "./layout/PageElements";
import Articles from "./Articles";
import axios from "axios";
import { AstronautsPageText, Error } from "./layout/AstronautElements";

const AllNews = (props) => {
  const url = "https://api.spaceflightnewsapi.net/v3/articles?_limit=15";

  const [news, setNews] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        console.log(res.data);
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
      <AstronautsPageText>News</AstronautsPageText>
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
            ></Articles>
          ))}
        </NewsContainer>
      )}
    </NewsPageContainer>
  );
};

export default AllNews;

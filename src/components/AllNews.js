import React, { useState, useEffect } from "react";
import { NewsContainer } from "./layout/PageElements";
import Articles from "./Articles";
import axios from "axios";

const AllNews = (props) => {
  const url = "https://api.spaceflightnewsapi.net/v3/articles?_limit=15";

  const [news, setNews] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        console.log(res.data);
        setNews(res.data);
      })
      .catch((error) => {
        console.error(
          `The request was made and the server responded
        with a status code that falls out of the range of 2xx ` + error.message
        );
      });
  }, [url]);

  return (
    <NewsContainer>
      {news.map((article) => (
        <Articles
          key={article.id}
          article={article}
          theme={props.theme}
        ></Articles>
      ))}
    </NewsContainer>
  );
};

export default AllNews;

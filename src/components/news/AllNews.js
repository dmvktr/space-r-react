import React, {useEffect, useState} from "react";
import {NewsContainer, NewsPageContainer, PageTitle} from "../layout/PageElements";
import Articles from "./Articles";
import {dataHandler} from "../data_handler";
import {Error} from "../layout/ErrorElements"

const AllNews = (props) => {
    // const url = "https://api.spaceflightnewsapi.net/v3/articles?_limit=15";
    const url = "http://localhost:8080/news";

    const [news, setNews] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        dataHandler._api_get(url, setNews, setError);
    }, [url]);
    return (
        <NewsPageContainer>
            <PageTitle data-testid="news-header">News</PageTitle>
            {error ? (
                <Error>
                    An error occured, while fetching the astronauts information. Please
                    try again later!
                </Error>
            ) : (
                < NewsContainer data-testid="news-container">
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

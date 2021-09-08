import React from "react";
import AllNews from "../components/AllNews";
import {render, fireEvent, cleanup, getAllByTestId} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

let getByTestId;

beforeEach(() => {
    const component = render(<AllNews/>);
    getByTestId = component.getByTestId;
})

test("header renders with correct text", () => {
    const headerElement = getByTestId("news-header");
    expect(headerElement.textContent).toBe("News");
})

test('page has news containers', () =>{
    const newsContainer = getAllByTestId('news-container');
    expect(newsContainer).toBeTruthy();
})

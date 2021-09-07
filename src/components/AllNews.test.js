import React from "react";
import AllNews from "./AllNews";
import { render } from "@testing-library/react";
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


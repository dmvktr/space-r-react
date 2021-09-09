import React from "react";
import Gallery from "../components/gallery/Gallery";
import {render} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

let getByTestId;

beforeEach(() => {
    const component = render(<Gallery/>);
    getByTestId = component.getByTestId;
})

test("header renders with correct text", () => {
    const headerElement = getByTestId("gallery-header");

    expect(headerElement.textContent).toBe("Gallery");
})


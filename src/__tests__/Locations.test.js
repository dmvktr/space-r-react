import React from "react";
import Locations from "../components/Locations";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

let getByTestId;

beforeEach(() => {
    const component = render(<Locations/>);
    getByTestId = component.getByTestId;
})

test("header renders with correct text", () => {
    const headerElement = getByTestId("locations-header");

    expect(headerElement.textContent).toBe("Locations");
})


import React from "react";
import Events from "../components/Events";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

let getByTestId;

beforeEach(() => {
    const component = render(<Events/>);
    getByTestId = component.getByTestId;
})

test("header renders with correct text", () => {
    const headerElement = getByTestId("events-header");

    expect(headerElement.textContent).toBe("Events");
})


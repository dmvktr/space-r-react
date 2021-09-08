import React from "react";
import Spacecrafts from "../components/spacecrafts/Spacecrafts";
import {render} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

let getByTestId;

beforeEach(() => {
    const component = render(<Spacecrafts/>);
    getByTestId = component.getByTestId;
})

test("header renders with correct text", () => {
    const headerElement = getByTestId("spacecraft-header");

    expect(headerElement.textContent).toBe("Spacecrafts");
})


import React from "react";
import { render } from "@testing-library/react";
import Episodes from "./Episodes";
import mockData from "./utils/mockData.js";

jest.mock("./api/fetchShow");

test("renders without errors", () => {
    render(<Episodes episodes={[]} />);
});

test("re-render properly with data", () => {
    const { rerender, getAllByTestId } = render(<Episodes episodes={[]} />);

    rerender(<Episodes episodes={mockData._embedded.episodes} />);

    const episodes = getAllByTestId(/episode/i);
    expect(episodes).toHaveLength(28);
});

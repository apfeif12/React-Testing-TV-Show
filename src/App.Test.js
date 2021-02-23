import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import { fetchShow as mockFetchShow } from './api/fetchShow';
import mockData from './utils/mockData.js'

jest.mock('./api/fetchShow');


test("render without errors", async () => {
  mockFetchShow.mockResolvedValueOnce({data: mockData});
  render(<App />);

  userEvent.click(screen.getByRole("dropdown", { name: /dropdown/i }));


  expect(await screen.findByText(/chapter one/i)).toBeInTheDocument();
});
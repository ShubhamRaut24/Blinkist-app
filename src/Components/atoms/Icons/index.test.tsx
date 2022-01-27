import React from 'react'
import { render, screen } from "@testing-library/react";
import BlankComponent from ".";

it("renders a icon", () => {
  render(<BlankComponent />);
  const ReactElement = screen.getByTestId("icon");
  expect(ReactElement).toBeInTheDocument();
});

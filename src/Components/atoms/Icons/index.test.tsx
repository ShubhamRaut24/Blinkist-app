import React from 'react'
import { render, screen } from "@testing-library/react";
import Icon from ".";

it("renders a Icon", () => {
  render(<Icon />);
  const ReactElement = screen.getByTestId("icon");
  expect(ReactElement).toBeInTheDocument();
});

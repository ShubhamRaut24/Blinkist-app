import { render, screen } from "@testing-library/react";
import Avatar from ".";

it("Unit Test - Avatar", () => {
  render(<Avatar />);
  const letter = screen.getByText(/A/i);
  expect(letter).toBeInTheDocument();
});
import { render, screen } from "@testing-library/react";
import Avatar from ".";

it("Unit Test - Avatar", () => {
  render(<Avatar />);
  const avatarElement = screen.getByText(/A/i);
  expect(avatarElement).toBeInTheDocument();
});
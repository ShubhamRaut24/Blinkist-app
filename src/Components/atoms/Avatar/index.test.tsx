import { render, screen } from "@testing-library/react";
import Avatar from ".";

it("renders the avatar", () => {
  render(<Avatar/>);
  const ReactElement = screen.getByTestId("avatar");
  expect(ReactElement).toBeInTheDocument();
});
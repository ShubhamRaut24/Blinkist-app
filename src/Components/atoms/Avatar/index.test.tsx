import { render, screen } from "@testing-library/react";
import Avatar from ".";

it("renders a avatar", () => {
  render(<Avatar/>);
  const ReactElement = screen.getByTestId("avatar");
  expect(ReactElement).toBeInTheDocument();
});
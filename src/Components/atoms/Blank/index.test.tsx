import { render, screen } from "@testing-library/react";
import BlankComponent from ".";

it("renders a blankcomponent", () => {
  render(<BlankComponent />);
  const ReactElement = screen.getByTestId("blank");
  expect(ReactElement).toBeInTheDocument();
});
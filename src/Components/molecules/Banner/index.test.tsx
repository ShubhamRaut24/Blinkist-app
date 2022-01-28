
import { render, screen } from "@testing-library/react";
import Banner from ".";


test('Banner  Headings', () => {
    render(<Banner label='button' heading='Heading' discription='Discription'/>);
    const linkElement = screen.getByTestId('heading');
    expect(linkElement.textContent).toBe('Heading');
  });
  
  test('Bannner discriptions', () => {
    render(<Banner label='button' heading='Heading' discription='Discription'/>);
    const linkElement = screen.getByTestId('discription');
    expect(linkElement.textContent).toBe('Discription');
  });
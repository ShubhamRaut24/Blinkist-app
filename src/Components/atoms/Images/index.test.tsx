
import { render, screen } from '@testing-library/react';
import Images from '.';

test('it renders Images', () => {
  render(<Images src="https://s3-alpha-sig.figma.com/img/c498/a937/9de27f8307e0dc9722c0b2db629ca877?Expires=1644192000&Signature=H-KGNai0iHEIzJl7b1RrRHewEm75Kive7H9AFGaPQah9S-RSDw9~ig9PIve4ifjdM6RuqbBi0zUILjr0-RgNIzh6J9gtrJVDFSnynjzkD6JtKBmtDREsgcTkg0vfyRm2sU~yjImayrsglsrzdDYklBzJz70zgDDBjpd4JbgfmXTjE8OEnHKnaYHzOAjTkCDKj21I2vwumghrXQOINmPhqIVlDlWZLZOJr5Eh53Q9szJtqV3x6YYjcd1~ME0quuPr1bJp0AbN~7GzAljbadud73TuaEFKeRBQqIrdJBtb27fuhGci5JMyZR4uNzGIkBW0sYEv4ItnD3P5xyaXe3LwYA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"/>);
  const imgElement = screen.getByRole('img');
  expect(imgElement).toBeInTheDocument();
});

/** @jest-environment jsdom */
import { render, screen } from "@testing-library/react";
import { Item } from "../../src/components/Item";

describe("Pruebas sobre Item", () => {
  const titleMock = "Un titulo mock";
  const urlMock = "https://unmock.zaraza.com/";

  test("Debe de hacer match con el snapshot", () => {
    const { container } = render(<Item title={titleMock} url={urlMock} />);
    expect(container).toMatchSnapshot();
  });

  test("Debe mostrar la imagen con el url y el alt indicado", () => {
    render(<Item title={titleMock} url={urlMock} />);
    const { src, alt } = screen.getByRole("img");
    expect(src).toBe(urlMock);
    expect(alt).toBe(titleMock);
  });

  test("Debe mostrar el titulo", () => {
    render(<Item title={titleMock} url={urlMock} />);
    expect(screen.getByText(titleMock)).toBeTruthy();
  });
});

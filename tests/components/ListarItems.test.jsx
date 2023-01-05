/** @jest-environment jsdom */
import { render, screen } from "@testing-library/react";
import { ListarItems } from "../../src/components";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");

describe("Pruebas en ListarItems", () => {
  const itemMock = "asdf";
  test("Debe mostrar el loading inicialmente", () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });
    render(<ListarItems items={itemMock} />);
    screen.debug();
    expect(screen.getByText("Cargando...")).toBeTruthy();
    expect(screen.getByText(itemMock)).toBeTruthy();
  });

  test("Debe mostrar los items cuando se carguen las imagenes", () => {
    const gifsMocks = [
        {
            id: 'asdf',
            title: 'test',
            url: 'https://asdf.com'
        },
        {
            id: 'asdf2',
            title: 'test2',
            url: 'https://asdf2.com'
        }
    ]
    useFetchGifs.mockReturnValue({
      images: gifsMocks,
      isLoading: false,
    });
    render(<ListarItems items={itemMock} />);
    expect(screen.getAllByRole('img').length).toBe(2);
  });
});

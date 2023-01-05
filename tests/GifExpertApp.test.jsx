import {
  fireEvent,
  render,
  screen,
  waitFor,
  renderHook,
} from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe("Pruebas sobre GifExperApp", () => {
  test("Debe matchear con el snapshot", () => {
    const { container } = render(<GifExpertApp />);
    expect(container).toMatchSnapshot();
  });

  test("Debe tener un titulo en etiqueta h1", () => {
    const titleInHeading = "Expert gif app";
    const tagType = "h1";
    render(<GifExpertApp />);
    const { tagName } = screen.getByRole("heading");
    expect(tagName.toLowerCase()).toBe(tagType);
    expect(screen.getByText(titleInHeading)).toBeTruthy();
  });

  xtest("Debe agregarse una categoria", async () => {
    const itemMock = "asdf";
    render(<GifExpertApp />);
  });
});

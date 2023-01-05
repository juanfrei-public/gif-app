import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe("Prueba de useFetchGifs", () => {
  const itemMock = "asdf";
  test("Debe validar los valores iniciales del hook", () => {
    const { result } = renderHook(() => useFetchGifs(itemMock));
    const { images, isLoading } = result.current;
    expect(images.length).toBe(0);
    expect(isLoading).toBeTruthy();
  });

  test("debe retornar un arreglo de imagenes e isLoading en false ", async () => {
    const { result } = renderHook(() => useFetchGifs(itemMock));
    await waitFor(
      () => expect(result.current.images.length).toBeGreaterThan(0)
    );
    const { images, isLoading } = result.current;
    expect(images.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();
  });
});

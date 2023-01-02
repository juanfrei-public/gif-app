
import { useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const ListarItems = ({ items }) => {

  useEffect( () => {
    getGifs(items);

  }, [ ]);


  return (
    <>
      <h3>{items}</h3>
    </>
  );
};

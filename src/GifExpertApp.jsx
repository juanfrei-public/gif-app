import { useState } from "react";
import { AddCategory, ListarItems, Title } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([]);

  const onAddCategory = (value) => {
    if (categories.includes(value)) return;

    // Formas de agregar categorias
    setCategories([value, ...categories]);
    // setCategories( cat => [...cat, value]);
  };

  return (
    <>
      <Title titulo={"Expert gif app"} />

      <AddCategory
        // onAddCategory={onAddCategory} - se envia metodo al hijo para agregar categoria (no es lo mejor en este caso)
        onNewCategory={(value) => onAddCategory(value)}
      />

      {/* Pre componente */}
      {/* <ol>
        {categories.map((category) => (
          <div key={category}>
            <h3>{category}</h3>
            <li>{category}</li>
          </div>
        ))}
      </ol> */}

      {/* Listado en componente */}
      {categories.map((category) => (
        <ListarItems key={category} items={category} />
      ))}
    </>
  );
};

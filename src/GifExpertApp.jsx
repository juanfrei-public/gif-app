import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { ListarItems } from "./components/ListarItems";
import { Title } from "./components/Title";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Bleach"]);

  const onAddCategory = (value) => {
    if (categories.includes(value)) return;

    // Formas de agregar categorias
    setCategories([...categories, value]);
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

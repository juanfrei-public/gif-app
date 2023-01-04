import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setIputValue] = useState('');

  const onInputChange = ({ target }) => {
    const value = target.value;
    setIputValue(value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.length <= 1) return;
    onNewCategory(inputValue.trim());
    setIputValue('');
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};

import { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setIputValue] = useState("");

  const onInputChange = ({ target }) => {
    const value = target.value;
    setIputValue(value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    onNewCategory(inputValue.trim());
    if (inputValue.length <= 1) return;
    setIputValue("");
  };

  return (
    <form onSubmit={onSubmit} aria-label="form">
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
};

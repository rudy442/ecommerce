import React, { useState } from "react";
import { Form } from "react-router-dom";

const CategoryForm = () => {
  const [category, setCategory] = useState("");

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Catégorie sélectionnée : ${category}`);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <label htmlFor="category-select">Sélectionner une catégorie :</label>
      <select
        id="category-select"
        name="category"
        value={category}
        onChange={handleChange}
        className="select-sm"
      >
        <option value="">--Choisissez une catégorie--</option>
        <option value="ordinateur_de_bureau">Ordinateur de bureau</option>
        <option value="ordinateur_portable">Ordinateur portable</option>
        <option value="piece_detachee">Pièce détachée</option>
      </select>
      <button type="submit">Soumettre</button>
    </Form>
  );
};

export default CategoryForm;

// function Produits() {

// }

// export default Produits;

import React, { useState } from 'react';
import AddCategory from './components/AddCategory/AddCategory';
import GifGrid from './components/GifGrid/GifGrid';

export const GifApp = () => {
  const [categories, setcategories] = useState(['naruto']);

  const addCategorieHandler = (category) => {
    setcategories((prevCat) => [category, ...categories]);
  };

  return (
    <>
      <h2>Gif App</h2>
      <AddCategory addCategory={addCategorieHandler} />
      <hr />
      <ul>
        {categories.map((category) => {
          return <GifGrid key={category} category={category} />;
        })}
      </ul>
    </>
  );
};

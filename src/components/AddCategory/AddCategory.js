import React, { useState } from 'react';
import PropType from 'prop-types';

import './AddCategory.css';

const AddCategory = ({ addCategory }) => {
  const [inputValue, setInputValue] = useState('');
  const changeHandler = (event) => {
    setInputValue(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    if (inputValue.trim().length > 2) {
      addCategory(inputValue);
      setInputValue('');
    }
  };
  return (
    <form onSubmit={submitHandler}>
      <input type="text" value={inputValue} onChange={changeHandler} />
    </form>
  );
};

AddCategory.propType = {
  addCategorie: PropType.func.isRequired,
};
export default AddCategory;

import React, {useState} from 'react';
import PropTypes  from 'prop-types';

const AddCategory = ({setCategories})=>{

  const [inputValue, setInputValue] = useState('');

  const handleOnChange = (e)=>{
    setInputValue(e.target.value);
  }

  const handleOnSubmit = (e)=>{
    e.preventDefault();
    if(inputValue.trim().length > 0){
      setCategories(category => [inputValue, ...category]);
      setInputValue('');
    }
  }

  return(
    <form onSubmit={handleOnSubmit}>
      <input 
        type="text"
        value={inputValue}
        onChange={handleOnChange}
      />
      <p >{inputValue}</p>
    </form>
  );
}
AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
}
export default AddCategory;

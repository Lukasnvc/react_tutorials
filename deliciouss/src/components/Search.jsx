import { FormStyled } from '../pages/styledComponents'; 
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const Search = () => {
  const [input, setInput] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
  }
  return (
    <FormStyled onSubmit={submitHandler}>
      <FaSearch/>
      <input type="text" value={input} onChange={(e)=> setInput(e.target.value) } />
    </FormStyled>
  );
}

export default Search;

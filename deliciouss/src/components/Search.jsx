import { FormStyled } from '../pages/styledComponents'; 
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const navigate = useNavigate()
  const [input, setInput] = useState('')

  const submitHandler = (e) => {
    navigate('/searched/'+input)
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

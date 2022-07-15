import React, { useState, useContext } from 'react';
import myContext from '../context/myContext';

import '../styles/styles.css';

const INITIAL_STATE = { name: '', height: 0, weight: 0 };

const Form = () => {
  const { handleInput } = useContext(myContext);
  const [userData, setUserData] = useState(INITIAL_STATE);
 
  const handleChange = ({ target: { name, value } }) => {
    setUserData(prevState => ({ ...prevState, [name]: value }));
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const { height, weight } = userData;
    const multiply = parseFloat(height) * parseFloat(height);
    const imcCalc = parseFloat(weight)/multiply;

    handleInput({ ...userData, imc: imcCalc});
    setUserData(INITIAL_STATE);
  }

  const { name, height, weight } = userData;

  return (
    <form onSubmit={ handleSubmit } className='form'>
      <input
        name="name"
        type="text"
        value={ name }
        onChange={ (e) => handleChange(e) }
        placeholder='NOME'
      />
      <input
        name="height"
        type="decimal"
        value={ height }
        onChange={ (e) => handleChange(e) }
        placeholder='ALTURA'
      />
      <input
        name="weight"
        type="decimal"
        value={ weight }
        onChange={ (e) => handleChange(e) }
        placeholder='PESO'
      />
      <button type="submit">
        Submit
      </button>
    </form>
  );

}

export default Form;


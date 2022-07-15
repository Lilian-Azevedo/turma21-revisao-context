import React, { useContext } from 'react';
import myContext from '../context/myContext';
import '../styles/styles.css';

const User = () => {
  const { user } = useContext(myContext);
  const {  name, height, weight, imc } = user;
  const imcOneDec = Number(imc).toFixed(1);

  return (
    <section className='section'>
      <h3>Informações:</h3>
      <p>Nome: <span>{ name }</span></p>
      <p>Altura: <span>{ height }</span></p>
      <p>Peso: <span>{ weight }</span></p>
      <p>Olá { name }, seu IMC é { imcOneDec }</p>
    </section>
  );
}

export default User;

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import myContext from './myContext';

function Provider({ children }) {
  const [user, setUser] = useState({ name: '', height: 0, weight: 0, imc: 0}); // estado global

  const handleInput = (info) => {
    setUser(info);
  }

  const contextValue = { user, handleInput };

  return (
    <myContext.Provider value={ contextValue }>
      {children}
    </myContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.elementType.isRequired,
};

export default Provider;

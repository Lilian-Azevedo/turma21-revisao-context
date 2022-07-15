import React from 'react';
import { Form, User } from './components';
import "./styles/styles.css";

const App = () => {
  return (
    <div className="app">
      <h1>Calcula IMC</h1>
      <Form />
      <User />
    </div>
  );
}

export default App;

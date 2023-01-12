import React, { useState } from 'react';

const FormControlled01 = () => {
  const [state, setState] = useState('');

  const handleChange = (event) => {
    setState(event.target.value);
    console.log(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('state', state);
  };

  return (
    <form onSubmit={handleSubmit}>
      <legend>Nome</legend>
      <input type="text" value={state} onChange={handleChange} aria-label="campo para escrever o texto" />
      <input type="submit" aria-label="botão enviar formulário" />
    </form>
  );
};

export default FormControlled01;

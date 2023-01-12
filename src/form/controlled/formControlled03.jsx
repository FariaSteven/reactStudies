import React, { useState } from 'react';

const FormControlled03 = () => {
  const [state, setState] = useState({ 
    name: '', 
    surname: '',
  });

  const handleChange = (event) => {
    const { value, name } = event.target;
    setState({
      ...state, 
      [name]: value 
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('state', state);
  };

  return (
    <form>

      <label htmlFor="name">Nome</label>
      <input type="text" id="name" name="name" value={state.name} onChange={handleChange} aria-label="campo para escrever o texto" />

      <label htmlFor="surname">Sobrenome</label>
      <input type="text" id="surname" name="surname" value={state.surname} onChange={handleChange} aria-label="campo para escrever o texto" />

      <input type="submit" onClick={handleSubmit} aria-label="botão enviar formulário" />

    </form>
  );
};

export default FormControlled03;

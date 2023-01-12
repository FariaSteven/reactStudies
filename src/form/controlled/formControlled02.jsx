import React, { useState } from 'react';

const FormControlled02 = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');

  const handleChangeName = (event) => setName(event.target.value);
  const handleChangeSurname = (event) => setSurname(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('name', name);
    console.log('surname', surname);
  };

  return (
    <form>

      <label htmlFor="name">Nome</label>
      <input type="text" id="name" name="name" value={name} onChange={handleChangeName} aria-label="campo para escrever o texto" />

      <label htmlFor="surname">Sobrenome</label>
      <input type="text" id="surname" name="surname" value={surname} onChange={handleChangeSurname} aria-label="campo para escrever o texto" />

      <input type="submit" onClick={handleSubmit} aria-label="botão enviar formulário" />

    </form>
  );
};

export default FormControlled02;

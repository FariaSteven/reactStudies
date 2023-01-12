import React, { useState } from 'react';

export const FormControlled04 = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('isChecked', isChecked);
  };

  return (
    <form>

      <label htmlFor="mexican-food">Mexicana</label>
      <input type="checkbox" id="mexican-food" name="mexican-food" value={'Nome'} onChange={handleChange} checked={isChecked} aria-label="seleção de comida" />

      <input type="submit" onClick={handleSubmit} aria-label="botão enviar formulário" />

    </form>
  );
};

export default FormControlled04;

import React, { useState } from 'react';

const objectExample = { 
  mexicanFood: false,
  japaneseFood: false,
}

export const FormControlled05 = () => {
  const [state, setState] = useState(objectExample);

  const handleChange = (event) => {
    const { checked, name, labels } = event.target;

    
    setState({
      ...state, 
      [name]: checked 
    });
    
    console.log('checked', checked)
    console.log('name', name)
    console.log('labels.textContent', labels[0].textContent);
  };

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('state', state);
  };

  // const array = new Array(Object.keys(objectExample).length).fill(false)
  // console.log('Object.keys(objectExample).length', Object.keys(objectExample).length)
  // console.log('array', array)

  return (
    <form>

      <label htmlFor="mexican-food">Mexicana</label>
      <input type="checkbox" id="mexican-food" name="mexicanFood" value={state.mexicanFood} onChange={handleChange} aria-label="seleção de comida" />
      
      <br />

      <label htmlFor="japanese-food">Japonesa</label>
      <input type="checkbox" id="japanese-food" name="japaneseFood" value={state.japaneseFood} onChange={handleChange} aria-label="seleção de comida" />

      <br />
      <input type="submit" onClick={handleSubmit} aria-label="botão enviar formulário" />

    </form>
  );
};

export default FormControlled05;

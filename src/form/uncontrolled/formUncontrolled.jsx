import React, { useRef } from 'react';

const FormUncontrolled = () => {
  const inputRef = useRef(null);

  const handleSubmit = () => {
      alert(inputRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <legend>Nome</legend>
      <input type="text" ref={inputRef} />
      {/* <input type="submit">Enviar</input> */}
    </form>
  );
};

export default FormUncontrolled;

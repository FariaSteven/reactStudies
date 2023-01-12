import React, { useRef } from 'react';

const UseRef01 = () => {
    const inputRef = useRef(null);

    const handleSubmit = (event) => {
      event.preventDefault();
      alert(inputRef.current.value);
    };

  return (
    <form>
      <legend>
        Nome 
        <input type="text" ref={inputRef} />
        <input type="submit" value="submit" onClick={handleSubmit} />
      </legend>
    </form>
  );
};

export default UseRef01;

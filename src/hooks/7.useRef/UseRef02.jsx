import React, { useRef } from "react";

const UseRef02 = () => {
  const inputRef = useRef(null);
  
  React.useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputRef.current.value);
  };

  return (
    <form>
      <input type="text" placeholder="Enter Name" name="name" ref={inputRef} />
      <input type="submit" value="submit" onClick={handleSubmit} />
    </form>
  );
};

export default UseRef02;
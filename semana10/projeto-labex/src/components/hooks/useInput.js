import { useState } from "react";

const useInput = (initialValue) => {
  const [input, setInput] = useState(initialValue);

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  return [input, handleInputChange];
};

export default useInput;

import { useState } from "react";

function useInput(defaultValue, validatorFunction) {
  const [enteredValue, setEnteredValue] = useState(defaultValue);
  const [isTouched, setIsTouched] = useState(false);

  const isEnteredValueValid = validatorFunction(enteredValue);
  const inputHasError = isTouched && !isEnteredValueValid;

  const valueChangeHandler = (event) => {
    if (Array.isArray(defaultValue)) {
      console.log(event.target.value,"hi")
      setEnteredValue((prevState) => {
        const newState = [...prevState, event.target.value];
        return newState;
      });
    } else {
      setEnteredValue(event.target.value);
    }
  };

  const inputBlurHandler = (event) => {
    setIsTouched(true);
  };

  const resetInputHandler = () => {
    setEnteredValue("");
  };

  return {
    enteredValue,
    inputHasError,
    valueChangeHandler,
    inputBlurHandler,
    resetInputHandler,
  };
}

export default useInput;

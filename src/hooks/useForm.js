/* eslint-disable linebreak-style */
import { useState } from 'react';

function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value,
    });
  }

  function handlerFunction(event) {
    setValue(event.target.getAttribute('name'), event.target.value);
  }

  function clearForm() {
    setValues(initialValues);
  }

  return {
    values,
    handlerFunction,
    clearForm,
  };
}

export default useForm;

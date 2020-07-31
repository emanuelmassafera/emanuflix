/* eslint-disable linebreak-style */
/* eslint-disable no-trailing-spaces */
/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/no-array-index-key */
/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const initialValues = {
    name: '',
    description: '',
    color: '#7A151F',
  };

  const [categorias, setCategorias] = useState([]);
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

  useEffect(() => {
    if (window.location.href.includes('localhost')) {
      const URL = 'http://localhost:8080/categorias';
      fetch(URL)
        .then(async (respostaDoServer) => {
          if (respostaDoServer.ok) {
            const resposta = await respostaDoServer.json();
            setCategorias(resposta);
            return;
          }
          throw new Error('Não foi possível pegar os dados');
        });
    }
  }, []); 

  return (
    <PageDefault>
      <h1>
        Cadastro de categoria:
        {values.name}
      </h1>

      <form onSubmit={function handleSubmit(event) {
        event.preventDefault();
        setCategorias([
          ...categorias,
          values,
        ]);

        setValues(initialValues);
      }}
      >

        <FormField
          label="Nome da categoria "
          value={values.name}
          onChange={handlerFunction}
          type="text"
          name="name"
        />

        <FormField
          label="Descrição "
          value={values.description}
          onChange={handlerFunction}
          type="textarea"
          name="description"
        />

        <FormField
          label="Cor "
          value={values.color}
          onChange={handlerFunction}
          type="color"
          name="color"
        />

        <Button>
          Cadastrar
        </Button>

      </form>

      <ul>
        {categorias.map((categoria, index) => (
          <li key={`${categoria}${index}`}>
            {categoria.name}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;

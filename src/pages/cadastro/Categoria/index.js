import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';

function CadastroCategoria () {

  const initialValues = {
    name: '',
    description: '',
    color: '#7A151F',
  } 

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

    return (
      <PageDefault>
          <h1>Cadastro de categoria: {values.name}</h1>

          <form onSubmit={function handleSubmit(event) {
            event.preventDefault();
            setCategorias([
              ...categorias,
              values
            ]);

            setValues(initialValues);
          }}>

            <FormField 
              label="Nome da categoria: " 
              value={values.name} 
              onChange={handlerFunction}
              type="text" 
              name="name"
            />
              
            <div>
              <label>
                Descrição
                <textarea type="text" value={values.description} name="description" 
                  onChange={handlerFunction}
                />
              </label>
            </div>


            <FormField 
              label="Cor: " 
              value={values.color} 
              onChange={handlerFunction} 
              type="color" 
              name="color"
            />

            <button>
              Cadastrar
            </button>

          </form>

          <ul>
            {categorias.map((categoria, index) => {
              return (
                <li key={`${categoria}${index}`}>
                  {categoria.name}
                </li>
              );
            })}
          </ul>


          <Link to="/">
            Ir para home
          </Link>
      </PageDefault>
    );
} 

export default CadastroCategoria;
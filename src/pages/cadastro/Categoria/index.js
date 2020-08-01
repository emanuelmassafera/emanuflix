/* eslint-disable linebreak-style */
/* eslint-disable no-trailing-spaces */
/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/no-array-index-key */
/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';
import categoriesRepository from '../../../repositories/categories';

const Container = styled.main`
    width: 1000px;
    margin: 0px auto;
`;

const NavButtons = styled.main`
    display: flex;
    justify-content: space-between;
`;

function CadastroCategoria() {
  const history = useHistory();
  const initialValues = {
    name: '',
    description: '',
    color: '#7A151F',
  };

  const { handlerFunction, values } = useForm(initialValues);

  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    categoriesRepository
      .getAll()
      .then((categoriasFromServer) => {
        setCategorias(categoriasFromServer);
      });
  }, []);

  return (
    <PageDefault>
      <Container>
        <h1>
          Cadastro de categoria:
          {values.name}
        </h1>

        <form onSubmit={(event) => {
          event.preventDefault();

          categoriesRepository.create({
            title: values.name,
            color: values.color,
            link_extra: values.description,
          })
            .then(() => {
              // eslint-disable-next-line no-restricted-globals
              history.push('/');
            });
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
            label="Descrição"
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

          <NavButtons>
            <Button>
              Cadastrar
            </Button>

            <Link to="/cadastro/categoria">
              Ir para home
            </Link>
          </NavButtons>

        </form>

        <ul>
          {categorias.map((categoria) => (
            <li key={`${categoria.id}`}>
              {categoria.title}
            </li>
          ))}
        </ul>

      </Container>

    </PageDefault>
  );
}

export default CadastroCategoria;

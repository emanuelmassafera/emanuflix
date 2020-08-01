/* eslint-disable linebreak-style */
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos';
import categoriesRepository from '../../../repositories/categories';

const Container = styled.main`
    width: 1000px;
    margin: 0px auto;
`;

const NavButtons = styled.main`
    display: flex;
    justify-content: space-between;
`;

function CadastroVideo() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const categoryTitles = categorias.map(({ title }) => title);
  const { handlerFunction, values } = useForm({
    title: '',
    url: '',
    categoria: '',
  });

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

        <h1>Cadastro de vídeo</h1>

        <form onSubmit={(event) => {
          event.preventDefault();

          // eslint-disable-next-line max-len
          const categoriaEscolhida = categorias.find((categoria) => categoria.title === values.categoria);

          videosRepository.create({
            title: values.title,
            url: values.url,
            categoriaId: categoriaEscolhida.id,
          })
            .then(() => {
              history.push('/');
            });
        }}
        >
          <FormField
            label="Título do vídeo"
            value={values.title}
            onChange={handlerFunction}
            type="text"
            name="title"
          />

          <FormField
            label="URL"
            value={values.url}
            onChange={handlerFunction}
            type="text"
            name="url"
          />

          <FormField
            label="Categoria"
            value={values.categoria}
            onChange={handlerFunction}
            type="text"
            name="categoria"
            suggestions={categoryTitles}
          />

          <NavButtons>
            <Button type="submit">
              Cadastrar
            </Button>

            <Link to="/cadastro/categoria">
              Cadastrar Categoria
            </Link>
          </NavButtons>

        </form>
      </Container>
    </PageDefault>
  );
}

export default CadastroVideo;

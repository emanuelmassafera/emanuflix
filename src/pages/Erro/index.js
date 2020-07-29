import React from 'react';
import PageDefault from '../../components/PageDefault';
import { Link } from 'react-router-dom';

function Erro() {
  return (
    <PageDefault>

      <div>
        <h1>Error 404 - Page not found</h1>

        <Link to="/">
          Ir para home
        </Link>
      </div>



    </PageDefault>
  );
}

export default Erro;
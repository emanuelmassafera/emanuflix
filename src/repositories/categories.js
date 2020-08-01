/* eslint-disable linebreak-style */
import config from '../config';

const URL_CATEGORIES = `${config.URL}/categorias`;

function getAll() {
  return fetch(`${URL_CATEGORIES}`)
    .then(async (respostaDoServer) => {
      if (respostaDoServer.ok) {
        const resposta = await respostaDoServer.json();
        return resposta;
      }

      throw new Error('Não foi possível pegar os dados!');
    });
}

function getAllWithVideos() {
  return fetch(`${URL_CATEGORIES}?_embed=videos`)
    .then(async (respostaDoServer) => {
      if (respostaDoServer.ok) {
        const resposta = await respostaDoServer.json();
        return resposta;
      }

      throw new Error('Não foi possível pegar os dados!');
    });
}

function create(objetoDoVideo) {
  return fetch(`${URL_CATEGORIES}`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(objetoDoVideo),
  })
    .then(async (respostaDoServer) => {
      if (respostaDoServer.ok) {
        const resposta = await respostaDoServer.json();
        return resposta;
      }

      throw new Error('Não foi possível cadastrar os dados!');
    });
}

export default {
  getAllWithVideos,
  getAll,
  create,
};

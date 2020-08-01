/* eslint-disable linebreak-style */
import config from '../config';

const URL_CATEGORIES = `${config.URL}/categories?_embed=videos`;

function getAllWithVideos() {
  return fetch(URL_CATEGORIES)
    .then(async (respostaDoServer) => {
      const resposta = await respostaDoServer.json();

      return resposta;
    });
}

export default {
  getAllWithVideos,
};

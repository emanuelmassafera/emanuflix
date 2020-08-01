import React, { useEffect, useState } from 'react';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import PageDefault from '../../components/PageDefault';
import categoriesRepository from '../../repositories/categories';

function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([]);

  useEffect(() => {
    categoriesRepository
      .getAllWithVideos()
      .then((categoriasComVideos) => {
        setDadosIniciais(categoriasComVideos);
      });
  }, []);

  return (
    <PageDefault paddingAll={0}>

      {dadosIniciais.map((categoria, indice) => {
        if (indice === 0) {
          return (
            <div key={categoria.id}>
              <BannerMain
                videoTitle={dadosIniciais[0].videos[0].title}
                url={dadosIniciais[0].videos[0].url}
                videoDescription="Open Source é um mundo SENSACIONAL e a quantidade de repositórios que você encontra no Github é infinita. E nesse vídeo a gente vai ver uma lista chamada '10 Extraordinary GitHub Repos for All Developers'"
              />
              <Carousel
                ignoreFirstVideo
                category={dadosIniciais[0]}
              />
            </div>
          );
        }

        return (
          <Carousel
            key={categoria.id}
            category={categoria}
          />
        );
      })}

    </PageDefault>
  );
}

export default Home;

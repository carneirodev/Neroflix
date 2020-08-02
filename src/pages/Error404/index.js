import React from 'react';
import PageDefault from '../../components/PageDefault';
import BannerMain from '../../components/BannerMain';

function Home() {
  return (
    <PageDefault>
      <BannerMain
        videoTitle="ERROR 404"
        url="https://www.youtube.com/watch?v=e0mTuk4Zg7M"
        videoDescription="Pagina nao encontrada!"
      />
    </PageDefault>
  );
}

export default Home;

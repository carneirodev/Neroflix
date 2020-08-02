import React from 'react';
import './App.css';
import Menu from '../../components/Menu';
import BannerMain from '../../components/BannerMain';
import Footer from '../../components/Footer';
import Carrousel from '../../components/Carousel';
import dadosIniciais from '../../data/dados_iniciais.json';

function Home() {
  return (
    <>
      <Menu />
      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription=""
      />
      <Carrousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />
      <Carrousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[1]}
      />
      <Carrousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[2]}
      />
      <Carrousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[3]}
      />
      <Footer />
    </>
  );
}

export default Home;
import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <a href="http://www.carneirodev.com/">
        <img width="100" height="50" src="http://carneirodev.com/CarneiroBrancoFundo.png" alt="Logo Alura" />
      </a>
      <p>
        Criado durante a
        {' '}
        <br />
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>

      </p>
      <p>
        Aprimorado por
        {' '}
        <br />
        <a href="http://www.carneirodev.com/">
          CarneiroDEV
        </a>

      </p>
    </FooterBase>
  );
}

export default Footer;

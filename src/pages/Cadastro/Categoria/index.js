/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import Button from '../../../components/Button';
import FormField from '../../../components/FormField';
import { Div, Category, ContentAreaContainer } from './style.js';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    });
  }

  function handleChange(infosDoEvento) {
    setValue(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value,
    );
  }

  // ============

  return (
    <PageDefault>
      <ContentAreaContainer>

        <Category>

          Cadastro de Categoria:
          {' '}
          {values.nome}

        </Category>

        <form>

          <FormField
            label="Nome da Categoria"
            type="text"
            name="nome"
            value={values.nome}
            onChange={handleChange}
          />

          <FormField
            label="Descrição"
            type="textarea"
            name="descricao"
            value={values.descricao}
            onChange={handleChange}
          />

          <FormField
            label="Cor"
            type="color"
            name="cor"
            value={values.cor}
            onChange={handleChange}
          />
          <Div>
            <Button>
              Cadastrar
            </Button>
          </Div>
        </form>

        <Link to="/">
          Ir para home
        </Link>
      </ContentAreaContainer>
    </PageDefault>
  );
}

export default CadastroCategoria;

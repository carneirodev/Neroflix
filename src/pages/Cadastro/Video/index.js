/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import { Div, Category, ContentAreaContainer } from './Style';

function CadastroVideo() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };
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
          Cadastro de Video:
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
            type="????"
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
              <Link to="/">
                Enviar formulário
              </Link>
            </Button>
          </Div>
        </form>

        <Div>
          <Button>
            <Link to="/">
              Ir para home
            </Link>
          </Button>

          <Button>
            <Link to="/cadastro/categoria">
              Cadastrar Categoria
            </Link>
          </Button>
        </Div>
      </ContentAreaContainer>

    </PageDefault>
  );
}

export default CadastroVideo;

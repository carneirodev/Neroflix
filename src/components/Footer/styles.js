/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const FooterBase = styled.footer`
  background: var(--primary);
  border-top: 2px solid var(--primary);
  padding-left: 20%;
  padding-right: 20%;
  padding-top: 32px;
  padding-bottom: 32px;
  max-height: 50px;
  color: var(--white);
  display: flex;
    justify-content: space-between;
    align-items: center;
  text-align: center;

  @media (max-width: 1000px) {
    margin-bottom: 50px;
    max-height: 350px;
    display: block;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;

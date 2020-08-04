import styled from 'styled-components';

const Button = styled.button`

    color: var(--primary);
    background-color:var(--yellow);
    border: 1px solid var(--darkyellow);
    box-sizing: border-box;
    cursor: pointer;
    padding: 16px 24px;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    outline: none;
    border-radius: 5px;
    text-decoration: none;
    display: inline-block;
    transition: opacity .9s, font-size .5s;

  &:hover,
  &:focus {
    opacity: .5;
    font-size:18px;
  }
`;

export default Button;

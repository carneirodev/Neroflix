/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const VideoCardContainer = styled.a`
  border: 2px solid;
  border-radius: 4px;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  flex: 0 0 298px;
  width: 350px;
  height: 197px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 16px;

  transition: opacity .3s, width .5s, height .5s ;
  &:hover,
  &:focus {

    opacity: .5;
    width: 400px;
    height: 197px;
  }

  &:not(:first-child) {
    margin-left: 20px;
  }
  @media (max-width:700px){
    width: calc(100vw - 33px);
  height: 197px;
  }
`;

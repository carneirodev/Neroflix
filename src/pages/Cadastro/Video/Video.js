import styled from 'styled-components';

export const ContentAreaContainer = styled.section`
  margin-left: 5%;
  margin-right: 5%;
  width:100%;
  @media (max-width: 800px) {
    flex-direction: column;
    padding: 3%;
  }
`;

export const Category = styled.h1`
display: flex;
justify-content: center;
align-items: flex-end;
text-align: center;
display: inline-block;
padding: 25px;
line-height: 1;
border-radius: 4px;

@media (max-width: 800px) {
  font-size: 18px;
  padding: 10px;
}
`;
export const Div = styled.section`
    padding-left: 5%;
    padding-right: 5%;
    width:100%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    Button{
        margin-top:10px;
    }
  @media (max-width: 800px) {
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;

  }
`;

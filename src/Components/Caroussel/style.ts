import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px 50px;

  color: white;
`;

export const ContentCaroussel = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 37%;

  flex-wrap: wrap;

  margin: 0 100px;
`;

export const ItemWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & > img {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 150px;
    margin: 50px 0;
    background-color: transparent;
    padding: 3px;
  }

  &:nth-child(2),
  &:nth-child(5) {
    margin-top: -120px;
  }
`;

export const Type = styled.p`
  font-weight: 900;
  font-style: italic;
  font-size: 35px;

  color: #fcfc62;
`;

export const Button = styled.button`
  border: none;
  background: transparent;
  width: 150px;
  height: 100px;
  cursor: pointer;

  & > svg {
    width: 50px;
    height: 50px;
    color: white;

    &:hover {
      color: #fcfc62;
    }
  }
`;

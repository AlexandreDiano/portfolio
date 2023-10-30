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

  @media (max-width: 414px) {
    width: 100%;
  }

  @media (max-width: 2560px) {
    width: 25%;
  }

  @media (max-width: 1920px) {
    width: 37%;
  }

  @media (max-width: 1536px) {
    width: 45%;
  }

  @media (max-width: 1440px) {
    width: 50%;
  }
  @media (max-width: 1280px) {
    width: 48%;
  }

  @media (max-width: 810px) {
    flex-direction: column;
    margin: 0;
  }
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

  @media (max-width: 1280px) {
    & > img {
      width: 120px;
      height: 120px;
    }
  }
  @media (max-width: 810px) {
    &:nth-child(2),
    &:nth-child(5) {
      margin-top: 0;
    }

    & > img {
      margin: 10px 0;
    }
  }

  @media (max-width: 414px) {
    & > img {
      width: 80px;
      height: 80px;
    }
  }

  @media (max-width: 390px) {
    & > img {
      width: 70px;
      height: 70px;
    }
  }

  @media (max-width: 375px) {
    & > img {
      width: 60px;
      height: 60px;
    }
  }

  @media (max-width: 360px) {
    & > img {
      width: 50px;
      height: 50px;
    }
  }
`;

export const Type = styled.p`
  font-weight: 900;
  font-style: italic;
  font-size: 35px;

  color: #fcfc62;

  @media (max-width: 810px) {
    display: none;
  }
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

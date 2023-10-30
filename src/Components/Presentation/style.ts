import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: calc(100vh - 20px - 90px);

  padding: 20px 50px;
  color: white;

  @media (max-width: 414px) {
    padding: 10px 20px;
  }
  @media (max-width: 360px) {
    margin-top: 110px;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 810px) {
    flex-direction: column;
    justify-content: start;
  }
`;

export const Text = styled.p`
  width: 50%;
  text-align: center;
  font-style: italic;

  @media (max-width: 810px) {
    width: 100%;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  width: 576px;
  height: 576px;
  background: white;

  @media (max-width: 1366px) {
    width: 476px;
    height: 476px;
  }

  @media (max-width: 810px) {
    width: 376px;
    height: 376px;

    margin: 50px 0;
  }

  @media (max-width: 414px) {
    display: none;
  }
`;

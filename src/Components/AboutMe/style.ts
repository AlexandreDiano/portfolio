import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: calc(100vh - 20px - 70px);

  padding: 20px 50px;
  color: white;

  overflow: hidden;

  @media (max-width: 1280px) {
    justify-content: start;
  }

  @media (max-width: 414px) {
    height: 100%;
    padding: 20px;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Text = styled.p`
  width: 100%;
  text-align: center;
  font-style: italic;

  font-size: 30px;

  & > b {
    font-size: 35px;
  }
`;

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
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Text = styled.p`
  width: 50%;
  text-align: center;
  font-style: italic;
`;

export const ImageContainer = styled.div`
  display: flex;
  width: 576px;
  height: 576px;
  background: white;
`;

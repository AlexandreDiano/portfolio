import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: calc(100vh - 20px - 70px);

  padding: 20px 50px;
  color: white;
`;

export const ProjectWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 77%;

  &:nth-child(even) {
    display: flex;
    flex-direction: row-reverse;
  }
`;

export const ProjectImage = styled.img`
  width: 500px;
  height: 250px;
  background: white;

  border-radius: 10px;
  margin: 30px 40px;
`;

export const ProjectDescription = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & > span {
    font-size: 25px;
    font-style: italic;
    font-weight: 900;
    text-align: center;
    max-width: 400px;
    flex-wrap: wrap;
  }
`;

import { Container, Content, ImageContainer, Text } from './style';
import data from '@/data/index.json';

export const Presentation = () => {
  return (
    <Container>
      <Content>
        <Text dangerouslySetInnerHTML={{ __html: data.presentation }} />
        <ImageContainer />
      </Content>
    </Container>
  );
};

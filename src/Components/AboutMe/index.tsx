import { Container, Content, Text } from './style';
import data from '@/data/index.json';

export const AboutMe = () => {
  return (
    <Container>
      <Content>
        <Text dangerouslySetInnerHTML={{ __html: data.aboutMe }} />
      </Content>
    </Container>
  );
};

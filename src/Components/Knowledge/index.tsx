import { Container } from './style';
import { Caroussel } from '@/Components/Caroussel';
import data from '../../data/index.json';

export const Knowledge = () => {
  return (
    <Container>
      <Caroussel knowledge={data.knowledge} />
    </Container>
  );
};

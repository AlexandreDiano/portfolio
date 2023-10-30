import { Container } from './style';
import { Presentation } from '@/Components/Presentation';
import { SectorTitle } from '@/Components/Header';
import { AboutMe } from '@/Components/AboutMe';
import { Knowledge } from '@/Components/Knowledge';
import { Projects } from '@/Components/Projects';

export const Home = () => {
  return (
    <Container>
      <SectorTitle>Alexandre Diano</SectorTitle>
      <Presentation />

      <SectorTitle>About Me</SectorTitle>
      <AboutMe />

      <SectorTitle>Knowledge</SectorTitle>
      <Knowledge />

      <SectorTitle>Projects</SectorTitle>
      <Projects />
    </Container>
  );
};

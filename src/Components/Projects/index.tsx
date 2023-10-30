import {
  Container,
  ProjectDescription,
  ProjectImage,
  ProjectWrapper,
} from './style';
import data from '@/data/index.json';

export const Projects = () => {
  return (
    <Container>
      {data.projects.map(item => (
        <ProjectWrapper key={item.title}>
          <ProjectImage src={item.url} alt={item.title} />
          <ProjectDescription>
            <span>{item.title}</span>
            <span>{item.description}</span>
            <span>{item.techs}</span>
          </ProjectDescription>
        </ProjectWrapper>
      ))}
    </Container>
  );
};

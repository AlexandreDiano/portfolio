import {
  Button,
  Container,
  ContentCaroussel,
  ItemWrapper,
  Type,
} from './style';
import { BsArrowBarLeft, BsArrowBarRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { useState } from 'react';

interface IKnowledgeProps {
  title: string;
  url: string;
}

interface IProps {
  knowledge: IKnowledgeProps[];
}

export const Caroussel = ({ knowledge }: IProps) => {
  const chunkSize = 6;
  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    if (startIndex + chunkSize < knowledge.length) {
      setStartIndex(startIndex + chunkSize);
    }
  };

  const handlePrev = () => {
    if (startIndex - chunkSize >= 0) {
      setStartIndex(startIndex - chunkSize);
    }
  };

  const visibleTechs = knowledge.slice(startIndex, startIndex + chunkSize);

  console.log(startIndex);

  return (
    <Container>
      <motion.div
        animate={{ x: [0, -70, 0] }}
        transition={{
          ease: 'easeInOut',
          duration: 4,
          repeat: Infinity,
        }}
      >
        <Button onClick={handlePrev}>
          <BsArrowBarLeft />
        </Button>
      </motion.div>
      <ContentCaroussel>
        {visibleTechs.map((item, i) => (
          <ItemWrapper key={item.title}>
            {i === 4 ? (
              startIndex === 30 ? (
                <Type>Design</Type>
              ) : (
                <Type>Programming</Type>
              )
            ) : (
              ''
            )}
            <img src={item.url} alt={item.title} />
          </ItemWrapper>
        ))}
      </ContentCaroussel>
      <motion.div
        animate={{ x: [0, 70, 0] }}
        transition={{
          ease: 'easeInOut',
          duration: 4,
          repeat: Infinity,
        }}
      >
        <Button onClick={handleNext}>
          <BsArrowBarRight />
        </Button>
      </motion.div>
    </Container>
  );
};

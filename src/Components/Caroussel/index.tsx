import {
  Button,
  Container,
  ContentCaroussel,
  ItemWrapper,
  Type,
} from './style';
import { BsArrowBarLeft, BsArrowBarRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface IKnowledgeProps {
  title: string;
  url: string;
}

interface IProps {
  knowledge: IKnowledgeProps[];
}

export const Caroussel = ({ knowledge }: IProps) => {
  const [width, setWidth] = useState<number>(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 414;

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

  const attributes = !isMobile
    ? {
        animate: { x: [0, -70, 0] },
        transition: {
          ease: 'easeInOut',
          duration: 4,
          repeat: Infinity,
        },
      }
    : '';

  return (
    <Container>
      <motion.div {...attributes}>
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
      <motion.div {...attributes}>
        <Button onClick={handleNext}>
          <BsArrowBarRight />
        </Button>
      </motion.div>
    </Container>
  );
};

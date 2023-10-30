import { Header } from './style';
import type { ReactNode } from 'react';

interface IProps {
  children: ReactNode;
}

export const SectorTitle = ({ children }: IProps) => {
  return <Header>{children}</Header>;
};

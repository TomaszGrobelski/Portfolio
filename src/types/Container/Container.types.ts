import { RefObject } from 'react';

export interface BgWrapperProps {
  darkMood: boolean;
  children: React.ReactNode;
}

export interface ContainerProps {
  children: React.ReactNode;
}

export interface ProjectsContainerProps {
  project1Ref: RefObject<HTMLDivElement>;
  project2Ref: RefObject<HTMLDivElement>;
  project3Ref: RefObject<HTMLDivElement>;
}

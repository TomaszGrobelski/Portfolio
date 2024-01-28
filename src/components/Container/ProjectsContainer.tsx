import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

import '../../styles/Container/projectsContainer.scss';
import Project1 from '../Projects/Project1';
import Project2 from '../Projects/Project2';
import { RefObject } from 'react';
interface ProjectsContainerProps {
  project1Ref: RefObject<HTMLDivElement>;
  project2Ref: RefObject<HTMLDivElement>;
}

const ProjectsContainer: React.FC<ProjectsContainerProps> = ({project1Ref, project2Ref}) => {
  const targetRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start'],
  });

  const x = useTransform(scrollYProgress, [0, 1], ['0', '-100vw']);
  
  return (
    <motion.div className='scroll-container' ref={targetRef}>
      <Project1 x={x} ref={project1Ref} />
      <Project2 x={x} ref={project2Ref} />
    </motion.div>
  );
};

export default ProjectsContainer;

import { motion } from 'framer-motion';

import '../../styles/Container/projectsContainer.scss';
import { ProjectsContainerProps } from '../../types/Container/Container.types';
import Project1 from '../Projects/Project1';
import Project2 from '../Projects/Project2';

const ProjectsContainer: React.FC<ProjectsContainerProps> = ({ project1Ref, project2Ref }) => {
  return (
    <motion.div className='scroll-container'>
      <Project1 ref={project1Ref} />
      <Project2 ref={project2Ref} />
    </motion.div>
  );
};

export default ProjectsContainer;

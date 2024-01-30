import { motion } from 'framer-motion';

import '../../styles/Projects/projectImageWithTech.scss';
import { ProjectImageWithTechProps } from '../../types/Projects/projects.types';

const ProjectImageWithTech = ({ image, alt, year, tech }: ProjectImageWithTechProps) => {
  return (
    <div className='project-image-with-tech'>
      <motion.div
        className='project-image-with-tech__container'
        whileInView={{ opacity: 1, translateY: 0 }}
        initial={{ opacity: 0, translateY: 200 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        viewport={{ once: true }}>
        <img
          loading='lazy'
          className='project-image-with-tech__container-image'
          src={image}
          alt={alt}
          width='1300'
          height='1300'
        />
      </motion.div>
      <div className='project-image-with-tech__info'>
        <motion.div
          className='project-image-with-tech__year'
          whileInView={{ opacity: 1, translateX: 0 }}
          initial={{ opacity: 0, translateX: 200 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}>
          {year}
        </motion.div>
        <motion.div
          className='project-image-with-tech__tech'
          whileInView={{ opacity: 1, translateX: 0 }}
          initial={{ opacity: 0, translateX: 200 }}
          transition={{ duration: 1, delay: 0.7 }}
          viewport={{ once: true }}>
          {tech}
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectImageWithTech;

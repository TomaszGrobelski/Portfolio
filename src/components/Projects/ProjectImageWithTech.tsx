import { motion } from 'framer-motion';

import '../../styles/Projects/projectImageWithTech.scss';

interface ProjectImageWithTechProps {
  image: string;
  alt: string;
  year: string;
  tech: string;
}
const ProjectImageWithTech = ({ image, alt, year, tech }: ProjectImageWithTechProps) => {
  return (
    <div className='project-image-with-tech'>
      <motion.div
        className='project-image-with-tech__container'
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 200 }}
        transition={{ duration: 1.3, delay: 0.8 }}
        viewport={{ once: true }}>
        <img className='project-image-with-tech__container-image' src={image} alt={alt} />
      </motion.div>
      <div className='project-image-with-tech__info'>
        <motion.div
          className='project-image-with-tech__year'
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 1200 }}
          transition={{ duration: 2, delay: 1.5}}
          viewport={{ once: true }}>
          {year}
        </motion.div>
        <motion.div
          className='project-image-with-tech__tech'
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 1200 }}
          transition={{ duration: 2, delay: 2 }}
          viewport={{ once: true }}>
          {tech}
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectImageWithTech;

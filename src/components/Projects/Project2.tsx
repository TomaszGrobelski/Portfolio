import { Icon } from '@iconify/react';
import { MotionValue, motion } from 'framer-motion';
import { forwardRef } from 'react';

import NikaFullPage from '../../assets/NikaFullPage.png';
import '../../styles/Projects/project.scss';
import GlassButton from '../Hero/GlassButton';
import ProjectImageWithTech from './ProjectImageWithTech';

interface Project2Props {
  x: MotionValue<string>;
}
const Project2 = forwardRef<HTMLDivElement, Project2Props>((props, ref) => {
  return (
    <motion.section style={{ x: props.x }} ref={ref} className='project project2'>
      <motion.h2
      whileInView={{ opacity: 1, translateY: 0 }}
      initial={{ opacity: 0, translateY: -100 }}
      transition={{ duration: 1.5, delay: 0.5}}
      viewport={{ once: true }}
      >
        Nika
      </motion.h2>
      <div className='project-container'>
        <ProjectImageWithTech
          image={NikaFullPage}
          alt='Full hero page Nika'
          year='2023'
          tech='React · TypeScrit · TailwindCSS '
        />
        <div className='buttons-box'>
          <motion.a
            aria-label='Open the Nika project on GitHub'
            href='https://github.com/TomaszGrobelski/nika'
            target='_blank'
            rel='noopener noreferrer'
            whileInView={{ opacity: 1, translateY: 0 }}
            initial={{ opacity: 0, translateY: 100 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <GlassButton ariaLabel='Open the Nika project on GitHub' text='Github' icon={<Icon icon='mingcute:github-fill' color='white' width={25} />} />
          </motion.a>
          <motion.a
            aria-label='Link to Nika demo project'
            href='https://tomaszgrobelski.github.io/nika/'
            target='_blank'
            rel='noopener noreferrer'
            whileInView={{ opacity: 1, translateY: 0 }}
            initial={{ opacity: 0, translateY: 100 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <GlassButton ariaLabel='Open Nika demo project' text='Demo' icon={<Icon icon='fa:play-circle-o' width={25} />} />
          </motion.a>
        </div>
      </div>
    </motion.section>
  );
});

export default Project2;

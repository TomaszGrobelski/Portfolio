import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import { forwardRef } from 'react';

import NikaFullPage from '../../assets/NikaFullPage.png';
import '../../styles/Projects/project.scss';
import GlassButton from '../Hero/GlassButton';
import ProjectImageWithTech from './ProjectImageWithTech';

const Project2 = forwardRef<HTMLSelectElement>((_, ref) => {
  return (
    <section ref={ref} className='project'>
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 200 }}
        transition={{ duration: 3, delay: 0.5, type: 'spring', damping: 12, stiffness: 100 }}
        viewport={{ once: true }}>
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
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 2, delay: 1.5 }}
            viewport={{ once: true }}>
            <GlassButton text='Github' icon={<Icon icon='mingcute:github-fill' color='white' width={25} />} />
          </motion.a>
          <motion.a
            aria-label='Link to Nika demo project'
            href='https://tomaszgrobelski.github.io/nika/'
            target='_blank'
            rel='noopener noreferrer'
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 2, delay: 2 }}
            viewport={{ once: true }}>
            <GlassButton text='Demo' icon={<Icon icon='fa:play-circle-o' width={25} />} />
          </motion.a>
        </div>
      </div>
    </section>
  );
});

export default Project2;

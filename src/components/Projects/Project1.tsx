import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import { forwardRef } from 'react';

import BookingFullPage from '../../assets/BookingFullPage.png';
import '../../styles/Projects/project.scss';
import GlassButton from '../Hero/GlassButton';
import ProjectImageWithTech from './ProjectImageWithTech';

const Project1 = forwardRef<HTMLSelectElement>((_, ref) => {
  return (
    <section ref={ref} className='project'>
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 200 }}
        transition={{ duration: 3, delay: 0.5, type: 'spring', damping: 12, stiffness: 100 }}
        viewport={{ once: true }}>
        Booking
      </motion.h2>
      <div className='project-container'>
        <ProjectImageWithTech
          image={BookingFullPage}
          alt='Booking'
          year='2024'
          tech='React · TypeScript · TailwindCSS · Node · Express · MongoDB'
        />
        <div className='buttons-box'>
          <motion.a
            aria-label='Open the Booking project on GitHub'
            href='https://github.com/TomaszGrobelski/Booking'
            target='_blank'
            rel='noopener noreferrer'
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 2, delay: 0.8 }}
            viewport={{ once: true }}>
            <GlassButton text='Github' icon={<Icon icon='mingcute:github-fill' color='white' width={25} />} />
          </motion.a>
          <motion.a
            aria-disabled={true}
            aria-label='Demo link not available'
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 2, delay: 1 }}
            viewport={{ once: true }}>
            <GlassButton text='Demo' icon={<Icon icon='fa:play-circle-o' width={25} />} disabled={true} />
          </motion.a>
        </div>
      </div>
    </section>
  );
});

export default Project1;

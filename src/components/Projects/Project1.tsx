import { Icon } from '@iconify/react';
import { motion, MotionValue } from 'framer-motion';
import { forwardRef } from 'react';

import BookingFullPage from '../../assets/BookingFullPage.png';
import '../../styles/Projects/project.scss';
import GlassButton from '../Hero/GlassButton';
import ProjectImageWithTech from './ProjectImageWithTech';

interface Project1Props {
  x: MotionValue<string> ;  

}
const Project1 = forwardRef<HTMLDivElement, Project1Props>((props, ref) => {
  return (
    <motion.section style={{ x: props.x }} ref={ref} className='project project1'>
      <motion.h2
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -100 }}
      transition={{ duration: 2, delay: 2.5}}
      viewport={{ once: true }}
      >
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
            transition={{ duration: 1, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <GlassButton ariaLabel='Open the Booking project on GitHub' text='Github' icon={<Icon icon='mingcute:github-fill' color='white' width={25} />} />
          </motion.a>
          <motion.div
            aria-disabled={true}
            aria-label='Demo link not available'
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 1, delay: 1 }}
            viewport={{ once: true }}
          >
            <GlassButton ariaLabel='Button is not avilable' text='Demo' icon={<Icon icon='fa:play-circle-o' width={25} />} disabled={true} />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
});

export default Project1;

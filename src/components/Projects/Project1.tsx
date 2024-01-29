import { Icon } from '@iconify/react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, forwardRef } from 'react';

import BookingFullPage from '../../assets/BookingFullPage.png';
import '../../styles/Projects/project.scss';
import GlassButton from '../Hero/GlassButton';
import ProjectImageWithTech from './ProjectImageWithTech';

const Project1 = forwardRef<HTMLDivElement>((_, ref) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end end'],
  });

  const x = useTransform(scrollYProgress, [0, 1], ['0', '-100%']);

  return (
    <motion.section ref={ref} style={{ translateX: x }} className='project project1'>
      <motion.h2
        whileInView={{ opacity: 1, translateY: 0 }}
        initial={{ opacity: 0, translateY: -100 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        viewport={{ once: true }}>
        Booking
      </motion.h2>
      <div ref={targetRef} className='project-container'>
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
            whileInView={{ opacity: 1, translateY: 0 }}
            initial={{ opacity: 0, translateY: 100 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}>
            <GlassButton
              ariaLabel='Open the Booking project on GitHub'
              text='Github'
              icon={<Icon icon='mingcute:github-fill' color='white' width={25} />}
            />
          </motion.a>
          <motion.div
            aria-disabled={true}
            aria-label='Demo link not available'
            whileInView={{ opacity: 1, translateY: 0 }}
            initial={{ opacity: 0, translateY: 100 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}>
            <GlassButton
              ariaLabel='Button is not avilable'
              text='Demo'
              icon={<Icon icon='fa:play-circle-o' width={25} />}
              disabled={true}
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
});

export default Project1;

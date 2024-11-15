import { Icon } from '@iconify/react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { forwardRef, useRef } from 'react';

import BGRFullPage from '../../assets/GBRFullScrean.png';
import '../../styles/Projects/project.scss';
import GlassButton from '../Buttons/GlassButton';
import ProjectImageWithTech from './ProjectImageWithTech';

const Project1 = forwardRef<HTMLDivElement>((_, ref) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'center end'],
  });

  const x = useTransform(scrollYProgress, [0, 1], ['0', '-100%']);

  return (
    <motion.section ref={ref} style={{ translateX: x }} className='project project1'>
      <motion.h2
        whileInView={{ opacity: 1, translateY: 0 }}
        initial={{ opacity: 0, translateY: -100 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}>
        GoBikeRide
      </motion.h2>
      <div ref={targetRef} className='project-container'>
        <ProjectImageWithTech
          image={BGRFullPage}
          alt='GoBikeRide'
          year='2024'
          tech='Next.js · TypeScript · TailwindCSS · Supabase · Prisma '
        />
        <div className='buttons-box'>
          <motion.a
            aria-label='Open the GoBikeRide project on GitHub'
            href='https://github.com/TomaszGrobelski/GoBikeRide'
            target='_blank'
            rel='noopener noreferrer'
            whileInView={{ opacity: 1, translateY: 0 }}
            initial={{ opacity: 0, translateY: 100 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}>
            <GlassButton
              ariaLabel='Open the GoBikeRide project on GitHub'
              text='Github'
              icon={<Icon icon='mingcute:github-fill' color='white' width={25} />}
            />
          </motion.a>
          <motion.a
            aria-label='Link to GoBikeRide demo project'
            href='https://go-bike-ride.vercel.app/auth/sign-in'
            target='_blank'
            rel='noopener noreferrer'
            whileInView={{ opacity: 1, translateY: 0 }}
            initial={{ opacity: 0, translateY: 100 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}>
            <GlassButton
              ariaLabel='Open GoBikeRide demo project'
              text='Demo'
              icon={<Icon icon='fa:play-circle-o' width={25} />}
            />
          </motion.a>
        </div>
      </div>
    </motion.section>
  );
});

export default Project1;

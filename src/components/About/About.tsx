import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import { forwardRef } from 'react';

import aboutPhoto from '../../assets/authorImageAbout.jpg';
import '../../styles/About/about.scss';

const About = forwardRef<HTMLSelectElement>((_, ref) => {
  return (
    <motion.section className='about' ref={ref}>
      <motion.h2
        className='about__header'
        whileInView={{ opacity: 1, translateY: 0 }}
        initial={{ opacity: 0, translateY: 100 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        viewport={{ once: true }}>
        About
      </motion.h2>
      <div className='about__content'>
        <motion.div
          className='photo-box'
          whileInView={{ opacity: 1, translateY: 0 }}
          initial={{ opacity: 0, translateY: 200 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          viewport={{ once: true }}>
          <img loading='lazy' src={aboutPhoto} alt='about-photo' width={500} height={600} />
        </motion.div>
        <div className='description-wrapper'>
          <motion.div
            className='description-box'
            whileInView={{ opacity: 1, translateY: 0 }}
            initial={{ opacity: 0, translateY: 200 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            viewport={{ once: true }}>
            <h3>Hi there</h3>
            <p>My name is Tomasz and I'm frontend developer</p>
            <p>
              Having immersed myself in the world of web development for a year now, I continuously strive to expand my
              skill set and stay up-to-date with the latest technologies and trends. I enjoy tackling challenges and
              creating seamless user interfaces that leave a lasting impression.
            </p>
            <p>
              For half of my life, I passionately played soccer, but a couple of knee surgeries have led me to adjust my
              physical activities. Despite the challenges, I've redirected my energy towards programing and gym
              workouts. Pushing my limits in the gym have become integral parts of my lifestyle. I believe in
              maintaining a balance between a fulfilling professional career and a healthy, active life outside of work.
            </p>
            <p> Feel free to explore my portfolio to see some of projects I've had made.</p>
          </motion.div>
          <motion.div
            className='tech-box'
            whileInView={{ opacity: 1, translateY: 0 }}
            initial={{ opacity: 0, translateY: 300 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}>
            <h4 className='tech-box__header'>MY TECH</h4>
            <div>
              <p className='tech-box__title'>Front-end :</p>
              <div className='tech-box__list'>
                <Icon icon='skill-icons:html' width='50' />
                <Icon icon='devicon:css3' width='50' />
                <Icon icon='skill-icons:sass' width='50' />
                <Icon icon='skill-icons:tailwindcss-dark' width='50' />
                <Icon icon='skill-icons:javascript' width='50' />
                <Icon icon='logos:typescript-icon' width='50' />
                <Icon icon='logos:react' width='50' />
                <Icon icon='skill-icons:nextjs-light' width='50' />
              </div>
            </div>
            <div>
              <p className='tech-box__title'>Back-end :</p>
              <div className='tech-box__list'>
                <Icon icon='skill-icons:nodejs-dark' width='50' />
                <Icon icon='skill-icons:expressjs-dark' width='50' />
                <Icon icon='skill-icons:mongodb' width='50' />
                <Icon icon='logos:postgresql' width='50' />
              </div>
            </div>
            <div>
              <p className='tech-box__title'>Tools :</p>
              <div className='tech-box__list'>
                <Icon icon='devicon:vscode' width='50' />
                <Icon icon='logos:prettier' width='50' />
                <Icon icon='devicon:eslint' width='50' />
                <Icon icon='skill-icons:git' width='50' />
                <Icon icon='uiw:github' width='50' />
                <Icon icon='vscode-icons:file-type-vite' width='50' />
                <Icon icon='skill-icons:babel' width='50' />
                <Icon icon='icon-park-solid:seo' width={50} />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
});

export default About;

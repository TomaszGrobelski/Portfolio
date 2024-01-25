import { Icon } from '@iconify/react';
import { forwardRef } from 'react';

import aboutPhoto from '../../assets/aboutphoto.jpg';
import '../../styles/About/about.scss';

const About = forwardRef<HTMLSelectElement>((_, ref) => {
  return (
    <section className='about' ref={ref}>
      <h2 className='about__header'>About</h2>
      <div className='about__content'>
        <div className='photo-box'>
          <img src={aboutPhoto} alt='about-photo' />
        </div>
        <div className='description-box'>
          <h3>Hi there</h3>
          <p>My name is Tomasz and I'm frontend developer</p>
          <p>
            Having immersed myself in the world of web development for a year now, I continuously strive to expand my
            skill set and stay up-to-date with the latest technologies and trends. I enjoy tackling challenges and
            creating seamless user interfaces that leave a lasting impression.
          </p>
          <p>
            For half of my life, I passionately played soccer, but a couple of knee surgeries have led me to adjust my
            physical activities. Despite the challenges, I've redirected my energy towards gym workouts and cycling
            adventures. Exploring new cycling routes and pushing my limits in the gym have become integral parts of my
            lifestyle. I believe in maintaining a balance between a fulfilling professional career and a healthy, active
            life outside of work.
          </p>
          <p> Feel free to explore my portfolio to see some of projects I've had made.</p>
        </div>
        <div className='tech-box'>
          <h4 className='tech-box__header'>MY TECH</h4>
          <div className='tech-box__list'>
            <Icon icon='skill-icons:html' width='50' />
            <Icon icon='devicon:css3' width='50' />
            <Icon icon='skill-icons:sass' width='50' />
            <Icon icon='skill-icons:javascript' width='50' />
            <Icon icon='logos:react' width='50' />
            <Icon icon='skill-icons:tailwindcss-dark' width='50' />
            <Icon icon='logos:typescript-icon' width='50' />
          </div>
          <div className='tech-box__list'>
            <Icon icon='skill-icons:nodejs-dark' width='50' />
            <Icon icon='skill-icons:expressjs-dark' width='50' />
            <Icon icon='skill-icons:mongodb' width='50' />
          </div>
          <div className='tech-box__list'>
            <Icon icon='devicon:vscode' width='50' />
            <Icon icon='logos:prettier' width='50' />
            <Icon icon='devicon:eslint' width='50' />
            <Icon icon='skill-icons:git' width='50' />
            <Icon icon='uiw:github' width='50' />
            <Icon icon='vscode-icons:file-type-vite' width='50' />
            <Icon icon='skill-icons:babel' width='50' />
          </div>
        </div>
      </div>
    </section>
  );
});

export default About;

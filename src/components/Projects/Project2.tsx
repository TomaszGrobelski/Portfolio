import { Icon } from '@iconify/react';
import { forwardRef } from 'react';

import NikaFullPage from '../../assets/NikaFullPage.png';
import '../../styles/Projects/project.scss';
import GlassButton from '../Hero/GlassButton';
import ProjectImageWithTech from './ProjectImageWithTech';

const Project2 = forwardRef<HTMLSelectElement>((_, ref) => {
  return (
    <section ref={ref} className='project'>
      <h2>Nika</h2>
      <div className='project-container'>
        <ProjectImageWithTech image={NikaFullPage} alt='Nika' year='2023' tech='React · TypeScrit · TailwindCSS ' />
        <div className='buttons-box'>
          <a href='https://github.com/TomaszGrobelski/nika' target='_blank' rel='noopener noreferrer'>
            <GlassButton text='Github' icon={<Icon icon='mingcute:github-fill' color='white' width={25} />} />
          </a>
          <a href='https://tomaszgrobelski.github.io/nika/' target='_blank' rel='noopener noreferrer'>
            <GlassButton text='Demo' icon={<Icon icon='fa:play-circle-o' width={25} />} />
          </a>
        </div>
      </div>
    </section>
  );
});

export default Project2;

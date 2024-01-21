import { forwardRef } from 'react';

import '../../styles/Projects/Project1/project1.scss';
import GitHubButton from './GitHubButton';
import ProjectImageWithTech from './ProjectImageWithTech';

const Project1 = forwardRef<HTMLSelectElement>((_, ref) => {
  return (
    <section ref={ref} className='project1'>
      <h2 className=''>Booking</h2>
      <div className='project-container'>
        <ProjectImageWithTech
          image=''
          alt='Booking'
          year='2024'
          tech='React · TypeScript · TailwindCSS · Node · Express · MongoDB'
        />
        <div className='buttons-box'>
          <GitHubButton />
          <button>Demo</button>
        </div>
      </div>
    </section>
  );
});

export default Project1;

import { forwardRef } from 'react';

import '../../styles/Projects/Project2/project2.scss';
import ProjectImageWithTech from './ProjectImageWithTech';

const Project2 = forwardRef<HTMLSelectElement>((_, ref) => {
  return (
    <section ref={ref} className='project2'>
      <h2>Nika</h2>
      <ProjectImageWithTech image='' alt='Nika' year='2023' tech='React · TypeScrit · TailwindCSS ' />
    </section>
  );
});

export default Project2;

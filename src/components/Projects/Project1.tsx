import { Icon } from '@iconify/react';
import { forwardRef } from 'react';

import BookingFullPage from '../../assets/BookingFullPage.png';
import '../../styles/Projects/project.scss';
import GlassButton from '../Hero/GlassButton';
import ProjectImageWithTech from './ProjectImageWithTech';

const Project1 = forwardRef<HTMLSelectElement>((_, ref) => {
  return (
    <section ref={ref} className='project'>
      <h2 className=''>Booking</h2>
      <div className='project-container'>
        <ProjectImageWithTech
          image={BookingFullPage}
          alt='Booking'
          year='2024'
          tech='React · TypeScript · TailwindCSS · Node · Express · MongoDB'
        />
        <div className='buttons-box'>
          <GlassButton text='Github' icon={<Icon icon='mingcute:github-fill' color='white' width={25} />} />
          <GlassButton text='Demo' icon={<Icon icon='fa:play-circle-o' width={25} />} disabled={true} />
        </div>
      </div>
    </section>
  );
});

export default Project1;

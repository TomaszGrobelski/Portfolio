import { forwardRef } from 'react';

import '../../styles/Project1/project1.scss';

const Project1 = forwardRef<HTMLSelectElement>((_, ref) => {
  return (
    <section ref={ref} className='project1'>
      <h2>Booking</h2>
      <div>des</div>
    </section>
  );
});

export default Project1;

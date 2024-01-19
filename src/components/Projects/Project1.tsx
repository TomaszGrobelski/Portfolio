import { forwardRef } from 'react';

const Project1 = forwardRef<HTMLSelectElement>((_, ref) => {
  return (
    <section ref={ref} className='project1'>
      <h2>Booking</h2>
      <div>des</div>
    </section>
  );
});

export default Project1;

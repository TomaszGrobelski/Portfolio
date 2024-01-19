import { forwardRef } from 'react';

const Project2 = forwardRef<HTMLSelectElement>((_, ref) => {
  return (
    <section ref={ref} className='project2'>
      <h2>Nika</h2>
    </section>
  );
});

export default Project2;

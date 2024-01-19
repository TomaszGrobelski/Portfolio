import { forwardRef } from 'react';

const Project1 = forwardRef<HTMLSelectElement>((_, ref) => {
  return (
    <section ref={ref} id='project1'>
      Project1
    </section>
  );
});

export default Project1;

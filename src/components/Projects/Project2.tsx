import { forwardRef } from 'react';

import '../../styles/Project2/project2.scss';

const Project2 = forwardRef<HTMLSelectElement>((_, ref) => {
  return (
    <section ref={ref} className='project2'>
      <h2>Nika</h2>
      <div>dsad</div>
    </section>
  );
});

export default Project2;

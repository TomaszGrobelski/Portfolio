import { forwardRef } from 'react';

import '../../styles/About/about.scss';

const About = forwardRef<HTMLSelectElement>((_, ref) => {
  return (
    <section className='about' ref={ref}>
      <h2>About</h2>
      <div>
        <div><img src="" alt="" /></div>
        <div><h3></h3></div>
      </div>
    </section>
  );
});

export default About;

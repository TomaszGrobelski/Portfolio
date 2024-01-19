import { forwardRef } from 'react';

import '../../styles/About/about.scss';

const About = forwardRef<HTMLSelectElement>((_, ref) => {
  return (
    <section className='about' ref={ref}>
      <h2>About</h2>
      <div>Content</div>
    </section>
  );
});

export default About;

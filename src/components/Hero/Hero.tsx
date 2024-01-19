import '../../styles/Sections/hero.scss';
import { forwardRef } from 'react';



const Hero = forwardRef<HTMLSelectElement>((_,ref) => {
  return (
    <section ref={ref} className='hero'>
      <div className='wrapper'>
        <div>
          <h1>TOMASZ GROBELSKI</h1>
          <p>Hello I'm ....</p>
        </div>
      </div>
    </section>
  );
})

export default Hero;

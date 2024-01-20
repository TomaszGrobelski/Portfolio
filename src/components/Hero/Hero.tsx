import { Icon } from '@iconify/react';
import { forwardRef } from 'react';

import AuthorImage from '../../assets/415774969_1379046102703725_3244739974429827889_n.jpg';
import '../../styles/Hero/hero.scss';
import GlassButton from './GlassButton';
import HeroHeader from './HeroHeader';

const Hero = forwardRef<HTMLSelectElement>((_, ref) => {
  return (
    <section ref={ref} className='hero'>
      <div className='wrapper'>
        <div className='left-box'>
          <HeroHeader className='header' />
          <p className='description'>
            Hi, I'm a frontend developer passionate about creating beautiful and interactive web applications. My
            expertise lies in crafting responsive and user-friendly interfaces that deliver exceptional online
            experiences.{' '}
          </p>
          <GlassButton text='HIRE ME' />
          <button>HIRE ME</button>
        </div>
        <div className='right-box'>
          <img src={AuthorImage} alt='Author image' />
        </div>
      </div>
      <span className='welcom'>WELCOME</span>
      <div className='social-media'>
        <div className='social-box'>
          <a href='https://www.linkedin.com/in/tomasz-grobelski-6182b4145/'>
            <Icon icon='devicon:linkedin' width={28} />
          </a>
          <a href='https://github.com/TomaszGrobelski'>
            <Icon icon='jam:github' color='white' width={28} />
          </a>
        </div>
        <p className='web-dev'>Web Developer</p>
      </div>
    </section>
  );
});

export default Hero;

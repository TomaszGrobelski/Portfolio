import { Icon } from '@iconify/react';
import { forwardRef } from 'react';
import { useRef } from 'react';

import welcomMusic from '../../assets/Welcom.mp3';
import AuthorImage from '../../assets/dsa.jpg';
import '../../styles/Hero/hero.scss';
import GlassButton from './GlassButton';
import HeroHeader from './HeroHeader';

const Hero = forwardRef<HTMLSelectElement>((_, ref) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.error('Nie można odtworzyć dźwięku:', error);
      });
    }
  };

  return (
    <section ref={ref} className='hero'>
      <div className='hero__wrapper'>
        <div className='left-box'>
          <HeroHeader className='left-box__header' />
          <p className='left-box__description'>
            Hi, I'm a frontend developer passionate about creating beautiful and interactive web applications. My
            expertise lies in crafting responsive and user-friendly interfaces that deliver exceptional online
            experiences.{' '}
          </p>
          <div className='left-box__button'>
            <GlassButton text='HIRE ME' icon={<Icon icon='clarity:contract-line' color='white' />} />
          </div>
        </div>
        <div className='right-box'>
          <div className='image-container'>
            <div className='spin-border'></div>
            <img src={AuthorImage} alt='Author image' />
          </div>
        </div>
      </div>
      <div className='blured-circle'></div>
      <span className='welcom'>WELCOME</span>
      <div className='social-media'>
        <div className='social-box'>
          <button ref={buttonRef} onClick={playAudio}>
            <Icon icon='charm:sound-up' color='white' width={30} />
            <audio ref={audioRef} src={welcomMusic}></audio>
          </button>
          <a href='https://www.linkedin.com/in/tomasz-grobelski-6182b4145/' target='_blank' rel='noopener noreferrer'>
            <Icon icon='devicon:linkedin' width={30} />
          </a>
          <a href='https://github.com/TomaszGrobelski'>
            <Icon icon='jam:github' color='white' width={30} />
          </a>
        </div>
        <p className='web-dev'>Web Developer</p>
      </div>
    </section>
  );
});

export default Hero;

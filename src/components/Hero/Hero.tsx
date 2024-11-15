import { Icon } from '@iconify/react';
import { forwardRef, useRef, useState } from 'react';

import welcomMusic from '../../assets/Welcom.mp3';
import '../../styles/Hero/hero.scss';
import { HeroProps } from '../../types/Hero/hero.types';
import GlassButton from '../Buttons/GlassButton';
import { BackgroundBeams } from '../ui/BackGroundBeams/BackGroundBeams';
import { FlipWords } from '../ui/FlipWords/FlipWord';
import HeroHeader from './HeroHeader';

const Hero = forwardRef<HTMLDivElement, HeroProps>(({ contactRef }, ref) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [audioAvilabe, setAudioAvilable] = useState(true);

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play().catch(() => {
        setAudioAvilable(false);
      });
    }
  };
  const handleScroll = () => {
    if (contactRef && contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <section ref={ref} className='hero'>
      <BackgroundBeams />
      <div className='hero__wrapper'>
        <div className='left-box'>
          <HeroHeader className='left-box__header' />

          <p className='left-box__description'>
            Hi, I'm a frontend developer passionate about creating beautiful and interactive web applications. My
            expertise lies in crafting responsive and user-friendly interfaces that deliver exceptional online
            experiences.
          </p>

          <div className='left-box__button'>
            <GlassButton
              ariaLabel='Scroll to contact section'
              onClick={handleScroll}
              text='HIRE ME'
              icon={<Icon icon='clarity:contract-line' color='white' />}
              disabled={false}
            />
          </div>
        </div>

        {/* <div className='right-box'>
          <div className='image-container'>
            <div className='spin-border'></div>
            <img loading='lazy' src={AuthorImage} alt='Author image' width={330} height={350} />
          </div>
        </div> */}
      </div>
      <div className='blured-circle'></div>

      <span className='welcom'>
        <FlipWords words={['WELCOME', 'EXPLORE', 'ENJOY']}></FlipWords>
      </span>
      <div className='social-media'>
        <div className='social-media__box'>
          <button
            aria-label={audioAvilabe ? 'Play the sound' : 'Sound is not avilable'}
            ref={buttonRef}
            onClick={playAudio}>
            {audioAvilabe ? (
              <Icon icon='charm:sound-up' color='white' width={30} />
            ) : (
              <Icon icon='material-symbols:no-sound-outline' color='red' width={30} />
            )}
            <audio ref={audioRef} src={welcomMusic}></audio>
          </button>
          <a
            href='https://www.linkedin.com/in/tomasz-grobelski-6182b4145/'
            aria-label='open Tomasz Grobelski profile page on Linkedin'
            target='_blank'
            rel='noopener noreferrer'>
            <Icon icon='devicon:linkedin' width={30} />
          </a>
          <a
            href='https://github.com/TomaszGrobelski'
            aria-label='open Tomasz Grobelski profile page on github'
            target='_blank'
            rel='noopener noreferrer'>
            <Icon icon='jam:github' color='white' width={30} />
          </a>
        </div>
        <span className='social-media__web-dev'>Web Developer</span>
      </div>
    </section>
  );
});

export default Hero;

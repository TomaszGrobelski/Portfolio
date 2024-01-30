import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import { RefObject, forwardRef, useRef, useState } from 'react';

import AuthorImage from '../../assets/HeroImage.jpg';
import welcomMusic from '../../assets/Welcom.mp3';
import '../../styles/Hero/hero.scss';
import GlassButton from './GlassButton';
import HeroHeader from './HeroHeader';

interface HeroProps {
  contactRef: RefObject<HTMLElement>;
}
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
      <div className='hero__wrapper'>
        <div className='left-box'>
          <HeroHeader className='left-box__header' />
          <motion.p
            className='left-box__description'
            // initial={{ translateY: '100px', opacity: 0 }}
            // animate={{ translateY: 0, opacity: 1 }}
            // transition={{ duration: 1, delay: 1 }}
            >
            Hi, I'm a frontend developer passionate about creating beautiful and interactive web applications. My
            expertise lies in crafting responsive and user-friendly interfaces that deliver exceptional online
            experiences.
          </motion.p>
          <motion.div
            className='left-box__button'
            // initial={{ translateX: '-100px', opacity: 0 }}
            // animate={{ translateX: 0, opacity: 1 }}
            // transition={{ duration: 1, delay: 2}}
            >
            <GlassButton
              ariaLabel='Scroll to contact section'
              onClick={handleScroll}
              text='HIRE ME'
              icon={<Icon icon='clarity:contract-line' color='white' />}
              disabled={false}
            />
          </motion.div>
        </div>
        <div className='right-box'>
          <motion.div
            className='image-container'
            // initial={{ translateY: '-100px', opacity: 0 }}
            // animate={{ translateY: 0, opacity: 1 }}
            // transition={{ duration: 1, delay: 2 }}
            >
            <div className='spin-border'></div>
            <img loading='lazy' src={AuthorImage} alt='Author image' width={330} height={350} />
          </motion.div>
        </div>
      </div>
      <div className='blured-circle'></div>
      <motion.span
        className='welcom'
        // initial={{ translateY: '100px', opacity: 0 }}
        // animate={{ translateY: 0, opacity: 1 }}
        // transition={{ duration: 1, delay: 1 }}
        >
        WELCOME
      </motion.span>
      <motion.div
        className='social-media'
        // initial={{ translateX: '-200px', opacity: 0 }}
        // animate={{ translateX: 0, opacity: 1 }}
        // transition={{ duration: 1, delay: 1 }}
        >
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
      </motion.div>
    </section>
  );
});

export default Hero;

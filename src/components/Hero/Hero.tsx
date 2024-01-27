import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
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
          <motion.p
            className='left-box__description'
            initial={{ y: '200px', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 2, delay: 2 }}>
            Hi, I'm a frontend developer passionate about creating beautiful and interactive web applications. My
            expertise lies in crafting responsive and user-friendly interfaces that deliver exceptional online
            experiences.{' '}
          </motion.p>
          <motion.div
            className='left-box__button'
            initial={{ x: '-200px', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 2, delay: 4, ease: 'easeOut', type: 'spring', damping: 13, stiffness: 100 }}>
            <GlassButton text='HIRE ME' icon={<Icon icon='clarity:contract-line' color='white' />} />
          </motion.div>
        </div>
        <div className='right-box'>
          <motion.div
            className='image-container'
            initial={{ y: '-300px', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 3, delay: 3 }}>
            <div className='spin-border'></div>
            <img src={AuthorImage} alt='Author image' />
          </motion.div>
        </div>
      </div>
      <div className='blured-circle'></div>
      <motion.span
        className='welcom'
        initial={{ y: '200px', opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 3, delay: 3 }}>
        WELCOME
      </motion.span>
      <motion.div
        className='social-media'
        initial={{ x: '-200px', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 2, delay: 2 }}>
        <div className='social-media__box'>
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
        <span className='social-media__web-dev'>Web Developer</span>
      </motion.div>
    </section>
  );
});

export default Hero;

import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { RefObject } from 'react';

import '../../styles/Navbar/navbar.scss';
import { NavbarProps, Section } from '../../types/Navbar/navbar.types';
import { navbarVariants } from './animationVariants';

const Navbar = ({ heroRef, aboutRef, project1Ref, project2Ref, project3Ref, contactRef }: NavbarProps) => {
  const [activeItem, setActiveItem] = useState<string>('home');
  const [navbarVisible, setNavbarVisible] = useState<boolean>(false);
  const [distanceFromTop, setDistanceFromTop] = useState<number>(0);

  const scrollToSection = (sectionRef: RefObject<HTMLElement>) => {
    if (sectionRef.current) {
      const element = sectionRef.current;
      const targetPosition = element.getBoundingClientRect().top + window.scrollY;
      const startPosition = window.scrollY;
      const distance = targetPosition - startPosition;
      const duration = 750;
      let start: number | null = null;

      const step = (timestamp: number) => {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const position = startPosition + distance * (progress / duration);
        window.scrollTo(0, position);
        if (progress < duration) window.requestAnimationFrame(step);
      };

      window.requestAnimationFrame(step);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentHeight = window.scrollY;
      setDistanceFromTop(currentHeight);

      const heroOffset = heroRef.current!.getBoundingClientRect()!.top + window.scrollY;
      const aboutOffset = aboutRef.current!.getBoundingClientRect()!.top + window.scrollY;
      const project1Offset = project1Ref.current!.getBoundingClientRect()!.top + window.scrollY;
      const project2Offset = project2Ref.current!.getBoundingClientRect()!.top + window.scrollY;
      const project3Offset = project3Ref.current!.getBoundingClientRect()!.top + window.scrollY;
      const contactOffset = contactRef.current!.getBoundingClientRect()!.top + window.scrollY;

      if (distanceFromTop >= heroOffset) {
        setActiveItem('home');
      }

      if (distanceFromTop >= aboutOffset) {
        setActiveItem('about');
      }
      if (distanceFromTop >= project1Offset) {
        setActiveItem('project1');
      }
      if (distanceFromTop >= project2Offset) {
        setActiveItem('project2');
      }
      if (distanceFromTop >= project3Offset) {
        setActiveItem('project3');
      }
      if (distanceFromTop >= contactOffset) {
        setActiveItem('contact');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [distanceFromTop, heroRef, aboutRef, project1Ref, project2Ref, project3Ref, contactRef]);

  const sections: Section[] = [
    { name: 'home', ref: heroRef },
    { name: 'about', ref: aboutRef },
    { name: 'project1', ref: project1Ref },
    { name: 'project2', ref: project2Ref },
    { name: 'project3', ref: project3Ref },
    { name: 'contact', ref: contactRef },
  ];
  const handleSectionClick = (section: Section) => {
    setTimeout(() => {
      setActiveItem(section.name);
    }, 800);
    scrollToSection(section.ref);
  };
  return (
    <>
      <motion.div className='sidebar' animate={navbarVisible ? 'open' : 'closed'}>
        <motion.nav className='navbar' variants={navbarVariants}>
          <button
            aria-label={navbarVisible ? 'Close menu' : 'Open menu'}
            aria-expanded={navbarVisible}
            className='close-button'
            onClick={() => setNavbarVisible(!navbarVisible)}>
            {navbarVisible ? (
              <Icon icon='simple-icons:x' color='black' width={25} />
            ) : (
              <Icon icon='eva:menu-outline' color='#1b1b1b' width={28} />
            )}
          </button>
          <ul className='nav-list'>
            {sections.map((section) => (
              <li
                key={section.name}
                className={activeItem === section.name ? 'active' : ''}
                onClick={() => handleSectionClick(section)}>
                {section.name.toUpperCase()}
              </li>
            ))}
          </ul>
        </motion.nav>
        <div
          className={navbarVisible ? 'screen' : 'none'}
          onClick={() => {
            setNavbarVisible(false);
          }}></div>
      </motion.div>
    </>
  );
};

export default Navbar;

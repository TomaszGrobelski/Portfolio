import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { RefObject } from 'react';

import '../../styles/Navbar/navbar.scss';
import { NavbarProps } from '../../types/Navbar/navbar.types';

const Navbar = ({ heroRef, aboutRef, project1Ref, project2Ref, contactRef }: NavbarProps) => {
  const [activeItem, setActiveItem] = useState<string>('home');
  const [navbarVisible, setNavbarVisible] = useState<boolean>(false);

  const scrollToSection = (sectionRef: RefObject<HTMLElement>) => {
    if (sectionRef && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const variants = {
    open: {
      clipPath: 'circle(1300px at 44px 44px)',
      transition: {
        type: 'spring',
        stiffness: 20,
      },
    },
    closed: {
      clipPath: 'circle(18px at 44px 44px)',
      transition: {
        delay: 0.1,
        type: 'spring',
        stiffness: 400,
        damping: 40,
      },
    },
  };

  return (
    <>
      <motion.div className='sidebar' animate={navbarVisible ? 'open' : 'closed'}>
        <motion.nav className='navbar' variants={variants}>
          <button
            aria-label={navbarVisible ? 'Close menu' : 'Open menu'}
            aria-expanded={navbarVisible}
            className='close-button'
            onClick={() => setNavbarVisible(!navbarVisible)}>
            <Icon icon='simple-icons:x' color='black' width={25} />
          </button>
          <ul className='nav-list'>
            <li
              className={activeItem === 'home' ? 'active' : ''}
              onClick={() => {
                setActiveItem('home');
                scrollToSection(heroRef);
              }}>
              HOME
            </li>
            <li
              className={activeItem === 'about' ? 'active' : ''}
              onClick={() => {
                setActiveItem('about');
                scrollToSection(aboutRef);
              }}>
              ABOUT
            </li>
            <li
              className={activeItem === 'project1' ? 'active' : ''}
              onClick={() => {
                setActiveItem('project1');
                scrollToSection(project1Ref);
              }}>
              PROJECT#1
            </li>
            <li
              className={activeItem === 'project2' ? 'active' : ''}
              onClick={() => {
                setActiveItem('project2');
                scrollToSection(project2Ref);
              }}>
              PROJECT#2
            </li>
            <li
              className={activeItem === 'contact' ? 'active' : ''}
              onClick={() => {
                setActiveItem('contact');
                scrollToSection(contactRef);
              }}>
              CONTACT
            </li>
          </ul>
        </motion.nav>
      </motion.div>
    </>
  );
};

export default Navbar;

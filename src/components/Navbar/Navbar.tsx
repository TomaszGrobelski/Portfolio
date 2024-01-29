import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { RefObject } from 'react';

import '../../styles/Navbar/navbar.scss';
import { NavbarProps } from '../../types/Navbar/navbar.types';

const Navbar = ({ heroRef, aboutRef, project1Ref, project2Ref, contactRef }: NavbarProps) => {
  const [activeItem, setActiveItem] = useState<string>('home');
  const [navbarVisible, setNavbarVisible] = useState<boolean>(false);
  const [distanceFromTop, setDistanceFromTop] = useState<number>(0);

  const scrollToSection = (sectionRef: RefObject<HTMLElement>) => {
    if (sectionRef && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentHeight = window.scrollY + 1;
      setDistanceFromTop(currentHeight);

      const heroOffset = heroRef.current!.getBoundingClientRect()!.top + window.scrollY;
      const aboutOffset = aboutRef.current!.getBoundingClientRect()!.top + window.scrollY;
      const project1Offset = project1Ref.current!.getBoundingClientRect()!.top + window.scrollY;
      const project2Offset = project2Ref.current!.getBoundingClientRect()!.top + window.scrollY;
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
      if (distanceFromTop >= contactOffset) {
        setActiveItem('contact');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [distanceFromTop, heroRef, aboutRef, project1Ref, project2Ref, contactRef]);

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
            {navbarVisible ? (
              <Icon icon='simple-icons:x' color='black' width={25} />
            ) : (
              <Icon icon='eva:menu-outline' color='#1b1b1b' width={28} />
            )}
          </button>
          <ul className='nav-list'>
            <li
              className={activeItem === 'home' ? 'active' : ''}
              onClick={() => {
                setTimeout(() => {
                  setActiveItem('home');
                }, 800);
                scrollToSection(heroRef);
              }}>
              HOME
            </li>
            <li
              className={activeItem === 'about' ? 'active' : ''}
              onClick={() => {
                setTimeout(() => {
                  setActiveItem('about');
                }, 800);
                scrollToSection(aboutRef);
              }}>
              ABOUT
            </li>
            {/* <li
              className={activeItem === 'project1' ? 'active' : ''}
              onClick={() => {
                setTimeout(() => {
                  setActiveItem('project1');
                }, 800);
                scrollToSection(project1Ref);
              }}>
              PROJECT#1
            </li>
            <li
              className={activeItem === 'project2' ? 'active' : ''}
              onClick={() => {
                setTimeout(() => {
                  setActiveItem('project2');
                }, 800);
                scrollToSection(project2Ref);
              }}>
              PROJECT#2
            </li> */}
            <li
              className={activeItem === 'contact' ? 'active' : ''}
              onClick={() => {
                setTimeout(() => {
                  setActiveItem('contact');
                }, 800);
                scrollToSection(contactRef);
              }}>
              CONTACT
            </li>
          </ul>
        </motion.nav>
        <div
          className={navbarVisible ? 'screen': 'none'}
          onClick={() => {
            setNavbarVisible(false);
          }}></div>
      </motion.div>
    </>
  );
};

export default Navbar;

import { useState } from 'react';
import { RefObject } from 'react';

import '../../styles/Navbar/navbar.scss';
import { NavbarProps } from '../../types/navbar.types';

useState;
const Navbar = ({ heroRef, aboutRef, project1Ref, project2Ref, contactRef }: NavbarProps) => {
  const [activeItem, setActiveItem] = useState<string>('home');
  // const [navbarVisible, setNavbarVisible] = useState<boolean>(true);

  const scrollToSection = (sectionRef: RefObject<HTMLElement>) => {
    if (sectionRef && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      navbarVisible && (
      <nav className='navbar'>
        <ul className='nav-list'>
          <li
            className={activeItem === 'home' ? 'active' : ''}
            onClick={() => {
              setActiveItem('home');
              scrollToSection(heroRef);
            }}>
            Home
          </li>
          <li
            className={activeItem === 'about' ? 'active' : ''}
            onClick={() => {
              setActiveItem('about');
              scrollToSection(aboutRef);
            }}>
            About
          </li>
          <li
            className={activeItem === 'project1' ? 'active' : ''}
            onClick={() => {
              setActiveItem('project1');
              scrollToSection(project1Ref);
            }}>
            Project#1
          </li>
          <li
            className={activeItem === 'project2' ? 'active' : ''}
            onClick={() => {
              setActiveItem('project2');
              scrollToSection(project2Ref);
            }}>
            Project#2
          </li>
          <li
            className={activeItem === 'contact' ? 'active' : ''}
            onClick={() => {
              setActiveItem('contact');
              scrollToSection(contactRef);
            }}>
            Contact
          </li>
        </ul>
      </nav>
      )
    </>
  );
};

export default Navbar;

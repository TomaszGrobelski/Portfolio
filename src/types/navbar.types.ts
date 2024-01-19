import { RefObject } from 'react';

export interface NavbarProps {
  heroRef: RefObject<HTMLElement>;
  aboutRef: RefObject<HTMLElement>;
  project1Ref: RefObject<HTMLElement>;
  project2Ref: RefObject<HTMLElement>;
  contactRef: RefObject<HTMLElement>;
}

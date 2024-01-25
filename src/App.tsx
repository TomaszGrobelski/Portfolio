import { useRef } from 'react';

import About from './components/About/About';
import Contact from './components/Contact/Contact';
import BgWrapper from './components/Container/BgWrapper';
import Container from './components/Container/Container';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Paralax from './components/Paralax/Paralax';
import Project1 from './components/Projects/Project1';
import Project2 from './components/Projects/Project2';
import './styles/Global/app.scss';

function App() {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const contactRef = useRef(null);


  return (
    <>
      <BgWrapper darkMood={true}>
        <Container>
          <Navbar
            heroRef={heroRef}
            aboutRef={aboutRef}
            project1Ref={project1Ref}
            project2Ref={project2Ref}
            contactRef={contactRef}></Navbar>
          <Hero ref={heroRef} />
          <Paralax />
          <About ref={aboutRef} />
          <Project1 ref={project1Ref} />
          <Project2 ref={project2Ref} />
        </Container>
      </BgWrapper>
      <Container>
        <Contact ref={contactRef} />
      </Container>
    </>
  );
}

export default App;

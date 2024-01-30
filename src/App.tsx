import { useRef } from 'react';

import About from './components/About/About';
import Contact from './components/Contact/Contact';
import BgWrapper from './components/Container/BgWrapper';
import Container from './components/Container/Container';
import ProjectsContainer from './components/Container/ProjectsContainer';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import './styles/Global/app.scss';

function App() {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const project1Ref = useRef<HTMLDivElement>(null);
  const project2Ref = useRef<HTMLDivElement>(null);
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
          <Hero ref={heroRef} contactRef={contactRef} />
        </Container>
        <About ref={aboutRef} />
        <ProjectsContainer project1Ref={project1Ref} project2Ref={project2Ref} />
      </BgWrapper>
      <Container>
        <Contact ref={contactRef} />
      </Container>
    </>
  );
}

export default App;

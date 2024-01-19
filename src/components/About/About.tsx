import { forwardRef } from "react";

const About = forwardRef<HTMLSelectElement>((_, ref) => {
  return (
    <section ref={ref} id='about'>
      About
    </section>
  );
})

export default About;

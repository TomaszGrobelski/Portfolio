import { forwardRef } from 'react';

const Contact = forwardRef<HTMLSelectElement>((_, ref) => {
  return (
    <section ref={ref}>
      <h2>Contact</h2>
    </section>
  );
});

export default Contact;

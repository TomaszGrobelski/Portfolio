import { forwardRef } from 'react';

import '../../styles/Contact/contact.scss';

const Contact = forwardRef<HTMLSelectElement>((_, ref) => {
  return (
    <section ref={ref} className='contact'>
      <h2>Contact</h2>
    </section>
  );
});

export default Contact;

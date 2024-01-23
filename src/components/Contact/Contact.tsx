import { Icon } from '@iconify/react';
import { forwardRef } from 'react';

import '../../styles/Contact/contact.scss';
import ContactForm from './ContactForm';

const Contact = forwardRef<HTMLSelectElement>((_, ref) => {
  return (
    <section ref={ref} className='contact'>
      <h2 className='contact__header'>
        <Icon icon='tabler:arrow-big-down-lines-filled' color='#1b1b1b' width={32} />
        Contact
        <Icon icon='tabler:arrow-big-down-lines-filled' color='#1b1b1b' width={32} />
      </h2>
      <div className='contact__container'>
        <div className=''>
          <h3 className=''>Let's make something awesome together</h3>
          <ContactForm />
        </div>
        <div className=''>
          <div className=''>Contact Details</div>
          <div className=''>Social media</div>
          <div className=''>Kraków, Poland</div>
        </div>
        <div className=''>Ⓒ 2024 Tomasz Grobelski</div>
      </div>
    </section>
  );
});

export default Contact;

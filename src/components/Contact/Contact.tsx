import { Icon } from '@iconify/react';
import { forwardRef } from 'react';

import '../../styles/Contact/contact.scss';
import ContactDetails from './ContactDetails';
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
        <div className='contact__description'>
          <h3 className='contact__description-title'>Let's make something awesome together</h3>
          <ContactForm />
        </div>
        <ContactDetails />
        <div className='contact__copyright'>
          Ⓒ 2024<span className='contact__copyright-fullname'> Tomasz Grobelski</span>
        </div>
      </div>
    </section>
  );
});

export default Contact;

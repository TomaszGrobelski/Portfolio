import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

import '../../styles/Contact/contactDetails.scss';

const ContactDetails = () => {
  const now = new Date();
  const options: Intl.DateTimeFormatOptions = {
    timeZone: 'Europe/Warsaw',
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
  };
  const formatter = new Intl.DateTimeFormat('en-US', options);

  const polandTime = formatter.format(now);

  return (
    <div className='contact-details'>
      <motion.div
        className='contact-details__section'
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 200 }}
        transition={{ duration: 2, delay: 0.5 }}
        viewport={{ once: true }}>
        <h4 className='contact-details__header'>Contact Details</h4>
        <p className='contact-details__info detail-mail'>
          <Icon icon='ic:baseline-mail' color='#1b1b1b' width={25} /> Tomasz.grobelski98@gmail.com
        </p>
        <p className='contact-details__info'>
          <Icon icon='icon-park-solid:phone-telephone' color='#1b1b1b' width={25} /> tel: +48 795 003 227
        </p>
      </motion.div>
      <motion.div
        className='contact-details__section'
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 200 }}
        transition={{ duration: 2, delay: 0.75 }}
        viewport={{ once: true }}>
        <h4 className='contact-details__header'>Social media</h4>
        <a href='https://github.com/TomaszGrobelski' target='_blank' rel='noopener noreferrer'>
          <p className='contact-details__info'>
            <Icon icon='ri:github-fill' color='#1b1b1b' width={25} />
            Github
          </p>
        </a>
        <a href='https://www.linkedin.com/in/tomasz-grobelski-6182b4145/' target='_blank' rel='noopener noreferrer'>
          <p className='contact-details__info'>
            <Icon icon='bi:linkedin' color='#1b1b1b' width={25} /> LinkedIn
          </p>
        </a>
      </motion.div>
      <motion.div
        className='contact-details__section'
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 200 }}
        transition={{ duration: 2, delay: 1 }}
        viewport={{ once: true }}>
        <h4 className='contact-details__header'>Location</h4>
        <p className='contact-details__info'>
          <Icon icon='ion:location-sharp' color='#1b1b1b' width={25} /> Kraków, Poland
        </p>
        <p className='contact-details__info'>
          <Icon icon='carbon:time-filled' color='#1b1b1b' width={25} /> {polandTime}
        </p>
      </motion.div>
    </div>
  );
};

export default ContactDetails;

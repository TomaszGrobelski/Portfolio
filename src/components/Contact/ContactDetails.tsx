import { Icon } from '@iconify/react';

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
      <div className='contact-details__section'>
        <h4 className='contact-details__header'>Contact Details</h4>
        <p className='contact-details__info'>
          <Icon icon='ic:baseline-mail' color='#1b1b1b' width={25} /> Tomasz.grobelski98@gmail.com
        </p>
        <p className='contact-details__info'>
          <Icon icon='icon-park-solid:phone-telephone' color='#1b1b1b' width={25} /> tel: +48 795 003 227
        </p>
      </div>
      <div className='contact-details__section'>
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
      </div>
      <div className='contact-details__section'>
        <h4 className='contact-details__header'>Location</h4>
        <p className='contact-details__info'>
          <Icon icon='ion:location-sharp' color='#1b1b1b' width={25} /> Kraków, Poland
        </p>
        <p className='contact-details__info'>
          <Icon icon='carbon:time-filled' color='#1b1b1b' width={25} /> {polandTime}
        </p>
      </div>
    </div>
  );
};

export default ContactDetails;

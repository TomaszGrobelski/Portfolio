import { Icon } from '@iconify/react';

import '../../styles/Contact/contactDetails.scss';

const ContactDetails = () => {
  return (
    <div className='contact-details'>
      <div className='contact-details__section'>
        <h4>Contact Details</h4>
        <p>
          <Icon icon='ic:baseline-mail' color='#1b1b1b' width={25} /> Tomasz.grobelski98@gmail.com
        </p>
        <p>
          <Icon icon='icon-park-solid:phone-telephone' color='#1b1b1b' width={25} /> tel: +48 795 003 227
        </p>
      </div>
      <div className='contact-details__section'>
        <h4>Social media</h4>
        <p>
          <Icon icon='ri:github-fill' color='#1b1b1b' width={25} />
          Github
        </p>
        <p>
          <Icon icon='bi:linkedin' color='#1b1b1b' width={25} /> LinkedIn
        </p>
      </div>
      <div className='contact-details__section'>
        <h4>Location</h4>
        <p>
          <Icon icon='ion:location-sharp' color='#1b1b1b' width={25} /> Kraków, Poland
        </p>
        <p>
          <Icon icon='carbon:time-filled' color='#1b1b1b' width={25} /> Aktualny czas w Polsce:....
        </p>
      </div>
    </div>
  );
};

export default ContactDetails;

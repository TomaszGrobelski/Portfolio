import { Icon } from '@iconify/react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';

import cvTomaszGrobelski from '../../assets/CV_Tomasz_Grobelski.pdf';
import '../../styles/Contact/contactDetails.scss';

const ContactDetails = () => {
  const [mailCopied, setMailCopied] = useState(false);
  const [numberCopied, setNumberCopied] = useState(false);

  const handleMailCopy = () => {
    navigator.clipboard.writeText('Tomasz.grobelski98@gmail.com');
    setMailCopied(true);
    setNumberCopied(false);
  };
  const handleNumberCopy = () => {
    navigator.clipboard.writeText('795003227');
    setNumberCopied(true);
    setMailCopied(false);
  };

  const scrollRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['start end', 'center end'],
  });
  const x = useTransform(scrollYProgress, [0, 1], ['300px', '0px']);
  const opacity = useTransform(scrollYProgress, [0, 1], ['0', '1']);

  return (
    <motion.div className='contact-details' ref={scrollRef} style={{ translateX: x, opacity }}>
      <motion.div className='contact-details__section'>
        <h4 className='contact-details__header'>Contact Details</h4>
        <button onClick={handleMailCopy} className='contact-details__info info-item' aria-label='Copy email'>
          <Icon icon='ic:baseline-mail' color='#1b1b1b' width={25} />
          <p className=''>Tomasz.grobelski98@gmail.com</p>
          {mailCopied ? (
            <Icon icon='material-symbols:check-box' width={25} />
          ) : (
            <Icon icon='eva:copy-outline' color='#1b1b1b' width={25} />
          )}
        </button>
        <button onClick={handleNumberCopy} className='contact-details__info info-item' aria-label='Copy number'>
          <Icon icon='icon-park-solid:phone-telephone' color='#1b1b1b' width={25} />
          <p className=''>tel: +48 795 003 227</p>
          {numberCopied ? (
            <Icon icon='material-symbols:check-box' width={25} />
          ) : (
            <Icon icon='eva:copy-outline' width={25} />
          )}
        </button>
        <a href={cvTomaszGrobelski} download='Tomasz_Grobelski_CV' aria-label='Download Curriculum Vitae'>
          <p className='contact-details__info info-item'>
            <Icon icon='academicons:cv-square' color='#1b1b1b' width={25} />
            <span>Curriculum Vitae</span>
          </p>
        </a>
      </motion.div>
      <motion.div className='contact-details__section'>
        <h4 className='contact-details__header'>Social media</h4>
        <a
          href='https://github.com/TomaszGrobelski'
          aria-label='open Tomasz Grobelski profile page on github'
          target='_blank'
          rel='noopener noreferrer'>
          <p className='contact-details__info info-item'>
            <Icon icon='ri:github-fill' color='#1b1b1b' width={25} />
            <span>Github</span>
          </p>
        </a>
        <a
          href='https://www.linkedin.com/in/tomasz-grobelski-6182b4145/'
          aria-label='open Tomasz Grobelski profile page on Linkedin'
          target='_blank'
          rel='noopener noreferrer'>
          <p className='contact-details__info info-item'>
            <Icon icon='bi:linkedin' color='#1b1b1b' width={25} />
            <span>LinkedIn</span>
          </p>
        </a>
      </motion.div>
      <motion.div className='contact-details__section'>
        <h4 className='contact-details__header'>Location</h4>
        <p className='contact-details__info'>
          <Icon icon='ion:location-sharp' color='#1b1b1b' width={25} /> Kraków, Poland
        </p>
      </motion.div>
    </motion.div>
  );
};

export default ContactDetails;

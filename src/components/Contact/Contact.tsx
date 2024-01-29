import { Icon } from '@iconify/react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { forwardRef, useRef } from 'react';

import '../../styles/Contact/contact.scss';
import ContactDetails from './ContactDetails';
import ContactForm from './ContactForm';

const Contact = forwardRef<HTMLHeadingElement>((_, ref) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['start end', 'center end'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['-500px', '60px']);
  const x = useTransform(scrollYProgress, [0, 1], ['-300px', '0px']);
  const opacity = useTransform(scrollYProgress, [0, 1], ['0', '1']);
  const rotate = useTransform(scrollYProgress, [0, 1], ['0', '720deg']);

  return (
    <motion.section className='contact' ref={ref}>
      <motion.h2 className='contact__header' style={{ translateY:y, opacity, rotate }}>
        <Icon icon='tabler:arrow-big-down-lines-filled' color='#1b1b1b' width={32} />
        Contact
        <Icon icon='tabler:arrow-big-down-lines-filled' color='#1b1b1b' width={32} />
      </motion.h2>
      <motion.div className='contact__container'>
        <motion.div className='contact__description' ref={scrollRef} style={{ translateX:x, opacity }}>
          <h3 className='contact__description-title'>Let's make something awesome together</h3>
          <ContactForm />
        </motion.div>
        <ContactDetails />
      </motion.div>
      <div className='contact__copyright'>
        Ⓒ 2024<span className='contact__copyright-fullname'> Tomasz Grobelski</span> All rights reserved
      </div>
    </motion.section>
  );
});

export default Contact;

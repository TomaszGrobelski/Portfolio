import { Icon } from '@iconify/react';
import { motion, useScroll } from 'framer-motion';
import { forwardRef, useRef } from 'react';

import '../../styles/Contact/contact.scss';
import ContactDetails from './ContactDetails';
import ContactForm from './ContactForm';

const Contact = forwardRef<HTMLHeadingElement>((_, ref) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['0 1', '1 1'],
  });
  return (
    <motion.section className='contact' ref={ref}>
      <motion.h2
        className='contact__header'
        // whileInView={{ opacity: 1, y: 0 }}
        // initial={{ opacity: 0, y: 200 }}
        // transition={{ duration: 3, delay: 0.5, type: 'spring', damping: 12, stiffness: 100 }}
        // viewport={{ once: true }}
      >
        <Icon icon='tabler:arrow-big-down-lines-filled' color='#1b1b1b' width={32} />
        Contact
        <Icon icon='tabler:arrow-big-down-lines-filled' color='#1b1b1b' width={32} />
      </motion.h2>
      <motion.div className='contact__container'>
        <motion.div
          className='contact__description'
          ref={scrollRef}
          style={{
            scale: scrollYProgress,
            opacity: scrollYProgress,
          }}
          // whileInView={{ opacity: 1, x: 0 }}
          // initial={{ opacity: 0, x: -200 }}
          // transition={{ duration: 3, delay: 0.5}}
          // viewport={{ once: true }}
        >
          <h3 className='contact__description-title'>Let's make something awesome together</h3>
          <ContactForm />
        </motion.div>
        <ContactDetails/>
        <div className='contact__copyright'>
          Ⓒ 2024<span className='contact__copyright-fullname'> Tomasz Grobelski</span>
        </div>
      </motion.div>
    </motion.section>
  );
});

export default Contact;

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

import './scroll.scss';

const Scroll = () => {
  const targetRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start'],
  });

  const x = useTransform(scrollYProgress, [0, 1], ['0', '-100vw']);

  return (
    <section ref={targetRef} className='containerG'>
      <motion.div style={{ x }} className='containerG__p1'></motion.div>
      <motion.div style={{ x }} className='containerG__p2'></motion.div>
    </section>
  );
};

export default Scroll;

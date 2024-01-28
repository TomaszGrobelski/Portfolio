import { motion } from 'framer-motion';

const HeroHeader = ({ className }: { className: string }) => {
  return (
    <h1 className={className}>
      <motion.span
        initial={{ y: '-100px', opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5, delay: 1.5 }}>
        Tomasz
      </motion.span>
      <motion.span
        initial={{ y: '-100px', opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5, delay: 1 }}>
        Grobelski
      </motion.span>
    </h1>
  );
};

export default HeroHeader;

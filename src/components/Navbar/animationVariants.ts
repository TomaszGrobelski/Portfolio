export const navbarVariants = {
    open: {
      clipPath: 'circle(1300px at 44px 44px)',
      transition: {
        type: 'spring',
        stiffness: 20,
      },
    },
    closed: {
      clipPath: 'circle(18px at 44px 44px)',
      transition: {
        delay: 0.1,
        type: 'spring',
        stiffness: 400,
        damping: 40,
      },
    },
  };
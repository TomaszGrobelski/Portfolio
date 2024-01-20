import { Icon } from '@iconify/react';

import '../../styles/Hero/glassButton.scss';

const GlassButton = ({ text }: { text: string }) => {
  return (
    <button className='glass-button'>
      {text}
      <Icon icon='clarity:contract-line' color='white' />
    </button>
  );
};

export default GlassButton;

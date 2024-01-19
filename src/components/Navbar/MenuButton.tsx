import { Icon } from '@iconify/react';

import '../../styles/Navbar/menuButton.scss';
import { MenuButtonProps } from '../../types/Navbar/menuButtonProps.types';

const MenuButton = ({ onClick }: MenuButtonProps) => {
  return (
    <button className='menu-button' aria-label='Menu' aria-expanded='false' onClick={onClick}>
      <Icon icon='simple-icons:x' color='black' width={25} />
    </button>
  );
};

export default MenuButton;

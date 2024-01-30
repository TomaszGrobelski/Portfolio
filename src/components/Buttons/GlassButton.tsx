import '../../styles/Hero/glassButton.scss';
import { GlassButtonProps } from '../../types/Buttons/buttons.types';


const GlassButton = ({ ariaLabel, text, icon, disabled, onClick }: GlassButtonProps) => {
  const ariaProps = ariaLabel && ariaLabel !== text ? { 'aria-label': ariaLabel } : {};

  return (
    <button
      {...ariaProps}
      onClick={onClick}
      disabled={disabled}
      className={disabled ? 'off-glass-button' : 'glass-button'}>
      {text}
      {icon}
    </button>
  );
};

export default GlassButton;

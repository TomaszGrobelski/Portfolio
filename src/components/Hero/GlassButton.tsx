import '../../styles/Hero/glassButton.scss';

interface GlassButtonProps {
  ariaLabel: string;
  text: string;
  icon: React.ReactElement;
  disabled?: boolean;
  onClick?: () => void;
}
const GlassButton = ({ ariaLabel, text, icon, disabled, onClick }: GlassButtonProps) => {
  return (
    <button
      aria-label={ariaLabel}
      onClick={onClick}
      disabled={disabled}
      className={disabled ? 'off-glass-button' : 'glass-button'}>
      {text}
      {icon}
    </button>
  );
};

export default GlassButton;

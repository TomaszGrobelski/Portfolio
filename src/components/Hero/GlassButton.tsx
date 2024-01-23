import '../../styles/Hero/glassButton.scss';

interface GlassButtonProps {
  text: string;
  icon: React.ReactElement;
  disabled?: boolean;
}
const GlassButton = ({ text, icon, disabled }: GlassButtonProps) => {
  return (
    <button disabled={disabled} className={disabled ? 'off-glass-button' : 'glass-button'}>
      {text}
      {icon}
    </button>
  );
};

export default GlassButton;

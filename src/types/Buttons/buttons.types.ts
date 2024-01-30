export interface GlassButtonProps {
  ariaLabel: string;
  text: string;
  icon: React.ReactElement;
  disabled?: boolean;
  onClick?: () => void;
}

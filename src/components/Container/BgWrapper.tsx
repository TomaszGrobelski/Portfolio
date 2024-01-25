import '../../styles/Container/bgWrapper.scss';

interface BgWrapperProps {
  darkMood: boolean;
  children: React.ReactNode;
}

const BgWrapper = ({ darkMood, children }: BgWrapperProps) => {
  return <div className={darkMood ? 'wrapper-dark' : 'wrapper-light'}>{children}</div>;
};

export default BgWrapper;

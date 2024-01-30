import '../../styles/Container/bgWrapper.scss';
import { BgWrapperProps } from '../../types/Container/Container.types';

const BgWrapper = ({ darkMood, children }: BgWrapperProps) => {
  return <div className={darkMood ? 'wrapper-dark' : 'wrapper-light'}>{children}</div>;
};

export default BgWrapper;

import '../../styles/Container/container.scss';
import { ContainerProps } from '../../types/Container/Container.types';


const Container = ({ children }: ContainerProps) => {
  return <div className='container'>{children}</div>;
};

export default Container;

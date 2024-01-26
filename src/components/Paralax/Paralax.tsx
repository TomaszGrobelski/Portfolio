import Spline from '@splinetool/react-spline';

// import { useEffect } from 'react';
import '../../styles/Paralax/introduction3D.scss';

const Paralax = () => {
  // useEffect(() => {
  //   const canvas = document.getElementById('canvas3d');
  //   const app = new Application(canvas);
  //   app.load('https://prod.spline.design/bI5mFXwHSJINgX03/scene.splinecode');
  // }, []);

  return (
    <section className='section-3d'>
      <Spline scene="https://prod.spline.design/bI5mFXwHSJINgX03/scene.splinecode" />
    </section>
  );
};

export default Paralax;

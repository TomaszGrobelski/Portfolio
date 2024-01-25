import { Application } from '@splinetool/runtime';
import { useEffect } from 'react';

import '../../styles/Paralax/introduction3D.scss';

const Paralax = () => {
  useEffect(() => {
    const canvas = document.getElementById('canvas3d');
    const app = new Application(canvas);
    app.load('https://prod.spline.design/uKYwoRHl-aUCBlrE/scene.splinecode');
  }, []);

  return (
    <section >
      <canvas className='section-3d__name' id='canvas3d'></canvas>
    </section>
  );
};

export default Paralax;

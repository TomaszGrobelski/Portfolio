import Spline from '@splinetool/react-spline';
import { useState } from 'react';

import '../../styles/Paralax/introduction3D.scss';

const Paralax = () => {
  const [loading, setLoading] = useState(true);

  return (
    <section className='section-3d'>
      {loading && <div>Is loading.....</div>}
      <Spline scene='https://prod.spline.design/bI5mFXwHSJINgX03/scene.splinecode' onLoad={() => setLoading(false)} />
    </section>
  );
};

export default Paralax;

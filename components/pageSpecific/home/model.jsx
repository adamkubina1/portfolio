import Spline from '@splinetool/react-spline';
import { useEffect, useRef } from 'react';

export default function Model() {
  let initialZoom;
  const cube = useRef();

  function getScaleValue() {
    const screenWidth = window.innerWidth;
    if (screenWidth > 1000) {
      return 1;
    } else if (screenWidth > 700) {
      return 0.9;
    } else if (screenWidth > 500) {
      return 0.8;
    }
    return 0.7;
  }

  function onLoad(spline) {
    const scaleValue = getScaleValue();
    initialZoom = scaleValue;
    spline.setZoom(scaleValue);
    const obj = spline.findObjectByName('Cube');
    cube.current = obj;
  }

  function setSplineScale(scale) {
    const newScale = cube.current.scale;
    newScale.x = scale;
    newScale.y = scale;
    newScale.z = scale;
    cube.current.scale = newScale;
  }

  useEffect(() => {
    function scaleSpline() {
      if (cube.current?.scale) {
        const scaleValue = getScaleValue();
        setSplineScale(scaleValue / initialZoom);
      }
    }
    window.addEventListener('resize', scaleSpline);
    return () => window.removeEventListener('resize', scaleSpline);
  }, [initialZoom]);

  return (
    <div className='h-12 md:mt-6'>
      <Spline
        onLoad={onLoad}
        scene='https://prod.spline.design/xzCIRut57GSOeXjc/scene.splinecode'
      />
    </div>
  );
}

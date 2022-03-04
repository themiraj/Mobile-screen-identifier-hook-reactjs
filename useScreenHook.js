import * as React  from 'react';

export function useWindowSize() {
  const [size, setSize] = React.useState([true, 0 , 0]);
  React.useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth < 992 ? true : false, window.innerWidth  , window.innerHeight ]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}

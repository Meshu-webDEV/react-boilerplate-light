import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useOutletContext } from 'react-router-dom';

const Home = () => {
  //
  const [context, setContext] = useOutletContext();
  const [scroll, setScroll] = useState(window.scrollY);

  const handleNavigation = useCallback((e) => {
    setScroll(window.scrollY);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', (e) => handleNavigation(e));

    return () => {
      window.removeEventListener('scroll', (e) => handleNavigation(e));
    };
  });

  useEffect(() => {
    if (scroll >= context.navHeight)
      return setContext((p) => {
        return { ...p, navFixed: true };
      });
    if (scroll === 0)
      return setContext((p) => {
        return { ...p, navFixed: false, mapFocused: false };
      });
  }, [scroll]);

  return <div className='Home relative bg-slate-100 font-poppins font-black w-full min-h-screen flex flex-col justify-center items-center text-gray-800'>HOME</div>;
};

export default Home;

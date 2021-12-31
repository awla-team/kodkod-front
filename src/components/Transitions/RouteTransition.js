import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';
import { MountTransition } from './MountTransition';

export const RouteTransition = ({
  children,
  exact = false,
  element,
  path,
  slide = 0,
  slideUp = 0,
  ...rest
}) => (
  <>
    <Route exact={exact} path={path} {...rest} element={element}>
      <MountTransition slide={slide} slideUp={slideUp}>
        {children}
      </MountTransition>
    </Route>
  </>
);

export const AnimatedRoutes = ({
  children,
  exitBeforeEnter = true,
  initial = false,
}) => {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter={exitBeforeEnter} initial={initial}>
      <Routes location={location} key={location.pathname}>
        {children}
      </Routes>
    </AnimatePresence>
  );
};

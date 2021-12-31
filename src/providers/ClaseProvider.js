import React, { useState, useEffect, createContext } from 'react';
import { getAsignaturas } from '../services/asignaturas';

export const ClaseContext = createContext();

const ClaseProvider = ({ children }) => {
  const [asignatura, setAsignatura] = useState();

  // useEffect(() => {
  //   getAsignaturas()
  //   .then((response) => {
  //     setAsignaturas(response.data);
  //   })
  //   .catch((e) => {
  //     console.log(e);
  //   });
  // }, []);

  return (
    <ClaseContext.Provider value={{ asignatura, setAsignatura }}>
      {children}
    </ClaseContext.Provider>
  );
};

export default ClaseProvider;

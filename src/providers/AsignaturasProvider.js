import React, { useState, useEffect, useCallback, createContext } from 'react';
import { getAsignaturas } from '../services/asignaturas';
import { getCursos } from '../services/cursos';

export const AsignaturasContext = createContext();

const AsignaturasProvider = ({ children }) => {
  const [asignaturas, setAsignaturas] = useState([]);
  const [selectedAsignatura, setSelectedAsignatura] = useState();
  const [asignaturasLoading, setAsignaturasLoading] = useState(false);

  const [cursos, setCursos] = useState([]);
  const [selectedCurso, setSelectedCurso] = useState();
  const [cursosLoading, setCursosLoading] = useState(false);

  const addAsignatura = (asignatura) => {
    setAsignaturas([...asignaturas, asignatura]);
  };

  const handleSelectAsignatura = useCallback((asignatura) => {
    setSelectedAsignatura(asignatura);
  }, []);

  const handleUnselectAsignatura = useCallback(() => {
    setSelectedAsignatura();
  }, []);

  const handleSelectCurso = useCallback((curso) => {
    setSelectedCurso(curso);
  }, []);

  const handleUnselectCurso = useCallback(() => {
    setSelectedCurso();
  }, []);

  useEffect(() => {
    setAsignaturasLoading(true);
    getAsignaturas()
    .then((response) => {
      setAsignaturasLoading(false);
      setAsignaturas(response.data);
    })
    .catch((e) => {
      setAsignaturasLoading(false);
      console.log(e);
    });
  }, []);

  useEffect(() => {
    setCursosLoading(true);
    getCursos()
    .then((response) => {
      setCursosLoading(false);
      setCursos(response.data);
    })
    .catch((e) => {
      setCursosLoading(false);
      console.log(e);
    });
  }, []);

  return (
    <AsignaturasContext.Provider value={{
      asignaturas,
      selectedAsignatura,
      asignaturasLoading,
      handleSelectAsignatura,
      handleUnselectAsignatura,
      addAsignatura,
      cursos,
      selectedCurso,
      cursosLoading,
      handleSelectCurso,
      handleUnselectCurso,
    }}>
      {children}
    </AsignaturasContext.Provider>
  );
};

export default AsignaturasProvider;

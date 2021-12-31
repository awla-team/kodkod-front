import React, { useState, useEffect, createContext } from 'react';
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

  const handleSelectAsignatura = (asignatura) => {
    setSelectedAsignatura(asignatura);
  };

  const handleUnselectAsignatura = () => {
    setSelectedAsignatura();
  };

  const handleSelectCurso = (curso) => {
    setSelectedCurso(curso);
  };

  const handleUnselectCurso = () => {
    setSelectedCurso();
  };

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

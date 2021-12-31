import React, { useEffect, useContext } from 'react';
import {
  CircularProgress,
} from '@mui/material';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { ReactComponent as BoardSVG } from '../assets/images/board.svg';
import PageTitle from '../components/PageTitle';
import { AsignaturasContext } from '../providers/AsignaturasProvider';
import { MountTransition } from '../components/Transitions/MountTransition';

const Container = styled.div`
  .MuiGrid-root {
    .MuiGrid-item {
      padding-top: 0px;
    }
  }
`;

const Clase = () => {
  const { asignaturas, selectedAsignatura, handleSelectAsignatura, cursos, selectedCurso, handleSelectCurso } = useContext(AsignaturasContext);
  const { asignaturaId, cursoId } = useParams();

  useEffect(() => {
    const match = asignaturas.find((asignatura) => asignatura.id === asignaturaId);
    if (match) handleSelectAsignatura(match);
  }, [asignaturaId, asignaturas, selectedAsignatura, handleSelectAsignatura]);

  useEffect(() => {
    const match = cursos.find((curso) => curso.id === cursoId);
    if (match) handleSelectCurso(match);
  }, [cursoId, cursos, handleSelectCurso]);

  return (
    <MountTransition slide={0} slideUp={0}>
      <Container>
        {selectedAsignatura && selectedCurso ? (
          <PageTitle icon={<BoardSVG />} subtitle="Asigna tareas, evalúa y comunícate con tus estudiantes.">{`${selectedAsignatura.name} - ${selectedCurso.name}`}</PageTitle>
        ) : (
          <CircularProgress />
        )}
      </Container>
    </MountTransition>
  );
};

export default Clase;

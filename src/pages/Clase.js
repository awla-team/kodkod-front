import React, { useState, useEffect, useContext } from 'react';
import {
  Typography,
  Grid,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CardActionArea,
  Button,
  CircularProgress,
} from '@mui/material';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { ReactComponent as BooksSVG } from '../assets/images/books2.svg';
import { ReactComponent as BoardSVG } from '../assets/images/board.svg';
import { getAsignatura } from '../services/asignaturas';
import PageTitle from '../components/PageTitle';
import CourseCard from '../components/CourseCard';
import CourseDrawer from '../components/CourseDrawer';
import { AsignaturasContext } from '../providers/AsignaturasProvider';


const Container = styled.div`
  .MuiGrid-root {
    .MuiGrid-item {
      padding-top: 0px;
    }
  }
`;

const Clase = ({}) => {
  const { asignaturas, selectedAsignatura, asignaturasLoading, handleSelectAsignatura, cursos, selectedCurso, cursosLoading, handleSelectCurso } = useContext(AsignaturasContext);
  const { asignaturaId, cursoId } = useParams();

  useEffect(() => {
    if (!selectedAsignatura) {
      const match = asignaturas.find((asignatura) => asignatura.id === asignaturaId);
      if (match) handleSelectAsignatura(match);
    }
  }, [asignaturaId, asignaturas, handleSelectAsignatura]);

  useEffect(() => {
    if (!selectedCurso) {
      const match = cursos.find((curso) => curso.id === cursoId);
      if (match) handleSelectCurso(match);
    }
  }, [cursoId, cursos, handleSelectCurso]);

  console.log(asignaturaId);
  console.log(cursoId);
  console.log(selectedAsignatura);
  console.log(selectedCurso);

  return (
    <Container>
      {selectedAsignatura && selectedCurso ? (
        <PageTitle icon={<BoardSVG />} subtitle="Asigna tareas, evalúa y comunícate con tus estudiantes.">{`${selectedAsignatura.name} - ${selectedCurso.code}`}</PageTitle>
      ) : (
        <CircularProgress />
      )}
    </Container>
  );
};

export default Clase;

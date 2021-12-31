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
import PageTitle from '../components/PageTitle';
import { ReactComponent as BooksSVG } from '../assets/images/books2.svg';
import CourseCard from '../components/CourseCard';
import CourseDrawer from '../components/CourseDrawer';
import AsignaturasProvider, { AsignaturasContext } from '../providers/AsignaturasProvider';

const Container = styled.div`
  .MuiGrid-root {
    .MuiGrid-item {
      padding-top: 0px;
    }
  }
`;

const Asignaturas = ({}) => {
  const { asignaturas, selectedAsignatura, asignaturasLoading, handleSelectAsignatura, handleUnselectAsignatura } = useContext(AsignaturasContext);

  return (
    <Container>
      <PageTitle icon={<BooksSVG />} subtitle="Gestiona tus asignaturas de manera simple.">Mis asignaturas</PageTitle>
      {!asignaturasLoading ? (
        <>
          <Grid container spacing={0} sx={{ margin: 0, width: '100%' }}>
            {asignaturas.map((asignatura) => (
              <Grid key={asignatura.id} item sm={3}>
                <CourseCard img={asignatura.img} background={asignatura.color} title={asignatura.name} onClick={() => handleSelectAsignatura(asignatura)} />
              </Grid>
            ))}
          </Grid>
          <CourseDrawer />
        </>
      ): (
        <CircularProgress />
      )}
    </Container>
  );
};

export default Asignaturas;

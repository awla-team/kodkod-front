import React, { useEffect, useContext } from 'react';
import {
  Grid,
  CircularProgress,
} from '@mui/material';
import styled from 'styled-components';
import PageTitle from '../components/PageTitle';
import { ReactComponent as BooksSVG } from '../assets/images/books2.svg';
import CourseCard from '../components/CourseCard';
import CourseDrawer from '../components/CourseDrawer';
import { AsignaturasContext } from '../providers/AsignaturasProvider';
import { MountTransition } from '../components/Transitions/MountTransition';

const Container = styled.div`
  .MuiGrid-root {
    .MuiGrid-item {
      padding-top: 0px;
    }
  }
`;

const Asignaturas = () => {
  const { asignaturas, asignaturasLoading, handleSelectAsignatura, handleUnselectAsignatura, handleUnselectCurso } = useContext(AsignaturasContext);

  useEffect(() => {
    handleUnselectAsignatura();
    handleUnselectCurso();
  }, [handleUnselectAsignatura, handleUnselectCurso]);

  return (
    <MountTransition slide={0} slideUp={0}>
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
    </MountTransition>
  );
};

export default Asignaturas;

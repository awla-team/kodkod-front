import React, { useState, useEffect } from 'react';
import {
  Typography,
  Grid,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CardActionArea,
  Button,
} from '@mui/material';
import styled from 'styled-components';
import PageTitle from '../components/PageTitle';
import { ReactComponent as BooksSVG } from '../assets/images/books2.svg';
import CourseCard from '../components/CourseCard';
import { getAsignaturas } from '../services/asignaturas';

const Container = styled.div`
  .MuiGrid-root {
    .MuiGrid-item {
      padding-top: 0px;
    }
  }
`;

const Asignaturas = ({}) => {
  const [asignaturas, setAsignaturas] = useState([]);

  useEffect(() => {
    getAsignaturas()
    .then((response) => {
      setAsignaturas(response.data);
    })
    .catch((e) => {
      console.log(e);
    });
  }, []);

  return (
    <Container>
      <PageTitle icon={<BooksSVG />} subtitle="Gestiona tus asignaturas de manera simple.">Mis asignaturas</PageTitle>
      <Grid container spacing={0} sx={{ margin: 0, width: '100%' }}>
        {asignaturas.map((asignatura) => (
          <Grid item sm={3}>
            <CourseCard key={asignatura.id} img={asignatura.img} background={asignatura.color} title={asignatura.name} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Asignaturas;

import React, { useState, useEffect } from 'react';
import {
  Grid,
  CircularProgress,
} from '@mui/material';
import styled from 'styled-components';
import PageTitle from '../components/PageTitle';
import { ReactComponent as BooksSVG } from '../assets/images/books2.svg';
import CourseCard from '../components/CourseCard';
import CourseDrawer from '../components/CourseDrawer';
import { MountTransition } from '../components/Transitions/MountTransition';
import { getClassCourses } from '../services/classCourses';
import { groupBy } from '../util/arrayUtil';

const Container = styled.div`
  .MuiGrid-root {
    .MuiGrid-item {
      padding-top: 0px;
    }
  }
`;

const Asignaturas = () => {
  const [loading, setLoading] = useState(false);
  const [classCourses, setClassCourses] = useState({});
  const [selectedCourse, setSelectedCourse] = useState();

  const handleClose = () => {
    setSelectedCourse();
  };

  useEffect(() => {
    setLoading(true);
    getClassCourses()
      .then((response) => {
        const grouped = groupBy(response.data, 'courseId');
        setClassCourses(grouped);
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
        console.log(e);
      });
  }, []);

  return (
    <MountTransition slide={0} slideUp={0}>
      <Container>
        <PageTitle icon={<BooksSVG />} subtitle="Gestiona tus asignaturas de manera simple.">Mis asignaturas</PageTitle>
        {!loading ? (
          <>
            <Grid container spacing={0} sx={{ margin: 0, width: '100%' }}>
              {Object.entries(classCourses).map((entry) => (
                <Grid key={entry[0]} item sm={3}>
                  <CourseCard course={entry[1][0].course} classes={entry[1].map((classCourse) => classCourse.class)} onClick={() => setSelectedCourse(entry[1][0].course)} />
                </Grid>
              ))}
            </Grid>
            {selectedCourse ? (
              <CourseDrawer course={selectedCourse} courseClasses={classCourses[selectedCourse.id]} onClose={handleClose} />
            ) : null}
          </>
        ): (
          <CircularProgress />
        )}
      </Container>
    </MountTransition>
  );
};

export default Asignaturas;

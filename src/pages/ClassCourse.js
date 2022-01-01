import React, { useState, useEffect, lazy } from 'react';
import {
  CircularProgress,
  Tabs,
  Tab,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@mui/material';
import styled from 'styled-components';
import { BrowserRouter, Route, Navigate } from "react-router-dom";
import { AnimatedRoutes } from '../components/Transitions/RouteTransition';
import { useParams } from 'react-router-dom';
import { ReactComponent as BoardSVG } from '../assets/images/board.svg';
import PageTitle from '../components/PageTitle';
import { MountTransition } from '../components/Transitions/MountTransition';
import { getClassCourse } from '../services/classCourses';

const Container = styled.div`
  .MuiGrid-root {
    .MuiGrid-item {
      padding-top: 0px;
    }
  }
`;

const TabContent = styled.div`
  padding: 24px 0px;
`;

const Subjects = lazy(() => import('./Subjects'));

const ClassCourse = () => {
  const { classCourseId } = useParams();
  const [classCourse, setClassCourse] = useState();
  const [loading, setLoading] = useState(false);
  const [selectedTab, setSelectedTab] = useState(0);

  useEffect(() => {
    setLoading(true);
    getClassCourse(classCourseId)
      .then((response) => {
        setLoading(false);
        setClassCourse(response.data);
      })
      .catch((e) => {
        setLoading(false);
        console.log();
      });
  }, [classCourseId]);

  useEffect(() => {

  }, []);

  return (
    <MountTransition slide={0} slideUp={0}>
      <Container>
        {!loading ? (
          <>
            {classCourse ? (
              <div>
                <PageTitle icon={<BoardSVG />} subtitle="Asigna tareas, evalúa y comunícate con tus estudiantes.">{classCourse.name}</PageTitle>
                <Tabs value={selectedTab} onChange={(event, value) => setSelectedTab(value)}>
                  <Tab label="Unidades" value={0} />
                  <Tab label="Evaluaciones" value={1} />
                  <Tab label="Estudiantes" value={2} />
                </Tabs>
                <TabContent>
                  <AnimatedRoutes>
                    <Route path="unidades" element={<Subjects courseId={classCourse.course.id} />} />
                  </AnimatedRoutes>
                </TabContent>
              </div>
            ) : (
              <span>¡Oops! ¡Esta clase no existe!</span>
            )}
          </>
        ) : (
          <CircularProgress />
        )}
      </Container>
    </MountTransition>
  );
};

export default ClassCourse;

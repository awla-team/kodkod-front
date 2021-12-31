import React, { useState, useEffect } from 'react';
import {
  CircularProgress,
  Tabs,
  Tab,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { ReactComponent as BoardSVG } from '../assets/images/board.svg';
import PageTitle from '../components/PageTitle';
import { MountTransition } from '../components/Transitions/MountTransition';
import { getClassCourse } from '../services/classCourses';
import { getCourseSubjects } from '../services/subjects';

const Container = styled.div`
  .MuiGrid-root {
    .MuiGrid-item {
      padding-top: 0px;
    }
  }
`;

const Clase = () => {
  const { classCourseId } = useParams();
  const [classCourse, setClassCourse] = useState();
  const [subjects, setSubjects] = useState([]);
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
    if (classCourse) {
      getCourseSubjects(classCourse.course.id)
        .then((response) => {
          setSubjects(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }, [classCourse]);

  return (
    <MountTransition slide={0} slideUp={0}>
      <Container>
        {!loading ? (
          <>
            {classCourse ? (
              <div>
                <PageTitle icon={<BoardSVG />} subtitle="Asigna tareas, evalúa y comunícate con tus estudiantes.">{classCourse.name}</PageTitle>
                <Tabs value={selectedTab} onChange={(event, value) => setSelectedTab(value)} aria-label="basic tabs example">
                  <Tab label="Unidades" value={0} />
                  <Tab label="Evaluaciones" value={1} />
                  <Tab label="Estudiantes" value={2} />
                </Tabs>
                <div>
                  {subjects.map((subject) => (
                    <Accordion>
                      <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1bh-content"
                      id="panel1bh-header"
                      >
                        <Typography sx={{ width: '33%', flexShrink: 0 }}>
                          {`Unidad ${subject.code}: ${subject.name}`}
                        </Typography>
                        <Typography sx={{ color: 'text.secondary' }}>I am an accordion</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                        hola maldicion
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  ))}
                </div>
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

export default Clase;

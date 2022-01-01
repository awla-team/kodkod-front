import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {
  Grid,
  Card,
  CardContent,
  CircularProgress,
  Avatar,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { getCourseSubjects } from '../services/subjects';
import { getSubjectContents } from '../services/contents';

//IDEA: hacerlos sticky!
//IDEA: usar hash para navegar con los accordion abiertos

const StyledAccordion = styled(Accordion)`
  .MuiAccordionSummary-content {
    justify-content: space-between;
  }
  :after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 4px;
    background: ${({ expanded, indicator }) => expanded ? indicator : 'gray'};
  }
`;

const Subjects = ({ courseId }) => {
  const [subjects, setSubjects] = useState([]);
  const [contentsBySubject, setContentsBySubject] = useState({});
  const [selectedSubject, setSelectedSubject] = useState();
  const [loading, setLoading] = useState(false);
  const [selectedContent, setSelectedContent] = useState();

  const handleSubjectExpand = (expanded, subject) => {
    setSelectedContent();
    if (expanded) {
      setSelectedSubject(subject);
    } else {
      setSelectedSubject();
    }
  }
  const handleContentExpand = (expanded, content) => {
    if (expanded) {
      setSelectedContent(content);
    } else {
      setSelectedContent();
    }
  };

  useEffect(() => {
    setLoading(true);
    getCourseSubjects(courseId)
      .then((response) => {
        setSubjects(response.data);
        const indexes = response.data.map((subject) => subject.id);
        const promises = response.data.map((subject) => getSubjectContents(subject.id));
        Promise.all(promises)
          .then((responses) => {
            const newData = {};
            responses.forEach((response, i) => {
              newData[indexes[i]] = response.data;
            });
            setContentsBySubject(newData);
            setLoading(false);
          })
          .catch((e) => {
            console.log(e);
            setLoading(false);
          })
      })
      .catch((e) => {
        setLoading(false);
        console.log(e);
      });
  }, [courseId]);

  console.log(contentsBySubject);

  return (
    <div>
      {!loading ? (
        <div>
          {subjects.map((subject) => (
            <StyledAccordion key={subject.id} expanded={!!selectedSubject && selectedSubject.id === subject.id} indicator="blue" onChange={(event, expanded) => handleSubjectExpand(expanded, subject)}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography sx={{ width: '33%', flexShrink: 0 }}>
                  {`Unidad ${subject.code}: ${subject.name}`}
                </Typography>
                <Typography sx={{ color: 'text.secondary', marginRight: '16px' }}>
                  {`${contentsBySubject[subject.id].length} contenidos`}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                {contentsBySubject[subject.id].map((content) => (
                  <StyledAccordion key={content.id} expanded={!!selectedContent && selectedContent.id === content.id} indicator="red" onChange={(event, expanded) => handleContentExpand(expanded, content)}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        {content.name}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Grid container spacing={0} sx={{ margin: 0, width: '100%' }}>
                        <Grid item sm={4}>
                          <div>
                            <Typography component="h6" variant="h6">Material de estudio</Typography>
                            <List sx={{ width: '100%' }}>
                              {content.resources.map((resource) => (
                                <ListItem>
                                  <ListItemAvatar>
                                    <Avatar>{resource.extension.toUpperCase()}</Avatar>
                                  </ListItemAvatar>
                                  <ListItemText
                                    primary={resource.name}
                                    secondary="asda"
                                  />
                                </ListItem>
                              ))}
                            </List>
                          </div>
                        </Grid>
                        <Grid item sm={8}>
                          <div>
                            <Typography component="h6" variant="h6">Tareas</Typography>
                            {content.assignments.map((assignment) => (
                              <Card>
                                <CardContent sx={{ paddingBottom: '24px' }}>
                                  <div>
                                    <Typography variant="h5" component="div">
                                      {assignment.name}
                                    </Typography>
                                  </div>
                                </CardContent>
                              </Card>
                            ))}
                          </div>
                          <div>
                            <Typography component="h6" variant="h6">Evaluaciones</Typography>
                            {content.tests.map((test) => (
                              <Card>
                                <CardContent sx={{ paddingBottom: '24px' }}>
                                  <div>
                                    <Typography variant="h5" component="div">
                                      {test.name}
                                    </Typography>
                                  </div>
                                </CardContent>
                              </Card>
                            ))}
                          </div>
                        </Grid>
                      </Grid>
                    </AccordionDetails>
                  </StyledAccordion>
                ))}
              </AccordionDetails>
            </StyledAccordion>
          ))}
        </div>
      ) : (
        <CircularProgress />
      )}
    </div>
  )
}

export default Subjects;

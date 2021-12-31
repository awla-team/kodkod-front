import React from 'react';
import { Drawer, Typography, List, ListItemButton, ListItemAvatar, ListItemText, Avatar } from '@mui/material';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  width: 360px;
  height: 100%;
  background: white;
  transition: background 1000ms linear;
  color: black;

  a {
    text-decoration: none;
  }

  span {
    color: black;
  }
`;

const ImgContainer = styled.div`
  background: ${({ background }) => background};
  padding: 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  img {
    margin-top: 24px;
    width: auto;
    height: 200px;
  }
`;

const Content = styled.div`
`;

const CourseDrawer = ({ course, courseClasses, onClose }) => (
  <Drawer anchor="right" open={!!course} onClose={onClose}>
    {course ? (
      <Container>
        <ImgContainer background={course.color}>
          <Typography variant="h5" component="h5" sx={{ fontWeight: 'bold' }}>
            {course.name}
          </Typography>
          <img src={course.img} alt={course.name} />
        </ImgContainer>
        <Content>
          <Typography variant="h6" component="h6" sx={{ padding: '24px 24px 0px' }}>
            Cursos
          </Typography>
          <List sx={{ width: '100%' }}>
            {courseClasses.map((courseClass) => (
              <Link key={courseClass.id} to={courseClass.id}>
                <ListItemButton alignItems="flex-start" sx={{ padding: '8px 24px'}}>
                  <ListItemAvatar>
                    <Avatar>{courseClass.class.code}</Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={courseClass.name}
                    secondary={`${courseClass.class.estudiantes} estudiantes`}
                  />
                </ListItemButton>
              </Link>
            ))}
          </List>
        </Content>
      </Container>
    ) : null}
  </Drawer>
);

export default CourseDrawer;

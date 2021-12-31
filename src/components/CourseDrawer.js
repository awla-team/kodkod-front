import React, { useContext } from 'react';
import { Drawer, Typography, CircularProgress, List, ListItemButton, ListItemAvatar, ListItemText, Avatar } from '@mui/material';
import styled from 'styled-components';
import { AsignaturasContext } from '../providers/AsignaturasProvider';
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

const CourseDrawer = () => {
  const { cursos, cursosLoading, selectedAsignatura, handleUnselectAsignatura } = useContext(AsignaturasContext);

  return (
    <Drawer anchor="right" open={!!selectedAsignatura} onClose={handleUnselectAsignatura}>
      {selectedAsignatura ? (
        <Container>
          <ImgContainer background={selectedAsignatura.color}>
            <Typography variant="h5" component="h5" sx={{ fontWeight: 'bold' }}>
              {selectedAsignatura.name}
            </Typography>
            <img src={selectedAsignatura.img} alt={selectedAsignatura.name} />
          </ImgContainer>
          <Content>
            <Typography variant="h6" component="h6" sx={{ padding: '24px 24px 0px' }}>
              Cursos
            </Typography>
            {cursosLoading ? (
              <CircularProgress />
            ) : (
              <List sx={{ width: '100%' }}>
                {cursos.map((curso) => (
                  <Link key={curso.id} to={`${selectedAsignatura.id}/${curso.id}`}>
                    <ListItemButton alignItems="flex-start" sx={{ padding: '8px 24px'}}>
                      <ListItemAvatar>
                        <Avatar>{curso.code}</Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={`${selectedAsignatura.name} - ${curso.code}`}
                        secondary={`${curso.estudiantes} estudiantes`}
                      />
                    </ListItemButton>
                  </Link>
                ))}
              </List>
            )}
          </Content>
        </Container>
      ) : null}
    </Drawer>
  );
};

export default CourseDrawer;

import React from 'react';
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Avatar,
  AvatarGroup,
} from '@mui/material';
import styled from 'styled-components';

const ImgContainer = styled.div`
  background: rgba(255, 255, 255, 0.4);
  border-radius: 24px;
  margin: 16px;
  margin-bottom: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    height: 180px;
    width: auto;
  }
`;

const CardBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 24px;
  .MuiButton-root {
    background: rgba(255, 255, 255, 0.4);
    color: white;
    border: none;
  }
  .MuiAvatar-root {
    width: 36px;
    height: 36px;
    color: ${({ avatarColor }) => avatarColor};
    background: white;
  }
`;

const GoToButton = styled.div`
  background: rgba(255, 255, 255, 0.2);
  padding: 8px 16px;
  border-radius: 8px;
  border: 1px solid white;
  font-size: 14px;
  &:hover {
    background: rgba(255, 255, 255, 0.4);
  }
`;

const CourseCard = ({ course, classes, onClick }) => (
  <div>
    <Card sx={{ background: course.color , color: 'white', borderRadius: '24px', width: 280 }}>
      <CardActionArea onClick={onClick}>
        <ImgContainer background={course.color}>
          <CardMedia
            sx={{ padding: '12px 48px' }}
            component="img"
            src={course.img}
          />
        </ImgContainer>
        <CardContent sx={{ paddingBottom: '24px' }}>
          <div>
            <Typography variant="h5" component="div" sx={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
              {course.name}
            </Typography>
            <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)', fontWeight: 'bold' }}>
              4 unidades
            </Typography>
          </div>
          <CardBottom avatarColor={course.color}>
            <AvatarGroup max={3}>
              {classes.map((singleClass) => (
                <Avatar key={singleClass.id}>{singleClass.code}</Avatar>
              ))}
            </AvatarGroup>
            <GoToButton>Ver asignatura</GoToButton>
          </CardBottom>
        </CardContent>
      </CardActionArea>
    </Card>
  </div>
);

export default CourseCard;

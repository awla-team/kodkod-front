import React from 'react';
import styled from 'styled-components';
import avatar from '../assets/images/avatar.png';
import { Avatar } from '@mui/material';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px 24px;
`;

const Title = styled.span`
  font-size: 14px;
  font-weight: bold;
  width: 100%;
  margin-top: 12px;
  text-align: center;
  color: rgb(33, 43, 54);
`;

const Subtitle = styled.span`
  margin-top: 4px;
  font-size: 14px;
  color: gray;
`;

const UserInfo = ({}) => (
  <Container>
      <Avatar src={avatar} sx={{ height: 48, width: 48 }} />
      <Title>Profesora Clayton</Title>
      <Subtitle>Liceo Camilo Henríquez</Subtitle>
  </Container>
);

export default UserInfo;

import React from 'react';
import styled from 'styled-components';
import avatar from '../assets/images/avatar.png';
import { Avatar } from '@mui/material';

const Container = styled.div`
  width: 100%;
  height: 72px;
  background: rgb(244, 246, 248);
  border-radius: 12px;
  display: flex;
  align-items: center;
  padding: 8px 24px;
`;

const Text = styled.span`
  font-size: 14px;
  font-weight: bold;
  width: 100%;
  text-align: center;
  color: rgb(33, 43, 54);
`;

const UserInfo = ({}) => (
  <Container>
      <Avatar src={avatar} sx={{ height: 48, width: 48 }} />
      <Text>Profesora Clayton</Text>
  </Container>
);

export default UserInfo;

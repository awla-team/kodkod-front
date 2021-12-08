import React from 'react';
import styled from 'styled-components';
import avatar from '../assets/images/avatar.png';

const Container = styled.div`
  width: 100%;
  height: 72px;
  background: rgb(244, 246, 248);
  border-radius: 12px;
  display: flex;
  align-items: center;
  padding: 8px 24px;
`;

const Avatar = styled.img`
  height: 48px;
  width: auto;
  margin-right: 8px;
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
      <Avatar src={avatar} />
      <Text>Profesora Clayton</Text>
  </Container>
);

export default UserInfo;

import { lazy } from 'react';
import { Outlet } from "react-router-dom";
import styled from 'styled-components';
import { GlobalStyle } from './config';
import SideNav from './components/SideNav';
import UserMenu from './components/UserMenu';
import { Container } from '@mui/material';

const MainContainer = styled.div`
  display: flex;
  min-height: 100%;
  min-width: 100%;
  overflow: hidden;
`;

const ContentContainer = styled.div`
  display: flex;
  min-height: 100%;
  flex: 1;
  position: relative;
  background: #F6F7FC;
`;

const UserMenuContainer = styled.div`
  position: absolute;
  top: 48px;
  right: 48px;
`;

const App = () => {
  return (
    <MainContainer>
      <GlobalStyle />
      <SideNav />
      <ContentContainer>
        <UserMenuContainer>
          <UserMenu />
        </UserMenuContainer>
        <Container maxWidth="xxl" sx={{ paddingTop: '48px', margin: '0px 24px' }}>
          <Outlet />
        </Container>
      </ContentContainer>
    </MainContainer>
  );
}

export default App;

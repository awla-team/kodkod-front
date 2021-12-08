import { lazy } from 'react';
import { Outlet } from "react-router-dom";
import styled from 'styled-components';
import SideNav from './components/SideNav';
import Header from './components/Header';

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
`;

const HeaderContainer = styled.div`
  position: absolute;
  width: 100%;
`;

const Content = styled.div`
  width: 100%;
  padding-top: 90px;
`;

const App = () => {
  return (
    <MainContainer>
      <SideNav />
      <ContentContainer>
        <HeaderContainer>
          <Header />
        </HeaderContainer>
        <Content>
          <Outlet />
        </Content>
      </ContentContainer>
    </MainContainer>
  );
}

export default App;

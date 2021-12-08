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
`;

const Content = styled.div`
`;

const App = () => {
  return (
    <MainContainer>
      <SideNav />
      <ContentContainer>
        <Header />
        <Content>
        </Content>
      </ContentContainer>
    </MainContainer>
  );
}

export default App;

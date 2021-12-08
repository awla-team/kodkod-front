import styled from 'styled-components';
import SideNav from './components/SideNav';

const MainContainer = styled.div`
  display: flex;
  min-height: 100%;
  min-width: 100%;
  overflow: hidden;
`;

const App = () => {
  return (
    <MainContainer>
      <SideNav />
    </MainContainer>
  );
}

export default App;

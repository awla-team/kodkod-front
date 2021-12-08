import React from 'react';
import styled from 'styled-components';
import logo from '../assets/images/logo-big.png';
import { ReactComponent as BooksSVG} from '../assets/images/books.svg';
import UserInfo from './UserInfo';

const Container = styled.div`
  width: 280px;
  border-right: 1px solid rgba(145, 158, 171, 0.24);
`;

const LogoContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 24px 48px 16px;
`;

const UserInfoContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 16px;
`;

const Logo = styled.img`
  width: 100%;
`;

const PageElement = ({ icon, name }) => (
  <li>
      {icon}
      <span>{name}</span>
  </li>
);

const PageList = ({ className, pages = [] }) => (
  <ul className={className}>
     {pages.map((page) => <PageElement name={page.name} icon={page.icon} />)}
  </ul>
);

const StyledPageList = styled(PageList)`
  color: rgb(99, 115, 129);
  list-style-type: none;
  padding: 0px;
  li {
    padding: 16px 0px 16px 36px;
    display: flex;
    align-items: center;
    &:hover {
      background: rgba(145, 158, 171, 0.08);
    }
    svg {
      fill: rgb(99, 115, 129);
      height: 24px;
      width: auto;
      margin-right: 16px;
    }
  }
`;

const pages = [
  {
    name: 'Mis asignaturas',
    icon: <BooksSVG />,
  },
  {
    name: 'Otro',
    icon: <BooksSVG />,
  },
  {
    name: 'Otro 2',
    icon: <BooksSVG />,
  },
  {
    name: 'Otro 3',
    icon: <BooksSVG />,
  },
];

const SideNav = ({}) => (
  <Container>
    <LogoContainer>
      <Logo src={logo} />
    </LogoContainer>
    <UserInfoContainer>
      <UserInfo />
    </UserInfoContainer>
    <StyledPageList pages={pages}>
    </StyledPageList>
  </Container>
);

export default SideNav;

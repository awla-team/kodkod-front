import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useLocation, Link } from "react-router-dom";
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

const PageElement = ({ icon, name, url, selected }) => (
  <li className={selected ? 'is-selected' : ''}>
    <Link to={url}>
        {icon}
        <span>{name}</span>
    </Link>
  </li>
);

const PageList = ({ className, pages = [], selected }) => (
  <ul className={className}>
     {Object.entries(pages).map((entry) => <PageElement key={entry[0]} selected={selected === entry[0]} name={entry[1].name} icon={entry[1].icon} url={entry[0]} />)}
  </ul>
);

const StyledPageList = styled(PageList)`
  list-style-type: none;
  padding: 0px;
  font-size: 14px;
  a {
    color: rgb(99, 115, 129);
    text-decoration: none;
    display: flex;
    align-items: center;
    padding: 12px 0px 12px 36px;

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

  .is-selected {
    background-color: rgba(82, 154, 177, 0.1);
    position: relative;
    font-weight: bold;
    a {
      color: rgba(82, 154, 177, 1);
      svg {
        fill: rgba(82, 154, 177, 1);
      }
    }
    :after {
      content: '';
      position: absolute;
      height: 100%;
      width: 3px;
      border-radius: 4px 0px 0px 4px;
      background-color: rgba(82, 154, 177, 1);
      top: 0;
      right: 0;
    }
  }
`;

const pages = {
  '/app/asignaturas': {
    name: 'Mis asignaturas',
    icon: <BooksSVG />,
  },
  '/app/otro': {
    name: 'Otro',
    icon: <BooksSVG />,
  }
};

const SideNav = ({}) => {
  const location = useLocation();
  const [selected, setSelected] = useState(location.pathname);

  useEffect(() => {
    setSelected(location.pathname);
  }, [location]);

  return (
    <Container>
      <LogoContainer>
        <Logo src={logo} />
      </LogoContainer>
      <UserInfoContainer>
        <UserInfo />
      </UserInfoContainer>
      <StyledPageList pages={pages} selected={selected}>
      </StyledPageList>
    </Container>
  );
};

export default SideNav;

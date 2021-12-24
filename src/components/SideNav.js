import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useLocation, Link } from "react-router-dom";
import logo from '../assets/images/logo-big.png';
import { ReactComponent as BooksSVG} from '../assets/images/books.svg';
import UserInfo from './UserInfo';

const Container = styled.div`
  width: 240px;
  border-right: 1px solid rgba(145, 158, 171, 0.24);
  background: #FFFFFF;
`;

const LogoContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 24px 48px 16px;
`;

const UserInfoContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 24px 0px;
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
    color: #6A94FF;
    text-decoration: none;
    display: flex;
    align-items: center;
    padding: 12px 0px 12px 42px;

    svg {
      height: 36px;
      width: auto;
      margin-right: 8px;
    }
  }

  .is-selected {
    position: relative;
    font-weight: bold;
    a {
      color: #3A5CCE;
      svg {
        fill: #3A5CCE;
      }
    }
  }
`;

const pages = {
  '/app/asignaturas': {
    name: 'Mis asignaturas',
    icon: <BooksSVG />,
  },
  // '/app/otro': {
  //   name: 'Otro',
  //   icon: <BooksSVG />,
  // }
};

const SideNav = ({}) => {
  const location = useLocation();
  const [selected, setSelected] = useState(location.pathname);

  useEffect(() => {
    setSelected(location.pathname);
  }, [location]);

  return (
    <Container>
      {/* <LogoContainer>
        <Logo src={logo} />
      </LogoContainer> */}
      <UserInfoContainer>
        <UserInfo />
      </UserInfoContainer>
      <StyledPageList pages={pages} selected={selected}>
      </StyledPageList>
    </Container>
  );
};

export default SideNav;

import React from 'react';
import styled from 'styled-components';
import { Typography } from '@mui/material';

const Container = styled.div`
  margin-bottom: 48px;
  span {
    color: gray;
  }
  svg {
    height: 24px;
    width: auto;
    margin-right: 8px;
  }
`;

const SubtitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 4px;
`;

const PageTitle = ({ children, subtitle, icon }) => (
  <Container>
    <Typography component="h4" variant="h4">{children}</Typography>
    <SubtitleContainer>
      {icon}
      <Typography component="span" variant="span">{subtitle}</Typography>
    </SubtitleContainer>
  </Container>
);

export default PageTitle;

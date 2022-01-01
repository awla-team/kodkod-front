import styled from 'styled-components';

export const FlexContainer = styled.div`
  display: flex;
  align-items: ${({ alignItems }) => alignItems || 'normal'};
  justify-content: ${({ justifyContent }) => justifyContent || 'normal'};
`;

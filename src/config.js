import { createGlobalStyle } from 'styled-components';
import axios from 'axios';

export const GlobalStyle = createGlobalStyle`
`;

export const http = axios.create({
  baseURL: 'http://localhost:3004',
});

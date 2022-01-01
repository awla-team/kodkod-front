import axios from 'axios';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
`;

export const http = axios.create({
  baseURL: 'http://localhost:3004',
});

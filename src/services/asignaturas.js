import { http } from '../config';

export const getAsignaturas = () => http.get('asignaturas');

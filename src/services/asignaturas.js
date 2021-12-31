import { http } from '../config';

export const getAsignaturas = () => http.get('asignaturas');
export const getAsignatura = (id) => http.get(`asignaturas/${id}`);

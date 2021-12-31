import { http } from '../config';

export const getCursos = () => http.get('cursos');

import { http } from '../config';

export const getClasses = () => http.get('classes');

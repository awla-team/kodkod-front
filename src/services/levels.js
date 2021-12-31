import { http } from '../config';

export const getLevels = () => http.get('levels?_embed=courses&_embed=classes');

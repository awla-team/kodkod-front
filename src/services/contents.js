import { http } from '../config';

export const getContent = (id) => http.get(`contents/${id}?_embed=resources`);
export const getSubjectContents = (subjectId) => http.get(`subjects/${subjectId}/contents?_embed=resources&_embed=assignments&_embed=tests`);

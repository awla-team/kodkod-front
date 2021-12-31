import { http } from '../config';

export const getCourseSubjects = (courseId) => http.get(`courses/${courseId}/subjects`);

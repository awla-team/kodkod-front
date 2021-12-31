import { http } from '../config';

export const getClassCourses = () => http.get('classCourses?_expand=course&_expand=class');
export const getClassCourse = (id) => http.get(`classCourses/${id}?_expand=course&_expand=class&_extend=subjects`);

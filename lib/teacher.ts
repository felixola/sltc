// export const isTeacher = (userId?: string | null) => {
//   return userId === process.env.NEXT_PUBLIC_TEACHER_ID;
// }
export const isTeacher = (userId?: string | null) => {
  const authorizedTeacherIds = (process.env.NEXT_PUBLIC_TEACHER_ID || '').split(',').map(id => id.trim());

  return userId !== null && userId !== undefined && authorizedTeacherIds.includes(userId);
};

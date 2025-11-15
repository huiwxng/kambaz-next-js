// Minimal Database stub used by some demo components (e.g. People Table)
// Replace with real data source or API calls for production.

export const users = [
  // Example shape (commented out):
  // {
  //   _id: 'u1',
  //   firstName: 'Jane',
  //   lastName: 'Doe',
  //   loginId: 'jdoe',
  //   section: '001',
  //   role: 'STUDENT',
  //   lastActivity: '2025-01-01',
  //   totalActivity: 10
  // }
];

export const enrollments = [
  // Example shape (commented out): { _id: 'e1', user: 'u1', course: 'c1' }
];

const db = { users, enrollments };
export default db;

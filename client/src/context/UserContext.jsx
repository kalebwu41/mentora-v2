import { createContext, useContext, useMemo, useState } from 'react';

const UserContext = createContext(null);

const defaultUser = {
  id: 'student-101',
  name: 'John Student',
  gradeLevel: 11,
  passions: ['software', 'design', 'storytelling'],
  strengths: ['creative problem solving', 'communication'],
  growthAreas: ['systems thinking', 'data structures'],
  preferredPods: ['Software Engineering', 'UX/UI'],
  savedRoadmap: null,
  recentPathaway: null,
};

export function UserProvider({ children }) {
  const [user, setUser] = useState(defaultUser);
  const [authToken, setAuthToken] = useState(null);

  const value = useMemo(
    () => ({
      user,
      authToken,
      updateUser: (updates) => setUser((prev) => ({ ...prev, ...updates })),
      setAuthToken,
    }),
    [user, authToken],
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}
